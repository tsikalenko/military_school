import { Link } from 'react-router-dom';

import './mainInfo.scss';
import '../../utils/styles/_utils.scss';
import PropTypes from 'prop-types';

const MainInfo = ({ data }) => {
    return (
        <div className='mainInfo'>
            <h3 className='mainInfo__subtitle'>{data.title}</h3>
            <h2 className='mainInfo__title'>{data.subtitle}</h2>
            <p className='mainInfo__text'>{data.description}</p>
            <Link
                to='/team-building'
                className='button button--accent button--center button--fifteen'
            >
                Корпоративы
            </Link>
        </div>
    );
};

MainInfo.propTypes = {
    data: PropTypes.object,
};

export default MainInfo;
