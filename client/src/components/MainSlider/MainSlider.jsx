import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Navigation, Pagination, Scrollbar} from "swiper";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/effect-fade';
import 'swiper/scss/autoplay';
import './mainSlider.scss';

const MainSlider = () => {
    return <Swiper
        modules={[Navigation, Pagination, Scrollbar, EffectFade, Autoplay]}
        effect="fade"
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={true}
        speed={1500}
        pagination={{
            clickable: true,
        }}
        className='mainSlider'
    >
        <SwiperSlide className='mainSlider__slide'>
            <Link className='mainSlider__link' to="/">
                <img className='mainSlider__img' src='./img/mainSlider(1).jpg' alt='slide 1' width={280}/>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
                <img className='mainSlider__img' src='./img/mainSlider(2).jpg' alt='slide 1' width={280}/>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
                <img className='mainSlider__img' src='./img/mainSlider(3).jpg' alt='slide 1' width={280}/>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
                <img className='mainSlider__img' src='./img/mainSlider(4).jpg' alt='slide 1' width={280}/>
            </Link>
        </SwiperSlide>
    </Swiper>
}

export default MainSlider;
