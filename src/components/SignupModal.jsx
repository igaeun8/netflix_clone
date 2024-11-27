/* src/components/SignupModal.jsx */

import React, { useState } from "react";
import "../styles/SignupModal.css";

function SignupModal({ toggleModal }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmUserPassword, setConfirmUserPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // 비밀번호 확인
    if (userPassword !== confirmUserPassword) {
      setError("입력한 비밀번호가 서로 일치하지 않습니다.");
      return;
    }

    // 로컬 스토리지에서 사용자 정보 가져오기
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // 이메일 중복 확인
    const emailExists = existingUsers.some((user) => user.email === userEmail);
    if (emailExists) {
      setError("이미 사용 중인 이메일 주소입니다.");
      return;
    }

    // 신규 사용자 추가
    const updatedUsers = [...existingUsers, { email: userEmail, password: userPassword }];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("회원가입이 완료되었습니다! 이제 로그인하세요.");
    toggleModal(); // 로그인 모달로 전환
  };

  return (
    <div className="signup_container">
      <div className="signup_modal">
        <h2>회원가입</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="이메일 주소"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={confirmUserPassword}
            onChange={(e) => setConfirmUserPassword(e.target.value)}
            required
          />
          <button type="submit">가입하기</button>
          {error && <p className="error_message">{error}</p>}
        </form>
        <p>
          이미 계정이 있으신가요? <button onClick={toggleModal}>로그인하기</button>
        </p>
      </div>
    </div>
  );
}

export default SignupModal;
