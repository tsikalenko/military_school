import { Link, useNavigate } from 'react-router-dom';
import '../../utils/styles/_utils.scss';

const Admin = () => {
    const navigate = useNavigate();

    return (
        <div className='container container--page'>
            <h2 className='title'>Адміністрування</h2>
            <Link to='/editor' className='button button--border'>
                Редагувати сторінки
            </Link>
            <Link to='/forms' className='button button--border'>
                Редагувати форми
            </Link>
            <button
                onClick={() => {
                    localStorage.removeItem('token');
                    navigate('/login');
                }}
                className='button button--border'
            >
                Вийти
            </button>
        </div>
    );
};

export default Admin;
