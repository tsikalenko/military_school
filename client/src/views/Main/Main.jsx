import { Link } from 'react-router-dom';
import MainInfo from '../../components/MainInfo';
import './main.scss';
import '../../utils/styles/_utils.scss';
import Slider from '../../components/Slider';
import Schedule from '../../components/Schedule';

const Main = () => {
    return (
        <>
            <div className='main container'>
                <h2 className='main__title'>Military School</h2>
                <p className='main__description'>
                    Ваша підготовка - ваша БЕЗПЕКА!
                    <br />
                    <br />
                    Military School - це школа тактичної підготовки та медицини
                    для цивільних осіб.
                    <br />
                    <br />
                    Ми про безпеку, про готовність до будь яких обставин життя.
                    З нами ви отримаєте необхідні в сучасному житті навички,
                    теоретичні та практичні знання для захисту себе та зможете
                    тренуватись!
                    <br />
                    <br />
                    Ваша БЕЗПЕКА - це знання, які запезбечують вашу впевненість
                    у майбутньому!
                </p>
                <Link to='/all-courses' className='button button--border'>
                    Наши курсы
                </Link>
                <Link to='/registration' className='button button--accent'>
                    Регистрация
                </Link>
                <section className='main__info'>
                    <Slider
                        slides={[
                            {
                                img: 'https://res.cloudinary.com/dkngcqeid/image/upload/v1665554629/military_school/mainSlider1_iwgln5.jpg',
                                alt: 'slide 1',
                            },
                            {
                                img: 'https://res.cloudinary.com/dkngcqeid/image/upload/v1665554629/military_school/mainSlider2_wkwmjx.jpg',
                                alt: 'slide 2',
                            },
                            {
                                img: 'https://res.cloudinary.com/dkngcqeid/image/upload/v1665554629/military_school/mainSlider3_tfz1dc.jpg',
                                alt: 'slide 3',
                            },
                            {
                                img: 'https://res.cloudinary.com/dkngcqeid/image/upload/v1665554630/military_school/mainSlider4_zenm3x.jpg',
                                alt: 'slide 4',
                            },
                            {
                                img: 'https://res.cloudinary.com/dkngcqeid/image/upload/v1665554631/military_school/mainSlider5_gpsqk4.jpg',
                                alt: 'slide 5',
                            },
                        ]}
                    />
                    <MainInfo />
                </section>

                <h3 className='main__subtitle main__subtitle--center main__subtitle--large'>
                    Nearest <span className='accent'>events</span>
                </h3>
                <Schedule />

                <section className='main__about'>
                    <h3 className='main__subtitle'>
                        Lorem <span className='accent'>ipsum</span> dolor sit
                        amet
                    </h3>
                    <p className='main__text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A ad adipisci aliquam amet architecto atque,
                        blanditiis deleniti earum esse eum excepturi explicabo
                        id illum ipsum iste magnam maxime, minus molestias nemo
                        nisi odio placeat quae quis repellat ullam ut vel vero.
                        Adipisci amet consequuntur iure nostrum placeat sint
                        tempora temporibus voluptatem voluptatum? Aliquam, dicta
                        dolorem exercitationem id ipsa perferendis quas quasi
                        repellat. Accusamus autem cupiditate dolores earum
                        laudantium sunt tenetur? Adipisci architecto consectetur
                        consequatur cum eveniet explicabo fuga harum id iure
                        magni, maiores natus non obcaecati officiis quidem
                        reiciendis temporibus? At corporis esse ex minus
                        quisquam quo rerum sint temporibus.
                    </p>
                </section>
            </div>
        </>
    );
};

export default Main;
