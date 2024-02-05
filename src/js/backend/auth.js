import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./setup";
// import any set up and relevant methods from BaaS provider

/**
 * Sends a request to register a user with the provided email and password.
 * @param {string} email - The email of the user to register.
 * @param {string} password - The password of the user to register.
 * @returns {Promise<{user: Object} | {error: Error}>} - A promise that resolves to an object containing the registered user or an error.
 * @async
 */
export async function register(email, password) {
  try {
    // the method used here will depend on the BaaS provider

    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("user", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    const response = await methodFromVendor(email, password);
    // assumes there is a user property on the response object
    const { user } = response;
    return { user };
  } catch (error) {
    // return the error so it can be handled in the calling function
    return { error };
  }
}
