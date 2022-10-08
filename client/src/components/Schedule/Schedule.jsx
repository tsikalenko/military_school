import './schedule.scss';
import '../../utils/styles/_utils.scss';
import { Link } from 'react-router-dom';

const Schedule = () => {
    return (
        <div className='schedule'>
            <Link
                to='#'
                className='schedule__item'
                style={{ backgroundImage: 'url(/img/schedule.jpg)' }}
            >
                <h3 className='schedule__title'>Open space</h3>
                <p className='schedule__date'>dd.mm.yyyy</p>
            </Link>
            <Link
                to='#'
                className='schedule__item'
                style={{ backgroundImage: 'url(/img/schedule.jpg)' }}
            >
                <h3 className='schedule__title'>City</h3>
                <p className='schedule__date'>dd.mm.yyyy</p>
            </Link>
            <Link
                to='#'
                className='schedule__item'
                style={{ backgroundImage: 'url(/img/schedule.jpg)' }}
            >
                <h3 className='schedule__title'>Forest</h3>
                <p className='schedule__date'>dd.mm.yyyy</p>
            </Link>
            <Link
                to='#'
                className='schedule__item'
                style={{ backgroundImage: 'url(/img/schedule.jpg)' }}
            >
                <h3 className='schedule__title'>CQB</h3>
                <p className='schedule__date'>dd.mm.yyyy</p>
            </Link>
        </div>
    );
};

export default Schedule;
