import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Layouts from "./layouts/Layouts";
import TodoDettagli from "./components/TodoDettagli";

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layouts />}>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="/todo/:id" element={<TodoDettagli />} />
                </Route >
            </Routes>
        </>
    )
}

export default App