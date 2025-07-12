# 👩‍🏫 School Management – Teacher Interface

A modern, accessible, and responsive interface for managing teacher records. Built with **Next.js 15 App Router**, **TypeScript**, **Tailwind CSS**, and **Zustand**, this project focuses on clean UI, accessible form handling, and scalable architecture — ideal for school, coaching, or admin dashboard applications.

> 📍 GitHub: [https://github.com/NitanshaSharma/school-management](https://github.com/NitanshaSharma/school-management)

---

## 🚀 Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Zustand** – global state management
- **React Hook Form** + **Yup** – for form validation
- **React Hot Toast** – elegant toast notifications

---

## ✨ Features

- 🧾 Add new teacher records
- 🔐 Form validation with helpful error messages
- 🔄 Global state management using Zustand
- ✅ Accessible, keyboard-navigable form with ARIA support
- 📱 Fully responsive UI (mobile-first design)
- 🔔 Toast notifications on actions
- 🧱 Reusable UI components (inputs, buttons, loaders)

---

## 📦 Installation & Setup

### 1. Clone the repository

##
            git clone https://github.com/NitanshaSharma/school-management.git
            cd school-management
####       
2. Install dependencies
            bash
            Copy
            Edit
            npm install
            # or
            yarn
            3. Run the development server
            bash
            Copy
            Edit
            npm run dev
            # or
            yarn dev
            Then open http://localhost:3000 in your browser.

#####
Project Structure
            bash
            Copy
            Edit
            src/
            ├── app/                        # Next.js App Router structure
            │   └── teachers/              # Main route for teacher-related pages
            ├── components/
            │   ├── common/                # Reusable UI elements (buttons, inputs, loaders)
            │   └── teachers/              # Add form, teacher list, detail view (future)
            ├── store/                     # Zustand store for teacher data
            ├── types/                     # Shared TypeScript types
            ├── styles/                    # Global styles if any
            ♿ Accessibility Highlights
            🔗 Inputs linked with labels using htmlFor and id

            Error messages announced via role="alert"

            Inputs use aria-describedby for screen reader context

            Auto-focuses first invalid field on form error

            Fully keyboard navigable

            Planned Enhancements
            Edit and delete teacher records

            View individual teacher profile

            Search, sort, and filter

            Pagination for large lists

            Integration with backend or API

            Local storage or DB persistence


####
License
            This project is licensed under the MIT License.

###
Author
            Built  by Nitansha Sharma

            Contributing
            Contributions, suggestions, and PRs are welcome!
            Feel free to open issues or submit improvements.
###
Feedback
            If you find a bug or have a feature request, create an issue or reach out via GitHub discussions.