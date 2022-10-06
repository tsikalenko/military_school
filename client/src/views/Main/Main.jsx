import {Link} from "react-router-dom";
import MainSlider from "../../components/MainSlider";
import MainInfo from "../../components/MainInfo";
import './main.scss'
import '../../utils/styles/_utils.scss'

const Main = () => {
    return <>
        <div className="main">
            <div className="container">
                <h2 className="main__title">Military School</h2>
                <p className="main__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                    asperiores culpa cumque, delectus
                    ea, eaque explicabo ipsa ipsam molestias neque perferendis ratione temporibus vel voluptate
                    voluptatum. Eum exercitationem maiores minus.</p>
                <Link to='/all-courses' className='button button--border'>Наши курсы</Link>
                <Link to='/registration' className='button button--accent'>Регистрация</Link>
                <section className="main__info">
                    <MainSlider/>
                    <MainInfo/>
                </section>
                <section className="main__about">
                    <h3 className="main__subtitle">Lorem <span className="accent">ipsum</span> dolor sit amet</h3>
                    <p className="main__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci aliquam amet architecto
                        atque, blanditiis deleniti earum esse eum excepturi explicabo id illum ipsum iste magnam maxime,
                        minus molestias nemo nisi odio placeat quae quis repellat ullam ut vel vero. Adipisci amet
                        consequuntur iure nostrum placeat sint tempora temporibus voluptatem voluptatum? Aliquam, dicta
                        dolorem exercitationem id ipsa perferendis quas quasi repellat. Accusamus autem cupiditate
                        dolores
                        earum laudantium sunt tenetur? Adipisci architecto consectetur consequatur cum eveniet explicabo
                        fuga harum id iure magni, maiores natus non obcaecati officiis quidem reiciendis temporibus? At
                        corporis esse ex minus quisquam quo rerum sint temporibus.
                    </p>
                </section>
            </div>
        </div>
    </>
}

export default Main;