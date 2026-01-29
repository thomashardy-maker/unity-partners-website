# Headless WordPress Setup Guide
## Connect Your Existing Next.js Site to WordPress CMS

This guide shows you how to keep your Next.js site and use WordPress just for content management.

---

## 🎯 **OVERVIEW**

**What we're doing:**
- WordPress = Content Management Backend (admin only)
- Next.js = Frontend (your existing beautiful site)
- They communicate via WordPress REST API

**Result:**
- Content editors use familiar WordPress admin
- Your site stays fast and modern (Next.js)
- No rebuilding needed!

---

## 📋 **PREREQUISITES**

- ✅ WordPress installed at `unity-partners.com`
- ✅ Your Next.js site in `modernize-website` folder
- ✅ Node.js and npm/pnpm installed
- ✅ Access to WordPress admin panel

---

## 🚀 **STEP-BY-STEP SETUP**

### Step 1: Install WordPress Plugins

1. **Log into WordPress Admin** (`unity-partners.com/wp-admin`)

2. **Install Required Plugins:**
   - Go to **Plugins → Add New**
   - Search and install:
     - ✅ **Advanced Custom Fields (ACF)** - For custom content fields
     - ✅ **ACF to REST API** - Exposes ACF fields via REST API
     - ✅ **Custom Post Type UI** (optional) - For custom content types

3. **Activate all plugins**

---

### Step 2: Create Custom Content Types in WordPress

We'll create custom post types for your content sections.

#### A. Create "Services" Post Type

1. Go to **CPT UI → Add/Edit Post Types**
2. Create new post type:
   - **Post Type Slug**: `services`
   - **Plural Label**: Services
   - **Singular Label**: Service
   - **Show in REST API**: ✅ Yes
   - **REST API base slug**: `services`

#### B. Create "Testimonials" Post Type

1. Create another post type:
   - **Post Type Slug**: `testimonials`
   - **Plural Label**: Testimonials
   - **Singular Label**: Testimonial
   - **Show in REST API**: ✅ Yes

#### C. Create Custom Fields (ACF)

1. Go to **Custom Fields → Add New**

2. **Create Field Group: "Service Fields"**
   - Field: `icon` (Text) - Icon name
   - Field: `description` (Textarea) - Service description
   - Field: `cta_text` (Text) - Button text
   - Field: `cta_link` (Text) - Button link
   - **Location Rules**: Show this field group if Post Type is equal to Service

3. **Create Field Group: "Testimonial Fields"**
   - Field: `quote` (Textarea) - Testimonial quote
   - Field: `author` (Text) - Author name
   - Field: `role` (Text) - Author role (optional)
   - **Location Rules**: Show this field group if Post Type is equal to Testimonial

---

### Step 3: Add Content in WordPress

#### Add Services:
1. Go to **Services → Add New**
2. Create 3 services:
   - **Candidates** (icon: Users, description, CTA: "Find a Job")
   - **Clients** (icon: Building2, description, CTA: "Contact Us")
   - **Interim Management** (icon: UserCog, description, CTA: "Learn More")

#### Add Testimonials:
1. Go to **Testimonials → Add New**
2. Add all 6 testimonials with quotes and authors

#### Add Pages:
1. Go to **Pages → Add New**
2. Create pages for:
   - Home (if needed)
   - About
   - Contact

---

### Step 4: Install WordPress REST API Helper in Next.js

```bash
cd modernize-website
npm install axios
# or if using fetch (built-in), no install needed
```

---

### Step 5: Create WordPress API Client

Create a new file to handle WordPress API calls:

```typescript
// lib/wordpress.ts
const WORDPRESS_API_URL = 'https://unity-partners.com/wp-json/wp/v2'

export interface WordPressService {
  id: number
  title: { rendered: string }
  acf?: {
    icon?: string
    description?: string
    cta_text?: string
    cta_link?: string
  }
}

export interface WordPressTestimonial {
  id: number
  title: { rendered: string }
  acf?: {
    quote?: string
    author?: string
    role?: string
  }
}

export async function getServices(): Promise<WordPressService[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/services?_embed`, {
      next: { revalidate: 3600 } // Revalidate every hour
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch services')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export async function getTestimonials(): Promise<WordPressTestimonial[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/testimonials?_embed`, {
      next: { revalidate: 3600 }
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch testimonials')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getPageBySlug(slug: string) {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/pages?slug=${slug}&_embed`, {
      next: { revalidate: 3600 }
    })
    
    if (!response.ok) {
      throw new Error(`Failed to fetch page: ${slug}`)
    }
    
    const pages = await response.json()
    return pages[0] || null
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error)
    return null
  }
}
```

---

### Step 6: Update Your Components to Use WordPress Data

#### Update Services Component:

```typescript
// components/services.tsx
import { getServices } from "@/lib/wordpress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Building2, UserCog } from "lucide-react"

// Icon mapping
const iconMap: Record<string, any> = {
  Users,
  Building2,
  UserCog,
}

