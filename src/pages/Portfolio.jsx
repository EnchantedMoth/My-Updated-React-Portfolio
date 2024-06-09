import games from '../assets/images/Games.jpg'
import computer from '../assets/images/Computer.jpg'
import code from '../assets/images/Code.jpg'
import keyboard from '../assets/images/Keyboard.jpg'
import githubLogo from '../assets/icons/github-mark.png'
import '../App.css'
import './portfolio.css'
const projectInfo = [
    {
        title: 'Achievement Hunter',
        text: 'App for hunting achievements in video games',
        link: 'https://noah-boat13.github.io/Hunters-Path-achievement-scavenger-tool/',
        githubLink: 'https://github.com/noah-boat13/Hunters-Path-achievement-scavenger-tool?tab=readme-ov-file',
        image: games
    },
    {
        title: 'Note Taker',
        text: 'App for making notes to view later',
        link: 'https://express-note-taker-lh3f.onrender.com/',
        githubLink: 'https://github.com/EnchantedMoth/Express-Note-Taker?tab=readme-ov-file',
        image: keyboard
    },
    {
        title: 'E-commerce Database',
        text: 'A backend database that stores items for sale',
        link: 'https://drive.google.com/file/d/1kyHHPwqVtPJzmTBATDAUHqRn1i8a2IKo/view',
        githubLink: 'https://github.com/EnchantedMoth/ORM-E-Commerce?tab=readme-ov-file',
        image: computer
    }
]

export default function Portfolio() {
    return(
    <div className="container pt-3">
      <h2 className='text-light my-font'>Portfolio</h2>
      <div className="row">
        {projectInfo.map((projectInfo, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-3">
            <div className="card position-relative card-custom">
                <img
                  className="card-img-top"
                  src={projectInfo.image}
                  alt={projectInfo.title}
                />
                <div className="card-body">
                  <h4 className="card-title">{projectInfo.title}</h4>
                  <a href={projectInfo.githubLink} target="_blank">
                    <img
                      src={githubLogo}
                      className="ghLogo"
                      alt="Github logo"
                    />
                  </a>
                  <p className="card-text">
                    {projectInfo.text}
                  </p>
                  <a href={projectInfo.link} className='btn btn-secondary'>Check it out</a>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}