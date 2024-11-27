// src/utils/Authentication.js
const users = JSON.parse(localStorage.getItem('users')) || [];

// 로그인 함수
export const tryLogin = (email, password, success, fail) => {
  const user = users.find((user) => user.id === email && user.password === password);
  if (user) {
    localStorage.setItem('TMDb-Key', user.password); // API 키를 로컬 스토리지에 저장
    success(user);
  } else {
    fail("사용자 정보가 일치하지 않습니다.");
  }
};

// 회원가입 함수
export const tryRegister = (email, password, success, fail) => {
  const userExists = users.some((user) => user.id === email);
  if (!userExists) {
    users.push({ id: email, password: password });
    localStorage.setItem('users', JSON.stringify(users));
    success("회원가입이 성공적으로 완료되었습니다.");
  } else {
    fail("이미 등록된 이메일입니다.");
  }
};
