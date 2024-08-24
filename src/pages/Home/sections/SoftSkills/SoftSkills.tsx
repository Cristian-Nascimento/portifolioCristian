import { useLayoutEffect, useRef } from 'react'
import './SoftSkills.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const SoftSkills = () => {

    const el = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline>();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.context(() => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: '.technologies-container',
                    scrub: true,
                    start: 'top 850px',
                    end: 'bottom 800px'
                }
            })
                .fromTo('#technology-1', {
                    opacity: 0,
                    y: 160,
                }, {
                    opacity: 1,
                    y: 0
                })
                .fromTo('#technology-2', {
                    opacity: 0,
                    y: 160,
                }, {
                    opacity: 1,
                    y: 0
                })
                .fromTo('#technology-3', {
                    opacity: 0,
                    y: 160,
                }, {
                    opacity: 1,
                    y: 0
                })
                .fromTo('#technology-4', {
                    opacity: 0,
                    y: 160,
                }, {
                    opacity: 1,
                    y: 0
                })
                .fromTo('#technology-5', {
                    opacity: 0,
                    y: 160,
                }, {
                    opacity: 1,
                    y: 0
                })
                .fromTo('#technology-6', {
                    opacity: 0,
                    y: 160,
                }, {
                    opacity: 1,
                    y: 0
                })
                .fromTo('#technology-7', {
                    opacity: 0,
                    y: 160,
                }, {
                    opacity: 1,
                    y: 0
                })
                .fromTo('#technology-8', {
                    opacity: 0,
                    y: 160,
                }, {
                    opacity: 1,
                    y: 0
                })
                .fromTo('#technology-9', {
                    opacity: 0,
                    y: 160,
                }, {
                    opacity: 1,
                    y: 0
                })
                .fromTo('#technology-10', {
                    opacity: 0,
                    y: 160,
                }, {
                    opacity: 1,
                    y: 0
                });
        }, el);

        return () => {
            gsap.killTweensOf(".technologies-container");
        }
    }, []);

    return (
        <section className="soft-skills" id="soft-skills" ref={el}>
            <h2 className="heading">Tecnologias</h2>
            <p className="letter">Possuo experiências práticas com diversas tecnologias modernas essenciais para o desenvolvimento Backend e serviços em nuvem.</p>
            <div className="technologies-container">
                <div className="technology" id="technology-1">
                    <i className='bx bxl-python'></i>
                    <p className="description-icon">Python</p>
                    <p className="description">Apesar de não utilizar no meu dia a dia, foi a primeira linguagem de programação que de fato me despertou um forte interesse de seguir carreira como Dev.</p>
                </div>
                <div className="technology" id="technology-2">
                    <i className='bx bxl-javascript'></i>
                    <p className="description-icon">JavaScript</p>
                    <p className="description">Tenho fortes conhecimentos e habilidades com JavaScript sabendo deste a sua semântica até conhecimentos avançados.</p>
                </div>
                <div className="technology" id="technology-3">
                    <i className='bx bxl-typescript'></i>
                    <p className="description-icon">TypeScript</p>
                    <p className="description">Tenho conhecimentos com TypeScript apesar de não utilizar no meu atual trabalho, tenho usado bastante na faculdade.</p>
                </div>
                <div className="technology" id="technology-4">
                    <i className='bx bxl-nodejs'></i>
                    <p className="description-icon">Node.js</p>
                    <p className="description">Com 2 anos de experiência, implemento e melhoro aplicações backend focando no desenvolvimento ágil e escrita de código limpa. RESTful API usando NodeJS, Express e Mongoose</p>
                </div>
                <div className="technology" id="technology-5">
                    <i className='bx bxl-mongodb'></i>
                    <p className="description-icon">MongoDB</p>
                    <p className="description">Com 2 anos de experiência, crio, melhoro e corrigo querys do mongoose, utilizando métodos para melhorar a performance e o tempo de resposta.</p>
                </div>
                <div className="technology" id="technology-6">
                    <i className='bx bxl-docker'></i>
                    <p className="description-icon">Docker</p>
                    <p className="description">Adiquirindo conhecimentos Docker.</p>
                </div>
                <div className="technology" id="technology-7">
                    <i className='bx bxl-aws'></i>
                    <p className="description-icon">Amazon Web Services</p>
                    <p className="description">Possuo fortes conhecimentos com Aws deste conceitos básicos até a realização do Deploy de uma aplicação.</p>
                </div>
                <div className="technology" id="technology-8">
                    <i className='bx bxl-git'></i>
                    <p className="description-icon">Git</p>
                    <p className="description">Possuo fortes conhecomentos com o versionamento de código, deste a clonagem do repositório, criação de branches, commiting, merge, entre mais.</p>
                </div>
                <div className="technology" id="technology-9">
                    <i className='bx bxl-github'></i>
                    <p className="description-icon">github</p>
                    <p className="description">Local onde armazendo meus projetos e ativiades que realizo em cursos.</p>
                </div>
                <div className="technology" id="technology-10">
                    <i className='bx bxl-react'></i>
                    <p className="description-icon">React</p>
                    <p className="description">Possuo conhecimentos com React, tendo feitos alguns projetos usando essa biblioteca.</p>
                </div>
            </div>
        </section>
    )
}

export default SoftSkills