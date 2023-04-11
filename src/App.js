import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import "./App.css";
import Main from "./pages/Main/Main";
import Registration from "./pages/Registration/Registration";
import Authorization from "./pages/Authorization/Authorization";
import { useSelector } from "react-redux";
import PersonalArea from "./pages/PersonalArea/PersonalArea";

function App() {
  const token = useSelector((state) => state.user.token);
  return (
    <div className="App">
      {token ? (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/personalArea" element={<PersonalArea />} />
          <Route path="/registration" element={<Navigate to={"/"} />} />
          <Route path="/authorization" element={<Navigate to={"/"} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/personalArea" element={<Navigate to={"/"} />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/authorization" element={<Authorization />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
