import fotoPerfil from '../../../../assets/perfil-corpo.jpg'
import './About.css'

const About = () => {
    return (
        <section className="about" id="about">
        <div className="about-content">
            <h2 className="headingAbout">Sobre Mim</h2>
            <p>
                Olá me chamo Cristian, sou um gafanhato apaixonado por programação.
                começei nesse mundo enquanto cursava Engenharia de produção, hoje quase formando em Sistemas de Informação com um pouco mais de 2 anos de experiência, continuo a buscar e aprender novas tecnologias e ferramentas para me tornar um Dev Full Stack. 
            </p>
        </div>
        <div className="about-img">
            <img src={fotoPerfil} alt="Imagem de perfil"/>
        </div>
    </section>
    )
}

export default About