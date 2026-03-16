function Card({titulo, body, darkMode}) {
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card">
                <div className={`card-header py-1 text-small ${darkMode ? 'text-bg-secondary' : 'text-bg-primary'}`}>
                    {titulo}
                </div>
                <div className="card-body text-center">
                    <h3 className="mb-0 fw-bold">{body}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card