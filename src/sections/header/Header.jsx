import './header.css'
import HeaderImage from '../../assets/logo.jpg'
import data from "./data";
const Header = () => {
    const handleOver = event => {
        event.currentTarget.classList.toggle('rubberBand');
    };


    return(
        <header id="header">
            <div className="container header__container">
                {/*<div>*/}
                {/*    <img src={HeaderImage}  className="header__profile" alt="Header Portrait"/>*/}
                {/*</div>*/}
            <h1>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">H</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">i</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">,</span><br/>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">I</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">'</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">m</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">{'\u00A0'}F</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">e</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">l</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">i</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">p</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">e</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">,</span><br/>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">F</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">u</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">l</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">l</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">{'\u00A0'}S</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">t</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">a</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">c</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">k</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">{'\u00A0'}d</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">e</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">v</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">e</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">l</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">o</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">p</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">e</span>
                <span onMouseOver={handleOver} className="bouncy" aria-hidden="true">r</span>
            </h1>
            <p>
                A full stack developer, passionate by what does.
                I expect to become a mobile developer in a near future.
            </p>
            <div className="header__cta">
                <a href="#contact" className="btn primary">Let's Talk</a>
                <a href="#portfolio" className="btn light">My Work</a>
            </div>
            <div className="header__socials">
                {
                  data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
                }
            </div>
            </div>
        </header>
    )
};

export default Header;