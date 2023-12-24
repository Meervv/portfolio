import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from "./pages/Home";
import CreateArticle from "./pages/CreateArticle";

function App() {

  return (
    <div className='App'>
      <Router>
        <Link to="/createarticle">Create an Article</Link>
        <Link to="/">Home Page</Link>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/createarticle' element={<CreateArticle/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
