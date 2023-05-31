"use client";
import ButtonPlay from "@/components/buttons/ButtonPlay";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import Notch from "@/components/notch/Notch";
import { ArrowRight, CaretDoubleDown, Play } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    // Verifica a largura da tela sempre que o redimensionamento ocorrer
    window.addEventListener("resize", checkScreenWidth);

    // Executa a verificação inicial quando o componente é montado
    checkScreenWidth();

    // Remove o ouvinte de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <>
      <Notch />
      <main className="hero-1">
        <img
          src="/elipse-1.png"
          alt="elipse-azul"
          draggable={false}
          className="elipse-1"
        />
        <a
          href="mailto:lithium@gmail.com"
          rel="noreferrer"
          className="email-right-screen f-12 d-none d-lg-flex"
        >
          lithium@gmail.com
        </a>
        <Container fluid className="p-0 m-0 d-flex align-items-center h-100">
          <Container className="py-5">
            <Row>
              <Col sm="12" xl="7">
                <Parallax translateY={["-120px", "120px"]}>
                  <div className="main-card p-5">
                    <h2 className="f-32">Prazer, somos a</h2>
                    <h1 className="title">LITHIUM</h1>
                    <p className="mb-5">
                      Sua mais nova loja digital para compra de produtos Apple,
                      com preços justos e atendimento personalizado.
                    </p>
                    <div>
                      <ButtonPrimary
                        title="saiba mais"
                        link="#"
                        icon={<ArrowRight size={24} />}
                      />
                    </div>
                  </div>
                </Parallax>
              </Col>
            </Row>
          </Container>
        </Container>
        <div className="card-shadow py-4">
          <CaretDoubleDown size={32} color="#fff" className="slide-in-top" />
        </div>
      </main>

      <section>
        <Container fluid className="py-5">
          <Container className="py-5">
            <Parallax translateY={["-100px", "100px"]}>
              <div className="main-card">
                <Row className="align-items-center">
                  <Col sm="12" xl="4">
                    <img
                      src="/logo-lithium.png"
                      width="100%"
                      alt="Logo lithium"
                    />
                  </Col>
                  <Col sm="12" xl="8" className="p-5">
                    <h2 className="f-32">Sobre nós</h2>
                    <p className="f-16">
                      Bem-vindos ao inovador mundo da Lithium, a sua nova loja
                      de tecnologia onde a excelência é nossa prioridade. Somos
                      uma equipe apaixonada pela incrível gama de produtos da
                      Apple, e nosso objetivo é levar essa paixão diretamente
                      para suas mãos.
                    </p>
                    <p className="f-16">
                      Nós acreditamos que não há limites quando se trata de
                      tecnologia, e estamos prontos para oferecer uma
                      experiência de compra excepcional, garantindo que você
                      tenha acesso aos produtos mais avançados e desejados do
                      mercado.
                    </p>
                    <p className="f-16">
                      Nossa seleção de produtos é cuidadosamente escolhida para
                      atender às suas necessidades e contamos com a expertise da
                      nossa equipe para orientá-lo e garantir que você encontre
                      o produto perfeito.
                    </p>
                  </Col>
                </Row>
              </div>
            </Parallax>
          </Container>
        </Container>
      </section>

      <section className="macbooks-bg">
        <Container fluid className="py-5 m-0 d-flex align-items-center h-100">
          <Container className="py-5">
            <Row>
              <Col sm="12" xl="7">
                <Parallax translateY={["-100px", "100px"]}>
                  <div className="main-card p-5">
                    <h2 className="f-64">MACBOOKS</h2>
                    <p className="f-16">
                      Experimente todo o potencial da tecnologia em suas mãos ao
                      adquirir um MacBook. Máquinas que combinam um design
                      elegante, um desempenho excepcional e recursos inovadores,
                      proporcionando uma experiência única para os usuários.
                    </p>
                    <p className="f-16">
                      Seja você um estudante, um profissional criativo ou um
                      entusiasta da tecnologia, os MacBooks são a escolha ideal
                      para impulsionar sua produtividade e levar sua
                      criatividade a novos patamares.
                    </p>
                    <p className="f-16">
                      Desfrute da liberdade de um sistema operacional intuitivo,
                      experimente a velocidade impressionante dos processadores
                      e confie na durabilidade de um produto de alta qualidade.
                    </p>
                    <p className="f-16">
                      Eleve sua experiência tecnológica a um novo nível com o
                      seu novo MacBook - uma combinação perfeita de estilo,
                      desempenho e inovação.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <ButtonPrimary
                        title="acessar"
                        link="#"
                        icon={<ArrowRight size={24} />}
                      />
                      <ButtonPlay
                        link="https://youtu.be/jwmS1gc9S5A?list=PLHFlHpPjgk714Wqve10unWDzDIo4HVAI8"
                        target="_blank"
                        icon={<Play size={28} />}
                      />
                    </div>
                  </div>
                </Parallax>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section>
        <Container fluid className="py-5">
          <Container className="py-5">
            <Row className="align-items-center">
              <Col sm="12" xl="4" className="p-4">
                <Parallax
                  translateX={["-500px", "0px"]}
                  scale={[0.2, 1.1]}
                  rotate={[-65, 0]}
                  rootMargin={{
                    top: 10000,
                    right: 1000,
                    bottom: 10,
                    left: 1000,
                  }}
                  easing="easeInQuad"
                >
                  <img
                    src="/iphone-13.png"
                    alt="Iphone 13 - Celular Apple"
                    width="100%"
                  />
                </Parallax>
              </Col>
              <Col sm="12" xl="8" className="p-5">
                <h2 className="f-64">IPHONES</h2>
                <p className="f-16">
                  Descubra o mundo de possibilidades ao seu alcance com o
                  iPhone. Tendencia no mercado de smartphones, oferecem um
                  equilíbrio perfeito entre estilo, desempenho e funcionalidade.
                </p>
                <p className="f-16">
                  Com recursos avançados, como uma câmera de alta qualidade, uma
                  tela vibrante e um processador potente, os iPhones elevam a
                  experiência móvel a um novo patamar.
                </p>
                <p className="f-16">
                  Explore o ecossistema integrado da Apple, que permite uma
                  sincronização perfeita entre dispositivos da marca, acesso a
                  uma vasta variedade de aplicativos e a garantia de segurança
                  de dados de ponta a ponta.
                </p>
                <p className="f-16">
                  Seja para fins profissionais, entretenimento ou registrar
                  momentos especiais, os iPhones são a escolha definitiva para
                  os entusiastas da tecnologia. Descubra o poder da inovação na
                  palma da sua mão!
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <ButtonPrimary
                    title="acessar"
                    link="#"
                    icon={<ArrowRight size={24} />}
                  />
                  <ButtonPlay
                    link="https://youtu.be/WuEH265pUy4?list=PLHFlHpPjgk706qEJf9fkclIhdhTkH49Tb"
                    target="_blank"
                    icon={<Play size={28} />}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section className="ipads-bg">
        <Container fluid className="py-5 m-0 d-flex align-items-center h-100">
          <Container className="py-5">
            <Row>
              <Col>
                <Parallax translateY={["-100px", "100px"]}>
                  <div className="main-card p-5">
                    <h2 className="f-64">IPADS</h2>
                    <p className="f-16">
                      Prepare-se para uma nova forma de explorar o mundo digital
                      com o iPad.Dispositivos que combinam elegância,
                      portabilidade e desempenho excepcional.
                    </p>
                    <p className="f-16">
                      Com uma tela impressionante e tecnologia avançada, os
                      tablets da Apple oferecem uma experiência imersiva em
                      jogos, entretenimento e produtividade.
                    </p>
                    <p className="f-16">
                      Seja nos estudos, no trabalho ou nos momentos de descanso,
                      os iPads são a escolha ideal em qualquer situação.
                      Desbloqueie seu potencial ilimitado, onde o futuro está ao
                      seu alcance com um simples toque.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <ButtonPrimary
                        title="acessar"
                        link="#"
                        icon={<ArrowRight size={24} />}
                      />
                      <ButtonPlay
                        link="https://youtu.be/I-t2mwrYc6s?list=PLHFlHpPjgk71PWgLPtTl51crrA2dp777g"
                        target="_blank"
                        icon={<Play size={28} />}
                      />
                    </div>
                  </div>
                </Parallax>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section className="macs-bg">
        <Container fluid className="py-5 m-0 d-flex align-items-center h-100">
          <Container className="py-5">
            <Row>
              <Col sm="12" xl="7">
                <Parallax translateY={["-100px", "100px"]}>
                  <div className="main-card p-5">
                    <h2 className="f-64">MACS</h2>
                    <p className="f-16">
                      Prepare-se para uma nova forma de explorar o mundo digital
                      com o iPad.Dispositivos que combinam elegância,
                      portabilidade e desempenho excepcional.
                    </p>
                    <p className="f-16">
                      Com uma tela impressionante e tecnologia avançada, os
                      tablets da Apple oferecem uma experiência imersiva em
                      jogos, entretenimento e produtividade.
                    </p>
                    <p className="f-16">
                      Seja nos estudos, no trabalho ou nos momentos de descanso,
                      os iPads são a escolha ideal em qualquer situação.
                      Desbloqueie seu potencial ilimitado, onde o futuro está ao
                      seu alcance com um simples toque.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <ButtonPrimary
                        title="acessar"
                        link="#"
                        icon={<ArrowRight size={24} />}
                      />
                      <ButtonPlay link="#" icon={<Play size={28} />} />
                    </div>
                  </div>
                </Parallax>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
}
