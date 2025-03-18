import "./styles.css";

function getImageUrl(imageId, size = 's') {
    return (
      'https://i.imgur.com/' +
      imageId +
      size +
      '.jpg'
    );
  }

  function Profile({ name, imageId, imgsize = 70, profession, awards, discovery }) {
    return (
      <div>
        <section className="profile">
          <h2>{name}</h2>
          <img
            className="avatar"
            src={getImageUrl(imageId)}
            alt={name}
            width={imgsize}
            height={imgsize}
          />
          <ul>
            <li>
              <b>Profession: </b>
              {profession}
            </li>
            <li>
              <b>Awards: {awards.length} </b>({awards.join(",")})
            </li>
            <li>
              <b>Discovered: </b>
              {discovery}
            </li>
          </ul>
        </section>
      </div>
    );
  }
  
  export default function CompoExtract() {
    return (
      <div>
        <h1>Notable Scientists</h1>
        <Profile
          imageId="YfeOqp2"
          name="홍길동"
          profession="과학자"
          awards={["Leng", "Dkkl"]}
          discovery="Dksl"
        />
        <Profile
          imageId="szV5sdG"
          name="홍길동"
          profession="과학자"
          awards={["Leng", "Dkkl"]}
          discovery="Dksl"
        />
      </div>
    );
  }

  