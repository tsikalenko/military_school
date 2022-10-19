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
import PrivateRoute from '../PrivateRoute';
import Admin from '../../views/Admin/Admin';
import EditEvents from '../../views/EditEvents';
import EventForm from '../../views/EventForm';
import RegistrationForm from '../../views/RegistrationForm';
import Gratitude from '../../views/Gratitude';
import EventsData from '../../views/EventsData';
import EventParticipant from '../../views/EventParticipant';

const Routing = () => {
    const setPrivateElement = (element) => (
        <PrivateRoute>{element}</PrivateRoute>
    );

    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/all-courses' element={<AllServices />} />
            <Route path='/team-building' element={<TeamBuilding />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/events/'>
                <Route path=':eventId' element={<RegistrationForm />} />
                <Route path='data/:eventId' element={<EventsData />} />
                <Route
                    path='participants/:eventId'
                    element={<EventParticipant />}
                />
            </Route>
            <Route path='/gratitude' element={<Gratitude />} />

            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={setPrivateElement(<Admin />)} />
            <Route path='/editor' element={setPrivateElement(<Edit />)} />
            <Route path='/edit/'>
                <Route path='main' element={setPrivateElement(<EditMain />)} />
                <Route
                    path='all-courses'
                    element={setPrivateElement(<EditAllServices />)}
                />
                <Route
                    path='team-building'
                    element={setPrivateElement(<EditTeamBuilding />)}
                />
                <Route
                    path='contacts'
                    element={setPrivateElement(<EditContacts />)}
                />
                <Route
                    path='schedule'
                    element={setPrivateElement(<EditSchedule />)}
                />
                <Route
                    path='events'
                    element={setPrivateElement(<EditEvents />)}
                />
                <Route
                    path='events/:eventID'
                    element={setPrivateElement(<EventForm />)}
                />
            </Route>
            <Route
                path='/create-event'
                element={setPrivateElement(<EventForm />)}
            />

            <Route path='*' element={<Page404 />} />
        </Routes>
    );
};

export default Routing;
