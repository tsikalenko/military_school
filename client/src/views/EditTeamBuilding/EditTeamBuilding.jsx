import { useEffect, useState } from 'react';
import { getPage, updatePage } from '../../api/pagesAPI';
import { useFieldArray, useForm } from 'react-hook-form';
import '../../utils/styles/_edit.scss';
import '../../utils/styles/_utils.scss';
import { useNavigate } from 'react-router-dom';
import EditSlider from '../../components/EditSlider';

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

    useEffect(() => reset(pageInfo), [pageInfo]);

    const { register, handleSubmit, control, reset } = useForm({
        defaultValues: pageInfo,
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'slider',
    });

    const onSubmit = (data) => {
        (async () => {
            try {
                await updatePage(pageID, data);
                navigate('/team-building');
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

                        <EditSlider
                            fields={fields}
                            remove={remove}
                            register={register}
                        />

                        <div
                            className='button button--border'
                            onClick={() => {
                                append({});
                            }}
                        >
                            Додати слайд
                        </div>

                        <p className='edit__subtitle'>Info</p>

                        <div className='edit__item'>
                            <label className='edit__label'>Info title:</label>
                            <input
                                type='text'
                                defaultValue={pageInfo.info.title}
                                {...register('info.title', { required: true })}
                                className='edit__input edit__input--text'
                            />
                        </div>

                        <div className='edit__item'>
                            <label className='edit__label'>
                                Info description:
                            </label>
                            <textarea
                                defaultValue={pageInfo.info.description}
                                {...register('info.description', {
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
