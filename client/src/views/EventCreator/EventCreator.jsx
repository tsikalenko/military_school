import '../../utils/styles/_edit.scss';
import '../../utils/styles/_utils.scss';
import { useFieldArray, useForm } from 'react-hook-form';

const EventCreator = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'fields',
    });

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
        console.log('data:', data);
    };

    return (
        <div className='edit container'>
            <h2 className='edit__title'>Створення форми події</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='edit__form'>
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

                {renderFields()}
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
                    value='Створити'
                />
            </form>
        </div>
    );
};

export default EventCreator;
