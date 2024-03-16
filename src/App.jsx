import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<DefaultLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
