"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../styles/navigation.module.css";
import { usePathname } from "next/navigation";
import { useAuth } from "../app/util/AuthContext";

export default function Navigation() {
  const path = usePathname();
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={path === "/" ? styles.active : ""}>
          <Link href="/">
            내블로그
            <span className={styles.linkCheck}></span>
          </Link>
        </li>
        <li className={path === "/post" ? styles.active : ""}>
          <Link href="/post">
            글쓰기
            <span className={styles.linkCheck}></span>
          </Link>
        </li>
        <li className={path === "/user/joinForm" ? styles.active : ""}>
          <Link href="/user/joinForm">회원가입</Link>
        </li>
        <li className={path === "/user/loginForm" ? styles.active : ""}>
          {isLoggedIn ? (
            <button onClick={logout}>로그아웃</button>
          ) : (
            <Link href="/user/loginForm">로그인</Link>
          )}
        </li>
        <li className={path === "/sub" ? styles.active : ""}>
          <Link href="/sub">내구독리스트</Link>
        </li>
        <li className={path === "/user/updateForm" ? styles.active : ""}>
          <Link href="/user/updateForm">계정관리</Link>
        </li>
        <li className={path === "/category" ? styles.active : ""}>
          <Link href="/category">카테고리관리</Link>
        </li>
        {/* <li>로그아웃</li> */}
      </ul>
    </nav>
  );
}

// <li>로그인</li>
//         <li>회원가입</li>
