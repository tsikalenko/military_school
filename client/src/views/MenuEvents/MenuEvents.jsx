import Schedule from '../../components/Schedule';
import './registration.scss';
import { Link } from 'react-router-dom';

const MenuEvents = () => {
    return (
        <div className='registration'>
            <p className='registration__title'>Редагувати події</p>
            <Link
                to='/create-event'
                className='button button--border button--center'
            >
                Створиті нову подію
            </Link>
            <Schedule type={'edit'} />
            <Link to='/admin' className='button button--border button--center'>
                Назад
            </Link>
        </div>
    );
};

export default MenuEvents;
