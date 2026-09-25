import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

// Firebase web config values are public by design (they identify the project,
// they don't grant access). Security is enforced by Firebase Security Rules.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
  authDomain: "qula-c2913.firebaseapp.com",
  projectId: "qula-c2913",
  storageBucket: "qula-c2913.firebasestorage.app",
  messagingSenderId: "798919675684",
  appId: "1:798919675684:web:e32b22d336b512956fadb1",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID as string,
};

let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;

export function getFirebaseApp(): FirebaseApp {
  if (!app) {
    app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  }
  return app;
}

export async function initAnalytics(): Promise<Analytics | null> {
  if (analytics || typeof window === "undefined") return analytics;
  if (!(await isSupported())) return null;
  analytics = getAnalytics(getFirebaseApp());
  return analytics;
}
