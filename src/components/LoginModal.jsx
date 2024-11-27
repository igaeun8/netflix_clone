/* src/components/LoginModal.jsx */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginModal.css";

function LoginModal({ toggleModal, setApiKey }) {
  const [userEmail, setUserEmail] = useState(""); // 이메일 상태 관리
  const [userPassword, setUserPassword] = useState(""); // 비밀번호 상태 관리
  const [loginError, setLoginError] = useState(""); // 오류 메시지 상태 관리
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // 로컬 스토리지에서 저장된 사용자 데이터 가져오기
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const matchingUser = savedUsers.find(
      (user) => user.email === userEmail
    );

    // 사용자 검증 로직
    if (!matchingUser || matchingUser.password !== userPassword) {
      setLoginError("입력하신 이메일 또는 비밀번호가 올바르지 않습니다.");
      return;
    }

    // API 키 설정 및 메인 페이지로 이동
    setApiKey(userPassword); // 비밀번호를 API 키로 간주
    navigate("/"); // 메인 페이지로 이동
  };

  return (
    <div className="login_modal_container">
      <div className="login_modal">
        <h2>로그인</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
          <button type="submit">로그인</button>
          {loginError && <p className="loginErrorMessage">{loginError}</p>}
        </form>
        <p>
        처음 방문하셨나요? 계정을 생성해보세요.{" "}
          <button onClick={toggleModal}>회원가입</button>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
