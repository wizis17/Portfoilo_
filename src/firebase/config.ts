
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Import your Firebase configuration
let firebaseConfig;

try {
  console.log("=== FIREBASE CONFIG LOADING ===");
  // Try to import the actual config file
  firebaseConfig = require('./env').firebaseConfig;
  console.log("Successfully loaded Firebase config from env.ts");
  console.log("Project ID:", firebaseConfig.projectId);
  console.log("Auth Domain:", firebaseConfig.authDomain);
  
  // Check if config looks valid
  if (!firebaseConfig.projectId || firebaseConfig.projectId === "your-project-id") {
    console.warn("⚠️ Firebase config appears to use placeholder values!");
  }
  
} catch (error) {
  console.error("❌ Failed to load Firebase config from env.ts:", error);
  console.warn('Using example config. Please copy env.example.ts to env.ts and update with your Firebase credentials.');
  firebaseConfig = {
    apiKey: "your-api-key-here",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
  };
}

console.log("=== INITIALIZING FIREBASE ===");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("✅ Firebase app initialized");

// Initialize Firestore
export const db = getFirestore(app);
console.log("✅ Firestore initialized");

// Initialize Firebase Auth
export const auth = getAuth(app);
console.log("✅ Firebase Auth initialized");

console.log("=== FIREBASE SETUP COMPLETE ===");

export default app;
