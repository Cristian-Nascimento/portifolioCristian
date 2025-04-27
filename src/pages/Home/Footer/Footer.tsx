import './Footer.css'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
        <p className="copyright">
            &copy; {t('footer.heading')}
        </p>
    </footer>
    )
}

export default Footer