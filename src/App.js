import ClientController from "./components/ClientController";
import RegisterPage from "./LoginPage/RegisterPage";
import LoginPage from "./LoginPage/LoginPage";
import PosesPage from "./LoginPage/PosesPage";
import AdminPage from "./LoginPage/AdminPage";
import logo from './logo.jpeg';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

function App() {

    return (
        <div>
            <div style={{ position: 'absolute'}}>
            <img style={{
            borderRadius: 50,
            height: 100,
            width: 100,
            marginLeft: 20,
            marginTop: 20
            }} src={logo} alt="logo" />
            </div>
            
            <Router>
                <Routes>
                    <Route path="/" Component={LoginPage}/>
                    <Route path="/app" Component={ClientController}/>
                    <Route path="/register" Component={RegisterPage}/>
                    <Route path="/poses" Component={PosesPage}/>
                    <Route path="/admin" Component={AdminPage}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
