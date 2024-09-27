import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { SliderCard } from './SliderCard';

export const ReviewSlider = () => {
    const reviewText1 = "Hi I'am purchased this theme a few days ago and this is very amazing, they give me great help with some setup issues."
    const reviewText2 = "The theme is amazing, flexible and working fine! Updates are always timely. But their customer support is what makes One kit really great for me."
    const reviewText3 = "Absolutely love the Onekit theme. I have used it on numerous websites and hands down, by far, the best one page theme"

    const profileName = {
        profile1 : {
            name : "Sebastion Doe",
            rate :"Manager Zero Company"
        },
        profile2 : {
            name :"Tom Robert",
            rate : "Manager Five Company",
        },
        profile3 : {
            name: "Jessica Ramos",
            rate : "CEO One Company",
        }
    }
    
    return (
        <>
            <Swiper
                slidesPerView={window.innerWidth < 768 ? 1 : 2}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="w-full h-full "
            >
                <SwiperSlide>
                    <SliderCard img="/img1-small.jpg" profileName={profileName.profile1} reviewText={reviewText1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard img="/img2-small.jpg" profileName={profileName.profile2} reviewText={reviewText2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard img="/img3-small.jpg" profileName={profileName.profile3} reviewText={reviewText3}/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}