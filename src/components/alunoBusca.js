import { useState } from "react"

function AlunoBusca({ BuscaAluno, LimparBusca }) {

    const [nome, setNome] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        if(!nome.trim()) return;
        BuscaAluno(nome)
        setNome('')
    }

    return (
        <form className="mb-2 mx-1 mx-sm-0">
            <div className="row">
                <div className="col-7 col-sm-8 col-md-9">
                    <div className="input-group">
                        <input 
                            type="text"
                            placeholder="Nome do Aluno"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="form-control"
                        />
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="btn btn-primary"
                        >
                            <i className="bi bi-search me-1"></i> Buscar
                        </button>
                    </div>
                </div>
            
                <div className="col-5 col-sm-4 col-md-3 text-end">
                    <button
                        type="button"
                        onClick={LimparBusca}
                        className="btn btn-warning"
                    >
                        Limpar Busca
                    </button>
                </div>
            </div>
        </form>
    )

};

export default AlunoBusca