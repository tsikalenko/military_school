import Schedule from '../../components/Schedule';
import './registration.scss';
// import '../../utils/styles/_utils.scss';

const Registration = () => {
    return (
        <div className='registration'>
            <p className='registration__title'>All nearest events</p>
            <Schedule />
        </div>
    );
};

export default Registration;
