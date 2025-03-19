function Item({ name, isPacked }) {
  return (
    <li>
        {name}
        {isPacked ? "✅" : null}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Rids's Packing List</h1>
      <ul>
        <Item isPacked={true} name="space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
