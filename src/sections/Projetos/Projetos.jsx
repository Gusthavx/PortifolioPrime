import CardProjeto from "../../components/CardProjeto/CardProjeto";
import "./Projetos.css";

import certTeladelogin from '../../assets/projetos/Teladelogin.webp';
import certport from '../../assets/projetos/port.webp';
import certPortifolio from '../../assets/projetos/Portifolio.webp';

import { FaJava, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
    SiGooglesearchconsole, SiJavascript, SiSpring, SiPostgresql, SiMysql, SiC, SiVercel, SiNetlify, SiVite, SiFigma,
    SiHtml5, SiCss3
} from "react-icons/si";
import ModalProjeto from "../../components/ModalProjeto/ModalProjeto";
import { useState } from "react";

const projetos = [
  {
    titulo: "Tela de Login",
    imagem: certTeladelogin,
    data: "Julho 2025",
      desc1: "Criei uma tela de login utilizando apenas HTML e CSS, focando em um design limpo e organizado.",
      desc2: "O objetivo foi treinar a estruturação de layouts e a estilização de interfaces, aplicando boas práticas de responsividade e alinhamento visual.",
      desc3: "Tenho o plano de evoluir esse projeto, tornando a tela totalmente funcional para uso real no dia a dia, integrando validações e autenticação de usuários.",
      tecnologias: [
      <FaHtml5 title="Html" />,
      <SiCss3 title="Css" />,
      // <SiNetlify title="Netlify" />,
      // <SiGooglesearchconsole title="Google Search Console" />
    ],
    responsivo: false,
    video: "/videos/Teladelogin.mp4",
    // videoMobile: "/videos/site-institucional-orthomoveis-mobile.mp4",
    linkSite: "https://gusthavx.github.io/TeladeLogin_RealOficial/",
    linkGithub: "https://github.com/Gusthavx/TeladeLogin_RealOficial"
  },
  {
    titulo: "Primeiro Portifolio",
    imagem: certport,
    data: "Setembro 2025",
      desc1: "Esse projeto marcou meu primeiro contato com o desenvolvimento web, quando comecei a aprender HTML e CSS.",
      desc2: "Foi onde entendi na prática como as estruturas e estilos se conectam para dar vida a uma interface.",
      desc3: "Mesmo simples, esse início despertou minha curiosidade e vontade de seguir evoluindo na área de programação.",
    tecnologias: [
      <FaHtml5 title="HTML5" />, 
      <FaCss3Alt title="CSS3" />,
    ],
    video: "/videos/port.mp4",
    linkSite: "https://gusthavx.github.io/Portfolio/",
    linkGithub: "https://github.com/Gusthavx/Portfolio"
  },
  {
    titulo: "Meu Portfólio",
    imagem: certPortifolio,
    data: "Outubro 2025",
      desc1: "Este portfólio foi criado para mostrar minha trajetória e os projetos que venho desenvolvendo. Usei React + Vite para entregar uma experiência moderna que reflete meu crescimento como desenvolvedor.",
      desc2: "O design foi pensado para ser claro e organizado, destacando o que realmente importa sem poluição visual. Mais que um CV online, ele mostra minha dedicação em criar soluções funcionais e esteticamente agradáveis.",
      desc3: "É um projeto em constante evolução, sempre atualizado conforme aprendo novas tecnologias e aprimoro minhas habilidades.",
      tecnologias: [
      //<FaReact title="React" />,
      <SiVite title="Vite" />,
      <SiHtml5 title="HTML5" />,
      <SiCss3 title="CSS3" />,
      <SiJavascript title="JavaScript" />,
      <SiVercel title="Vercel" />
      // <SiNetlify title="Netlify" local onde foi hospedado o site/>
    ],
    responsivo: true,
    // video: "/videos/portifolio-joaquim-vilela.mp4",
    // videoMobile: "/videos/portifolio-joaquim-vilela-mobile.mp4",
    linkSite: "https://gusthavosilva.vercel.app/",
    linkGithub: "https://github.com/Gusthavx/PortifolioPrime"
  }
];

const Projetos = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const abrirModal = (projeto) => {
    setProjetoSelecionado(projeto);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setProjetoSelecionado(null);
  };

  return (
    <section id="projetos" className="projetos-section">
      <h2>&lt;Meus Projetos/&gt;</h2>
      <div className="container-projetos">
        {projetos.map((projeto, idx) => (
          <CardProjeto
            key={idx}
            titulo={projeto.titulo}
            imagem={projeto.imagem}
            tecnologias={projeto.tecnologias}
            data={projeto.data}
            onClick={() => abrirModal(projeto)}
          />

        ))}

      </div>
      {modalAberto && (
        <ModalProjeto
          projeto={projetoSelecionado}
          onClose={fecharModal}
          linkSite={projetoSelecionado?.linkSite}
          linkGithub={projetoSelecionado?.linkGithub}
          responsivo={projetoSelecionado?.responsivo}
        />
      )}
    </section>
  );
};

export default Projetos;