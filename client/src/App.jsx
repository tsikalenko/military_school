import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routing from "./components/Routing";
import '../src/utils/styles/_utils.scss'

function App() {
    return (
        <div className='app' style={{backgroundImage: 'url(/img/cover.jpg)',}}>
            <Header/>
            <Routing/>
            <Footer/>
        </div>
    );
}

export default App;
