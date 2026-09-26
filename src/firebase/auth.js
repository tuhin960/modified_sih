import { auth, db } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

// SIGN UP: naya account banata hai aur Firestore mein user data save karta hai
export const signUpUser = async ({
  name,
  email,
  mobile,
  password,
  role,
  specialId,
}) => {
  // Step 1: Firebase Auth mein account banao
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  // Step 2: Firestore mein extra data (role, name, etc.) save karo
  await setDoc(doc(db, "users", user.uid), {
    name,
    email,
    mobile,
    role,
    specialId: specialId || "",
    createdAt: new Date().toISOString(),
  });

  return user;
};

// LOGIN: existing account se login karta hai
export const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

// Firestore se user ka profile data (role, name, etc.) laata hai
export const getUserProfile = async (uid) => {
  const docSnap = await getDoc(doc(db, "users", uid));
  if (docSnap.exists()) {
    return docSnap.data();
  }
  return null;
};

// LOGOUT
export const logoutUser = async () => {
  return await signOut(auth);
};

// FORGOT PASSWORD
export const resetPassword = async (email) => {
  return await sendPasswordResetEmail(auth, email);
};