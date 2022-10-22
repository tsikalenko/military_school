import { useFieldArray, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createEvent, getEvent, updateEvent } from '../../api/eventsAPI';

import '../../utils/styles/_edit.scss';
import '../../utils/styles/_utils.scss';

const EventForm = () => {
    const [error, setError] = useState('');
    const [initialState, setInitialState] = useState({});
    const [isErrorLoading, setIsErrorLoading] = useState(false);
    const navigate = useNavigate();
    const { eventID } = useParams();

    useEffect(() => reset(initialState), [initialState]);

    useEffect(() => {
        if (eventID) {
            getInitialState();
        }
    }, []);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm({ defaultValues: initialState });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'fields',
    });

    const getInitialState = () => {
        (async () => {
            try {
                setInitialState(await getEvent(eventID));
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    };

    const renderFields = () => {
        return fields.map((item, index) => {
            return (
                <div className='edit__block' key={item.id}>
                    <p className='edit__subtitle'>Поле {index + 1}</p>
                    <div className='edit__item'>
                        <label className='edit__label'>Назва:</label>
                        <input
                            type='text'
                            {...register(`fields.${index}.name`, {
                                required: true,
                            })}
                            className='edit__input edit__input--text'
                        />
                    </div>
                    {errors.fields &&
                        errors.fields[index]?.name.type === 'required' && (
                            <p role='alert' className='edit__error'>
                                Назва поля обов{"'"}язкова
                            </p>
                        )}
                    <div className='edit__item'>
                        <label className='edit__label'>Опис:</label>
                        <input
                            type='text'
                            {...register(`fields.${index}.description`, {})}
                            className='edit__input edit__input--text'
                        />
                    </div>
                    <button
                        className='button button--border button--sm button--center'
                        onClick={() => {
                            remove(index);
                        }}
                    >
                        Видалити поле
                    </button>
                </div>
            );
        });
    };

    const onSubmit = (data) => {
        (async () => {
            try {
                if (eventID) {
                    await updateEvent({ ...data, id: eventID });
                } else {
                    await createEvent({ ...data, enable: true });
                }
                navigate('/admin');
            } catch (err) {
                setError(err.response.data.message);
            }
        })();
    };

    return (
        <>
            {eventID && isErrorLoading ? (
                <h2 className='error'>
                    Нажаль, виникла проблема зі завантаженням сторінки,
                    спробуйте оновити сторінку
                </h2>
            ) : eventID && Object.keys(initialState).length === 0 ? (
                <h2 className='loading'>Loading...</h2>
            ) : (
                <div className='edit container'>
                    <h2 className='edit__title'>
                        {eventID ? 'Редагування події' : 'Створення події'}
                    </h2>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='edit__form'
                    >
                        {eventID && (
                            <>
                                <div className='edit__item'>
                                    <label className='edit__label'>
                                        Активна
                                    </label>
                                    <input
                                        type='checkbox'
                                        {...register('enable')}
                                        name='enable'
                                        className='edit__input edit__input--checkbox'
                                    />
                                </div>
                            </>
                        )}

                        <div className='edit__item'>
                            <label className='edit__label'>Назва події:</label>
                            <input
                                type='text'
                                {...register('title', {
                                    required: true,
                                })}
                                className='edit__input edit__input--text'
                            />
                        </div>
                        {errors?.title?.type === 'required' && (
                            <p role='alert' className='edit__error'>
                                Назва події обов{"'"}язкова
                            </p>
                        )}
                        <div className='edit__item'>
                            <label className='edit__label'>Опис події:</label>
                            <textarea
                                {...register('description', {
                                    required: true,
                                })}
                                className='edit__input edit__input--textarea'
                            />
                        </div>
                        {errors?.description?.type === 'required' && (
                            <p role='alert' className='edit__error'>
                                Опис події обов{"'"}язковий
                            </p>
                        )}

                        <div className='edit__item'>
                            <label className='edit__label'>Дата події:</label>
                            <input
                                type='text'
                                {...register('date', {
                                    required: true,
                                })}
                                placeholder='дд.мм.рррр'
                                className='edit__input edit__input--text'
                            />
                        </div>
                        {errors?.date?.type === 'required' && (
                            <p role='alert' className='edit__error'>
                                Дата події обов{"'"}язкова
                            </p>
                        )}

                        <div className='edit__item'>
                            <label className='edit__label'>
                                Кількість учасників:
                            </label>
                            <input
                                type='number'
                                {...register('maxQuantity', {
                                    required: true,
                                })}
                                className='edit__input edit__input--text'
                            />
                        </div>
                        {errors?.maxQuantity?.type === 'required' && (
                            <p role='alert' className='edit__error'>
                                Кількість учасників обов{"'"}язкова
                            </p>
                        )}

                        <div className='edit__item'>
                            <label className='edit__label'>Тема листа:</label>
                            <input
                                type='text'
                                {...register('letterSubject', {
                                    required: true,
                                })}
                                className='edit__input edit__input--text'
                            />
                        </div>
                        {errors?.letterSubject?.type === 'required' && (
                            <p role='alert' className='edit__error'>
                                Тема листа обов{"'"}язкова
                            </p>
                        )}

                        <div className='edit__item'>
                            <label className='edit__label'>Текст листа:</label>
                            <textarea
                                {...register('letterHtml', {
                                    required: true,
                                })}
                                className='edit__input edit__input--textarea'
                            />
                        </div>
                        {errors?.letterHtml?.type === 'required' && (
                            <p role='alert' className='edit__error'>
                                Текст листа обов{"'"}язковий
                            </p>
                        )}

                        {renderFields()}

                        {error && <p className='edit__error'>{error}</p>}

                        <button
                            className='button button--border'
                            onClick={() => {
                                append({});
                            }}
                        >
                            Додати поле
                        </button>
                        <input
                            type='submit'
                            className='button button--accent'
                            value={eventID ? 'Оновити' : 'Створити'}
                        />
                    </form>
                </div>
            )}
        </>
    );
};

export default EventForm;
