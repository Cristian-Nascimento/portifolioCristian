import './SoftSkills.css'

const SoftSkills = () => {
    return (
        <section className="soft-skills" id="soft-skills">
            <h2 className="heading">Tecnologias</h2>
            <p className="letter">Possuo experiências práticas com diversas tecnologias modernas essenciais para o desenvolvimento Backend e serviços em nuvem.</p>
            <div className="technologies-container">
                <div className="technology">
                    <i className='bx bxl-python'></i>
                    <p className="description-icon">Python</p>
                    <p className="description">Apesar de não utilizar no meu dia a dia, foi a primeira linguagem de programação que de fato me despertou um forte interesse de seguir carreira como Dev.</p>
                </div>
                <div className="technology">
                    <i className='bx bxl-javascript'></i>
                    <p className="description-icon">JavaScript</p>
                    <p className="description">Tenho fortes conhecimentos e habilidades com JavaScript sabendo deste a sua semântica até conhecimentos avançados.</p>
                </div>
                <div className="technology">
                    <i className='bx bxl-typescript'></i>
                    <p className="description-icon">TypeScript</p>
                    <p className="description">Tenho conhecimentos com TypeScript apesar de não utilizar no meu atual trabalho, tenho usado bastante na faculdade.</p>
                </div>
                <div className="technology">
                    <i className='bx bxl-nodejs'></i>
                    <p className="description-icon">Node.js</p>
                    <p className="description">Com 2 anos de experiência, implemento e melhoro aplicações backend focando no desenvolvimento ágil e escrita de código limpa. RESTful API usando NodeJS, Express e Mongoose</p>
                </div>
                <div className="technology">
                    <i className='bx bxl-mongodb'></i>
                    <p className="description-icon">MongoDB</p>
                    <p className="description">Com 2 anos de experiência, crio, melhoro e corrigo querys do mongoose, utilizando métodos para melhorar a performance e o tempo de resposta.</p>
                </div>
                <div className="technology">
                    <i className='bx bxl-docker'></i>
                    <p className="description-icon">Docker</p>
                    <p className="description">Adiquirindo conhecimentos Docker.</p>
                </div>
                <div className="technology">
                    <i className='bx bxl-aws'></i>
                    <p className="description-icon">AWS</p>
                    <p className="description">Possuo fortes conhecimentos com Aws deste conceitos básicos até a realização do Deploy de uma aplicação.</p>
                </div>
                <div className="technology">
                    <i className='bx bxl-git'></i>
                    <p className="description-icon">Git</p>
                    <p className="description">Possuo fortes conhecomentos com o versionamento de código, deste a clonagem do repositório, criação de branches, commiting, merge, entre mais.</p>
                </div>
                <div className="technology">
                    <i className='bx bxl-github'></i>
                    <p className="description-icon">github</p>
                    <p className="description">Local onde armazendo meus projetos e ativiades que realizo em cursos.</p>
                </div>
                <div className="technology">
                    <i className='bx bxl-react'></i>
                    <p className="description-icon">React</p>
                    <p className="description">Atualmente aprendendo React.</p>
                </div>
            </div>
        </section>
    )
}

export default SoftSkills