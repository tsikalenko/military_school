import { Route, Routes } from 'react-router-dom';
import Main from '../../views/Main';
import Contacts from '../../views/Contacts';
import AllServices from '../../views/AllServices';
import TeamBuilding from '../../views/TeamBuilding';
import Registration from '../../views/Registration';
import EditMain from '../../views/EditMain';

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/all-courses' element={<AllServices />} />
            <Route path='/team-building' element={<TeamBuilding />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/edit/'>
                <Route path='main' element={<EditMain />} />
            </Route>
        </Routes>
    );
};

export default Routing;
