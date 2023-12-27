import "./App.css";
import { useState } from "react";

function Comp({ nom, dateNaissance, ville, loisirs }) {
  return (
    <>
      
      <p>
        Je suis {nom} né le {dateNaissance} à {ville} et mes loisirs{" "}
        {loisirs.join(", ")}
      </p>
    </>
  );
}

function App() {
  const [dataList, setDataList] = useState([]);
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [ville, setVille] = useState("");
  const [genre, setGenre] = useState("");
  const [loisirs, setLoisirs] = useState([]);

  function handleLoisirs(e) {
    const value = e.target.value;
    setLoisirs((prevLoisirs) =>
      prevLoisirs.includes(value)
        ? prevLoisirs.filter((item) => item !== value)
        : [...prevLoisirs, value]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDataList([
      ...dataList,
      {
        nom: nom,
        password: password,
        dateNaissance: dateNaissance,
        ville: ville,
        genre: genre,
        loisirs: loisirs,
      },
    ]);

    setNom("");
    setPassword("");
    setDateNaissance("");
    setVille("");
    setGenre("");
    setLoisirs([]);
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <h2 className="title">Inscription</h2>
        <div className="container">
          <label>identifiant</label>
          <input
            type="text"
            name="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="container">
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="container">
          <label>Date de naissance</label>
          <input
            type="date"
            name="dateNaissance"
            value={dateNaissance}
            onChange={(e) => setDateNaissance(e.target.value)}
          />
        </div>
        <div className="container">
          <label>Ville</label>
          <select
            name="ville"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
          >
            <option>Choisir une ville</option>
            <option value="casablanca">casablanca</option>
            <option value="rabat">rabat</option>
          </select>
        </div>
        <div className="container">
          <label>Genre</label>
          <input
            type="radio"
            name="genre"
            value="Homme"
            checked={genre === "Homme"}
            onChange={(e) => setGenre(e.target.value)}
          />
          Homme
          <input
            type="radio"
            name="genre"
            value="Femme"
            checked={genre === "Femme"}
            onChange={(e) => setGenre(e.target.value)}
          />
          Femme
        </div>
        <div className="container">
          <label>Loisirs</label>
          <input
            type="checkbox"
            name="loisirs"
            value="Sport"
            checked={loisirs.includes("Sport")}
            onChange={(e) => handleLoisirs(e)}
          />
          Sport
          <input
            type="checkbox"
            name="loisirs"
            value="Lecture"
            checked={loisirs.includes("Lecture")}
            onChange={(e) => handleLoisirs(e)}
          />
          Lecture
          <input
            type="checkbox"
            name="loisirs"
            value="Musique"
            checked={loisirs.includes("Musique")}
            onChange={(e) => handleLoisirs(e)}
          />
          Musique
        </div>
        <div className="container">
          <input type="submit" value="S'inscrire" />
        </div>
      </form>
      {dataList.map((data, index) => (
        <Comp
          key={index}
          nom={data.nom}
          dateNaissance={data.dateNaissance}
          ville={data.ville}
          loisirs={data.loisirs}
        />
      ))}
    </>
  );
}
export default App;

