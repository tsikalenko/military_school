import '../../utils/styles/_utils.scss';
import { Link } from 'react-router-dom';

const Edit = () => {
    return (
        <div className='edit'>
            <h2 className='edit__title'>Editor</h2>
            <Link to='/edit/main' className='button button--border'>
                Edit main
            </Link>
            <Link to='/edit/all-courses' className='button button--border'>
                Edit all-courses
            </Link>
            <Link to='/edit/team-building' className='button button--border'>
                Edit team-building
            </Link>
            <Link to='/edit/contacts' className='button button--border'>
                Edit contacts
            </Link>
            <Link to='/edit/schedule' className='button button--border'>
                Edit registration
            </Link>
        </div>
    );
};

export default Edit;
