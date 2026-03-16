import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useState } from 'react';

// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

// Elementos
import Header from './components/header';
import Footer from './components/footer';

// Paginas
import Home from './pages/home';
import CadastrarAluno from './pages/CadastrarAluno';
import Alunos from './pages/alunos';
import Biblioteca from './pages/bibliteca';
import Dashboard from './pages/dashboard';


function App() {

  const [darkMode, setDarkMode] = useState(false);


  return (
    <BrowserRouter>
      {/* d-flex flex-column = layout em coluna */}
      {/* vh-100 = 100% da viewport height */}
      <div className={`d-flex flex-column vh-100 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* flex-grow-1 = ocupa o espaço restante */}
        <main className={`flex-grow-1 overflow-auto ${darkMode ? 'bg-secondary text-white' : 'bg-light text-dark'}`}>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/CadastrarAluno" element={<CadastrarAluno darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/Alunos" element={<Alunos darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/Biblioteca" element={<Biblioteca darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/Dashboard" element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
