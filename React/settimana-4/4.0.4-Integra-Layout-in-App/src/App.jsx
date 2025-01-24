import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Layouts from "./layouts/Layouts";


const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layouts />}>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route >
            </Routes>
        </>
    )
}

export default App