import { useEffect, useState } from "react"
import AlunoForm from "../components/alunoForm"
import AlunoLista from "../components/alunoLista"

function CadastrarAluno() {

    const [novoAluno, setNovoAluno] = useState({ nome: '', curso: '' })
    const [mensagem, setMensagem] = useState('')
    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/alunos")
            .then((resp) => resp.json())
            .then((data) => {
                setAlunos(data)
            })
            .catch((error) => {
                console.error(error)
            });
    },[]);

    function adicionarAluno(nome, curso){
        const alunoData = { nome, curso }

        console.log("Chegando alunos: ", alunoData)

        fetch("http://localhost:5000/alunos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(alunoData)
        })
        .then(resp => resp.json())
        .then(data => {
            setAlunos(prev => [...prev, data])
            setMensagem('Aluno adicionado com sucesso!')
            setTimeout(() => {
                setMensagem('')
            }, 3000);
        })
        .catch(error => console.error(error))
    }

    function removerAluno(id){
        if (window.confirm('Tem certeza que deseja remover este aluno?')) {
            fetch(`http://localhost:5000/alunos/${id}`, {
                method: "DELETE"
            })
            .then(resp => {
                if (resp.ok) {
                    // Remove da lista local
                    setAlunos(prev => prev.filter(aluno => aluno.id !== id))
                    // setAlunoList(prev => prev.filter(aluno => aluno.id !== id))
                    setMensagem('Aluno removido com sucesso!')
                }
            })
            .catch(error => console.error("Erro ao remover:", error))
        }

        setTimeout(() => {
            setMensagem('')
        }, 3000);
    }

    return (<>
        <div className="row justify-content-center mt-2 mb-5">
            <div className="col-12 mb-2"><h4 className="fw-bold mx-2">Cadastrar Aluno</h4></div>
            <div className="col-12 col-sm-10 col-md-8">
                {mensagem && <p className="text-success fw-bold">{mensagem}</p>}

                <AlunoForm adicionarAluno={adicionarAluno} />
                <AlunoLista alunos={alunos} removerAluno={removerAluno} />
                

            </div>
        </div>
    </>)
}

export default CadastrarAluno