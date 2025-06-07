
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Import your Firebase configuration
// Copy src/firebase/env.example.ts to src/firebase/env.ts and add your config
let firebaseConfig;

try {
  // Try to import the actual config file
  firebaseConfig = require('./env').firebaseConfig;
} catch (error) {
  // Fall back to example config if env.ts doesn't exist
  console.warn('Firebase env.ts not found. Using example config. Please copy env.example.ts to env.ts and update with your Firebase credentials.');
  firebaseConfig = {
    apiKey: "your-api-key-here",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
  };
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Auth
export const auth = getAuth(app);

export default app;
