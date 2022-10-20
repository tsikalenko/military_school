import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEvent } from '../../api/eventsAPI';
import { useForm } from 'react-hook-form';
import { createParticipant } from '../../api/paticipantsAPI';
import '../../utils/styles/_edit.scss';
import '../../utils/styles/_utils.scss';

const RegistrationForm = () => {
    const { eventId } = useParams();
    const [eventInfo, setEventInfo] = useState({});
    const [isErrorLoading, setIsErrorLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                setEventInfo(await getEvent(eventId));
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const renderFields = () => {
        return eventInfo.fields.map((field) => (
            <div className='edit__item edit__item--column' key={field.name}>
                <h3 className='edit__subtitle'>{field.name}</h3>
                {field.description && (
                    <h3 className='edit__description'>{field.description}</h3>
                )}
                <input
                    type='text'
                    className='edit__input edit__input--text'
                    {...register(`${field.name}`, {
                        required: true,
                    })}
                />
                {errors[field.name]?.type === 'required' && (
                    <p role='alert' className='edit__error'>
                        Заповніть будьласка поле
                    </p>
                )}
            </div>
        ));
    };

    const onSubmit = (data) => {
        (async () => {
            try {
                await createParticipant({
                    eventId,
                    email: data.email,
                    letterSubject: eventInfo.letterSubject,
                    letterHtml: eventInfo.letterHtml,
                    data,
                });
                navigate('/gratitude');
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
            ) : Object.keys(eventInfo).length === 0 ? (
                <h2 className='loading'>Loading...</h2>
            ) : (
                <div className='edit container'>
                    <h2 className='edit__title edit__title--closest'>
                        {eventInfo.title}
                    </h2>
                    <h3 className='edit__subtitle'>{eventInfo.date}</h3>
                    <p className='edit__description'>{eventInfo.description}</p>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='edit__form'
                    >
                        <div
                            className='edit__item edit__item--column'
                            key={'email'}
                        >
                            <h3 className='edit__subtitle'>Email</h3>
                            <input
                                type='email'
                                className='edit__input edit__input--text'
                                {...register('email', {
                                    required: true,
                                })}
                            />
                            {errors.email?.type === 'required' && (
                                <p role='alert' className='edit__error'>
                                    Заповніть будьласка поле
                                </p>
                            )}
                        </div>
                        {renderFields()}
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

export default RegistrationForm;
