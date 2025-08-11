import crypto from 'crypto';

export interface PayFastPayment {
  merchant_id: string;
  merchant_key: string;
  return_url: string;
  cancel_url: string;
  notify_url: string;
  name_first: string;
  name_last: string;
  email_address: string;
  m_payment_id: string;
  amount: string;
  item_name: string;
  item_description: string;
  custom_str1?: string;
  custom_str2?: string;
  custom_str3?: string;
  custom_str4?: string;
  custom_str5?: string;
  signature?: string;
}

export class PayFastClient {
  private merchantId: string;
  private merchantKey: string;
  private passphrase: string;
  private sandbox: boolean;

  constructor() {
    this.merchantId = process.env.PAYFAST_MERCHANT_ID!;
    this.merchantKey = process.env.PAYFAST_MERCHANT_KEY!;
    this.passphrase = process.env.PAYFAST_PASSPHRASE!;
    this.sandbox = process.env.PAYFAST_SANDBOX === 'true';
  }

  generateSignature(data: Omit<PayFastPayment, 'signature'>): string {
    // Create parameter string
    let pfParamString = '';
    
    // Sort parameters alphabetically and build string
    const sortedKeys = Object.keys(data).sort();
    
    for (const key of sortedKeys) {
      const value = data[key as keyof typeof data];
      if (value !== undefined && value !== '') {
        pfParamString += `${key}=${encodeURIComponent(value)}&`;
      }
    }
    
    // Remove last ampersand
    pfParamString = pfParamString.slice(0, -1);
    
    // Add passphrase if set
    if (this.passphrase) {
      pfParamString += `&passphrase=${encodeURIComponent(this.passphrase)}`;
    }
    
    // Generate signature
    return crypto.createHash('md5').update(pfParamString).digest('hex');
  }

  createPayment(assessmentData: {
    assessmentId: string;
    assessmentType: string;
    customerName: string;
    customerEmail: string;
    amount: number;
  }): PayFastPayment {
    const payment: Omit<PayFastPayment, 'signature'> = {
      merchant_id: this.merchantId,
      merchant_key: this.merchantKey,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancelled`,
      notify_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/payfast`,
      name_first: assessmentData.customerName.split(' ')[0] || 'Customer',
      name_last: assessmentData.customerName.split(' ').slice(1).join(' ') || '',
      email_address: assessmentData.customerEmail,
      m_payment_id: assessmentData.assessmentId,
      amount: assessmentData.amount.toFixed(2),
      item_name: `${assessmentData.assessmentType} Assessment`,
      item_description: `Professional compliance assessment report for ${assessmentData.assessmentType}`,
      custom_str1: assessmentData.assessmentType,
      custom_str2: assessmentData.assessmentId,
    };

    const signature = this.generateSignature(payment);
    
    return {
      ...payment,
      signature
    };
  }

  getPaymentUrl(): string {
    return this.sandbox 
      ? 'https://sandbox.payfast.co.za/eng/process'
      : 'https://www.payfast.co.za/eng/process';
  }

  validateSignature(data: any): boolean {
    const receivedSignature = data.signature;
    delete data.signature;
    
    const calculatedSignature = this.generateSignature(data);
    
    return receivedSignature === calculatedSignature;
  }

  validatePayment(data: any): boolean {
    // Validate signature
    if (!this.validateSignature(data)) {
      return false;
    }

    // Additional validations can be added here
    // e.g., amount verification, merchant ID check, etc.
    
    return data.payment_status === 'COMPLETE';
  }
}

export const payfast = new PayFastClient();