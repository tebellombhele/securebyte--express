# SecureByte Express

Professional compliance assessments for South African businesses. Fast, affordable, reliable.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/securebyte-express.git
cd securebyte-express

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- SendGrid account
- PayFast merchant account (South Africa)
- PDFMonkey account

## 🛠️ Setup Instructions

### 1. Environment Variables

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

### 2. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your URL and keys
3. Run the database migrations:

```sql
-- Create tables
CREATE TABLE assessments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email VARCHAR(255) NOT NULL,
  assessment_type VARCHAR(50) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  responses JSONB NOT NULL,
  score DECIMAL(3,2),
  report_url VARCHAR(500),
  payment_status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  assessment_id UUID REFERENCES assessments(id),
  payment_id VARCHAR(100) UNIQUE NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'ZAR',
  status VARCHAR(50) DEFAULT 'pending',
  payment_data JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
```

### 3. SendGrid Setup

1. Create account at [sendgrid.com](https://sendgrid.com)
2. Generate API key in Settings > API Keys
3. Create email templates for:
   - Payment confirmation
   - Report delivery
   - Assessment reminders

### 4. PayFast Setup

1. Register at [payfast.co.za](https://payfast.co.za)
2. Get merchant credentials from dashboard
3. Set up ITN (Instant Transaction Notification) URL:
   - `https://yourdomain.com/api/webhooks/payfast`

### 5. PDFMonkey Setup

1. Create account at [pdfmonkey.io](https://pdfmonkey.io)
2. Create report templates for each assessment type
3. Get your private API key

## 📦 Project Structure

```
securebyte-express/
├── app/                    # Next.js 13+ App Router
│   ├── api/               # API routes
│   ├── assessments/       # Assessment pages
│   └── page.tsx          # Landing page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── forms/            # Assessment forms
│   └── layout/           # Layout components
├── lib/                  # Utility libraries
│   ├── supabase/         # Database client
│   ├── email/            # Email service
│   ├── pdf/              # PDF generation
│   └── payment/          # Payment processing
├── types/                # TypeScript types
├── hooks/                # Custom React hooks
└── utils/                # Utility functions
```

## 🔥 File Placement

### Landing Page
- Place the updated landing page code in: `app/page.tsx`

### Assessment Forms
- POPIA Form: `app/assessments/popia/page.tsx`
- ISO 27001 Form: `app/assessments/iso27001/page.tsx`
- CIS Controls Form: `app/assessments/cis/page.tsx`

### Components
- Form components: `components/forms/`
- UI components: `components/ui/`
- Layout components: `components/layout/`

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Environment Variables for Production

Make sure to set all environment variables in your hosting platform:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SENDGRID_API_KEY`
- `PAYFAST_MERCHANT_ID`
- `PAYFAST_MERCHANT_KEY`
- `PAYFAST_PASSPHRASE`
- `PDFMONKEY_PRIVATE_KEY`
- `NEXT_PUBLIC_APP_URL` (your production domain)

## 📊 Launch Timeline for August 15th

**Week 1 (Aug 5-8):**
- ✅ Set up project structure
- ✅ Configure Supabase database
- ✅ Integrate PayFast payments
- ✅ Create assessment forms

**Week 2 (Aug 9-12):**
- 📧 Set up SendGrid email templates
- 📄 Configure PDFMonkey report generation
- 🧪 Test payment flow end-to-end
- 🔍 Test all assessment forms

**Week 3 (Aug 13-15):**
- 🚀 Deploy to production
- 🔒 Set up SSL certificate
- 📈 Add analytics (Google Analytics)
- ✅ Final testing & launch!

## 🎯 Ready for Launch?

**YES!** This timeline gives you:
- 3-4 days for core development
- 3-4 days for testing & integration
- 2-3 days for deployment & polish

**Launch Checklist:**
- [ ] All forms working correctly
- [ ] Payment flow tested with PayFast sandbox
- [ ] Email notifications working
- [ ] PDF generation working
- [ ] SSL certificate configured
- [ ] Analytics setup
- [ ] Error monitoring (Sentry)
- [ ] Performance optimization

## 📞 Support

For technical issues during development:
- Check the `/docs` folder for detailed guides
- Review API documentation in `/docs/API.md`
- Check deployment guide in `/docs/DEPLOYMENT.md`

## 🔐 Security Considerations

- All sensitive data encrypted at rest
- PayFast signature validation implemented
- Row-level security enabled on Supabase
- Input validation on all forms
- Rate limiting on API endpoints
- HTTPS enforced in production

---

**Ready to launch by August 15th!** 🎉