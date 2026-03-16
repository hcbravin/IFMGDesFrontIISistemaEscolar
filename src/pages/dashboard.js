import Card from "../components/card"


function Dashboard({darkMode}){
    return (
        <div className="row justify-content-center mt-2">
            <div className="col-12 mb-2"><h4 className="fw-bold mx-2">Dashboard</h4></div>
            <div className="col-12 col-sm-10 col-md-8">
                <div className="row justify-content-center">
                    <Card titulo="Total de Alunos" body="120" darkMode={darkMode} />
                    <Card titulo="Livros Cadastrados" body="58" darkMode={darkMode} />
                    <Card titulo="Empréstimos Ativos" body="12" darkMode={darkMode} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard