import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Afterlog from './Component/Afterlog';
import {
  Routes,
  Route,
} from "react-router-dom";
import LoginForm from './Component/LoginForm';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='' element={<LoginForm/>}></Route>
          <Route path='/path' element={<Afterlog/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
