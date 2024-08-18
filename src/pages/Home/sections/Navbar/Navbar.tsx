import './Navbar.css'

const Navbar = () => {
    return (
        <section className="navbar-header">
            <i className='bx bx-menu' id="menu-icon"></i>
            <nav className="navbar">
                <a href="#home">Início</a>
                <a href="#projects">Projetos</a>
                <a href="#hard-skills">Minhas Habilidades</a>
                <a href="#soft-skills">Tecnologias</a>
                <a href="#certificates">Certificados</a>
                <a href="#about">Sobre Mim</a>
            </nav>
        </section>
    );
}

export default Navbar
