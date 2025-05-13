# Rebound Landing Page

A modern, responsive landing page for Rebound, an AI-powered beauty discovery platform.

## Project Overview

This landing page is designed to:
- Capture user waitlist signups
- Explain Rebound's value proposition
- Showcase Rebound's features and benefits
- Help with affiliate program approvals

## Tech Stack

The landing page is built with:
- HTML5
- CSS3 (with CSS variables and modern layout techniques)
- Vanilla JavaScript
- Font Awesome for icons
- Google Fonts (Inter)

## File Structure

```
rebound-landing/
├── css/
│   └── styles.css      # Main stylesheet
├── img/                # Image assets folder
├── js/
│   └── script.js       # JavaScript functionality
├── index.html          # Main HTML file
└── README.md           # This documentation file
```

## Development

To work on this project locally:

1. Clone the repository
2. Navigate to the `rebound-landing` directory
3. Open `index.html` in your browser or use a local development server

## Deployment Options

### Option 1: GitHub Pages (Free)

1. Push the `rebound-landing` directory to a GitHub repository
2. Go to repository Settings > Pages
3. Select the main branch and save
4. Your site will be available at `https://yourusername.github.io/reponame`

### Option 2: Netlify (Free)

1. Create an account on [Netlify](https://www.netlify.com/)
2. Drag and drop the `rebound-landing` folder to Netlify's dashboard
3. Your site will be deployed with a Netlify subdomain
4. Connect your custom domain (rebound-ai.com) in the domain settings

### Option 3: Vercel (Free)

1. Create an account on [Vercel](https://vercel.com/)
2. Install Vercel CLI: `npm i -g vercel`
3. Navigate to the `rebound-landing` directory
4. Run `vercel` and follow the prompts
5. Connect your custom domain (rebound-ai.com) in the project settings

## Setting Up Your Domain

To point rebound-ai.com to your deployed site:

1. Access your domain registrar (where you purchased rebound-ai.com)
2. Add DNS records pointing to your hosting provider
   - For GitHub Pages: Create an A record pointing to GitHub's IP addresses
   - For Netlify/Vercel: Create a CNAME record pointing to your deployment URL
3. Follow your hosting provider's specific instructions for custom domains

## Next Steps

- Add actual product screenshots/mockups to the `img` directory
- Set up a proper form submission endpoint for the waitlist and newsletter forms
- Implement analytics (Google Analytics, Plausible, etc.)
- Create social media accounts and update the links in the footer 