"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); //라우터

  const loginForm = async (e) => {
    e.preventDefault();

    // axios는 헤더 설정 알아서 해줌! (수동 세팅도 가능)
    try {
      const response = await axios.post("/api/login", {
        username,
        password,
      });
    } catch {
      console.log("errrr");
    }

    // console.log("1111111111 " + response.data);

    // const res = await fetch("/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username, password }),
    // });

    // const result = await res.json();

    // if (result.success) {
    //   console.log("로그인 성공", result.user);
    //   // router.push("/"); //리다이렉션
    // } else {
    //   alert(result.message);
    // }
  };

  return (
    // <h1>ddd</h1>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">JSTORY</h2>
        <p className="text-center text-gray-500 mb-8">
          마음을 담아 만드는 JStory
        </p>

        <form onSubmit={loginForm}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              유저네임
            </label>
            <input
              type="text"
              id="username"
              value={username} // 현재 username 상태를 입력 필드에 표시
              onChange={(e) => setUsername(e.target.value)} // 입력 필드의 값이 변경될 때 상태 업데이트
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              value={password} // 현재 username 상태를 입력 필드에 표시
              onChange={(e) => setPassword(e.target.value)} // 입력 필드의 값이 변경될 때 상태 업데이트
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-400 text-white p-2 rounded mt-4"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
