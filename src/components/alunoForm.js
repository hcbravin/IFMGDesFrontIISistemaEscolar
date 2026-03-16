import { useState } from "react"

function AlunoForm({ adicionarAluno, removerAluno }) {

    const [nome, setNome] = useState('')
    const [curso, setCurso] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        if(!nome.trim()) return;
        if(!curso.trim()) return;
        adicionarAluno(nome, curso)
        setNome('')
        setCurso('')
    }

    return (
        <form>
            <div className="row">
                <div className="col-12 col-sm-4 col-md-5">
                    <input 
                        type="text"
                        placeholder="Nome do Aluno"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="col-12 col-sm-4 col-md-5">
                    <input 
                        type="text"
                        placeholder="Curso"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="col-12 col-sm-4 col-md-2 text-end">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="btn btn-primary"
                    >
                        <i className="bi bi-person-fill-add me-1"></i> Adicionar
                    </button>
                </div>
            </div>
        </form>
    )

}

export default AlunoForm