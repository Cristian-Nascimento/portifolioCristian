import fotoPerfil from '../../../../assets/perfil-corpo.jpg';
import './About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src={fotoPerfil} alt="Imagem de perfil" />
            </div>
            <div className="about-content">
                <h2 className="headingAbout">{t('about.heading')}</h2>
                <p>{t('about.intro')}</p>
                <p>{t('about.paragraph1')}</p>
                <p>{t('about.paragraph2')}</p>
            </div>
        </section>
    );
};

export default About;