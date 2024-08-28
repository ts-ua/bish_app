// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_Px4VWAvUuvJbimGtUo-Ef3LWcrl4sJA",
    authDomain: "fir-db4bf.firebaseapp.com",
    databaseURL: "https://fir-db4bf-default-rtdb.firebaseio.com",
    projectId: "fir-db4bf",
    storageBucket: "fir-db4bf.appspot.com",
    messagingSenderId: "66101422520",
    appId: "1:66101422520:web:83fa5c116d052d0bad474d",
    measurementId: "G-9N1TWNZG9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Set appVerificationDisabledForTesting to true for testing purposes
(auth as any).appVerificationDisabledForTesting = true; // Cast `auth` to `any` to avoid TypeScript errors

const recaptchaVerifier = new RecaptchaVerifier(
    auth,
    "recaptcha-container", // This is the ID of the HTML element for the reCAPTCHA
    {
        size: "normal", // Can also be 'normal' for visible reCAPTCHA
        callback: (response: any) => {
            console.log("reCAPTCHA resolved:", response);
        },
        'expired-callback': () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
        }
    },
);


export function sendCode(phoneNumber: string) {

    if (!/^\+\d{10,15}$/.test(phoneNumber)) {
        console.error("Invalid phone number format. Must be in E.164 format.");
        return;
    }

    console.log(window.location.href)

    // signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
    //     .then((confirmationResult) => {
    //         // setVerificationId(confirmationResult.verificationId);
    //         // setIsCodeSent(true);
    //         console.log("Code sent");
    //     })
    //     .catch((error) => {
    //         console.error("Error during signInWithPhoneNumber:", error);
    //     });
};

export { auth }
