<div align="center">

<img src="image/logo.svg" alt="MedRush Logo" width="100">

# MedRush

**AI-Powered Healthcare Platform**

[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://medrushweb.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Tesseract.js](https://img.shields.io/badge/OCR-Tesseract.js-FF6C37?style=for-the-badge)](#)
[![OpenStreetMap](https://img.shields.io/badge/Maps-OpenStreetMap-7FFF00?style=for-the-badge)](#)

[Live Demo](https://medrushweb.vercel.app) | [Privacy Policy](https://medrushweb.vercel.app/privacy.html) | [Terms of Service](https://medrushweb.vercel.app/terms.html)

</div>

---

## What is MedRush?

MedRush is a modern, AI-powered healthcare web platform that bridges the gap between patients, pharmacies, and doctors. Upload a prescription, let AI extract the medicines, find nearby pharmacies, and reserve your medicines for instant pickup.

**Built entirely from scratch** with vanilla HTML, CSS, and JavaScript — no frameworks, no backend, no database. Pure client-side magic.

---

## Key Features

### Prescription Scanning (OCR)
- Upload a photo of any prescription (JPG, PNG, HEIC)
- **Tesseract.js** runs entirely in the browser (WebAssembly) — no server upload
- Extracts medicine names using fuzzy matching against a 55+ medicine database
- Displays confidence scores for each detected medicine

### Medicine Catalog
- **55+ real Indian medicines** with actual MRP, generic names, and manufacturers
- Categories: Tablets, Capsules, Syrups, Ointments, Drops, Injections, Inhalers, Gels
- Real-time search with autocomplete
- Stock availability and delivery estimates

### Nearby Hospitals (Geolocation + Overpass API)
- Detects your location via browser Geolocation API
- Queries **OpenStreetMap's Overpass API** for hospitals within 10km radius
- Sorted by distance with navigation links
- Falls back to 5 default Mumbai hospitals if location is denied

### Emergency SOS Panel
- One-tap access to emergency numbers:
  - **Ambulance:** 108
  - **Police:** 100
  - **Emergency:** 112
  - **Poison Help:** 1066
- "Find Nearest Hospital" button opens Google Maps

### Google Maps Navigation
- Navigate to any pharmacy or doctor via Google Maps
- Direct deep-link integration with `google.com/maps/search`

### Doctor Directory
- 8 verified doctors across specialties (General, Cardiology, Orthopedics, Pediatrics, ENT, Dermatology)
- Real-time availability status (Available / Busy)
- Ratings, fees, experience, and clinic hours

### Smart Cart & Reservation
- Add medicines to cart from scan results or manual search
- Quantity controls with real-time price calculation
- Select pickup pharmacy from 5 verified locations
- Payment method selection (Pay at Store / Online)
- Reservation code generation with animated confirmation

### Account System (localStorage)
- **SHA-256 hashed passwords** (Web Crypto API) with salt
- User signup/login with email + password
- Profile editing (name, email, phone, address, DOB, gender)
- Order history tracking per account
- Session persistence across page reloads
- All data stored locally — zero server dependency

### Theme System
- Light / Dark mode toggle
- Persists across sessions via localStorage
- Smooth CSS custom property transitions

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Markup** | HTML5, Semantic Elements |
| **Styling** | CSS3 (Custom Properties, Grid, Flexbox, Animations) |
| **Logic** | Vanilla JavaScript (ES6+, Async/Await) |
| **OCR** | Tesseract.js v5 (WebAssembly, in-browser) |
| **Maps** | Google Maps deep-links |
| **Hospitals** | OpenStreetMap Overpass API |
| **Auth Security** | SHA-256 hashing via Web Crypto API |
| **Storage** | localStorage (users, sessions, cart, orders, theme) |
| **Hosting** | Vercel (Edge Network, automatic deployments) |
| **Fonts** | Inter (Google Fonts) |

---

## Security

| Measure | Implementation |
|---------|---------------|
| Password hashing | SHA-256 with unique salt via `crypto.subtle.digest()` |
| XSS prevention | HTML entity escaping for all dynamic content |
| Input sanitization | Length limits, character filtering on all user inputs |
| No server storage | All data lives in the user's browser |
| On-device OCR | Prescription images never leave the browser |
| `rel="noopener"` | All external links use `target="_blank"` with `rel="noopener"` |
| Content Security | No inline eval, no remote scripts (except Tesseract CDN) |

---

## Project Structure

```
MedRush-App-website/
├── index.html          # Main SPA — all sections, modals, panels
├── style.css           # Complete stylesheet (light + dark themes)
├── script.js           # Application logic (970+ lines)
├── privacy.html        # Privacy Policy page
├── terms.html          # Terms of Service page
├── README.md           # This file
└── image/
    └── logo.svg        # Teal gradient SVG logo
```

---

## Sections (index.html)

| Section | Description |
|---------|-------------|
| **Loader** | Animated loading screen with progress bar |
| **Navbar** | Fixed nav with theme toggle, account dropdown, cart |
| **Hero** | CTA with phone mockup, stats, SOS emergency panel |
| **Features** | 6 feature cards with SVG icons |
| **How It Works** | 4-step process flow |
| **Upload Rx** | Drag-and-drop prescription upload with Tesseract.js OCR |
| **Medicines** | Searchable, filterable grid of 55+ medicines |
| **Pharmacies** | 5 verified Mumbai pharmacies with navigation |
| **Doctors** | 8 doctors with filters, ratings, availability |
| **Hospitals** | Dynamic nearby hospital finder (Overpass API) |
| **CTA** | Call-to-action banner |
| **Footer** | Links, legal, credits |
| **Cart Panel** | Slide-in cart drawer with quantity controls |
| **Checkout Modal** | Pharmacy selection, payment, confirmation |
| **Success Screen** | Animated reservation confirmation with code |
| **Auth Modal** | Login / Signup with SHA-256 password hashing |
| **Profile Panel** | Edit user profile (slide-in drawer) |
| **Orders Panel** | View order history (slide-in drawer) |

---

## CSS Architecture

- **529 lines** of handcrafted CSS
- **CSS Custom Properties** for full theming (light + dark)
- **Responsive** breakpoints: 1024px, 768px, 480px
- **Glass morphism** effects with `backdrop-filter`
- **Smooth animations** (keyframes, transitions, transforms)
- **No CSS framework** — 100% custom

---

## JavaScript Architecture

- **970+ lines** of vanilla JS
- Single `M` object pattern (module-like organization)
- **~20 methods** covering: auth, cart, checkout, OCR, search, rendering, geolocation
- **Async/Await** for password hashing and OCR
- **Event delegation** for dynamic content
- **Web Crypto API** for secure password hashing
- **Zero dependencies** (Tesseract.js loaded from CDN)

---

## API Integrations

| API | Purpose | Method |
|-----|---------|--------|
| **Tesseract.js** | Prescription OCR | CDN load + WebAssembly |
| **Overpass API** | Hospital discovery | POST request with Overpass QL |
| **Geolocation API** | User location | Browser native |
| **Google Maps** | Navigation deep-links | URL scheme |
| **Web Crypto API** | Password hashing | SHA-256 digest |

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/thesajidalam/MedRush-App-website.git
   ```

2. Open `index.html` in a modern browser — no build step required.

3. For prescription scanning, allow camera/file access when prompted.

---

## Deployment

MedRush is deployed on **Vercel** with automatic GitHub integration:

- **Production:** [https://medrushweb.vercel.app](https://medrushweb.vercel.app)
- **Repository:** [github.com/thesajidalam/MedRush-App-website](https://github.com/thesajidalam/MedRush-App-website)

Every push to `main` triggers an automatic production deployment.

---

## Author

Designed & built by **[@thesajidalam](https://github.com/thesajidalam)**

---

## License

This project is open source. Feel free to use, modify, and distribute.

---

<div align="center">

**Made with care for better healthcare access.**

</div>
