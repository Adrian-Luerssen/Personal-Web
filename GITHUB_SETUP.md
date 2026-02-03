# GitHub Repository Setup Instructions

Since the GitHub CLI is not available, follow these steps to create your GitHub repository and push your website.

## Option 1: Create Repository via GitHub Website

### Step 1: Create the Repository

1. Go to [https://github.com/new](https://github.com/new)
2. Fill in the repository details:
   - **Repository name**: `personal-cv-website` (or any name you prefer)
   - **Description**: "Personal CV website - Data Scientist specializing in automation and data pipelines"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
3. Click "Create repository"

### Step 2: Push Your Code

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/personal-cv-website.git

# Rename branch to main (if you prefer main over master)
git branch -M main

# Push your code
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Option 2: Using GitHub Desktop

If you have GitHub Desktop installed:

1. Open GitHub Desktop
2. Click "Add" → "Add Existing Repository"
3. Browse to: `C:\Users\adria\OneDrive\Desktop\Personal Projects\Personal-Web`
4. Click "Publish repository"
5. Choose repository name and visibility
6. Click "Publish repository"

## Enable GitHub Pages

To host your website for free on GitHub Pages:

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section (left sidebar)
4. Under "Source", select:
   - **Branch**: `main` (or `master`)
   - **Folder**: `/ (root)`
5. Click "Save"
6. Wait a few minutes for deployment
7. Your site will be available at: `https://YOUR_USERNAME.github.io/personal-cv-website/`

## Custom Domain (Optional)

If you have a custom domain:

1. In GitHub Pages settings, add your custom domain
2. In your domain registrar (GoDaddy, Namecheap, etc.), add DNS records:

**For apex domain (example.com)**:
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For subdomain (www.example.com)**:
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

3. Wait for DNS propagation (can take 24-48 hours)
4. Enable "Enforce HTTPS" in GitHub Pages settings

## Updating Your Website

After making changes to your website:

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Update experience section"

# Push to GitHub
git push
```

Your website will automatically update on GitHub Pages within a few minutes.

## Quick Commands Reference

```bash
# Check repository status
git status

# See your remote repository
git remote -v

# View commit history
git log --oneline

# Create a new branch for experiments
git checkout -b experiment

# Switch back to main branch
git checkout main

# Merge changes from experiment branch
git merge experiment
```

## Troubleshooting

### Issue: "Permission denied (publickey)"

**Solution**: Set up SSH keys or use HTTPS with personal access token
1. Use HTTPS URL instead: `https://github.com/USERNAME/REPO.git`
2. When prompted, use a personal access token instead of password
3. Create token at: https://github.com/settings/tokens

### Issue: "Updates were rejected"

**Solution**: Pull before pushing
```bash
git pull origin main --rebase
git push origin main
```

### Issue: Changes not showing on GitHub Pages

**Solution**:
1. Check the Actions tab for deployment status
2. Wait 2-5 minutes for cache to clear
3. Hard refresh your browser (Ctrl + Shift + R)

## Next Steps

1. ✅ Create GitHub repository
2. ✅ Push your code
3. ✅ Enable GitHub Pages
4. 📝 Update the contact information in index.html with your real details
5. 📸 Add your professional photo
6. 🎨 Customize colors if desired (see DESIGN.md)
7. 📊 Add Google Analytics (optional)
8. 🔗 Share your new website!

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [Markdown Guide](https://www.markdownguide.org/)
