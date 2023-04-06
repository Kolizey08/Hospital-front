import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import "./App.css";
import Main from "./pages/Main";
import Registration from "./components/Registration/Registration";
import Authorization from "./components/Authorization/Authorization";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.user.token)
  console.log(token);
  return (
    <div className="App">
      {token ? (
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<Navigate to={"/"} />} />
        <Route path="/authorization" element={<Navigate to={"/"} />} />
      </Routes>
      ) : (
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
        )}
    </div>
  );
}

export default App;
