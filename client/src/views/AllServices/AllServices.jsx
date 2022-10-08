import './allServices.scss';
import { Link } from 'react-router-dom';

const AllServices = () => {
    return (
        <div className='services container'>
            <h2 className='services__title'>All Services</h2>

            <div className='services__item'>
                <div className='services__photo'>
                    <img
                        src='./img/1.JPG'
                        alt='service 1'
                        className='services__img'
                        width={280}
                    />
                </div>
                <div className='services__info'>
                    <h3 className='services__subtitle'>Lorem ipsum</h3>
                    <p className='services__text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aspernatur distinctio dolorem dolores fuga magnam
                        magni porro qui. Amet consectetur deserunt error est
                        ipsam perspiciatis repellendus voluptas. Architecto
                        excepturi rem soluta
                    </p>
                    <Link
                        to='#'
                        className='button button--center button--accent'
                    >
                        More info
                    </Link>
                </div>
            </div>

            <div className='services__item services__item--right'>
                <div className='services__photo'>
                    <img
                        src='./img/2.JPG'
                        alt='service 2'
                        className='services__img'
                        width={280}
                    />
                </div>

                <div className='services__info'>
                    <h3 className='services__subtitle'>Lorem ipsum</h3>
                    <p className='services__text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusamus dolores eligendi illo, modi neque nobis
                        perspiciatis quos sequi suscipit tempore. Consectetur
                        corporis doloribus ex iusto laborum pariatur quibusdam
                        repellat, vel.
                    </p>
                    <Link
                        to='#'
                        className='button button--center button--accent'
                    >
                        More info
                    </Link>
                </div>
            </div>

            <div className='services__item'>
                <div className='services__photo'>
                    <img
                        src='./img/10.JPG'
                        alt='service 3'
                        className='services__img'
                        width={280}
                    />
                </div>

                <div className='services__info'>
                    <h3 className='services__subtitle'>Lorem ipsum</h3>
                    <p className='services__text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A atque cupiditate fugit incidunt labore odio,
                        suscipit unde! Amet architecto aut delectus dignissimos
                        dolorum, ipsam, magni officiis quam quia quis
                        temporibus!
                    </p>
                    <Link
                        to='#'
                        className='button button--center button--accent'
                    >
                        More info
                    </Link>
                </div>
            </div>

            <div className='services__item services__item--right'>
                <div className='services__photo'>
                    <img
                        src='./img/4.JPG'
                        alt='service 4'
                        className='services__img'
                        width={280}
                    />
                </div>

                <div className='services__info'>
                    <h3 className='services__subtitle'>Lorem ipsum</h3>
                    <p className='services__text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ad aliquid blanditiis, eaque facilis impedit
                        laudantium modi nesciunt officiis optio voluptates?
                        Blanditiis distinctio eius facere impedit labore
                        repellat saepe soluta sunt.
                    </p>
                    <Link
                        to='#'
                        className='button button--center button--accent'
                    >
                        More info
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllServices;
