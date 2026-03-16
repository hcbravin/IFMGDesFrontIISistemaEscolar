import { useEffect, useState } from "react"

function Biblioteca({ darkMode, setDarkMode }) {

    const [loading, setLoading] = useState(true)
    const [livros, setLivros] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/livros")
                .then((resp) => resp.json())
                .then((data) => {
                    setLivros(data)
                    setLoading(false)
                })
                .catch((error) => {
                    console.error(error)
                    setLoading(false)
                });
        }, 2000);
    });

    if(loading){
        return (
            <div className="alert alert-warning m-1">Carregando...</div>
        )
    }


    return (
        <div className="row justify-content-center mt-2">
            <div className="col-12 col-sm-10 col-md-8">
                {livros.length === 0 ? (
                    <div className="alert alert-danger m-1 text-center">Nenhum livro cadastrado</div>
                ) : (
                    <div className="card border">
                        <div className="card-body p-1">
                            <table className="table table-striped table-sm mb-0">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Titulo</th>
                                        <th>Autor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {livros.map(livro => (
                                        <tr key={livro.id}>
                                            <td>{livro.id}</td>
                                            <td>{livro.titulo}</td>
                                            <td>{livro.autor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Biblioteca