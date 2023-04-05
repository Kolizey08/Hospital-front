import { Route, Routes } from "react-router";
import "./App.css";
import "./App.css";
import Main from "./pages/Main";
import Registration from "./components/Registration/Registration";
import Authorization from "./components/Authorization/Authorization";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
    </div>
  );
}

export default App;
