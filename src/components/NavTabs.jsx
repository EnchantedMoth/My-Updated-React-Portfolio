import { Link, useLocation } from 'react-router-dom';
import '../App.css'
import './navTabs.css'


function Navigation() {
    const currentPage = useLocation().pathname;
    return (
        <nav id='custom-nav' className='my-font'>
            <ul className='nav justify-content-end'>
                <li id='custom-nav' className='nav-item custom-nav'>
                    <Link
                        to='/'
                        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >
                      Home  
                    </Link>
                </li>
                <li id='custom-nav' className='nav-item'>
                    <Link
                        to='/portfolio'
                        className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </Link>
                </li>
                <li id='custom-nav' className='nav-item'>
                    <Link
                        to='/contact'
                        className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact Me
                    </Link>
                </li>
                <li id='custom-nav' className='nav-item'>
                    <Link
                        to='/resume'
                        className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

function Nav(){
    return (
        <header className='header-custom'>
            <h1 className='text-light my-font my-name'>Timothy Lewis</h1>
            <Navigation />
        </header>
    )
}

export default Nav;