import './App.css';

function App() {
    return (
        <div className='app'>
            <Header />
        </div>
    );
}

function Header() {
    return (
        <div className='header'>
            <Logo />
            <Navigation />
        </div>
    );
}

function Logo() {
    return (
        <div className='logo'>
            <div className='name'>
                <a href='#'>
                    <h3 className='heading-3'>Lachezar Boyadzhiev</h3>
                    <span className='subheading'>Front End Developer</span>
                </a>
            </div>
        </div>
    );
}
function Navigation() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Ecperience</a>
                </li>
                <li>
                    <a href='#'>Projects</a>
                </li>
                <li>
                    <a href='#'>Skills</a>
                </li>
                <li>
                    <a href='#'>Education</a>
                </li>
                <li>
                    <a href='#'>Awards</a>
                </li>
                <li>
                    <a href='#'>Resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default App;
