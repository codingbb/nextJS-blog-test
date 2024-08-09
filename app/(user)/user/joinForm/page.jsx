"use client";
import { useCallback, useEffect, useState } from "react";
import { debounce, set } from "lodash";

export default function JoinForm() {
  const [pisSame, setIsSame] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(true);
  const [passConfirm, setPassConfirm] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value, type, id, files } = e.target;
    if (id === "password") {
      setPassword(value);
    } else if (id === "confirm-password") {
      setPassConfirm(value);
    }

    // console.log("imagePath", imagePath);
  };

  const checkPassword = useCallback(
    // 실시간 데이터 처리
    debounce((password) => {
      if (password !== passConfirm) {
        setPasswordCheck(false);
      } else {
        setPasswordCheck(true);
      }
    }, 1000),
    [password, passConfirm]
  );

  useEffect(() => {
    checkPassword(password);
  }, [password, passConfirm]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">JSTORY</h2>
        <p className="text-center text-gray-500 mb-8">
          마음을 담아 만드는 JStory
        </p>

        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              유저네임
            </label>
            <input
              type="text"
              id="username"
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
              value={password}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-gray-700">
              비밀번호 확인
            </label>
            <input
              type="password"
              id="confirm-password"
              value={passConfirm}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={handleChange}
            />
            {!passwordCheck && ( // 뒤에 조건 추가 필요 없음. 인라인 조건부 명령 문법 (바닐라js 표준)
              <span className="text-red-500 mb-2">
                비밀번호가 일치하지 않습니다.
              </span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              이메일
            </label>
            <div className="flex">
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-l mt-1"
              />
              <button className="bg-green-500 text-white px-4 rounded-r mt-1">
                인증하기
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-400 text-white p-2 rounded mt-4"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
