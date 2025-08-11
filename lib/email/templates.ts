// lib/email/templates.ts
export const emailTemplates = {
  paymentConfirmation: {
    subject: 'Payment Confirmed - SecureByte Assessment',
    html: `
      <h2>Payment Confirmed! 🎉</h2>
      <p>Your {{assessmentType}} assessment payment has been received.</p>
      <p><strong>Amount:</strong> R{{amount}}</p>
      <p><strong>Assessment ID:</strong> {{assessmentId}}</p>
      <p>Your professional report will be delivered within 48 hours.</p>
    `
  },
  
  reportDelivery: {
    subject: 'Your {{assessmentType}} Report is Ready!',
    html: `
      <h2>Your Report is Ready! 📊</h2>
      <p>Your professional {{assessmentType}} compliance report is attached.</p>
      <p><strong>Overall Score:</strong> {{score}}/5.0</p>
      <p><strong>Risk Level:</strong> {{riskLevel}}</p>
      <p>Need help with implementation? Reply to this email!</p>
    `
  }
};