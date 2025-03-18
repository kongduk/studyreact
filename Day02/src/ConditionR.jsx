import { useState } from 'react';
import "./ConditionR.css"

const ConditionR = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>환영합니다!~~~
          <button className='logout' onClick={() => setIsLoggedIn(false)}>로그아웃</button>
          </h1>
        </div>
      ) : (
        <div>
          <button className='login' onClick={() => setIsLoggedIn(true)}>로그인</button>
        </div>
      )}
      <hr />
      <div>
        <h2>모두 함께 리액트 공부</h2>
      </div>
    </div>
  );
};

export default ConditionR;
