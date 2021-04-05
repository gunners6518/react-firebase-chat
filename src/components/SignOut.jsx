import React from "react";

export const SignOut = (auth) => {
  console.log(auth.currentUser);
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
};
