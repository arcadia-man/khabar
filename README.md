# khabar

React news browsing app with Firebase authentication. Users can register, log in with email/password or Google, and browse news content.

## Tech Stack

React · Redux · Firebase Auth · CSS

## Features

- Email/password registration and login
- Google sign-in via Firebase popup
- Password reset by email
- News browsing UI with home and user home views
- Redux for auth state management

## Getting Started

### Prerequisites

Node.js 18+ · Firebase project with Authentication enabled

### Setup

```bash
git clone https://github.com/arcadia-man/khabar.git
cd khabar
cp .env.example .env   # fill in your Firebase config values
npm install
npm start
```

App runs on `http://localhost:3000`.

## Project Structure

```
khabar/
├── src/
│   ├── components/     # Navbar, Login, Register, Home, Footer
│   ├── pages/          # HomeUser
│   ├── redux/          # Auth actions, reducers, store
│   └── firebase.js     # Firebase initialisation (reads from .env)
└── public/
```

## Environment Variables

See `.env.example` for all required `REACT_APP_FIREBASE_*` variables.
Get these from Firebase Console → Project Settings → Your apps.
