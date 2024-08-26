import fotoPerfil from '../../../../assets/perfil-corpo.jpg'
import './About.css'

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src={fotoPerfil} alt="Imagem de perfil" />
            </div>
            <div className="about-content">
                <h2 className="headingAbout">Conheça um pouco sobre mim</h2>
                <p>
                    Oi, sou o Cristian.
                </p>
                <p>
                    Comecei nessa jornada em 2019, quando entrei na faculdade de Sistemas de informação.
                    Durante esse tempo, aprendi muito sobre programação,
                    me expecializei em desenvolvimento backend e atualemnte estou aprendendo e praticando desenvolvimento web.
                </p>
                <p>
                    Além disso, sou apaixonado por aprender coisas novas,
                    sempre buscando me aprimorar e me manter atualizado com as novas tecnologias.
                </p>
            </div>
        </section>
    )
}

export default About