// src/context/AuthContext.js

import React, { createContext, useState, useContext } from 'react';

// Context 생성
const AuthContext = createContext(null);

// AuthProvider: 인증 상태와 로그인/로그아웃 기능을 제공하는 컴포넌트
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 현재 로그인된 사용자 정보 상태
  const [isAuthenticated, setIsAuthenticated] = useState(false); // 인증 여부 상태

  // 로그인 함수
  const login = async (email, password) => {
    setUser({ email, password }); // 예시로 단순히 사용자 객체 설정
    setIsAuthenticated(true); // 인증 상태 true로 설정
  };

  // 로그아웃 함수
  const logout = () => {
    setUser(null); // 사용자 정보 초기화
    setIsAuthenticated(false); // 인증 상태 false로 설정
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// useAuth: AuthContext에서 제공하는 값들을 쉽게 접근할 수 있도록 하는 커스텀 훅
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
