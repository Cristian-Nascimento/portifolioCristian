import './Navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <section className="navbar-header">
            <i className='bx bx-menu' id="menu-icon"></i>
            <nav className="navbar">
                <a href="#home">{t('navbar.home')}</a>
                <a href="#projects">{t('navbar.projects')}</a>
                <a href="#hard-skills">{t('navbar.hardSkills')}</a>
                <a href="#soft-skills">{t('navbar.softSkills')}</a>
                <a href="#certificates">{t('navbar.certificates')}</a>
                <a href="#about">{t('navbar.about')}</a>
            </nav>
            <div className="language-switcher">
                <button onClick={() => changeLanguage('pt')}>PT</button>
                <button onClick={() => changeLanguage('en')}>EN</button>
            </div>
        </section>
    );
};

export default Navbar;