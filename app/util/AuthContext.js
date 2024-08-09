"use client";
// util 폴더 (인증) - 로그인 로직에 대한 util
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
// 리액트 라이브러리 중 createContext // 전역 변수 사용을 위한 객체 생성
const AuthContext = createContext();

export function AuthProvider({ children }) {
  // 로그인 여부 isLogin
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const login = () => {
    // 로그인 로직
    setIsLoggedIn(true);
  };

  const logout = () => {
    // 로그아웃 로직
    setIsLoggedIn(false);
    alert("로그아웃 되었습니다.");
    router.push("/");
  };

  return (
    // 전역변수로 isLogin 됐냐 안됐냐, 함수까지 전역 함수로 사용할 수 있게 함
    // 그럼 이 login, logout 함수를 다른 컴포넌트에서 사용할 수 있음
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
