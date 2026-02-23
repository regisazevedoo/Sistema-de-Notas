import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [score1, setScore1] = useState("");
  const [score2, setScore2] = useState("");

  const [studentsList, setStudentsList] = useState([]);

  const saveData = () => {
    const newStudent = {
      nome: name,
      classe: studentClass,
      nota1: score1,
      nota2: score2,
    };

    setStudentsList([...studentsList, newStudent]);

    setName("");
    setStudentClass("");
    setScore1("");
    setScore2("");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Sistema de Notas</h1>
      <div className="mb-3">
        <label className="form-label">Nome do aluno: {name}</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Classe: {studentClass}</label>
        <input
          type="text"
          className="form-control"
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
        />
      </div>
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Nota 1:</label>
          <input
            type="number"
            className="form-control"
            value={score1}
            onChange={(e) => setScore1(e.target.value)}
          />
        </div>
        <div className="col">
          <label className="form-label">Nota 2:</label>
          <input
            type="number"
            className="form-control"
            value={score2}
            onChange={(e) => setScore2(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3">
        <button type="button" className="btn btn-primary w-100" onClick={saveData}>
          Adicionar nota
        </button>
      </div>
    </div>
  );
}

export default App;
