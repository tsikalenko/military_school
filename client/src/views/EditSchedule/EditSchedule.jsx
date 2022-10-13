import { useEffect, useState } from 'react';
import { getPage, updatePage } from '../../api/pagesAPI';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../../utils/styles/_edit.scss';
import '../../utils/styles/_utils.scss';

const EditSchedule = () => {
    const [pageInfo, setPageInfo] = useState({});
    const [pageID, setPageID] = useState('');
    const [isErrorLoading, setIsErrorLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const pageData = await getPage('schedule');
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
            events: [
                {
                    name: data.event0Name,
                    date: data.event0Date,
                    img: data.event0Img,
                    link: data.event0Link,
                },
                {
                    name: data.event1Name,
                    date: data.event1Date,
                    img: data.event1Img,
                    link: data.event1Link,
                },
                {
                    name: data.event2Name,
                    date: data.event2Date,
                    img: data.event2Img,
                    link: data.event2Link,
                },
                {
                    name: data.event3Name,
                    date: data.event3Date,
                    img: data.event3Img,
                    link: data.event3Link,
                },
            ],
        };
        (async () => {
            try {
                await updatePage(pageID, formData);
                navigate('/registration');
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    };

    const renderEvents = () => {
        return pageInfo.events.map((event, index) => (
            <>
                <div className='edit__photo' key={event.name}>
                    <p className='edit__subtitle'>Event {index + 1}</p>

                    <div className='edit__item'>
                        <label className='edit__label'>name:</label>
                        <input
                            type='text'
                            defaultValue={event.name}
                            {...register(`event${index}Name`, {
                                required: true,
                            })}
                            className='edit__input edit__input--text'
                        />
                    </div>

                    <div className='edit__item'>
                        <label className='edit__label'>date:</label>
                        <input
                            type='text'
                            defaultValue={event.date}
                            {...register(`event${index}Date`, {
                                required: true,
                            })}
                            className='edit__input edit__input--text'
                        />
                    </div>

                    <div className='edit__item'>
                        <label className='edit__label'>img:</label>
                        <input
                            type='url'
                            defaultValue={event.img}
                            {...register(`event${index}Img`, {
                                required: true,
                            })}
                            className='edit__input edit__input--text'
                        />
                    </div>

                    <div className='edit__item'>
                        <label className='edit__label'>link:</label>
                        <input
                            type='text'
                            defaultValue={event.link}
                            {...register(`event${index}Link`, {
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
                        Редагування сторінки розкладу
                    </h2>
                    <form
                        className='edit__form'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <p className='edit__subtitle'>Події</p>

                        {renderEvents()}

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

export default EditSchedule;
