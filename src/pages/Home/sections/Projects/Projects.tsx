import reservationTable from '../../../../assets/print-reservationTable.png';
import watch from '../../../../assets/print-Watch.png';
import dashboard from '../../../../assets/print-dashboard.png';
import portifolio from '../../../../assets/print-portifolio.png';
import './Projects.css';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <section className="projects" id="projects">
          <h2 className="heading">{t('projects.heading')}</h2>

          <div className="projects-container" >
            <div className="projects-box" id="project-1">
              <div className="projects-info">
                <h4>{t('projects.project1.title')}</h4>
                <img src={portifolio} alt={t('projects.project1.title')} />
                <p className='paragrafoText'>{t('projects.project1.description')}</p>
                <p><strong>{t('projects.project1.technologies')}</strong></p>
              </div>
              <div className="projects-buttons">
                <a href="https://github.com/Cristian-Nascimento/portifolioCristian" target="_blank" className="btn">{t('projects.project1.buttons.sourceCode')}</a>
              </div>
            </div>

            <div className="projects-box" id="project-2">
              <div className="projects-info">
                <h4>{t('projects.project2.title')}</h4>
                <img src={dashboard} alt={t('projects.project2.title')} />
                <p className='paragrafoText'>{t('projects.project2.description')}</p>
                <p><strong>{t('projects.project2.technologies')}</strong></p>
              </div>
              <div className="projects-buttons">
                <a href="https://github.com/Cristian-Nascimento/reservationTableFront" target="_blank" className="btn">{t('projects.project2.buttons.web')}</a>
                <a href="https://github.com/Cristian-Nascimento/reservationTableAPI" target="_blank" className="btn">{t('projects.project2.buttons.api')}</a>
                <a href="https://dashboardcristian.netlify.app" target="_blank" className="btn">{t('projects.project2.buttons.access')}</a>
              </div>
            </div>

            <div className="projects-box" id="project-3">
              <div className="projects-info">
                <h4>{t('projects.project3.title')}</h4>
                <img src={reservationTable} alt={t('projects.project3.title')} />
                <p className='paragrafoText'>{t('projects.project3.description')}</p>
                <p><strong>{t('projects.project3.technologies')}</strong></p>
              </div>
              <div className="projects-buttons">
                <a href="https://github.com/Cristian-Nascimento/reservationTableFront" target="_blank" className="btn">{t('projects.project3.buttons.web')}</a>
                <a href="https://github.com/Cristian-Nascimento/reservationTableAPI" target="_blank" className="btn">{t('projects.project3.buttons.api')}</a>
                <a href="https://realfit.netlify.app/" target="_blank" className="btn">{t('projects.project3.buttons.access')}</a>
              </div>
            </div>

            <div className="projects-box" id="project-4">
              <div className="projects-info">
                <h4>{t('projects.project4.title')}</h4>
                <img src={watch} alt={t('projects.project4.title')} />
                <p className='paragrafoText'>{t('projects.project4.description')}</p>
                <p><strong>{t('projects.project4.technologies')}</strong></p>
              </div>
              <div className="projects-buttons">
                <a href="https://github.com/Cristian-Nascimento/Cristian-Nascimento.github.io" target="_blank" className="btn">{t('projects.project4.buttons.sourceCode')}</a>
                <a href="https://modernclocks.netlify.app/" target="_blank" className="btn">{t('projects.project4.buttons.access')}</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Projects;