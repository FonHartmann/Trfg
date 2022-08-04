import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "./components/Layohut"h
import { Home } from "./pages/Homepage";
import { Login } from "./pages/LogIn";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}
