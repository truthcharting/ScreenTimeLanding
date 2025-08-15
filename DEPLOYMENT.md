# Deployment Guide

## Quick Setup for GitHub Pages

### 1. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name it `pilgrim-path-landing` (or your preferred name)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 2. Push Your Code

Run these commands in your terminal:

```bash
# Add the GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/pilgrim-path-landing.git

# Push your code to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The GitHub Actions workflow will automatically build and deploy your site

### 4. Your Site is Live!

Your site will be available at:
`https://YOUR_USERNAME.github.io/pilgrim-path-landing/`

The first deployment may take a few minutes to complete.

## Local Development

To run the site locally:

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Custom Domain (Optional)

If you want to use a custom domain:

1. In your repository Settings > Pages
2. Enter your domain in the "Custom domain" field
3. Add a CNAME record pointing to `YOUR_USERNAME.github.io`
4. Create a `CNAME` file in your repository root with your domain name

## Troubleshooting

- If the build fails, check the Actions tab in your repository
- Make sure all dependencies are properly installed
- Verify that the repository is public (required for free GitHub Pages)
