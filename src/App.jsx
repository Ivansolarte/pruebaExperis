import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./views/Home";
import { Lista } from "./views/Lista";
import { Create } from "./component/create/create";

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("cargando app");

    return () => {};
  }, []);

  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/" element={<Home />}>
        <Route path=":listado" element={<Lista />} />
        <Route path=":registro" element={<Create/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
