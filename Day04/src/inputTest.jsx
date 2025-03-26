import "./inputTest.css";
import React, { useState } from "react";

export default function InputTest() {
    const [input, setInput] = useState("");

    return (
        <div className="wrapper">
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <button>입력</button>
            <button onClick={() => setInput("")}>초기화</button>
            <div id="modal">입력한 값은 <span>{input}</span>입니다.</div>
        </div>
    );
}
