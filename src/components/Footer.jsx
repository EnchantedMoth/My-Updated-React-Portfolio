import githubLogo from '../assets/icons/github-mark-white.png'
import './footer.css'
export default function Footer() {
    return (
        <div className='container-fluid text-center p-3 custom-footer'>
            <a href="https://github.com/EnchantedMoth" target="_blank">
                <img className='custom-logo' src={githubLogo} alt="Github Logo" />
            </a>
        </div>
    )
}