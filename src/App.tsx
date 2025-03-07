import * as C from "./allFiles";
import Home from "@/pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <C.Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <C.Footer />
    </BrowserRouter>
  );
}

export default App;
