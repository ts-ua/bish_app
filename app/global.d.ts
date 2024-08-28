export { };

declare global {
    interface Window {
        recaptchaVerifier: any; // Replace 'any' with the correct type if possible
    }
}