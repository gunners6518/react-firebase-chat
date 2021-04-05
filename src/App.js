import React from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";

import { SignIn } from "./components/SignIn";
import { SignOut } from "./components/SignOut";
import { ChatRoom } from "./components/ChatRoom";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAqqlRO1sY3lheSxravwcS9uzdun9LSI8I",
    authDomain: "superchat-84bbf.firebaseapp.com",
    projectId: "superchat-84bbf",
    storageBucket: "superchat-84bbf.appspot.com",
    messagingSenderId: "46686844012",
    appId: "1:46686844012:web:3351cdc8218df175f8d449",
    measurementId: "G-623VGPMNJT",
  });
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
const analytics = firebase.analytics();

export const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
};
