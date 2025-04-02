export default function UserModify(){
    const [inputs, setInputs] = useState({
      name : '',
      email : '',
   });
   const [users, setUsers] = useState([ //1. selected항목 추가 토글 속성
    {
      id: 1,
      name: '강민지',
      email: 'strongminji@gmail.com',
      selected : false,
    },
    {
      id: 2,
      name: '정소울',
      email: 'soulright@bssm.hs.kr',
      selected:false,
    },
    {
      id: 3,
      name: '이승현',
      email: 'victorynow@example.com',
      selected : false,
    }
  ]);
  const onToggle = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, selected: !user.selected } : user
    ));
  };

  return (
    <div>
      <h1>사용자 목록</h1>
      <ul>
        {users.map(user => (
          <li 
            key={user.id} 
            onClick={() => onToggle(user.id)} 
            style={{ cursor: 'pointer', backgroundColor: user.selected ? '#d3d3d3' : 'transparent' }}
          >
            {user.name} - {user.email} {user.selected ? '(선택됨)' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}
