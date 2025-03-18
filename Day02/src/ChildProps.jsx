import "./styles.css"

function Card({ title, children }) {
    return (
        <div className="card">
            <h1>{title}</h1>
            <div className="card-content">{children}</div>
        </div>
    );
}

//Card 자식요소를 포함하는 컴포넌트를 정의해 보자.	

export default function ChildProps() {
  return (
    <div>
      <Card title="Photo">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </Card>
      <Card title="about">
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}