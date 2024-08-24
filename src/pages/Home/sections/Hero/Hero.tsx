import { useLayoutEffect, useRef } from 'react'
import fundo from '../../../../assets/fundo preto perfil.png'
import './Hero.css'
import { gsap } from 'gsap';

const Hero = () => {
    const el = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline>();

    useLayoutEffect(() => {
        gsap.context(() => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: '.home_home',
                    start: 'top center',
                }
            })
            .fromTo('.home-content, .home-img', {
                opacity: 0,
                x: 160,
            }, {
                opacity: 1,
                x: 0,
                duration: 2
            })
        }, el);
    
        return () => {
            gsap.killTweensOf('.home_home');
        }
    }, []);
    return (
        <section className="home_home" id="home" ref={el}>
            <div className="home-content">
                <h3>DESENVOLVEDOR BACK-END</h3>
                <br></br>
                <p>
                    Com 2 anos de experiência em Node.js, MongoDB e Express, tenho capacidade de construir aplicações
                    escaláveis e de alta performance, aplicando metodologias ágeis,
                    clean code e TDD. Expertise em Docker e AWS, e versionamento de código Git.
                </p>


                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/cristian-rosa-nascimento/" target="_blank"><i
                        className='bx bxl-linkedin'></i></a>
                    <a href="https://github.com/Cristian-Nascimento" target="_blank"><i className='bx bxl-github'></i></a>
                    <a href="https://www.instagram.com/cristian._nascimento/" target="_blank"><i
                        className='bx bxl-instagram'></i></a>
                </div>
            </div>

            <div className="home-img">
                <img src={fundo} alt="Imagem de perfil" className='img' />
            </div>
        </section>
    )
}

export default Hero