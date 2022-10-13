import { useEffect, useState } from 'react';
import { getPage, updatePage } from '../../api/pagesAPI';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../../utils/styles/_edit.scss';
import '../../utils/styles/_utils.scss';

const EditContacts = () => {
    const [pageInfo, setPageInfo] = useState({});
    const [pageID, setPageID] = useState('');
    const [isErrorLoading, setIsErrorLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const pageData = await getPage('contacts');
                setPageInfo(pageData.data);
                setPageID(pageData._id);
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    }, []);

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const formData = {
            title: data.title,
            phones: [data.phone0, data.phone1, data.phone2],
            info: {
                title: data.infoTitle,
                description: data.infoDescription,
            },
            email: data.email,
            telegram: data.telegram,
            viber: data.viber,
            instagram: data.instagram,
        };
        (async () => {
            try {
                await updatePage(pageID, formData);
                navigate('/contacts');
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    };

    const renderSlider = () => {
        return pageInfo.phones.map((phone, index) => (
            <>
                <div className='edit__photo' key={phone}>
                    <div className='edit__item'>
                        <label className='edit__label'>phone{index + 1}:</label>
                        <input
                            type='text'
                            defaultValue={phone}
                            {...register(`phone${index}`, {
                                required: true,
                            })}
                            className='edit__input edit__input--text'
                        />
                    </div>
                </div>
            </>
        ));
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
                    <h2 className='edit__title'>
                        Редагування сторінки контактів
                    </h2>
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

                        <p className='edit__subtitle'>Контакты</p>

                        {renderSlider()}

                        <div className='edit__item'>
                            <label className='edit__label'>Email:</label>
                            <input
                                type='text'
                                defaultValue={pageInfo.email}
                                {...register('email', { required: true })}
                                className='edit__input edit__input--text'
                            />
                        </div>

                        <div className='edit__item'>
                            <label className='edit__label'>Telegram:</label>
                            <input
                                type='text'
                                defaultValue={pageInfo.telegram}
                                {...register('telegram', { required: true })}
                                className='edit__input edit__input--text'
                            />
                        </div>

                        <div className='edit__item'>
                            <label className='edit__label'>Viber:</label>
                            <input
                                type='text'
                                defaultValue={pageInfo.viber}
                                {...register('viber', { required: true })}
                                className='edit__input edit__input--text'
                            />
                        </div>

                        <div className='edit__item'>
                            <label className='edit__label'>Instagram:</label>
                            <input
                                type='text'
                                defaultValue={pageInfo.instagram}
                                {...register('instagram', { required: true })}
                                className='edit__input edit__input--text'
                            />
                        </div>

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

export default EditContacts;
