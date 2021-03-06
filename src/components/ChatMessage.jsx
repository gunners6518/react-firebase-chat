import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;
  const auth = firebase.auth();

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
};
