import './navigation.css'
import {ReactComponent as Logo} from '../pictures/davidklmn_logo.svg';
import {ReactComponent as Message} from '../pictures/message.svg';

export default function Navigation(){
  return (
    <nav>
      <div className="nav-container">
        <a href='/'><Logo className='logo'/></a>
        <div className='navlink'>
          <ul>
            <div><a href='#home'>Home</a></div>
            <div><a href='#about'>About</a></div>
            <div><a href='#projects'>Projects</a></div>
            <div><a href='#skills'>Skills</a></div>
            <div><a href='#contact'>Contact</a></div>
          </ul>
        </div>
        <div className='cta-container'>
            <Message className='message'/>
            <a href='#hireme'>Hire Me!</a>
        </div>
      </div>
    </nav>
  );
}