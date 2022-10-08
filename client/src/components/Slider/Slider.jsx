import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Navigation, Pagination, Scrollbar} from "swiper";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/effect-fade';
import 'swiper/scss/autoplay';
import './slider.scss';

const Slider = ({slides}) => {

    const renderSlides = () => {
        return slides.map(slide => <SwiperSlide className='slider__slide' key={slide.img}>
            <Link className='slider__link' to="/">
                <img className='slider__img' src={slide.img} alt={slide.alt} width={280}/>
            </Link>
        </SwiperSlide>)
    }

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
        className='slider'
    >
        {renderSlides()}
    </Swiper>
}

export default Slider;
