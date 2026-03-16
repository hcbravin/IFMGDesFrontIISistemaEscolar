import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Home({ darkMode, setDarkMode }) {

    const [alunoPorSerie, setAlunoPorSerie] = useState({})
    const [alunosTotal, setAlunosTotal] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:5000/alunos")
        .then(resp => resp.json())
        .then(data => {
            // Cria um objeto com a contagem por curso
            const contagem = {}
            
            
            data.forEach(aluno => {
                if (!contagem[aluno.curso]) {
                    contagem[aluno.curso] = 0
                }
                contagem[aluno.curso]++
            })
            
            setAlunoPorSerie(contagem) // Atualiza o estado
            setAlunosTotal(data.length)
            setLoading(false)
        })
        .catch(error => {
            console.error(error)
            setLoading(false)
        })
    }, [])

    

    return (
        <div className="h-100 d-flex">
            <div className="container-fluid justify-content-center d-flex align-items-start">
                <div className="row w-100 align-items-center">
                    <div className="col-12 col-sm-4">
                        <h1>Home</h1>
                    </div>
                    <div className="col-12 col-sm-4 text-center">
                        Bem-Vindo ao React
                    </div>
                    <div className="col-12 col-sm-4 text-end">
                        <button onClick={() => setDarkMode(!darkMode)} className="btn btn-light">
                            <i className={!darkMode ? "bi bi-moon" : "bi bi-sun"}></i>
                        </button>
                    </div>

                    <div className="col-12 mt-4">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-4 col-md-3">
                                <div className="card">
                                    <div className={`card-header d-flex fw-bold py-0 ${darkMode ? 'text-bg-secondary' : 'text-bg-primary'} `}>
                                        <i className="bi bi-mortarboard-fill fs-4 me-2 fw-bold"></i>
                                        <span className="align-self-center text-uppercase">Cadastro</span>
                                    </div>
                                    <div className="card-body p-1">
                                        <p className="text-center my-4">
                                            Gerenciamento de Alunos
                                        </p>
                                        <p className="text-end mb-0">
                                            <Link to="/CadastrarAluno" className="btn btn-outline-primary btn-sm">Acessar</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 col-md-3">
                                <div className="card">
                                    <div className={`card-header d-flex justify-content-between fw-bold py-0 ${darkMode ? 'text-bg-secondary' : 'text-bg-primary'} `}>
                                        <div>
                                            <i className="bi bi-clipboard-data-fill fs-4 me-2 fw-bold"></i>
                                            <span className="align-self-center text-uppercase">Alunos</span>
                                        </div>
                                        <span className="badge text-bg-warning align-self-center">
                                            <i className="bi bi-person-fill me-1 small"></i> {alunosTotal}
                                        </span>

                                    </div>
                                    <div className="card-body p-1">
                                        <p className="text-center my-4">
                                            Alunos Matriculados
                                        </p>
                                        <p className="text-end mb-0">
                                            <Link to="/alunos" className="btn btn-outline-primary btn-sm">Acessar</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 col-md-3">
                                <div className="card">
                                    <div className={`card-header d-flex fw-bold py-0 ${darkMode ? 'text-bg-secondary' : 'text-bg-primary'} `}>
                                        <i className="bi bi-book-fill fs-4 me-2 fw-bold"></i>
                                        <span className="align-self-center text-uppercase">Biblioteca</span>
                                    </div>
                                    <div className="card-body p-1">
                                        <p className="text-center my-4">
                                            Encontre Livros em nosso acervo
                                        </p>
                                        <p className="text-end mb-0">
                                            <Link to="/biblioteca" className="btn btn-outline-primary btn-sm">Acessar</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 col-md-3">
                                <div className="card">
                                    <div className={`card-header d-flex fw-bold py-0 ${darkMode ? 'text-bg-secondary' : 'text-bg-primary'} `}>
                                        <i className="bi bi-controller fs-4 me-2 fw-bold"></i>
                                        <span className="align-self-center text-uppercase">Dashboard</span>
                                    </div>
                                    <div className="card-body p-1">
                                        <p className="text-center my-4">
                                            Estatística da Escola
                                        </p>
                                        <p className="text-end mb-0">
                                            <Link to="/dashboard" className="btn btn-outline-primary btn-sm">Acessar</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="card small">
                                    <div className={`card-header d-flex fw-bold py-0 ${darkMode ? 'text-bg-secondary' : 'text-bg-primary'} `}>
                                        <i className="bi bi-bar-chart-steps fs-4 me-2 fw-bold"></i>
                                        <span className="align-self-center text-uppercase">Distribuição de Estudantes</span>
                                    </div>
                                    <div className="card-body p-1">
                                    
                                        <div className="row justify-content-center">
                                            {Object.entries(alunoPorSerie).map(([curso, quantidade], index, array) => (
                                                <div key={index} className={`text-center col ${index == 0 ? '' : 'border-start'}`}>
                                                    <span className="text-muted">{curso}</span>
                                                    <h1 className="text-center fw-bold">{quantidade}</h1>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home