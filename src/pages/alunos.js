import { useEffect, useState } from "react"
import AlunoBusca from "../components/alunoBusca"

function Alunos({ darkMode, setDarkMode}) {

    const [alunos, setAlunos] = useState([])
    const [loading, setLoading] = useState(true)
    const [alunoList, setAlunoList] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/alunos")
                .then((resp) => resp.json())
                .then((data) => {
                    setAlunos(data)
                    setAlunoList(data)
                    setLoading(false)
                })
                .catch((error) => {
                    console.error(error)
                    setLoading(false)
                });
        }, 500)
    },[])

    function BuscaAluno(nome){        
        setAlunos(alunoList.filter(aluno => aluno.nome.toLowerCase().includes(nome.toLowerCase())))
    }

    function LimparBusca(){
        setAlunos(alunoList)
    }

    if(loading){
        return (
            <p className="alert alert-warning m-2">Carregando...</p>
        )
    }
    

    return (<>
        <div className="row justify-content-center mt-2 mb-5">
            <div className="col-12 mb-2"><h4 className="fw-bold mx-2">Alunos</h4></div>
            <div className="col-12 col-sm-10 col-md-8">

                <AlunoBusca BuscaAluno={BuscaAluno} LimparBusca={LimparBusca} />

                <div className="card mx-1 mx-sm-0">
                    <div className="card-body p-1">
                        <table className="table table-sm table-striped mb-0">
                            <thead>
                                <tr className="border-top">
                                    <th>ID</th>
                                    <th className="border-start ps-1">Nome</th>
                                    <th className="border-start ps-1">Curso</th>
                                </tr>
                            </thead>
                            {alunos.length === 0 ? (
                                <tr>
                                    <td className="text-center py-2" colSpan="3">
                                        Nenhum aluno cadastrado    
                                    </td>
                                </tr>
                                ) : (
                                <tbody>
                                    {alunos.map(aluno => {
                                        return (
                                            <tr key={aluno.id}>
                                                <td>{aluno.id}</td>
                                                <td className="border-start ps-1">{aluno.nome}</td>
                                                <td className="border-start ps-1">{aluno.curso}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Alunos