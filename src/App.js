import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/sign-up.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.compononet";
import HomePage from "./pages/homepage/homepage.component";
import AddArticle from "../src/components/add-article/addArticle.compononet";
import Test from "./components/test";
import "./App.css";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />{" "}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/add-article" element={<AddArticle />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
