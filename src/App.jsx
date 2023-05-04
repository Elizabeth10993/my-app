import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Favorites from './components/Favorites';
import Description from './components/Description';
import Form from './components/Form';

function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Routes>

        <Route path='/favorites'
        element={
          <Favorites/>
        }
        />

        <Route path='/'
        element={
          <Main/>
        }
        />

        <Route path='/description'
        element={
          <Description/>
        }
        />

        <Route path='/form'
        element={
          <Form/>
        }
        />
    
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
