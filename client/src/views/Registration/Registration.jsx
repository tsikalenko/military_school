import Schedule from '../../components/Schedule';
import './registration.scss';

const Registration = () => {
    return (
        <div className='registration'>
            <p className='registration__title'>Усі найближчі події</p>
            <Schedule />
        </div>
    );
};

export default Registration;
