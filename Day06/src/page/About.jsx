import React from "react";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>소개 페이지 입니다.</h1>
      <button onClick={() => navigate("/home")}> 홈으로 </button>{" "}
      <button onClick={() => navigate(-1)}> 뒤로가기 </button>{" "}
    </div>
  );
}

export default About;
