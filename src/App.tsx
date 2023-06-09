import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom"
import Layout from "./layout/Layout"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
