import "./Sobre.css";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaUserGraduate, FaSearch, FaUsers, FaGitAlt } from "react-icons/fa";
import {
    SiGooglesearchconsole,
    SiJavascript,
    SiSpring,
    SiPythonanywhere,
    SiMysql,
    SiC,
    SiVercel,
    SiNetlify,
    SiVite,
    SiFigma,
    SiCamunda,
    SiCanva,
    SiPython
} from "react-icons/si";

import certPython from '../../assets/certificados/Pythonbasico/Python.png';
import certAlgoritmo from '../../assets/certificados/AlgoritmoeProgramação/AlgoritmoProgramação.png';

import Carrossel from "../../components/Carrosel/Carrosel";
import { useState } from "react";
import ModalCertificado from "../../components/ModalCertificado/ModalCertificado";


const certificados = [
    certPython,
    certAlgoritmo,
];

const Sobre = () => {

    const [modalAberto, setModalAberto] = useState(false);
    const [certificadoSelecionado, setCertificadoSelecionado] = useState(null);

    const abrirModal = (certificado) => {
        setCertificadoSelecionado(certificado);
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setCertificadoSelecionado(null);
    };

    return (
        <section id="sobre" className="sobre-section">
            <div className="texto-sobre">
                <div className="card-tecnologias-ferramentas">
                    <h2>Tecnologias & Linguagens</h2>
                    <div className="tecnologias">
                        <div className="grupo-1">
                            <span className="tecnologia" title="Java"><FaJava /></span>
                            <span className="tecnologia" title="React"><FaReact /></span>
                            <span className="tecnologia" title="JavaScript"><SiJavascript /></span>
                            <span className="tecnologia" title="Spring"><SiSpring /></span>
                        </div>
                        <div className="grupo-2">
                            <span className="tecnologia" title="HTML5"><FaHtml5 /></span>
                            <span className="tecnologia" title="CSS3"><FaCss3Alt /></span>
                            <span className="tecnologia" title="Python"><SiPython /></span>
                            <span className="tecnologia" title="C"><SiC /></span>
                        </div>
                    </div>
                    <h2>Ferramentas & Plataformas</h2>
                    <div className="ferramentas">
                        <div className="grupo-1">
                            <span className="ferramenta" title="Git"><FaGitAlt /></span>
                            <span className="ferramenta" title="Vite"><SiVite /></span>
                        </div>
                        <div className="grupo-2">
                            <span className="ferramenta" title="Figma"><SiFigma /></span>
                            <span className="ferramenta" title="Canva"><SiCanva /></span>
                            <span className="ferramenta" title="Google Search Console"><SiGooglesearchconsole /></span>
                        </div>
                    </div>
                </div>
                <div className="card-sobre">
                    <h2><FaUserGraduate style={{ marginRight: "0.5rem" }} /> Quem sou eu?</h2>
                    <p>
                        Meu nome é Gusthavo Silva, sou um desenvolvedor web e Mobile em formação com foco em criar soluções funcionais, bem estruturadas e com boa experiência de uso. Estudo Analise e Desenvolvimento de Sistemas na Uniasselvi e atuo com tecnologias como Flutter, JavaScript, React.js e Spring Boot. Busco sempre aplicar boas práticas e evoluir através de projetos reais.
                    </p>
                    <h2>
                        <FaSearch style={{ marginRight: "0.5rem" }} />
                        Olhar para os detalhes.
                    </h2>
                    <p>
                        Cada detalhe, escolha e linha de código refletem o compromisso em criar algo funcional e bem-feito. Busco unir lógica, design e experiência para desenvolver soluções que sejam intuitivas, bonitas e eficientes.
                    </p>
                    <h2><FaUsers style={{ marginRight: "0.5rem" }} />Além do código.</h2>
                    <p>
                        Mais do que a parte técnica, valorizo a comunicação clara, o comprometimento com prazos e a entrega de resultados com qualidade. Acredito na empatia com o usuário, na colaboração em equipe e no foco em soluções que realmente façam a diferença.
                    </p>
                </div>
            </div>
            <div className="certificados">
                <h2>Certificados</h2>
                <Carrossel imagens={certificados} onImageClick={abrirModal} />
            </div>
            {modalAberto && (
                <ModalCertificado
                    imageSrc={certificadoSelecionado}
                    onClose={fecharModal}
                />
            )}
        </section>
    )
}

export default Sobre;

