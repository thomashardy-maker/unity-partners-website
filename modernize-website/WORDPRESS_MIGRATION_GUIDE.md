# WordPress + Elementor Migration Guide
## Transferring modernize-website to unity-partners.com

---

## 📋 **PREPARATION PHASE**

### Step 1: Backup Your WordPress Site
1. Log into your WordPress admin panel at `unity-partners.com/wp-admin`
2. Install a backup plugin (UpdraftPlus or BackupBuddy)
3. Create a full backup of your current site
4. Download the backup files to your computer

### Step 2: Install Required Plugins
1. **Elementor** (if not already installed)
   - Go to Plugins → Add New
   - Search for "Elementor"
   - Install and activate

2. **Elementor Pro** (recommended for advanced features)
   - Purchase and install if you need premium widgets

3. **Contact Form Plugin** (choose one):
   - **Contact Form 7** (free) OR
   - **WPForms** (free/premium) OR
   - **Elementor Forms** (if using Elementor Pro)

4. **Additional helpful plugins**:
   - **Custom CSS** plugin (for additional styling)
   - **SVG Support** (if using SVG icons)

### Step 3: Prepare Assets
1. **Extract images/icons**:
   - Copy all images from `/public` folder
   - Upload to WordPress Media Library (Media → Add New)
   - Note the URLs for later use

2. **Extract fonts**:
   - The site uses:
     - Inter (sans-serif)
     - Playfair Display (serif)
   - Add fonts via:
     - **Elementor → Settings → Style → Default Fonts** OR
     - **Appearance → Customize → Typography** OR
     - Use Google Fonts plugin

---

## 🎨 **DESIGN SETUP**

### Step 4: Configure Theme & Colors
1. **Choose a theme**:
   - Use a lightweight theme like **Astra**, **Hello Elementor**, or **GeneratePress**
   - These work best with Elementor

2. **Set up color scheme**:
   - Go to **Appearance → Customize**
   - Set primary colors based on your CSS variables:
     - Background: `#F7F7F7` (light beige)
     - Foreground: `#262626` (dark gray/black)
     - Accent: `#8B7355` (warm brown)
     - Secondary: `#F0F0F0` (light gray)

3. **Configure typography**:
   - Set **Inter** as default sans-serif font
   - Set **Playfair Display** as serif font for headings
   - Font sizes: Match your current design

---

## 🏗️ **BUILDING THE PAGES**

### Step 5: Create New Page Template
1. Go to **Pages → Add New**
2. Title: "Home" (or your preferred name)
3. Click **Edit with Elementor**
4. Set page template to **"Elementor Canvas"** (full-width, no header/footer)

---

### Step 6: Build Header Section

**In Elementor:**

1. **Add Section** → Choose "Full Width"
2. **Add Column** → Single column
3. **Add Widget**: **Site Logo** (or Image widget)
   - Upload your logo
   - Size: Adjust to match design

