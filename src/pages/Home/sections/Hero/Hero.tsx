import fundo from '../../../../assets/perfil_1.svg';
import './Hero.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="home_home" id="home">
            <div className="home-img">
                <img src={fundo} alt="Imagem de perfil" className='img' />
            </div>
            <div className="home-content">
                <h1>Cristian Nascimento</h1>
                <h3>{t('hero.title')}</h3>
                <br />
                <p>{t('hero.description')}</p>

                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/cristian-rosa-nascimento/" target="_blank"><i
                        className='bx bxl-linkedin'></i></a>
                    <a href="https://github.com/Cristian-Nascimento" target="_blank"><i className='bx bxl-github'></i></a>
                    <a href="https://www.instagram.com/cristian._nascimento/" target="_blank"><i
                        className='bx bxl-instagram'></i></a>
                </div>
            </div>
        </section>
    );
};

export default Hero;