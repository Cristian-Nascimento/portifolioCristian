import reservationTable from '../../../../assets/print-reservationTable.png'
import watch from '../../../../assets/print-Watch.png'
import dashboard from '../../../../assets/print-dashboard.png'
import calculator from '../../../../assets/print-calculator.png'
import calendarPicture from '../../../../assets/print-calendar.png'
import './Projects.css'

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <section className="projects" id="projects">
                    <h2 className="heading">Projetos</h2>
                    
                    <div className="projects-container">
                        <div className="projects-box">

                            <div className="projects-info">
                                <h4>Dashboard Financeiro</h4>
                                <img src={dashboard} alt="Dashboard Financeiro" />
                                <p className='paragrafoText'>Aplicação web feita com React que consulta e realiza operações (CRUD) em uma API (nodeJs/mongoDb). A finalidade é ter um controle financeiro com gráfico e operações CRUD.</p>
                                <p><strong>Tecnologias:</strong> React, Node.js, MongoDB</p>
                            </div>
                            <div className="projects-buttons">
                                <a href="https://github.com/Cristian-Nascimento/reservationTableFront" target="_blank" className="btn">WEB</a>
                                <a href="https://github.com/Cristian-Nascimento/reservationTableAPI" target="_blank" className="btn">API</a>
                                <a href="https://dashboardcristian.netlify.app" target="_blank" className="btn">ACESSAR</a>
                            </div>
                        </div>

                        <div className="projects-box">
                            <div className="projects-info">
                                <h4>Sistema de Reserva de Mesas</h4>
                                <img src={reservationTable} alt="Sistema de Reserva de Mesas" />
                                <p className='paragrafoText'>Aplicação web feita com React que consulta e realiza operações (CRUD) em uma API (nodeJs/mongoDb). A finalidade é realizar reservas de mesas em um restaurante fictício.</p>
                                <p><strong>Tecnologias:</strong> React, Node.js, MongoDB</p>
                            </div>
                            <div className="projects-buttons">
                                <a href="https://github.com/Cristian-Nascimento/reservationTableFront" target="_blank" className="btn">WEB</a>
                                <a href="https://github.com/Cristian-Nascimento/reservationTableAPI" target="_blank" className="btn">API</a>
                                <a href="https://realfit.netlify.app/" target="_blank" className="btn">ACESSAR</a>
                            </div>
                        </div>

                        <div className="projects-box">
                            <div className="projects-info">
                                <h4>Relógio Minimalista</h4>
                                <img src={watch} alt="Relógio Personalizado" />
                                <p className='paragrafoText'>Simples aplicação feita com Html 5, css 3 e JavaScript.</p>
                                <p><strong>Tecnologias:</strong> HTML5, CSS3, JavaScript</p>
                            </div>
                            <div className="projects-buttons">
                                <a href="https://github.com/Cristian-Nascimento/Cristian-Nascimento.github.io" target="_blank" className="btn">CÓDIGO WEB</a>
                                <a href="https://modernclocks.netlify.app/" target="_blank" className="btn">ACESSAR</a>
                            </div>
                        </div>

                        <div className="projects-box">
                            <div className="projects-info">
                                <h4>Calculadora Minimalista</h4>
                                <img src={calculator} alt="Calculadora Personalizado" />
                                <p className='paragrafoText'>Calculadora minimalista feita com React, usando local estorage para armazenagem temporária dos dados.</p>
                                <p><strong>Tecnologias:</strong> HTML5, CSS3, React</p>
                            </div>
                            <div className="projects-buttons">
                                <a href="https://github.com/Cristian-Nascimento/scientific-calculator" target="_blank" className="btn">CÓDIGO WEB</a>
                                <a href="https://cristiancalculator.netlify.app/" target="_blank" className="btn">ACESSAR</a>
                            </div>
                        </div>

                        <div className="projects-box">
                            <div className="projects-info">
                                <h4>Calendário Minimalista</h4>
                                <img src={calendarPicture} alt="Calendário Personalizado" />
                                <p className='paragrafoText'>Calendário minimalista - Apenas treinando conceitos de data.</p>
                                <p><strong>Tecnologias:</strong> HTML5, CSS3, JavaScript</p>
                            </div>
                            <div className="projects-buttons">
                                <a href="https://github.com/Cristian-Nascimento/modern-calendar" target="_blank" className="btn">CÓDIGO WEB</a>
                                <a href="https://master--moderncalendar.netlify.app/" target="_blank" className="btn">ACESSAR</a>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </section>
    )
}

export default Projects