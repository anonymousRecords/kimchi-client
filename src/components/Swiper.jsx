import { Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import "../styles/swiper.css";

const SwiperContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default () => {
    const slides = [
        {
            img: 'https://cdn.inflearn.com/public/main_sliders/f3a0a5ff-a6b0-4f3f-8afb-1b6728bf166d/40143-hero-b-desktop.png',
            text: `슬라이드1`,
        },
        {
            img: 'https://cdn.inflearn.com/public/main_sliders/f3a0a5ff-a6b0-4f3f-8afb-1b6728bf166d/40143-hero-b-desktop.png',
            text: `슬라이드2`,
        },
        {
            img: 'https://cdn.inflearn.com/public/main_sliders/f3a0a5ff-a6b0-4f3f-8afb-1b6728bf166d/40143-hero-b-desktop.png',
            text: `슬라이드3`,
        },
        {
            img: 'https://cdn.inflearn.com/public/main_sliders/f3a0a5ff-a6b0-4f3f-8afb-1b6728bf166d/40143-hero-b-desktop.png',
            text: `시작하기`,
        },
    ];

    const [initialSlide, setInitialSlide] = useState();
    const navigate = useNavigate();

    // 첫방문 유저 캐러셀 상태 제어
    useEffect(() => {
        localStorage.getItem('isFirstVisitor') ? setInitialSlide(3) : setInitialSlide(0);
    }, []);
    
    const handleStart = () => {
        localStorage.setItem('isFirstVisitor', 'true');
        navigate('people', { state: {} });
    };

    // 초기 슬라이드가 설정되기 전에는 캐러셀이나 다른 컨텐츠 렌더링 방지
    if (initialSlide === null) {
        return null;
    }

    return (
        <Swiper
            initialSlide={initialSlide}
            modules={[Pagination]}
            spaceBetween={0}
            pagination={{
                clickable: true,
            }}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <SwiperContainer>
                        <img src={slide.img} alt={slide.text} />
                        {slide.text === '시작하기' ? (
                            <button onClick={handleStart}>{slide.text}</button>
                        ) : (
                            slide.text
                        )}
                    </SwiperContainer>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
