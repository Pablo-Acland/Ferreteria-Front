// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV_6766fXTG_3Pmb2zjYgT3is3jbyYZ2s",
  authDomain: "ferreteria-front-dde4e.firebaseapp.com",
  projectId: "ferreteria-front-dde4e",
  storageBucket: "ferreteria-front-dde4e.appspot.com",
  messagingSenderId: "1078365375583",
  appId: "1:1078365375583:web:f4d35b170d7f7a5965dfea"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;