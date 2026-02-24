import { useState, useEffect } from "react";
import "./App.css";
import TableStudents from "./components/TableStudents";

function App() {
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [score1, setScore1] = useState("");
  const [score2, setScore2] = useState("");
  const [score3, setScore3] = useState("");

  const [studentsList, setStudentsList] = useState(() => {
    const saved = localStorage.getItem("meus_alunos");
    return saved ? JSON.parse(saved) : [];
  });

  const saveData = () => {
    const newStudent = {
      name: name,
      studentClass: studentClass,
      score1: score1,
      score2: score2,
      score3: score3,
    };

    setStudentsList([...studentsList, newStudent]);

    setName("");
    setStudentClass("");
    setScore1("");
    setScore2("");
    setScore3("");
  };

  useEffect(() => {
    localStorage.setItem("meus_alunos", JSON.stringify(studentsList));
  }, [studentsList]);

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-11 col-md-10 col-lg-9">
          <h1 className="text-center mb-4">Sistema de Notas</h1>
          <div className="mb-3">
            <label className="form-label">Nome do aluno:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Classe:</label>
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
            <div className="col">
              <label className="form-label">Nota 3:</label>
              <input
                type="number"
                className="form-control"
                value={score3}
                onChange={(e) => setScore3(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={saveData}
            >
              Adicionar nota
            </button>
          </div>
          <TableStudents list={studentsList} />
        </div>
      </div>
    </div>
  );
}

export default App;
