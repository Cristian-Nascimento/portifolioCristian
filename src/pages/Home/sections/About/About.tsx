import fotoPerfil from '../../../../assets/perfil-corpo.jpg'
import './About.css'

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <h2 className="headingAbout">Conheça um pouco sobre mim</h2>
                <p>
                    Oi, sou o Cristian, um entusiasta de programação!
                    Comecei nessa jornada enquanto cursava Engenharia de Produção e,
                    hoje, quase formando em Sistemas de Informação, que coisa neh! :)
                </p>
                <p>
                    Além disso, sou apaixonado por aprender coisas novas,
                    sempre buscando me aprimorar e me manter atualizado com as novas tecnologias.
                    Sempre disposto a ajudar e a aprender com os outros.
                </p>
            </div>
            <div className="about-img">
                <img src={fotoPerfil} alt="Imagem de perfil" />
            </div>
        </section>
    )
}

export default About