import {Link} from "react-router-dom";

import './mainInfo.scss';
import '../../utils/styles/_utils.scss'


const MainInfo = () => {
    return <div className="mainInfo">
        <h3 className="mainInfo__subtitle">Lorem ipsum <span className="accent">dolor</span></h3>
        <h2 className="mainInfo__title">Lorem ipsum dolor sit amet, consectetur</h2>
        <p className="mainInfo__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque, minima!
            Consectetur dicta impedit laborum magnam nam neque, nihil, numquam pariatur quidem quis quisquam reiciendis
            similique voluptatem? Ad aliquam animi assumenda atque autem eaque facilis iusto magni minus nostrum
            obcaecati officia quae quod quos tempora, velit vero? Cumque, dolore, tenetur.</p>
        <Link to='/team-building' className='button button--accent button--center'>Корпоративы</Link>
    </div>
}

export default MainInfo;