4. **Add Widget**: **Menu** (Navigation Menu)
   - Create menu in **Appearance → Menus** first:
     - Services (#services)
     - Candidates (#candidates)
     - Clients (#clients)
     - Testimonials (#testimonials)
     - Contact (#contact)
   - Style: Match your design (text color, hover effects)

5. **Add Widget**: **Button**
   - Text: "Get in Touch"
   - Link: #contact
   - Style: Match your button design

6. **Styling**:
   - Background: Semi-transparent white with blur
   - Position: Fixed at top
   - Padding: Match your design
   - Border: Bottom border

7. **Mobile Menu**:
   - Use Elementor's **Hamburger Menu** widget OR
   - Use **Mobile Menu** widget
   - Configure responsive settings

---

### Step 7: Build Hero Section

**Split Background Design:**

1. **Add Section** → Full Width
2. **Set Section Height**: Minimum Height = 100vh
3. **Add Column**: 2 columns (50% each)

**Left Column (Financial Services - Dark):**
1. **Background**: Dark color (#262626)
2. **Add Widget**: **Icon Box**
   - Icon: Trending Up (or upload SVG)
   - Title: "Financial Services"
   - Description: "COOs, Compliance, IT, Risk, and executive roles across banking, asset management, and insurance."
   - Button: "Explore FS Roles" → Link to #services

**Right Column (Industry & Commerce - Light):**
1. **Background**: Light color (#F0F0F0)
2. **Add Widget**: **Icon Box**
   - Icon: Briefcase
   - Title: "Industry & Commerce"
   - Description: "Technology, operations, and leadership roles across diverse industries..."
   - Button: "Explore All Roles" → Link to #services

**Badge at Top:**
1. **Add Section** above hero
2. **Add Widget**: **Text Editor**
   - Text: "Serving Hong Kong & Singapore"
   - Style: Badge/pill shape with accent color
   - Center align

**Styling Tips:**
- Use **Advanced → Custom CSS** for grid patterns
- Add gradient overlays if needed
- Ensure responsive: Stack columns on mobile

---

### Step 8: Build Services Section

**Section 1: Three Service Cards**

1. **Add Section** → Full Width
2. **Background**: Light (#F7F7F7)
3. **Add Column**: 3 columns (equal width)

**For each column:**
1. **Add Widget**: **Icon Box** or **Card**
   - Icon: Users, Building2, UserCog (upload SVGs)
   - Title: "Candidates", "Clients", "Interim Management"
   - Description: Copy from your components/services.tsx
   - Button: "Find a Job" / "Contact Us" / "Learn More"
   - Link: #contact

**Styling:**
- Card background: White
- Border: Light gray
- Hover: Shadow effect
- Padding: Match your design

**Section 2: Dual Sector Showcase**

1. **Add Section** → Full Width
2. **Add Column**: 2 columns (50% each)

**Left Column (Financial Services - Dark):**
1. **Background**: Dark (#262626)
2. **Text Color**: White
3. **Add Widget**: **Icon Box**
   - Icon: Trending Up
   - Title: "Financial Services"
   - **Add Widget**: **Text Editor** (for role list)
     - COO & Operations
     - Compliance & Legal
     - IT & Technology
     - Risk Management
     - Finance & Accounting
   - Button: "Get Started" → #contact

**Right Column (Industry & Commerce - Light):**
1. **Background**: Light (#F0F0F0)
2. **Text Color**: Dark
3. **Add Widget**: **Icon Box**
   - Icon: Briefcase
   - Title: "Industry & Commerce"
   - **Add Widget**: **Text Editor** (for role list)
     - Technology & Digital
     - Operations Leadership
     - Supply Chain & Logistics
     - Professional Services
     - Retail & Consumer
   - Button: "Get Started" → #contact

**Section Heading:**
- Add **Heading** widget above: "How We Can Help"
- Subheading: "Whether you're seeking your next career move..."

---

### Step 9: Build "Why Choose Us" Section

1. **Add Section** → Full Width
2. **Background**: Light gray (#F0F0F0)
3. **Add Column**: 2 columns

**Left Column:**
1. **Add Widget**: **Heading**
   - "Why Choose Unity Partners?"
2. **Add Widget**: **Text Editor**
   - Description text
3. **Add Widget**: **Icon List** (3 items)
   - Item 1: "Objectivity & Transparency" with Target icon
   - Item 2: "Direct Access" with Clock icon
   - Item 3: "Personalized Support" with HeartHandshake icon
   - Each with description

**Right Column:**
1. **Add Widget**: **Image** or **HTML**
   - Create stats grid:
     - 48h Response Time
     - 2 Key Markets
     - 100% Dedicated Focus
     - FI Specialization
   - Use **Inner Section** with 2x2 grid
   - Style as cards

---

### Step 10: Build Testimonials Section

1. **Add Section** → Full Width
2. **Background**: White (#F7F7F7)
3. **Add Widget**: **Heading**
   - "What Our Clients Say"
   - Subheading: "Study realized by private survey over our clients of 2024"

4. **Add Column**: 3 columns (responsive: 1 on mobile, 2 on tablet, 3 on desktop)

**For each testimonial:**
1. **Add Widget**: **Testimonial** (if Elementor Pro) OR **Text Editor**
   - Quote icon (use Icon widget)
   - Quote text
   - Author name
   - Style as card with border

**Testimonials to add:**
- "I think relying on expert matching..."
- "It's a valuable initiative..."
- "It's a smart approach..."
- "The service ensures we don't miss out..."
- "This agency doesn't feel like a generalist..."
- "The value of this recruitment partner..."

---

### Step 11: Build Contact Section

1. **Add Section** → Full Width
2. **Background**: Light gray (#F0F0F0)
3. **Add Column**: 2 columns

**Left Column:**
1. **Add Widget**: **Heading**
   - "Let's Start a Conversation"
2. **Add Widget**: **Text Editor**
   - Description text
3. **Add Widget**: **Icon List** (3 items)
   - Location: "18 Tang Lung Street, Causeway Bay, Hong Kong"
   - Licence: "78505"
   - Email: "thomas.hardy@unity-partners.com"

**Right Column:**
1. **Add Widget**: **Form** (Contact Form 7 / WPForms / Elementor Form)
   - Fields:
     - First Name (required)
     - Last Name (required)
     - Email (required)
     - Organization (optional)
     - Message (textarea, required)
   - Submit Button: "Send Message"
   - Style: Card with border, white background

**Form Setup:**
- If using **Contact Form 7**:
  1. Go to **Contact → Add New**
  2. Create form with fields
  3. Copy shortcode
  4. Add **Shortcode** widget in Elementor

- If using **Elementor Form**:
  1. Use **Form** widget
  2. Add fields
  3. Set up email notifications
  4. Configure actions (email, redirect, etc.)

---

### Step 12: Build Footer Section

1. **Add Section** → Full Width
2. **Background**: Dark (#262626)
3. **Text Color**: White/Light

**Layout:**
1. **Add Column**: 3 columns (or use Footer widget area)

**Column 1:**
- Logo/Brand name: "Unity Partners"
- Description: "Recruitment for financial services..."
- Social icons: LinkedIn

**Column 2:**
- Heading: "Services"
- Links: Candidates, Clients, Board Recruitment

**Column 3:**
- Heading: "Company"
- Links: About, Testimonials, Contact

**Column 4 (optional):**
- Heading: "Locations"
- Links: Hong Kong, Singapore

**Bottom Bar:**
- Copyright: "© 2025 Unity Partners. All rights reserved. Licence: 78505"

**Note:** You can also use **Appearance → Widgets → Footer** if your theme supports it.

---

## 🎨 **STYLING & CUSTOMIZATION**

### Step 13: Add Custom CSS

1. Go to **Elementor → Settings → Advanced → Custom CSS**
2. Add CSS to match your design:

```css
/* Match your color scheme */
:root {
  --background: #F7F7F7;
  --foreground: #262626;
  --accent: #8B7355;
  --secondary: #F0F0F0;
}

/* Typography */
.elementor-heading-title {
  font-family: 'Playfair Display', serif;
}

/* Button styles */
.elementor-button {
  border-radius: 0.5rem;
  transition: all 0.3s;
}

/* Card hover effects */
.elementor-widget:hover {
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s;
}

/* Grid patterns (for hero background) */
.hero-pattern-dark {
  background-image: 
    linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 3rem 3rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  /* Stack columns */
  /* Adjust font sizes */
  /* Adjust spacing */
}
```

### Step 14: Configure Responsive Design

1. In Elementor, use **Responsive Mode** (desktop/tablet/mobile icons)
2. Adjust:
   - Column widths
   - Font sizes
   - Spacing/padding
   - Hide/show elements
   - Stack columns vertically on mobile

---

## 🔗 **ANCHOR LINKS & NAVIGATION**

### Step 15: Set Up Anchor Links

1. For each section, add **CSS ID**:
   - Go to **Section Settings → Advanced → CSS ID**
   - Add IDs: `services`, `candidates`, `clients`, `testimonials`, `contact`

2. Update menu links:
   - Go to **Appearance → Menus**
   - Edit menu items
   - Set links as: `#services`, `#candidates`, etc.

3. **Smooth Scroll** (optional):
   - Add CSS: `html { scroll-behavior: smooth; }`
   - Or use plugin: "Page Scroll to ID"

---

## 📝 **FORM INTEGRATION**

### Step 16: Configure Contact Form

**Option A: Contact Form 7**
1. Install **Contact Form 7**
2. Create form with fields
3. Set up email notifications
4. Add shortcode to Elementor

**Option B: WPForms**
1. Install **WPForms**
2. Create form
3. Set up notifications
4. Add shortcode or use widget

**Option C: Elementor Forms** (Pro)
1. Use **Form** widget
2. Configure fields
3. Set up actions:
   - Email notification
   - Redirect after submit
   - Success message

**Email Configuration:**
- Set recipient: `thomas.hardy@unity-partners.com`
- Configure email template
- Test form submission

---

## ✅ **FINAL STEPS**

### Step 17: Review & Test

1. **Desktop Review**:
   - Check all sections
   - Verify colors match
   - Test all links
   - Check button styles

2. **Mobile Review**:
   - Test responsive design
   - Check mobile menu
   - Verify form works
   - Test touch interactions

3. **Cross-Browser Testing**:
   - Chrome
   - Firefox
   - Safari
   - Edge

4. **Performance Check**:
   - Use **GTmetrix** or **PageSpeed Insights**
   - Optimize images
   - Enable caching
   - Minify CSS/JS

### Step 18: SEO Setup

1. **Install SEO Plugin**:
   - **Yoast SEO** or **Rank Math**

2. **Configure**:
   - Set page title
   - Add meta description
   - Set Open Graph tags
   - Add schema markup

3. **Set Permalink**:
   - Go to **Settings → Permalinks**
   - Choose "Post name"

### Step 19: Launch Checklist

- [ ] All sections built and styled
- [ ] All links working
- [ ] Contact form tested and sending emails
- [ ] Mobile responsive
- [ ] Images optimized
- [ ] SEO configured
- [ ] Backup created
- [ ] Test on staging site first (if possible)

---

## 🚀 **GOING LIVE**

### Step 20: Publish

1. **Set as Homepage**:
   - Go to **Settings → Reading**
   - Set "Homepage" to your new page
   - Save

2. **Update Permalink**:
   - If needed, set page slug

3. **Clear Cache**:
   - Clear Elementor cache
   - Clear WordPress cache
   - Clear browser cache

4. **Monitor**:
   - Check analytics
   - Monitor form submissions
   - Check for errors

---

## 📚 **ADDITIONAL RESOURCES**

- **Elementor Documentation**: https://elementor.com/help/
- **WordPress Codex**: https://codex.wordpress.org/
- **Color Palette Reference**: Use your `globals.css` file
- **Font Resources**: Google Fonts (Inter, Playfair Display)

---

## 🆘 **TROUBLESHOOTING**

**Issue: Styles not matching**
- Check Custom CSS
- Clear cache
- Check theme compatibility

**Issue: Form not sending emails**
- Check SMTP settings
- Install **WP Mail SMTP** plugin
- Test with form testing plugin

**Issue: Mobile menu not working**
- Check Elementor mobile settings
- Verify menu widget configuration
- Test with different themes

**Issue: Slow loading**
- Optimize images
- Use lazy loading
- Enable caching
- Minimize plugins

---

## 📞 **SUPPORT**

If you encounter issues:
1. Check Elementor documentation
2. WordPress support forums
3. Elementor community
4. Your hosting provider support

---

**Good luck with your migration! 🎉**
