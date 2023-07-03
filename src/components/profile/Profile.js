
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "./profile.css";
import "./profiles.scss";
import logo from './../../images/logo.png';
import background from './../../images/background.png';
import Link from '@mui/material/Link';

export default function Profile() {

  return (
    <div className="card">
      <img src={background} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src={logo} alt="" />
          <div className="card__header-text">
            <h3 className="card__title">Jose R</h3>
            <span className="card__tagline">Welcome to my page</span>            
            <span className="card__status"><Link href="https://github.com/p0dxD" rel="noreferrer" target="_blank"><GitHubIcon /></Link><Link rel="noreferrer" href="mailto:podoi@me.com"><EmailIcon /></Link></span>
            <div className="arrow arrow-first"></div>
            <div className="arrow arrow-second"></div>
          </div>
        </div>
        <p className="card__description">Insert interesting information here. Images were <Link href="https://hotpot.ai/art-generator">ai</Link> generated</p>
      </div>
    </div>
  );

}