import './Certificates.css';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';
import { useTranslation } from 'react-i18next';

interface Certificate {
    id: number;
    image: string;
}

const Certificates: React.FC = () => {
    const { t } = useTranslation();

    const data: Certificate[] = [
        { id: 1, image: "https://hermes.dio.me/certificates/cover/5E6AC942.jpg" },
        { id: 2, image: "https://hermes.dio.me/certificates/cover/5182E843.jpg" },
        { id: 3, image: "https://hermes.dio.me/certificates/cover/B8AFDC7A.jpg" },
        { id: 4, image: "https://hermes.dio.me/certificates/cover/F01B892A.jpg" },
        { id: 5, image: "https://hermes.dio.me/certificates/cover/D7279287.jpg" },
        { id: 6, image: "https://hermes.dio.me/certificates/cover/A68A0BBF.jpg" },
        { id: 7, image: "https://hermes.dio.me/certificates/cover/30CBC209.jpg" },
        { id: 8, image: "https://hermes.dio.me/certificates/cover/U9XWDNZA.jpg" },
        { id: 9, image: "https://hermes.dio.me/certificates/cover/LATQRES2.jpg" },
        { id: 10, image: "https://hermes.dio.me/certificates/cover/PFBTI2IW.jpg" },
        { id: 11, image: "https://hermes.dio.me/certificates/cover/2P0BYNQQ.jpg" },
        { id: 12, image: "https://hermes.dio.me/certificates/cover/GWXSH8DD.jpg" },
        { id: 13, image: "https://hermes.dio.me/certificates/cover/BRADWYFH.jpg" },
        { id: 14, image: "https://hermes.dio.me/certificates/cover/8CZ5EOUV.jpg" },
        { id: 15, image: "https://hermes.dio.me/certificates/cover/PMF5JF4V.jpg" }
    ];

    const alts = t('certificates.alts', { returnObjects: true }) as string[];

    const progressCircle = useRef<SVGSVGElement | null>(null);
    const progressContent = useRef<HTMLSpanElement | null>(null);

    const onAutoplayTimeLeft = (_swiper: SwiperType, time: number, progress: number) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', (1 - progress).toString());
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <section className='certificate' id="certificates">
            <h2 className="headingSkills">{t('certificates.heading')}</h2>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.image} alt={alts[index]} className='slide-item' />
                    </SwiperSlide>
                ))}
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </section>
    );
};

export default Certificates;