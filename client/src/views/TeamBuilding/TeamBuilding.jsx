import Slider from '../../components/Slider';
import './teamBuilding.scss';
import { HashLink } from 'react-router-hash-link';

const TeamBuilding = () => {
    return (
        <div className='team-building container'>
            <h2 className='team-building__title'>Корпоративы</h2>

            <div className='team-building__header'>
                <Slider
                    slides={[
                        {
                            img: 'https://res.cloudinary.com/dkngcqeid/image/upload/v1665554632/military_school/team-building1_hjxfrx.jpg',
                            alt: 'slide 1',
                        },
                        {
                            img: 'https://res.cloudinary.com/dkngcqeid/image/upload/v1665554632/military_school/team-building2_kx8s7c.jpg',
                            alt: 'slide 2',
                        },
                        {
                            img: 'https://res.cloudinary.com/dkngcqeid/image/upload/v1665554632/military_school/team-building3_l82tl5.jpg',
                            alt: 'slide 3',
                        },
                        {
                            img: 'https://res.cloudinary.com/dkngcqeid/image/upload/v1665554631/military_school/team-building4_yvuxto.jpg',
                            alt: 'slide 4',
                        },
                        {
                            img: 'https://res.cloudinary.com/dkngcqeid/image/upload/v1665554633/military_school/team-building5_tufjd1.jpg',
                            alt: 'slide 4',
                        },
                    ]}
                />

                <div className='team-building__info'>
                    <h3 className='team-building__subtitle'>
                        Lorem ipsum dolor sit
                    </h3>
                    <p className='team-building__text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ab asperiores consectetur dicta distinctio,
                        dolores earum eius eos et eum, excepturi harum iste
                        iusto laboriosam maiores molestiae neque nulla odio
                        pariatur quas quasi quod reiciendis rem repellat
                        repellendus saepe ullam unde.
                    </p>
                    <HashLink
                        to='/team-building#form'
                        className='button button--center button--accent button--fifteen'
                    >
                        Заказать рассчет
                    </HashLink>
                </div>
            </div>

            <p className='team-building__text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                nulla, quidem! Accusantium aliquam aut beatae distinctio eius
                error fugit maiores minima, mollitia nobis perferendis porro
                quibusdam quod, similique tempora. Ad architecto culpa eaque
                excepturi exercitationem illum, incidunt ipsam nostrum quidem
                rerum tempora ullam vitae voluptatum. Aspernatur optio, ullam.
                Accusantium aspernatur eligendi fugit incidunt nesciunt nisi
                numquam quas quisquam recusandae. Accusamus dignissimos
                inventore ipsa iure laborum rem sed. Accusantium ad, alias animi
                beatae commodi consectetur consequuntur cumque eaque et expedita
                in, itaque officia quidem rem sint sit unde. Ab accusantium,
                deserunt id itaque porro veniam! Harum nobis odit repudiandae
                totam ut
            </p>

            <p className='team-building__text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad,
                animi asperiores assumenda autem beatae consequatur corporis,
                deserunt doloribus dolorum est excepturi iusto labore maxime
                nulla optio pariatur quae qui quibusdam quo recusandae,
                repellendus similique sint ut voluptas. Consequatur delectus,
                earum molestiae tenetur velit voluptatibus. Dolorem, fugiat
                laboriosam libero nemo perferendis quasi ut velit! Accusamus
                aliquam aperiam beatae cumque deleniti, earum eligendi eos et
                fugiat fugit ipsa iste iure laudantium mollitia natus similique
                tenetur. Dignissimos esse et laborum saepe sint.
            </p>

            <a id='form'></a>

            <div className='team-building__form'>***form***</div>
        </div>
    );
};

export default TeamBuilding;