export async function Services() {
  const wpServices = await getServices()
  
  // Fallback to hardcoded if WordPress fails
  const services = wpServices.length > 0 
    ? wpServices.map(service => ({
        icon: iconMap[service.acf?.icon || 'Users'],
        title: service.title.rendered,
        description: service.acf?.description || '',
        cta: service.acf?.cta_text || 'Learn More',
        href: service.acf?.cta_link || '#contact'
      }))
    : [
        // Your existing hardcoded services as fallback
        {
          icon: Users,
          title: "Candidates",
          description: "Looking for your next opportunity? We connect talented professionals...",
          cta: "Find a Job",
          href: "#contact"
        },
        // ... rest of your services
      ]

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      {/* Your existing JSX, but use services array */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-24">
        {services.map((service) => (
          <Card key={service.title} className="relative overflow-hidden border-border bg-card hover:shadow-lg transition-shadow duration-300">
            {/* Your existing card structure */}
          </Card>
        ))}
      </div>
      
      {/* Rest of your component */}
    </section>
  )
}
```

#### Update Testimonials Component:

```typescript
// components/testimonials.tsx
import { getTestimonials } from "@/lib/wordpress"
import { Quote } from "lucide-react"

export async function Testimonials() {
  const wpTestimonials = await getTestimonials()
  
  const testimonials = wpTestimonials.length > 0
    ? wpTestimonials.map(testimonial => ({
        quote: testimonial.acf?.quote || testimonial.title.rendered,
        author: testimonial.acf?.author || 'Anonymous'
      }))
    : [
        // Your existing hardcoded testimonials as fallback
        {
          quote: "I think relying on expert matching...",
          author: "Client Partner"
        },
        // ... rest
      ]

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background">
      {/* Your existing JSX */}
    </section>
  )
}
```

---

### Step 7: Handle Contact Form Submission

Update your contact form to submit to WordPress:

```typescript
// components/contact.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Option 1: Submit to WordPress (requires form plugin)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ firstName: '', lastName: '', email: '', organization: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary">
      {/* Your existing form JSX */}
      {submitStatus === 'success' && (
        <div className="text-green-600">Thank you! Your message has been sent.</div>
      )}
      {submitStatus === 'error' && (
        <div className="text-red-600">Sorry, there was an error. Please try again.</div>
      )}
    </section>
  )
}
```

#### Create API Route for Form:

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Option 1: Send email via WordPress
    const wpResponse = await fetch('https://unity-partners.com/wp-json/contact-form-7/v1/contact-forms/YOUR_FORM_ID/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        your-name: `${body.firstName} ${body.lastName}`,
        your-email: body.email,
        your-organization: body.organization,
        your-message: body.message
      })
    })

    // Option 2: Send email directly (simpler)
    // Use a service like Resend, SendGrid, or Nodemailer
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
```

---

### Step 8: Configure CORS (if needed)

If WordPress and Next.js are on different domains, enable CORS in WordPress:

1. Install **CORS plugin** in WordPress OR
2. Add to `functions.php`:
```php
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        return $value;
    });
}, 15);
```

---

### Step 9: Test the Integration

1. **Start your Next.js dev server:**
   ```bash
   npm run dev
   ```

2. **Check WordPress API:**
   - Visit: `https://unity-partners.com/wp-json/wp/v2/services`
   - Should see your services in JSON format

3. **Test in Next.js:**
   - Visit: `http://localhost:3000`
   - Check browser console for any errors
   - Verify content is loading from WordPress

---

### Step 10: Deploy

#### Deploy Next.js:
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect GitHub repo
- **Your server**: Build and upload

#### WordPress:
- Already on your server
- Make sure REST API is accessible

#### Domain:
- Point `unity-partners.com` to your Next.js deployment
- Keep WordPress at `unity-partners.com/wp-admin` or subdomain

---

## 🔧 **ADVANCED: Content Preview**

Allow content editors to preview changes before publishing:

1. **Install WordPress Plugin**: "JWT Authentication for WP REST API"

2. **Create Preview Route in Next.js:**
```typescript
// app/preview/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const postId = searchParams.get('id')
  const postType = searchParams.get('type')
  
  // Fetch draft/preview content from WordPress
  // Render with your components
}
```

---

## ✅ **CHECKLIST**

- [ ] WordPress plugins installed
- [ ] Custom post types created
- [ ] ACF fields configured
- [ ] Content added in WordPress
- [ ] WordPress API client created in Next.js
- [ ] Components updated to fetch from WordPress
- [ ] Contact form configured
- [ ] CORS configured (if needed)
- [ ] Tested locally
- [ ] Deployed to production

---

## 🆘 **TROUBLESHOOTING**

**Issue: API returns 404**
- Check REST API is enabled for custom post types
- Verify permalink structure (Settings → Permalinks)

**Issue: ACF fields not showing**
- Install "ACF to REST API" plugin
- Check field group location rules

**Issue: CORS errors**
- Install CORS plugin or add CORS headers

**Issue: Content not updating**
- Check cache settings (`revalidate` in fetch)
- Clear Next.js cache

---

## 📚 **NEXT STEPS**

1. **Set up content preview** (optional)
2. **Add more custom fields** as needed
3. **Optimize images** via WordPress media library
4. **Set up caching** for better performance
5. **Monitor API usage** and performance

---

**You now have WordPress for content management and Next.js for a fast, modern frontend!** 🎉
