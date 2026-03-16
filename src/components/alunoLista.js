

function AlunoLista({ alunos, removerAluno }) {
    return (
        <ol className="list-group mt-2">
            {alunos.length == 0 ? <li className="list-group-item">Nenhum aluno cadastrado</li> : alunos.map(aluno => {
                return (
                    <li className="list-group-item d-flex justify-content-between" key={aluno.id}>
                        <span className="align-self-center">{aluno.nome}</span>
                        <button onClick={() => removerAluno(aluno.id)} className="btn btn-danger btn-sm">
                            <i className="bi bi-trash"></i>
                        </button>
                    </li>
                )
            })
            }
        </ol>
    )
}

export default AlunoLista