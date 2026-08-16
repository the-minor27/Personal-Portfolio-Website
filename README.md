# Abdul Qadeer — Portfolio

A fully responsive, animated, IDE-themed personal portfolio built with plain HTML, CSS, and JavaScript (no build tools required). Light/dark mode, scroll animations, a typing hero, and a working contact form.

**Live structure:**
```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── profile.jpg
│   └── Abdul_Qadeer_Resume.pdf
└── README.md
```

## 1. Run it locally

No build step needed. Just open `index.html` in a browser, or serve it:

```bash
# with VS Code: right-click index.html → "Open with Live Server"
# or with Python:
python3 -m http.server 5500
# then visit http://localhost:5500
```

## 2. Make the contact form actually email you (5 minutes, free)

The form is wired up for **EmailJS**, which sends emails straight from the browser — no backend or server needed.

1. Go to https://www.emailjs.com and create a free account.
2. **Add an Email Service** (connect your Gmail — `iabdulhere@gmail.com`). Note the **Service ID**.
3. **Create an Email Template** with variables `{{from_name}}`, `{{reply_to}}`, `{{message}}`. Note the **Template ID**.
4. Go to **Account → General** and copy your **Public Key**.
5. Open `js/script.js` and fill in the top of the file:

```js
const EMAILJS_CONFIG = {
  PUBLIC_KEY:  "your_public_key_here",
  SERVICE_ID:  "your_service_id_here",
  TEMPLATE_ID: "your_template_id_here",
};
```

That's it — submissions will now land straight in your Gmail inbox. Until you fill these in, the form gracefully falls back to opening the visitor's email client with a pre-filled message to you, so nothing is ever broken.

Free tier covers 200 emails/month, which is plenty for a portfolio.

## 3. Deploy it

**GitHub Pages (recommended, free):**
1. Push this folder to a new GitHub repo (e.g. `portfolio`).
2. Repo → Settings → Pages → Source: `main` branch, `/root`.
3. Your site goes live at `https://<username>.github.io/portfolio/`.

**Netlify (drag & drop):** Go to https://app.netlify.com/drop and drag the `portfolio` folder in — live in seconds. You already use Netlify for your current site, so this will feel familiar.

**Vercel:** `npx vercel` inside the folder, or import the GitHub repo at vercel.com.

## 4. Customize

- **Colors / fonts**: CSS custom properties at the top of `css/style.css` (`:root`, `[data-theme="dark"]`, `[data-theme="light"]`).
- **Content**: all copy lives directly in `index.html`, organized by section (`about`, `skills`, `experience`, `projects`, `education`, `contact`).
- **Resume file**: swap `assets/Abdul_Qadeer_Resume.pdf` with an updated version any time — the filename is already linked from the Download Résumé button.
- **Photo**: swap `assets/profile.jpg`.

## Tech notes

- No frameworks or build tools — pure HTML/CSS/JS, so it uploads cleanly to GitHub and hosts anywhere static.
- Respects `prefers-reduced-motion` and keeps visible keyboard focus states for accessibility.
- Theme choice persists via `localStorage`.
- IDE-style layout: sidebar = file explorer, top tabs = open files, content = editor pane — a nod to the MERN/dev stack this portfolio is built to showcase.
