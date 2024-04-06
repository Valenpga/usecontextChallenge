import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {useTheme} from '../themes/ThemeContext';
import Home from '../pages/Home';
import Profile from "../pages/Profile";
import MyJob from "../pages/MyJob";
import Button from "../components/Button";


function RoutesApp () {
    const {theme} = useTheme();
    return (
        <Router>
            <section className={`App`}>
                <div className="content">
                <header>
                    <button/>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/myjob">MyJob</Link>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/profile" element={<Profile/>}></Route>
                    <Route path="/myjob" element={<MyJob/>}></Route>
                </Routes>
                </div>
            </section>

        </Router>
    )
}

export default RoutesApp;