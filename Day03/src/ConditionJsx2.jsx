const items = [
    { id: 1, name: "Space suit", isPacked: true },
    { id: 2, name: "Helmet with a golden leaf", isPacked: true },
    { id: 3, name: "Photo of Tam", isPacked: false },
  ];
  
  function Item({ name, isPacked }) {
    return (
      <li>
        {name}
        {isPacked ? '✅' : '❌'}
      </li>
    );
  }
  
  export default function PackingList2() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          {items.map((item, _) => (
            <Item 
              key={item.id} 
              isPacked={item.isPacked} 
              name={item.name} 
            />
          ))}
        </ul>
      </section>
    );
  }
  