import Login from "./components/login/Login.jsx";
import Home from "./components/home page/Home.jsx";
import "./App.css"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        {/* <Login /> */}
        <Home/>
      </BrowserRouter>
  );
}

export default App;
