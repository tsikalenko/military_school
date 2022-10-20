import '../../utils/styles/_edit.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPage, updatePage } from '../../api/pagesAPI';
import { useFieldArray, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const EditPage = ({ pageName }) => {
    const [pageInfo, setPageInfo] = useState({});
    const [pageID, setPageID] = useState('');
    const [isErrorLoading, setIsErrorLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const pageData = await getPage(pageName);
                setPageInfo(pageData.data);
                setPageID(pageData._id);
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    }, []);

    const { register, handleSubmit, control } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'fields',
    });

    const renderArray = (array) => {
        return array.map((item, index) => {
            console.log(item, index);
        });
    };

    const renderObject = (obj) => {
        const key = Object.keys(obj);
        return key.map((item, index) => {
            console.log(item, obj[item], index);
        });
    };

    const onSubmit = (data) => {
        console.log(data);
        const formData = { ...data };
        (async () => {
            try {
                await updatePage(pageID, formData);
                navigate('/all-courses');
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    };
    return (
        <>
            {isErrorLoading ? (
                <h2 className='error'>
                    Нажаль, виникла проблема зі завантаженням сторінки,
                    спробуйте оновити сторінку
                </h2>
            ) : Object.keys(pageInfo).length === 0 ? (
                <h2 className='loading'>Loading...</h2>
            ) : (
                <div className='edit container'>
                    <h2 className='edit__title'>Редагування усіх послуг</h2>
                    <form
                        className='edit__form'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <p className='edit__subtitle'>Header</p>

                        <div className='edit__item'>
                            <label className='edit__label'>Title:</label>
                            <input
                                type='text'
                                defaultValue={pageInfo.title}
                                {...register('title', { required: true })}
                                className='edit__input edit__input--text'
                            />
                        </div>

                        <p className='edit__subtitle'>Послуги</p>

                        {/*{renderServices()}*/}

                        <input
                            type='submit'
                            className='button button--accent'
                        />
                    </form>
                </div>
            )}
        </>
    );
};

EditPage.propTypes = {
    pageName: PropTypes.string.isRequired,
};

export default EditPage;
