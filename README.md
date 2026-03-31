Clinic Management System (MERN)

A modern full-stack Clinic Management portal

Tech Stack
- Frontend: React.js, Tailwind CSS, Axios, React Router
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)
- Security: JSON Web Tokens (JWT), Bcrypt.js

PROJECT STRUCTURE

├── backend/           # Node/Express API
│   ├── models/        # Mongoose Schemas (User, Patient)
│   ├── routes/        # API Endpoints (Auth, patients)
│   ├── middleware/    # Auth Security
│   └── index.js      # Entry Point
└── frontend/          # React Application (Vite/CRA)
    ├── src/
    │   ├── components/ # Login, Register, Dashboard
    │   └── App.js      # Routing
