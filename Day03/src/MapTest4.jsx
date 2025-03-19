import { people } from "./MapTest3";
import "./MapTest3Style.css";

function getImageUrl(person) {
    return "https://i.imgur.com/" + person.imageId + "s.jpg"
  }
  
function Profile({ person }) {
  return (
    <li className="card">
      <img src={getImageUrl(person.imageId)} alt={person.name} />
      <div>
        <b>{person.name}:</b> {person.profession} known for {person.accomplishment}
      </div>
    </li>
  );
}

function ScientistList({ title, scientists }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {scientists.map((person) => (
          <Profile key={person.name} person={person} />
        ))}
      </ul>
    </section>
  );
}

export default function MapTest4() {
  const chemists = people.filter((person) => person.profession === "화학자");
  const others = people.filter((person) => person.profession !== "화학자");

  return (
    <div>
      <h1>Scientists</h1>
      <ScientistList title="화학자들" scientists={chemists} />
      <ScientistList title="기타" scientists={others} />
    </div>
  );
}
