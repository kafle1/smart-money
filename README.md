# Smart Money

Early-stage personal finance web app exploring financial literacy tooling with Firebase Google sign-in.

## Status

This project is in early development. The app's entry point (`src/App.jsx`) is currently still the default Vite + React starter. A landing page, login, and dashboard flow (`src/pages/`) built around Firebase Google Sign-In (`src/firebase-config.js`) exist in the source but are not yet wired into the running app - `firebase` and `react-router-dom` are used by these pages but are not yet listed in `package.json`.

## Explored Features

- Google Sign-In via Firebase Authentication
- Landing page pitching personal finance management, spending analysis, and monthly reports
- Dashboard page with a logout flow

## Tech Stack

- React 18, Vite
- Firebase (Authentication, Firestore) - integration in progress
- Tailwind CSS (configured via `tailwind.config.js`, not yet wired into the build)

## Getting Started

```sh
npm install
npm run dev
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
