/*InputTest1.jsx */
import { useState } from "react";
export default function InputTest1(){
    const user1 = {
        id : 0,
        name : '',
        email : '' ,
    }
   //2. useState이용하여 객체 반영하기
  const[user,setUser] = useState(user1); 
    return (
      <div>
        <form>
          <h1> 로그인</h1>

          <li>
            이름
            <input
              type="text"
              name="name"
              onChange={
                (e) => setUser({ ...user, [e.target.name]: e.target.value })
                // setUser({ ...user, name : e.target.value })
              }
            />
          </li>
          <li>
            이메일
            <input
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </li>
          {console.log(user)}
          <li>
            <button type="submit" action="">
              확인
            </button>
            <button
              type="button"
              onClick={() =>
                setUser({
                  ...user,
                  id: 0,
                  name: "",
                  email: "",
                })
              }
            >
              취소
            </button>
          </li>
        </form>
        {user.name && (
          <div id="modal">
            입력된 이름은 <span>{user.name}</span>이고 입력된 이메일은{" "}
            <span>{user.email}</span>입니다.
          </div>
        )}
      </div>
    );

}