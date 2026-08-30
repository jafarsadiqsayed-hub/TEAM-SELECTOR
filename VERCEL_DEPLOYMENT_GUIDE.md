# 🚀 How to Host on Vercel (Step-by-Step Guide)

You can host this project on Vercel for free in less than 2 minutes.

---

## 🌟 Method 1: Using GitHub (Recommended & Easiest)

1. **Create a GitHub Repository**:
   - Go to [github.com](https://github.com) and log in.
   - Click **New Repository** (e.g. name it `arts-fest-team-selection`).
   - Upload or push all files from `E:\ARTS FEST\TEAM SELECTION` to your new repository.

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **Add New...** ➡️ **Project**.
   - Select your `arts-fest-team-selection` repository from the list and click **Import**.
   - Leave all default settings as they are (Framework: *Other* / Root Directory: `./`).
   - Click **Deploy**!

3. **Done! 🎉**:
   - Vercel will give you a live production link (e.g., `https://arts-fest-team-selection.vercel.app`) that you can share with your team leaders and open on the auditorium projector screen!

---

## ⚡ Method 2: Instant Drag & Drop via Vercel CLI

If you have Node.js / Vercel CLI installed:
1. Open PowerShell or Command Prompt in `E:\ARTS FEST\TEAM SELECTION`.
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the simple prompts (press Enter to accept defaults) and your site will be live instantly!

---

## 📁 Files Added for Vercel
- [`vercel.json`](file:///e:/ARTS%20FEST/TEAM%20SELECTION/vercel.json) - Configures routing, CORS headers, and asset caching.
- [`package.json`](file:///e:/ARTS%20FEST/TEAM%20SELECTION/package.json) - Standard project manifest.
- [`.vercelignore`](file:///e:/ARTS%20FEST/TEAM%20SELECTION/.vercelignore) - Excludes local Windows batch scripts during deployment.
- [`.gitignore`](file:///e:/ARTS%20FEST/TEAM%20SELECTION/.gitignore) - Excludes local cache and temporary files.
