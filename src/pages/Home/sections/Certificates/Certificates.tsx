import './Certificates.css'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Certificates = () => {

    const data = [
        {
            id: 1,
            image: "https://hermes.dio.me/certificates/cover/5E6AC942.jpg",
            alt: "Certificado de conclusão do curso de Nuvem AWS - Nexa Resources da DIO"
        },
        {
            id: 2,
            image: "https://hermes.dio.me/certificates/cover/5182E843.jpg",
            alt: "Certificado de conclusão da aceleração: International Career Acceleration #3 TONNIE - Talent On European Experiences da DIO"
        },
        {
            id: 3,
            image: "https://hermes.dio.me/certificates/cover/B8AFDC7A.jpg",
            alt: "Certificado de conclusão do curso de Formação HTML Web Developer da DIO"
        },
        {
            id: 4,
            image: "https://hermes.dio.me/certificates/cover/F01B892A.jpg",
            alt: "Certificado de conclusão da Aceleração Avanade - APIs: Boas práticas, proteção, Gateways e modelos ES6 da DIO"
        },
        {
            id: 5,
            image: "https://hermes.dio.me/certificates/cover/D7279287.jpg",
            alt: "Certificado de conclusão do curso de Formação CI/CD com GitLab da DIO"
        },
        {
            id: 6,
            image: "https://hermes.dio.me/certificates/cover/A68A0BBF.jpg",
            alt: "Certificado de conclusão do curso de Chat-GPT - O Essencial da DIO"
        },
        {
            id: 7,
            image: "https://hermes.dio.me/certificates/cover/30CBC209.jpg",
            alt: "Certificado de conclusão do curso de Fundamentos de Computação em Nuvem na AWS da DIO"
        },
        {
            id: 8,
            image: "https://hermes.dio.me/certificates/cover/U9XWDNZA.jpg",
            alt: "Certificado de conclusão do curso de Princípios de IA e Desenvolvimento de Software da DIO"
        },
        {
            id: 9,
            image: "https://hermes.dio.me/certificates/cover/LATQRES2.jpg",
            alt: "Certificado de conclusão do curso de Microsoft Azure AI Fundamentals da DIO"
        },
        {
            id: 10,
            image: "https://hermes.dio.me/certificates/cover/PFBTI2IW.jpg",
            alt: "Certificado de conclusão do curso de Aceleração Internacional - Accessibility in Clean RESTful APIs da DIO"
        },
        {
            id: 11,
            image: "https://hermes.dio.me/certificates/cover/2P0BYNQQ.jpg",
            alt: "Certificado de conclusão do curso de Princípios de Desenvolvimento Colaborativo da DIO"
        },
        {
            id: 12,
            image: "https://hermes.dio.me/certificates/cover/GWXSH8DD.jpg",
            alt: "Certificado de conclusão do Bootcamp Nexa - Fundamentos de IA Generativa e Claude 3 da DIO"
        },
        {
            id: 13,
            image: "https://hermes.dio.me/certificates/cover/BRADWYFH.jpg",
            alt: "Certificado de conclusão do curso Fundamentos do React da DIO"
        }
    ]

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (_, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <section className='certificate' id="certificates">
            <h2 className="headingSkills">Meus certificados</h2>

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
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.image} alt={item.alt} className='slide-item' />
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
    )
}

export default Certificates