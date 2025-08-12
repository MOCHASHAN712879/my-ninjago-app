# Deploy Your Ninjago Gallery to GitHub Pages

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in (or create account)
2. Click the **"+"** button → **"New repository"**
3. Name it something like: `ninjago-gallery` or `ninja-character-gallery`
4. Make it **Public** (required for free GitHub Pages)
5. Check **"Add a README file"**
6. Click **"Create repository"**

## Step 2: Upload Your Files

**Option A: Web Interface (Easiest)**
1. In your new repository, click **"uploading an existing file"**
2. Drag and drop these 4 files:
   - `index.html`
   - `styles.css` 
   - `data.js`
   - `script.js`
3. Write commit message: "Add Ninjago character gallery"
4. Click **"Commit changes"**

**Option B: Git Commands**
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
# Copy your 4 files here
git add .
git commit -m "Add Ninjago character gallery"
git push origin main
```

## Step 3: Enable GitHub Pages

1. In your repository, go to **Settings** tab
2. Scroll down to **"Pages"** in left sidebar
3. Under **"Source"**, select **"Deploy from a branch"**
4. Choose **"main"** branch
5. Leave folder as **"/ (root)"**
6. Click **"Save"**

## Step 4: Get Your Live URL

- Your site will be live at: `https://yourusername.github.io/repository-name`
- GitHub will show you the URL in the Pages settings
- It may take 5-10 minutes to go live initially

## Step 5: Share Your Creation

Your Ninjago gallery is now live and you can:
- Share the URL with friends
- Add it to your portfolio
- Post it on social media
- Include it in job applications

## Updates

To update your site:
1. Edit files on GitHub (click pencil icon)
2. Or upload new versions
3. Changes go live automatically in 1-2 minutes

## Pro Tips

- **Custom Domain**: You can add a custom domain in Pages settings
- **HTTPS**: Automatically enabled for security
- **Analytics**: Add Google Analytics to track visitors
- **SEO**: Your site is searchable on Google

Your Ninjago gallery will showcase:
- Interactive character profiles
- Season 1-15 quest timeline
- Retro gaming design
- Mobile-responsive layout
- Fast loading performance