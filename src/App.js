import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="container-flex">
      <header className="text-bg-secondary">
        <img src={logo} className="" width={200} alt="logo" />
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
