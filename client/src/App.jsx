import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './components/Routing';
import '../src/utils/styles/_utils.scss';

function App() {
    return (
        <div
            className='app'
            style={{
                backgroundImage:
                    'url(https://res.cloudinary.com/dkngcqeid/image/upload/v1665554629/military_school/cover3_ora3x2.jpg)',
            }}
        >
            <Header />
            <Routing />
            <Footer />
        </div>
    );
}

export default App;
