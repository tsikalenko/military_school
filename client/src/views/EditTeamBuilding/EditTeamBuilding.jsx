import { useEffect, useState } from 'react';
import { getPage, updatePage } from '../../api/pagesAPI';
import { useForm } from 'react-hook-form';
import '../../utils/styles/_edit.scss';
import '../../utils/styles/_utils.scss';
import { useNavigate } from 'react-router-dom';

const EditTeamBuilding = () => {
    const [pageInfo, setPageInfo] = useState({});
    const [pageID, setPageID] = useState('');
    const [isErrorLoading, setIsErrorLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const pageData = await getPage('team-building');
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
            description: data.description,
            slider: [
                {
                    img: data.slide0Img,
                    alt: data.slide0Alt,
                },
                {
                    img: data.slide1Img,
                    alt: data.slide1Alt,
                },
                {
                    img: data.slide2Img,
                    alt: data.slide2Alt,
                },
                {
                    img: data.slide3Img,
                    alt: data.slide3Alt,
                },
                {
                    img: data.slide4Img,
                    alt: data.slide4Alt,
                },
            ],
            info: {
                title: data.infoTitle,
                description: data.infoDescription,
            },
            text: data.text,
        };
        (async () => {
            try {
                await updatePage(pageID, formData);
                navigate('/team-building');
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    };

    const renderSlider = () => {
        return pageInfo.slider.map((slide, index) => (
            <>
                <p className='edit__subtitle edit__subtitle--sm'>
                    Slide {index + 1}
                </p>
                <div className='edit__photo' key={slide.img}>
                    <div className='edit__item'>
                        <label className='edit__label'>img:</label>
                        <input
                            type='url'
                            defaultValue={slide.img}
                            {...register(`slide${index}Img`, {
                                required: true,
                            })}
                            className='edit__input edit__input--text'
                        />
                    </div>

                    <div className='edit__item'>
                        <label className='edit__label'>alt:</label>
                        <input
                            type='text'
                            defaultValue={slide.alt}
                            {...register(`slide${index}Alt`, {
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
                        Редагування сторінки корпоративів
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

                        <p className='edit__subtitle'>Slider</p>

                        {renderSlider()}

                        <p className='edit__subtitle'>Info</p>

                        <div className='edit__item'>
                            <label className='edit__label'>Info title:</label>
                            <input
                                type='text'
                                defaultValue={pageInfo.info.title}
                                {...register('infoTitle', { required: true })}
                                className='edit__input edit__input--text'
                            />
                        </div>

                        <div className='edit__item'>
                            <label className='edit__label'>
                                Info description:
                            </label>
                            <textarea
                                defaultValue={pageInfo.info.description}
                                {...register('infoDescription', {
                                    required: true,
                                })}
                                className='edit__input edit__input--textarea'
                            />
                        </div>

                        <p className='edit__subtitle'>Text</p>

                        <div className='edit__item'>
                            <label className='edit__label'>Text:</label>
                            <textarea
                                defaultValue={pageInfo.text}
                                {...register('text', {
                                    required: true,
                                })}
                                className='edit__input edit__input--textarea'
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

export default EditTeamBuilding;
