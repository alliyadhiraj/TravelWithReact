import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import AppRouter from './routers/AppRouter';
import "./routers/AppRouter.css";
// import "..src/App.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Button variant='danger'>Explore US</Button>
      <AppRouter/>
      </header>
    </div>
  );
}

export default App;
