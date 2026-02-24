function TableStudents({ list }) {
  return (
    <table className="table table-striped mt-5">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Classe</th>
          <th>Nota 1</th>
          <th>Nota 2</th>
          <th>Nota 3</th>
          <th>Média</th>
          <th>Situação</th>
        </tr>
      </thead>
      <tbody>
        {list.map((aluno, index) => {
          const finalGrade = (Number(aluno.score1) + Number(aluno.score2) + Number(aluno.score3)) / 3;
          const situation = finalGrade >= 7 ? "Aprovado ✅" : "Reprovado ❌";

          return (
            <tr key={index}>
              <td>{aluno.name}</td>
              <td>{aluno.studentClass}</td>
              <td>{aluno.score1}</td>
              <td>{aluno.score2}</td>
              <td>{aluno.score3}</td>
              <td>{finalGrade}</td>
              <td>{situation}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableStudents;
