import {Route, Routes} from "react-router-dom";
import Main from "../../views/Main";
import Contacts from "../../views/Contacts";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/registration" element={<p>Registration</p>}/>
            <Route path="/all-courses" element={<p>All courses</p>}/>
            <Route path="/team-building" element={<p>Team building</p>}/>
            <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
    );
}

export default Routing;