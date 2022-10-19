import './gratitude.scss';
import '../../utils/styles/_utils.scss';
import { useNavigate } from 'react-router-dom';

const Gratitude = () => {
    const navigate = useNavigate();

    return (
        <div className='gratitude container'>
            <h2 className='gratitude__title'>Дякуемо за реестрацію!</h2>
            <p className='gratitude__text'>
                Ми з зв{"'"}яжемося Вами найближчим часом.
            </p>
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

export default Gratitude;
