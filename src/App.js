import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/routers/AppRouter';

function App() {
  return (
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
