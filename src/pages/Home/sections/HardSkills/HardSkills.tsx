import { useLayoutEffect, useRef } from 'react'

import './HardSkills.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const HardSkills = () => {
    const el = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline>();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.context(() => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: '.skills-container',
                    scrub: true,
                    start: 'top 800px',
                    end: 'bottom 700px',
                }
            })
                .fromTo('#skill-1', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#skill-2', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#skill-3', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#skill-4', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#skill-5', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#skill-6', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                });
        }, el);

        return () => {
            gsap.killTweensOf(".skills-container");
        }
    }, []);

    return (
        <section className="hard-skills" id="hard-skills" ref={el}>
            <h2 className="headingSkills">Minhas Habilidades</h2>
            <p className="letter">Possuo uma série de hard skills, fundamentado em experiências práticas e educação formal. Essas habilidades incluem um forte foco no trabalho em equipe, proficiência em metodologias ágeis e um compromisso com a escrita de código limpo e sustentável.</p>
            <div className="skills-container">
                <div className="skill" id="skill-1">
                    <i className='bx bx-group'></i>
                    <p className="description-icon">Trabalho em Equipe</p>
                    <p className="description">Tenho grande facilidade de trabalhar em equipe, visando o respeito e a eficácia da comunicação.</p>
                </div>
                <div className="skill" id="skill-2">
                    <i className='bx bxs-briefcase'></i>
                    <p className="description-icon">Metodologia Ágil</p>
                    <p className="description">Aplico metodologias ágeis, como Kanban, para gerenciar projetos e otimizar a eficiência do fluxo do meu trabalho.</p>
                </div>
                <div className="skill" id="skill-3">
                    <i className='bx bxs-rocket'></i>
                    <p className="description-icon">Proatividade</p>
                    <p className="description">Tomo iniciativas em tarefas e correções de bugs, buscando a conclusão eficaz, e mais pontual o possível.</p>
                </div>
                <div className="skill" id="skill-4">
                    <i className='bx bx-code-block'></i>
                    <p className="description-icon">Novas Tecnologias</p>
                    <p className="description">Tenho facilidadem em aprender novas tecnologia e me adaptar a novas e ferramentas e mudanças, mantendo-me atualizado com as últimas tendências do mercado.</p>
                </div>
                <div className="skill" id="skill-5">
                    <i className='bx bxs-pencil'></i>
                    <p className="description-icon">Código Limpo</p>
                    <p className="description">Escrevo códigos limpos, bem estruturados e de fácil manutenção, garantindo a escalabilidade a longo prazo.</p>
                </div>
                <div className="skill" id="skill-6">
                    <i className='bx bxs-check-shield'></i>
                    <p className="description-icon">TDD</p>
                    <p className="description">Ajudei a implementar a métodologia TDD no meu emprego atual, com a espectativa de entregar as sprints com zero bugs!</p>
                </div>
            </div>
        </section>
    )
}

export default HardSkills