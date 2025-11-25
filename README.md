# Square Acres Infra Private Limited - Corporate Website

A modern, responsive, and feature-rich corporate website built for **Square Acres Infra Private Limited**, a premier real estate company. This application showcases real estate projects, services, company history, and provides utility tools like an EMI Calculator.

Built with **React**, **Tailwind CSS**, and **React Router**.

## 🚀 Features

### 🏠 Core Pages
- **Home Page**: Features an animated Hero Slider, "Why Choose Us" section with 3D hover effects, and a smooth testimonial carousel.
- **About Us**: Comprehensive sub-pages including Company History, Words of Visionary, Core Management, Awards, Quality Assurance, and Other Ventures.
- **Services**: Detailed listing of services (Residential, Commercial, Property Management, etc.) with modern card layouts.
- **Contact**: Interactive contact form with real-time validation and embedded Google Map.

### 🏗️ Projects & Portfolio
- **Project Listing**: Filterable portfolio showcasing Upcoming, Ongoing, and Completed projects.
- **Project Maps**: dedicated page with hash-link navigation to view specific project locations on Google Maps.

### 📸 Media & Gallery
- **Photo Gallery**: Masonry-style grid with category filtering, pagination, and a full-screen Lightbox viewer.
- **Media Gallery**: Press releases and news coverage section.
- **Video Gallery**: Collection of project walkthroughs and event videos.

### 🛠️ Utilities
- **EMI Calculator**: Advanced financial tool with sliders, amortization schedule generation, and interactive Donut Chart visualization.
- **Webmail Portal**: Secure gateway page for employee email access.

### 🎨 UI/UX Design
- **Responsive Design**: Fully mobile-responsive with a custom animated sidebar drawer.
- **Sticky Navbar**: Intelligent navigation bar that changes style (Transparent to White) on scroll.
- **Animations**: Smooth fade-ins, slide-ups, zoom effects, and glassmorphism elements throughout the site.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) (v19.2.0)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Google Fonts (Poppins)](https://fonts.google.com/specimen/Poppins)

## 📂 Project Structure

```
/
├── index.html              # Entry HTML file
├── index.tsx               # React Entry point
├── App.tsx                 # Main Router configuration
├── metadata.json           # App metadata
├── components/             # Reusable UI Components
│   ├── Navbar.tsx          # Responsive Sticky Header
│   ├── Footer.tsx          # Multi-column Footer
│   ├── HeroSlider.tsx      # Homepage Slider
│   ├── PageHeader.tsx      # Reusable Page Banner
│   └── Layout.tsx          # Main Layout Wrapper
└── pages/                  # Page Views
    ├── Home.tsx            # Landing Page
    ├── About.tsx           # About Us
    ├── Services.tsx        # Services Listing
    ├── Projects.tsx        # Project Portfolio with Filters
    ├── Gallery.tsx         # Photo Gallery with Lightbox
    ├── Contact.tsx         # Contact Form
    ├── EMICalculator.tsx   # Financial Tool
    └── ... (Sub-pages for About, Media, etc.)
```

## 🚀 How to Run

1.  **Clone the repository** (if applicable).
2.  **Install Dependencies**:
    This project uses standard React dependencies. If you are running this locally with Node.js:
    ```bash
    npm install
    ```
    *Dependencies include: `react`, `react-dom`, `react-router-dom`, `lucide-react`.*

3.  **Start the Development Server**:
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📝 Customization

-   **Tailwind Config**: Colors and fonts are customized in the `tailwind.config` script inside `index.html`.
-   **Images**: Most images are currently sourced from Unsplash or placeholders. Replace `src` attributes in components with your actual assets.
-   **Routing**: New pages can be added by creating a component in `pages/` and adding a `<Route>` in `App.tsx`.

## 📄 License

© 2025 Square Acres Infra Private Limited. All Rights Reserved.
Developed By: Adhiraj Infotech