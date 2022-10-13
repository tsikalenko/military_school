import { useEffect, useState } from 'react';
import { getPage, updatePage } from '../../api/pagesAPI';
import { useForm } from 'react-hook-form';
import '../../utils/styles/_edit.scss';
import '../../utils/styles/_utils.scss';
import { useNavigate } from 'react-router-dom';

const EditAllServices = () => {
    const [pageInfo, setPageInfo] = useState({});
    const [pageID, setPageID] = useState('');
    const [isErrorLoading, setIsErrorLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const pageData = await getPage('all-services');
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
            services: [
                {
                    title: data.service0Title,
                    photo: data.service0Photo,
                    alt: data.service0Alt,
                    description: data.service0Description,
                    link: data.service0Link,
                },
                {
                    title: data.service1Title,
                    photo: data.service1Photo,
                    alt: data.service1Alt,
                    description: data.service1Description,
                    link: data.service1Link,
                },
                {
                    title: data.service2Title,
                    photo: data.service2Photo,
                    alt: data.service2Alt,
                    description: data.service2Description,
                    link: data.service2Link,
                },
                {
                    title: data.service3Title,
                    photo: data.service3Photo,
                    alt: data.service3Alt,
                    description: data.service3Description,
                    link: data.service3Link,
                },
            ],
        };
        (async () => {
            try {
                await updatePage(pageID, formData);
                navigate('/all-courses');
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    };

    const renderServices = () => {
        return pageInfo.services.map((service, index) => (
            <>
                <p className='edit__subtitle edit__subtitle--sm'>
                    Послуга {index + 1}
                </p>
                <div className='edit__photo' key={service.photo}>
                    <div className='edit__item'>
                        <label className='edit__label'>title:</label>
                        <input
                            type='text'
                            defaultValue={service.title}
                            {...register(`service${index}Title`, {
                                required: true,
                            })}
                            className='edit__input edit__input--text'
                        />
                    </div>

                    <div className='edit__item'>
                        <label className='edit__label'>photo:</label>
                        <input
                            type='url'
                            defaultValue={service.photo}
                            {...register(`service${index}Photo`, {
                                required: true,
                            })}
                            className='edit__input edit__input--text'
                        />
                    </div>

                    <div className='edit__item'>
                        <label className='edit__label'>alt:</label>
                        <input
                            type='text'
                            defaultValue={service.alt}
                            {...register(`service${index}Alt`, {
                                required: true,
                            })}
                            className='edit__input edit__input--text'
                        />
                    </div>

                    <div className='edit__item'>
                        <label className='edit__label'>description:</label>
                        <textarea
                            type='text'
                            defaultValue={service.description}
                            {...register(`service${index}Description`, {
                                required: true,
                            })}
                            className='edit__input edit__input--textarea'
                        />
                    </div>

                    <div className='edit__item'>
                        <label className='edit__label'>link:</label>
                        <input
                            type='text'
                            defaultValue={service.link}
                            {...register(`service${index}Link`, {
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

                        {renderServices()}

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

export default EditAllServices;
