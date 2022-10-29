import { useNavigate } from 'react-router-dom';

import './gratitude.scss';
import '../../utils/styles/_utils.scss';
import PropTypes from 'prop-types';

const InfoPage = ({ title, content }) => {
    const navigate = useNavigate();

    return (
        <div className='gratitude container'>
            <h2 className='gratitude__title'>{title}</h2>
            <div className='gratitude__content'>{content}</div>
            <button
                className='button button--accent'
                onClick={() => {
                    navigate('/');
                }}
            >
                На головну
            </button>
        </div>
    );
};

InfoPage.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.any,
};

export default InfoPage;
