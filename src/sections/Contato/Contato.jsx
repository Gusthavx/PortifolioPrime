import Typing from "../../components/Typing/Typing";
import "./Contato.css";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contato = () => (
    <section id="contato" className="contato-section">
        <h2>Vamos conversar?</h2>
        <div className="minhas-redes-sociais">
            <a href="https://wa.me/5575981189188" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.linkedin.com/in/Gusthavx/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Gusthavx" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://instagram.com/Gusthavx" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="mailto:Gusthavosilvabarreto123@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail /></a>
        </div>
        <p className="citacao">Design encontra lógica. Estética encontra performance.</p>
        <Typing textoCompleto={"Enjoy the journey!"} className="p-typing" />
    </section>
)

export default Contato;