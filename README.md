# Plug Connect Solutions 🚀

A modern, high-performance web application for **Plug Connect Solutions**, a digital agency specialized in helping South African SMEs dominate the digital space.

![Project Preview](https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200)

## 🌐 Live Website
[Visit Plug Connect Solutions](https://plugconnect.co.za/)

## ✨ Key Features

- **Service Showcase**: Detailed sections for Web Design, Social Media Marketing, and Workflow Automation.
- **Interactive Demos**: Built-in "Site Preview" system allowing clients to interact with template designs (Kota Kings, Law Firm, E-commerce, etc.).
- **Smart Consultation Form**: Integrated with Google Apps Script for secure, automated lead management.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop using Tailwind CSS.
- **WhatsApp Integration**: Floating action button for immediate client communication.
- **Professional Branding**: High-fidelity SVG reconstruction of agency assets for crisp rendering on all screens.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Lead Management**: Google Apps Script & Proton Mail Integration

## 📂 Project Structure

```text
├── components/
│   ├── ui/             # Reusable UI components (Buttons, Cards, Logo)
│   ├── sections/       # Hero, Services, Pricing, About, etc.
│   └── Header.tsx      # Navigation with mobile support
├── pages/
│   ├── Home.tsx        # Main landing page
│   ├── Consultation.tsx # Booking system
│   ├── WebDesign.tsx   # Portfolio & Service details
│   └── SitePreview.tsx # Interactive template engine
├── App.tsx             # Routing and Layout management
├── index.tsx           # Entry point
└── index.html          # Main HTML5 template
```

## 🚀 Getting Started

### 1. Prerequisites
- A modern browser that supports ES Modules.
- (Optional) A local development server like [Vite](https://vitejs.dev/) or [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

### 2. Installation
Clone the repository:
```bash
git clone https://github.com/your-username/plug-connect-solutions.git
cd plug-connect-solutions
```

### 3. Environment Configuration
To keep your API endpoints secure, do not hardcode the Google Apps Script URL. Create a `.env` file in the root:
```env
VITE_CONTACT_FORM_URL=your_google_script_url_here
```

## 🔒 Security & Privacy

- **API Keys**: This project uses environment variables for sensitive endpoints.
- **Data Privacy**: The consultation form is configured with `no-cors` mode to transmit data securely to a private Google Sheet.
- **Public Disclosure**: This repository contains no private keys or credentials.

## 📄 License

Copyright © 2026 Plug Connect Solutions. All rights reserved.

---
*Built with ❤️ in South Africa by Plug Connect Solutions.*

