const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const dbConnection = async () => {
  try {
    const app = initializeApp(firebaseConfig);

    console.log("Connection to Firebase was successful!");
    return app;
  } catch (error) {
    console.error("Failed to connect to Firebase: ", error);
    process.exit(1);
  }
};

module.exports = { dbConnection };
