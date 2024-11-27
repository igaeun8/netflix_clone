/* src/pages/AuthPage.jsx */

import React, { useState } from "react";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";

function AuthPage({ setApiKey }) {
  const [isSignup, setIsSignup] = useState(false);

  const toggleModal = () => setIsSignup((prev) => !prev);

  return (
    <div className="auth-page">
      {isSignup ? (
        <SignupModal toggleModal={toggleModal} />
      ) : (
        <LoginModal toggleModal={toggleModal} setApiKey={setApiKey} />
      )}
    </div>
  );
}

export default AuthPage;
