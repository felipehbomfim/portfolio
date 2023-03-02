import './about.css'
import AboutImage from '../../assets/logo.jpg'
import CV from '../../assets/CV.pdf'
import {HiDownload} from "react-icons/hi";
import Card from "../../components/Card";
import data from "./data";

const About = () => {
    return(
         <section id="about">
             <div className="container about__container">
                 <div className="about__left">
                        <div className="about__portrait">
                            <img className="" src={AboutImage} alt="About Image"/>
                        </div>
                 </div>
                 <div className="about__right">
                    <h2>About Me</h2>
                     <div className="about__cards">
                         {
                             data.map(item => (
                                 <Card key={item.id} className="about__card">
                                     <span className="about__card-icon">{item.icon}</span>
                                     <h5>{item.title}</h5>
                                     <small>{item.desc}</small>
                                 </Card>
                             ))
                         }
                     </div>
                     <p>
                         Hey, my name is Felipe Bomfim, living in Curitiba - Paraná, Brazil. I love games and technology,  and that what motivated me to become a developer. I love what I do, and I expect to start develop full native mobile applications in a near future.
                     </p>
                     <p>
                         I have more than 3 years of experience as full stack developer, developing ERPs, integrations, apis, support clients and among others. Always looking forward and studying new technologies. I already did some webviews, all by my self, since the full code, utiling html, css, php, etc to the final app, encapsulating and publishing on app store and play store. I started to develop a full native app for android, using Kotlin, learning a lot of concepts and things and recently I start studying flutter and react deeper.
                     </p>
                     <a href={CV} download className="btn primary"> Download CV <HiDownload/></a>
                 </div>
             </div>
         </section>
    )
};

export default About;