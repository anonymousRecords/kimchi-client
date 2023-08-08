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

const OnboardingButton = styled.button`
    position: fixed;
    top: 450px;
`

export default function OnboardingSwiper () {
    const slides = [
        {
            img: 'public/assets/images/onboarding1.svg',
        },
        {
            img: 'public/assets/images/onboarding2.svg',
        },
        {
            img: 'public/assets/images/onboarding3.svg',
            text: `Start`,
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
                        {slide.message}
                        {slide.text === 'Start' ? (
                            <OnboardingButton onClick={handleStart}>{slide.text}</OnboardingButton>
                        ) : (
                            slide.text
                        )}
                    </SwiperContainer>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
