import './HardSkills.css';
import { useTranslation } from 'react-i18next';

const HardSkills = () => {
    const { t } = useTranslation();

    return (
        <section className="hard-skills" id="hard-skills">
            <h2 className="headingSkills">{t('hardSkills.heading')}</h2>
            <p className="letter">{t('hardSkills.intro')}</p>
            <div className="skills-container">
                <div className="skill" id="skill-1">
                    <i className='bx bx-group'></i>
                    <p className="description-icon">{t('hardSkills.skills.teamwork.title')}</p>
                    <p className="description">{t('hardSkills.skills.teamwork.description')}</p>
                </div>
                <div className="skill" id="skill-2">
                    <i className='bx bxs-briefcase'></i>
                    <p className="description-icon">{t('hardSkills.skills.agile.title')}</p>
                    <p className="description">{t('hardSkills.skills.agile.description')}</p>
                </div>
                <div className="skill" id="skill-3">
                    <i className='bx bxs-rocket'></i>
                    <p className="description-icon">{t('hardSkills.skills.proactivity.title')}</p>
                    <p className="description">{t('hardSkills.skills.proactivity.description')}</p>
                </div>
                <div className="skill" id="skill-4">
                    <i className='bx bx-code-block'></i>
                    <p className="description-icon">{t('hardSkills.skills.newTech.title')}</p>
                    <p className="description">{t('hardSkills.skills.newTech.description')}</p>
                </div>
                <div className="skill" id="skill-5">
                    <i className='bx bxs-pencil'></i>
                    <p className="description-icon">{t('hardSkills.skills.cleanCode.title')}</p>
                    <p className="description">{t('hardSkills.skills.cleanCode.description')}</p>
                </div>
                <div className="skill" id="skill-6">
                    <i className='bx bxs-check-shield'></i>
                    <p className="description-icon">{t('hardSkills.skills.tdd.title')}</p>
                    <p className="description">{t('hardSkills.skills.tdd.description')}</p>
                </div>
            </div>
        </section>
    );
};

export default HardSkills;