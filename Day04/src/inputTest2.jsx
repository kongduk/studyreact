import { useState } from "react";

export default function InputTest1() {
  const [inputs, setInputs] = useState({
    id: 0,
    name: "",
    email: "",
    nickname: "",
  });

  const user = () => {
    setInputs({
      id: 0,
      name: "",
      email: "",
      nickname: "",
    });
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };


  return (
    <div>
      <form>
        <h1>로그인</h1>

        <li>
          이름
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </li>
        <li>
          이메일
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </li>
        <li>
          닉네임
          <input
            type="text"
            name="nickname"
            value={inputs.nickname}
            onChange={handleChange}
          />
        </li>
        <li>
          <button type="submit">확인</button>
          <button type="button" onClick={user}>
            초기화
          </button>
        </li>
      </form>
      {inputs.name && (
        <div id="modal">
          입력된 이름은  <span>{inputs.name}</span>이고 입력된 이메일은{" "}
          <span>{inputs.email}</span>입니다.
          닉네임은 <span>{inputs.nickname}</span>입니다.
        </div>
      )}
    </div>
  );
}
