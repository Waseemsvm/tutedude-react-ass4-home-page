import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import NotFound from "./components/NotFound";
import UserInfo from "./components/UserInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="main">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<UserInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
