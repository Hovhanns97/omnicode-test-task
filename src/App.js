import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { HomePage } from './HomePage';
import { BlogPage } from './Blog';
import { AiExperts } from './AiExperts';

function App() {
  return (
    <div className='main'>
      <Header />
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/blog' Component={BlogPage} />
        <Route path='/experts' Component={AiExperts} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
