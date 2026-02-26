import { useState, useEffect } from "react";
import "./App.css";
import TableStudents from "./components/TableStudents";
import imageSystem from "./assets/10048879.png"

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

  const [searchName, setSearchName] = useState("");

  const saveData = () => {
    const s1 = parseFloat(score1);
    const s2 = parseFloat(score2);
    const s3 = parseFloat(score3);

    if (s1 < 0 || s1 > 10 || s2 < 0 || s2 > 10 || s3 < 0 || s3 > 10) {
      alert(
        "Uma ou mais notas estão inválidas! Use apenas valores entre 0 e 10.",
      );
      return;
    }

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

  const deleteData = () => {
    const studentsQuantity = studentsList.length;
    if (studentsQuantity === 0) {
      alert("A lista já está vazia!");
      return;
    }

    const confirmation = window.confirm(
      `Você tem ${studentsQuantity} alunos cadastrados. Tem certeza que deseja apagar o histórico deles?`,
    );

    if (confirmation) {
      localStorage.removeItem("meus_alunos");
      setStudentsList([]);
      setName("");
      setStudentClass("");
      setScore1("");
      setScore2("");
      setScore3("");
      alert("Histórico de notas apagado com sucesso!");
    }
  };

  useEffect(() => {
    localStorage.setItem("meus_alunos", JSON.stringify(studentsList));
  }, [studentsList]);

  return (
    <div className="container-fluid mt-4">
      {/*<h1 className="text-center mb-5">Sistema de Notas</h1>*/}

      <div className="row justify-content-center mb-5 align-items-center">
        <div className="col-md-5">
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
              <label className="form-label">N1</label>
              <input
                type="number"
                className="form-control"
                value={score1}
                onChange={(e) => setScore1(e.target.value)}
              />
            </div>
            <div className="col">
              <label className="form-label">N2</label>
              <input
                type="number"
                className="form-control"
                value={score2}
                onChange={(e) => setScore2(e.target.value)}
              />
            </div>
            <div className="col">
              <label className="form-label">N3</label>
              <input
                type="number"
                className="form-control"
                value={score3}
                onChange={(e) => setScore3(e.target.value)}
              />
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={saveData}
          >
            Adicionar nota
          </button>
        </div>

        <div className="col-md-5 d-none d-md-block">
          <img
            src={imageSystem}
            alt="Educação"
            className=""
            style={{ maxHeight: "500px", width: "100%",}}
          />
        </div>
      </div>

      <hr style={{ width: '83%' }} className="mx-auto" />

      <div className="row justify-content-center mt-5">
        <div className="col-11 col-lg-10">
          <div className="row mb-3">
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar aluno... 🔍"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <button
                type="button"
                className="btn btn-outline-danger w-100"
                onClick={deleteData}
              >
                Limpar Banco
              </button>
            </div>
          </div>

          <TableStudents list={studentsList} />
        </div>
      </div>
    </div>
  );
}

export default App;
