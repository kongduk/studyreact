import { useRef, useState } from "react";
import "./UserAdd.css";

const User = ({ user, onRemove, onToggle, onModify }) => {
  return (
    <>
      <td>{user.id}</td>
      <td>
        <b 
          style={{ cursor: "pointer", color: user.selected ? 'green' : 'black' }} 
          onClick={() => onToggle(user.id)}
        >
          {user.name}
        </b>
      </td>
      <td>{user.email}</td>
      <td>
        <button onClick={() => onRemove(user.id)}>삭제</button>
        &nbsp;&nbsp;
        <button onClick={() => onModify(user.id)}>수정</button> 
      </td>
    </>
  );
};

const UserInput = ({ name, email, onChange, onCreate }) => {
  return (
    <div>
      <input
        name="name"
        onChange={onChange}
        value={name}
        placeholder="이름을 입력"
      />
      <input
        name="email"
        onChange={onChange}
        value={email}
        placeholder="이메일을 입력"
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

const UserList = ({ users, onRemove, onToggle, onModify }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>연번</th>
          <th>이름</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <User user={user} onRemove={onRemove} onToggle={onToggle} onModify={onModify} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function UserAdd() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "강민지",
      email: "strongminji@gmail.com",
      selected: false,
    },
    {
      id: 2,
      name: "정소울",
      email: "soulright@bssm.hs.kr",
      selected: false,
    },
    {
      id: 3,
      name: "이승현",
      email: "victorynow@example.com",
      selected: false,
    },
  ]);

  const { name, email } = inputs;
  const nextId = useRef(4);
  const [editingId, setEditingId] = useState(null); // 수정 중인 사용자 ID 저장

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    if (editingId !== null) {
      // 수정 중이라면 저장
      setUsers(prevUsers =>
        prevUsers.map(user =>
          user.id === editingId ? { ...user, name, email } : user
        )
      );
      setEditingId(null); // 수정 모드 종료
    } else {
      // 새 사용자 추가
      nextId.current += 1;
      const newUser = {
        id: nextId.current,
        name,
        email,
        selected: false,
      };
      setUsers([...users, newUser]);
    }
    setInputs({ name: "", email: "" });
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === id ? { ...user, selected: !user.selected } : user
      )
    );
  };

  const onModify = (id) => {
    if (editingId === id) {
      setUsers(prevUsers =>
        prevUsers.map(user =>
          user.id === id ? { ...user, name, email } : user
        )
      );
      setEditingId(null);
      setInputs({ name: "", email: "" });
    } else {
      const selectedUser = users.find(user => user.id === id);
      if (!selectedUser) return;

      setInputs({
        name: selectedUser.name,
        email: selectedUser.email,
      });
      setEditingId(id);
    }
  };

  return (
    <div>
      <UserInput name={name} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} onModify={onModify} />
    </div>
  );
}
