/* src/components/ModalManager.jsx */

import React, { useState } from "react";
import ReactDOM from "react-dom"; // React Portal 사용
import LoginModal from "./LoginModal"; // 로그인 모달
import SignupModal from "./SignupModal"; // 회원가입 모달

function ModalManager({ setApiKey }) {
  const [isSignup, setIsSignup] = useState(false);

  const activateSignup = () => setIsSignup(true); // 회원가입 화면으로 전환
  const activateLogin = () => setIsSignup(false); // 로그인 화면으로 전환

  return ReactDOM.createPortal(
    <div className="modal-background">
      <div className="modal-content">
        {isSignup ? (
          <SignupModal setApiKey={setApiKey} activateLogin={activateLogin} />
        ) : (
          <LoginModal setApiKey={setApiKey} activateSignup={activateSignup} />
        )}
      </div>
    </div>,
    document.getElementById("modal-root") // portal로 렌더링될 div
  );
}

export default ModalManager;
