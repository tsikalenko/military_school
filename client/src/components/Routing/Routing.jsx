import {Route, Routes} from "react-router-dom";
import Main from "../../views/Main";
import Contacts from "../../views/Contacts";
import AllServices from "../../views/AllServices";
import TeamBuilding from "../../views/TeamBuilding";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/registration" element={<p>Registration</p>}/>
            <Route path="/all-courses" element={<AllServices/>}/>
            <Route path="/team-building" element={<TeamBuilding/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
    );
}

export default Routing;