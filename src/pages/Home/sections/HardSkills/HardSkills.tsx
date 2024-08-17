import './HardSkills.css'

const HardSkills = () => {
    return (
        <section className="hard-skills" id="hard-skills">
            <h2 className="headingSkills">Minhas Habilidades</h2>
            <p className="letter">Possuo uma série de hard skills, fundamentado em experiências práticas e educação formal. Essas habilidades incluem um forte foco no trabalho em equipe, proficiência em metodologias ágeis e um compromisso com a escrita de código limpo e sustentável.</p>
            <div className="skills-container">
                <div className="skill">
                    <i className='bx bx-group'></i>
                    <p className="description-icon">Trabalho em Equipe</p>
                    <p className="description">Tenho grande facilidade de trabalhar em equipe, visando o respeito e a eficácia da comunicação.</p>
                </div>
                <div className="skill">
                    <i className='bx bxs-briefcase'></i>
                    <p className="description-icon">Metodologia Ágil</p>
                    <p className="description">Aplico metodologias ágeis, como Kanban, para gerenciar projetos e otimizar a eficiência do fluxo do meu trabalho.</p>
                </div>
                <div className="skill">
                    <i className='bx bxs-rocket'></i>
                    <p className="description-icon">Proatividade</p>
                    <p className="description">Tomo iniciativas em tarefas e correções de bugs, buscando a conclusão eficaz, e mais pontual o possível.</p>
                </div>
                <div className="skill">
                    <i className='bx bx-code-block'></i>
                    <p className="description-icon">Novas Tecnologias</p>
                    <p className="description">Tenho facilidadem em aprender novas tecnologia e me adaptar a novas e ferramentas e mudanças, mantendo-me atualizado com as últimas tendências do mercado.</p>
                </div>
                <div className="skill">
                    <i className='bx bxs-pencil'></i>
                    <p className="description-icon">Código Limpo</p>
                    <p className="description">Escrevo códigos limpos, bem estruturados e de fácil manutenção, garantindo a escalabilidade a longo prazo.</p>
                </div>
                <div className="skill">
                    <i className='bx bxs-check-shield'></i>
                    <p className="description-icon">TDD</p>
                    <p className="description">Ajudei a implementar a métodologia TDD no meu emprego atual, com a espectativa de entregar as sprints com zero bugs!</p>
                </div>
            </div>
        </section>
    )
}

export default HardSkills