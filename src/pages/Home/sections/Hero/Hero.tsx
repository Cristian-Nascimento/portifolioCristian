import fundo from '../../../../assets/fundo branco perfil.png'
import './Hero.css'

const Hero = () => {
    return (
        <section className="home_home" id="home">
            <div className="home-img">
                <img src={fundo} alt="Imagem de perfil" className='img'/>
            </div>

            <div className="home-content">
                <h3>Olá seja bem vindo</h3>
                <p>
                    Sou desenvolvedor Backend utilizando as tecnologias Node.js, Express.js e MongoDB.
                </p>

                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/cristian-rosa-nascimento/" target="_blank"><i
                        className='bx bxl-linkedin'></i></a>
                    <a href="https://github.com/Cristian-Nascimento" target="_blank"><i className='bx bxl-github'></i></a>
                    <a href="https://www.instagram.com/cristian._nascimento/" target="_blank"><i
                        className='bx bxl-instagram'></i></a>
                </div>
            </div>
        </section>
    )
}

export default Hero