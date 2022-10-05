import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routing from "./components/Routing";
import '../src/utils/styles/_utils.scss'

function App() {
    return (
        <div className='app'>
            <Header/>
            <div className="container">
                <Routing/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
