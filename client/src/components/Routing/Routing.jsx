import { Route, Routes } from 'react-router-dom';
import Main from '../../views/Main';
import Contacts from '../../views/Contacts';
import AllServices from '../../views/AllServices';
import TeamBuilding from '../../views/TeamBuilding';
import Registration from '../../views/Registration';
import EditMain from '../../views/EditMain';
import EditAllServices from '../../views/EditAllServices';
import EditTeamBuilding from '../../views/EditTeamBuilding';
import EditContacts from '../../views/EditContacts';
import EditSchedule from '../../views/EditSchedule';
import Page404 from '../../views/Page404';
import Login from '../../views/Login';
import Edit from '../../views/Edit';

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/all-courses' element={<AllServices />} />
            <Route path='/team-building' element={<TeamBuilding />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/editor' element={<Edit />} />
            <Route path='/edit/'>
                <Route path='main' element={<EditMain />} />
                <Route path='all-courses' element={<EditAllServices />} />
                <Route path='team-building' element={<EditTeamBuilding />} />
                <Route path='contacts' element={<EditContacts />} />
                <Route path='schedule' element={<EditSchedule />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Page404 />} />
        </Routes>
    );
};

export default Routing;
