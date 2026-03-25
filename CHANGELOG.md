# Changelog

## [Unreleased]
- Completely redesigned `resume.html` to a clean, ATS-compliant single-column layout.
- Migrated primary fonts to **Inter** for better ATS parsability and minimal aesthetic.
- Removed dynamic `html2pdf.js` PDF generator due to image-rasterization issues on the client side.
- Created `generate-pdf.js` Node.js script using **Puppeteer** to perfectly render a selectable, native text PDF (`assets/Dripar_Gupta_Resume.pdf`).
- Synced the `index.html` download button to offer a direct native PDF download pointing to the pre-regenerated asset.
- Updated `resume.html` work experience to reflect the latest chronological format and companies (Webkul, Alobha, NDMEAA, Locgfx).

---

## 🛠️ How to Update and Regenerate the Resume PDF

If you ever update the text, experience, or styles in `resume.html`, you **must** regenerate the PDF file so that the download button serves the latest version.

Follow these exact steps:

1. **Start your local server**
   Ensure your XAMPP server / local environment is running so that the URL `http://127.0.0.1/Dripar/resume.html` works in your browser.

2. **Open the Terminal**
   Open your terminal/command prompt directly inside the `Dripar` root directory:
   `C:\xampp\htdocs\Dripar\`

3. **Install Dependencies (Only needed once)**
   If you have never installed the required node modules, run:
   \`\`\`bash
   npm install puppeteer
   \`\`\`

4. **Run the Generation Script**
   Execute the following command to run the script:
   \`\`\`bash
   node scripts/generate-pdf.js
   \`\`\`

5. **Verify the Output**
   You should see the message: `PDF Regenerated!`.
   The new PDF will now instantly be available at `assets/Dripar_Gupta_Resume.pdf`.

6. **Push to GitHub**
   Since `.gitignore` protects heavy dependencies from uploading, you can freely run:
   \`\`\`bash
   git add resume.html assets/Dripar_Gupta_Resume.pdf
   git commit -m "Update resume content and regenerate PDF"
   git push origin dripar
   \`\`\`
   Your website and the downloadable PDF will now be completely up-to-date!
