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
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-2', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-3', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-4', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-5', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-6', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-7', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-8', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-9', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-10', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-11', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-12', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-13', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-14', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-15', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-16', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-17', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-18', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
                .fromTo('#technology-19', {
                    opacity: 0,
                    x: 160,
                }, {
                    opacity: 1,
                    x: 0
                })
        }, el);

        return () => {
            gsap.killTweensOf(".technologies-container");
        }
    }, []);

    return (
        <section className="soft-skills" id="soft-skills" ref={el}>
            <h2 className="heading">Tecnologias</h2>
            <p className="letter">Possuo experiências práticas com diversas tecnologias modernas essenciais para o desenvolvimento Backend e serviços em nuvem.</p>
            < div className="technologies-container" >
                <div className="technology" id="technology-1">
                    <i className="devicon-nodejs-plain-wordmark"></i>
                    <p className="description-icon">Node.js</p>
                    <p className="description">Ambiente de execução para JavaScript no server-side, usado para construir APIs escaláveis.</p>
                </div>
                <div className="technology" id="technology-2">
                    <i className="devicon-express-original"></i>
                    <p className="description-icon">Express</p>
                    <p className="description">Framework minimalista para Node.js, usado para construir aplicações web e APIs.</p>
                </div>
                <div className="technology" id="technology-3">
                    <i className="devicon-nestjs-original"></i>
                    <p className="description-icon">Nest.js</p>
                    <p className="description">Framework Node.js progressivo, construído com TypeScript, focado em eficiência e escalabilidade.</p>
                </div>
                <div className="technology" id="technology-4">
                    <i className="devicon-mongodb-plain"></i>
                    <p className="description-icon">MongoDB</p>
                    <p className="description">Banco de dados NoSQL, ideal para armazenar grandes volumes de dados não estruturados.</p>
                </div>
                <div className="technology" id="technology-5">
                    <i className="devicon-mongoose-original"></i>
                    <p className="description-icon">Mongoose</p>
                    <p className="description">Biblioteca ODM para MongoDB, facilita a manipulação de dados no Node.js.</p>
                </div>
                <div className="technology" id="technology-6">
                    <i className="devicon-mysql-original"></i>
                    <p className="description-icon">MySQL</p>
                    <p className="description">Banco de dados relacional amplamente utilizado para armazenamento e gerenciamento de dados estruturados.</p>
                </div>
                <div className="technology" id="technology-7">
                    <i className="devicon-sonarqube-plain-wordmark"></i>
                    <p className="description-icon">SonarQube</p>
                    <p className="description">Plataforma para inspeção contínua de código, focada em qualidade e segurança.</p>
                </div>
                <div className="technology" id="technology-8">
                    <i className="devicon-postman-plain"></i>
                    <p className="description-icon">Postman</p>
                    <p className="description">Ferramenta usada para testar APIs, facilitando o desenvolvimento e a documentação.</p>
                </div>
                <div className="technology" id="technology-9">
                    <i className="devicon-docker-plain"></i>
                    <p className="description-icon">Docker</p>
                    <p className="description">Ferramenta para containerização de aplicações, garantindo portabilidade e consistência.</p>
                </div>
                <div className="technology" id="technology-10">
                    <i className="devicon-git-plain"></i>
                    <p className="description-icon">Git</p>
                    <p className="description">Sistema de versionamento de código, essencial para controle e colaboração em projetos.</p>
                </div>
                <div className="technology" id="technology-11">
                    <i className="devicon-github-original"></i>
                    <p className="description-icon">GitHub</p>
                    <p className="description">Plataforma para hospedagem de repositórios Git, facilitando a colaboração e o gerenciamento de código.</p>
                </div>
                <div className="technology" id="technology-12">
                    <i className="devicon-gitlab-plain"></i>
                    <p className="description-icon">GitLab</p>
                    <p className="description">Plataforma de CI/CD e gerenciamento de repositórios Git, oferecendo integração contínua.</p>
                </div>
                <div className="technology" id="technology-13">
                    <i className="devicon-react-original"></i>
                    <p className="description-icon">React</p>
                    <p className="description">Biblioteca JavaScript para construção de interfaces de usuário, focada em componentes reutilizáveis.</p>
                </div>
                <div className="technology" id="technology-14">
                    <i className="devicon-nextjs-plain"></i>
                    <p className="description-icon">Next.js</p>
                    <p className="description">Framework React para desenvolvimento de aplicações web com renderização híbrida.</p>
                </div>
                <div className="technology" id="technology-15">
                    <i className="devicon-jest-plain"></i>
                    <p className="description-icon">Jest</p>
                    <p className="description">Framework de testes em JavaScript, focado em simplicidade e suporte para grandes aplicações.</p>
                </div>
                <div className="technology" id="technology-16">
                    <i className="devicon-python-plain"></i>
                    <p className="description-icon">Python</p>
                    <p className="description">Linguagem versátil usada para desenvolvimento web, data science e automação.</p>
                </div>
                <div className="technology" id="technology-17">
                    <i className="devicon-javascript-plain"></i>
                    <p className="description-icon">JavaScript</p>
                    <p className="description">Linguagem principal para desenvolvimento web, essencial para front-end e back-end.</p>
                </div>
                <div className="technology" id="technology-18">
                    <i className="devicon-typescript-plain"></i>
                    <p className="description-icon">TypeScript</p>
                    <p className="description">JavaScript com tipagem estática, aumentando a segurança e a escalabilidade do código.</p>
                </div>
                <div className="technology" id="technology-19">
                    <i className="devicon-amazonwebservices-plain-wordmark"></i>
                    <p className="description-icon">Amazon Web Services</p>
                    <p className="description">Plataforma de serviços em nuvem usada para deploy, armazenamento e escalabilidade de aplicações.</p>
                </div>
            </div >
        </section>
    )
}

export default SoftSkills