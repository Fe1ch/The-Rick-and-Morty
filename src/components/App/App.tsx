import "./App.css";
import Header from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {AppRouter} from "../../providers/router";

const App = () => {
    return <div className="app">
        <Header/>
        <AppRouter/>
        <Footer/>
    </div>;
};

export default App;
