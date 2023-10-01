"use client";
import {
  ArrowRight,
  CaretDoubleDown,
  ChatCircleText,
  CreditCard,
  HandCoins,
  Handbag,
  Play,
} from "@phosphor-icons/react";
import { Comentarios } from "@/documents/comentarios";
import { Produtos } from "@/documents/produtos";
import { abrirChamadoWhatsapp } from "@/helpers";
import { Col, Container, Row } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";
import ButtonPlay from "@/components/buttons/ButtonPlay";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import ButtonWhatsapp from "@/components/buttons/ButtonWhatsapp";
import Comentario from "@/components/cards/comentario";
import Notch from "@/components/notch/Notch";
import CardProdutos from "@/components/produtos/CardProdutos";

export default function Home() {
  return (
    <>
      <Notch />
      <CardProdutos title="teste" />
      <main className="hero-1">
        <img
          src="/elipse-1.png"
          className="elipse-1"
          alt="Elipse degradê"
          draggable={false}
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
                <Parallax translateY={["-200px", "100px"]} easing="easeInOut">
                  <div className="main-card p-5">
                    <h2 className="f-32">Prazer, somos a</h2>
                    <h1 className="title slide-in-blurred-left">LITHIUM</h1>
                    <p className="mb-5">
                      Sua mais nova loja digital para compra de produtos Apple,
                      com preços justos e atendimento personalizado.
                    </p>
                    <div>
                      <a
                        aria-label="Sobre nós"
                        href="#about"
                        className="button-primary"
                        rel="noreferrer"
                      >
                        <span className="me-3 me-lg-5">saiba mais</span>{" "}
                        <ArrowRight size={24} />
                      </a>
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

      <section id="about">
        <Container fluid className="py-5">
          <Container className="py-5">
            <Parallax translateY={["-100px", "100px"]} easing="easeInOut">
              <div className="main-card">
                <Row className="align-items-center">
                  <Col sm="12" xl="4">
                    <img
                      src="/logo-lithium.png"
                      width="100%"
                      alt="Logo lithium"
                      draggable={false}
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

      <section className="vantagens-bg">
        <Container fluid className="py-5 m-0 d-flex align-items-center h-100">
          <Container className="py-5">
            <Row className="d-flex align-items-center">
              <Col className="py-5 py-lg-2">
                <Parallax translateY={["-100px", "100px"]} easing="easeInOut">
                  <div className="card-hover p-5 my-3">
                    <CreditCard size={64} />
                    <p className="f-16 mt-4">
                      Oferecemos parcelamento em até 12 vezes com as melhores
                      taxas do mercado.
                    </p>
                  </div>
                </Parallax>
              </Col>
              <Col className="py-5 py-lg-2">
                <Parallax translateY={["-110px", "110px"]} easing="easeInOut">
                  <div className="card-hover p-5 my-3">
                    <HandCoins size={64} />
                    <p className="f-16 mt-4">
                      Oferecemos preços competitivos, significativamente abaixo
                      da média do mercado.
                    </p>
                  </div>
                </Parallax>
              </Col>
              <Col className="py-5 py-lg-2">
                <Parallax translateY={["-100px", "100px"]} easing="easeInOut">
                  <div className="card-hover p-5 my-3">
                    <Handbag size={64} />
                    <p className="f-16 mt-4">
                      Consultoria personalizada especializada para auxiliá-lo na
                      busca pelo melhor dispositivo.
                    </p>
                  </div>
                </Parallax>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section className="macbooks-bg">
        <Container
          fluid
          className="py-5 m-0 d-flex align-items-center h-100 overflow-x-hidden"
        >
          <Container className="py-5">
            <Row>
              <Col sm="12" xl="7">
                <Parallax
                  translateX={["2000px", "0px"]}
                  rootMargin={{
                    top: 1000,
                    right: 0,
                    bottom: -800,
                    left: 0,
                  }}
                  easing="easeInOut"
                >
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
                      entusiasta da tecnologia, aqui na Lithium te ajudaremos à
                      escolher o MacBook ideal para impulsionar sua
                      produtividade e levar sua criatividade a novos patamares.
                    </p>
                    <p className="f-16">
                      Eleve sua experiência tecnológica a um novo nível com o
                      seu novo MacBook - uma combinação perfeita de estilo,
                      desempenho e inovação.
                    </p>
                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3">
                      <ButtonPrimary
                        title="comprar agora"
                        type="button"
                        onClick={() => {
                          //dispatch(getCategoria(1));
                          abrirChamadoWhatsapp(
                            "Olá, gostaria de fazer um orçamento do produto - Macbooks"
                          );
                        }}
                        icon={<ArrowRight size={24} />}
                      />
                      <ButtonPlay
                        link="https://youtu.be/51QO4pavK3A?list=PLHFlHpPjgk714Wqve10unWDzDIo4HVAI8"
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
        <Container fluid className="py-5 overflow-x-hidden">
          <Container className="py-5">
            <Row className="align-items-center">
              <Col sm="12" xl="4" className="p-5">
                <Parallax
                  translateX={["-1000px", "10px"]}
                  rotate={["-85deg", "0"]}
                  rootMargin={{
                    top: 500,
                    right: 0,
                    bottom: -500,
                    left: 0,
                  }}
                  easing="easeInOut"
                >
                  <img
                    src="/iphone-14-pro.png"
                    width="100%"
                    draggable={false}
                    alt="Iphone 13 - Celular Apple"
                  />
                </Parallax>
              </Col>
              <Col sm="12" xl="8" className="p-4">
                <Parallax
                  translateX={["1000px", "10px"]}
                  rootMargin={{
                    top: 1000,
                    right: 0,
                    bottom: -800,
                    left: 0,
                  }}
                  easing="easeInOut"
                >
                  <h2 className="f-64">IPHONES</h2>
                  <p className="f-16">
                    Descubra um mundo de possibilidades ao seu alcance com o
                    iPhone. Tendencia no mercado de smartphones, oferecem um
                    equilíbrio perfeito entre estilo, desempenho e
                    funcionalidade.
                  </p>
                  <p className="f-16">
                    Com recursos avançados, como uma câmera de alta qualidade,
                    uma tela vibrante e um processador potente, os iPhones
                    elevam a experiência móvel a um novo patamar.
                  </p>
                  <p className="f-16">
                    Explore o ecossistema integrado da Apple, que permite uma
                    sincronização perfeita entre dispositivos da marca, acesso a
                    uma vasta variedade de aplicativos e a garantia de segurança
                    de dados de ponta a ponta.
                  </p>
                  <p className="f-16">
                    Seja para fins profissionais, entretenimento ou apenas
                    registrar momentos especiais, nós da Lithium estamos prontos
                    para te ajudar na escolha do seu iPhones ideal.
                  </p>
                  <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3">
                    <ButtonPrimary
                      title="comprar agora"
                      type="button"
                      onClick={() => {
                        abrirChamadoWhatsapp(
                          "Olá, gostaria de fazer um orçamento do produto - Iphones"
                        );
                      }}
                      icon={<ArrowRight size={24} />}
                    />
                    <ButtonPlay
                      link="https://youtu.be/xqyUdNxWazA"
                      target="_blank"
                      icon={<Play size={28} />}
                    />
                  </div>
                </Parallax>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section className="ipads-bg">
        <Container
          fluid
          className="py-5 m-0 d-flex align-items-center h-100 overflow-x-hidden"
        >
          <Container className="py-5">
            <Row>
              <Col sm="6">
                <Parallax
                  translateX={["-1000px", "0px"]}
                  rootMargin={{
                    top: 1000,
                    right: 0,
                    bottom: -600,
                    left: 0,
                  }}
                  easing="easeInOut"
                >
                  <div className="main-card p-5">
                    <h2 className="f-64">IPADS</h2>
                    <p className="f-16">
                      Prepare-se para uma nova forma de explorar o mundo digital
                      com o iPad.
                    </p>
                    <p className="f-16">
                      Dispositivos que combinam elegância, portabilidade e
                      desempenho excepcional.
                    </p>
                    <p className="f-16">
                      Com uma tela impressionante e tecnologia avançada, os
                      tablets da Apple oferecem uma experiência imersiva em
                      jogos, entretenimento e produtividade.
                    </p>
                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3">
                      <ButtonPrimary
                        title="comprar agora"
                        type="button"
                        onClick={() => {
                          abrirChamadoWhatsapp(
                            "Olá, gostaria de fazer um orçamento do produto - Ipads"
                          );
                        }}
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

      <section className="watch-bg">
        <Container
          fluid
          className="py-5 m-0 d-flex align-items-center h-100 overflow-x-hidden"
        >
          <Container className="py-5">
            <Row>
              <Col sm="12" xl="7">
                <Parallax
                  translateX={["2000px", "0px"]}
                  rootMargin={{
                    top: 1000,
                    right: 0,
                    bottom: -800,
                    left: 0,
                  }}
                  easing="easeInOut"
                >
                  <div className="main-card p-5">
                    <h2 className="f-64">APPLE WATCH</h2>
                    <p className="f-16">
                      Descubra o Apple Watch, o dispositivo que redefine a
                      tecnologia vestível.
                    </p>
                    <p className="f-16">
                      Com seu design elegante e sofisticado, o Apple Watch
                      oferece a possibilidade de personalização com uma
                      variedade de pulseiras exclusivas, permitindo que você
                      combine estilo, funcionalidade e conveniência em um único
                      dispositivo.
                    </p>
                    <p className="f-16">
                      Mantenha-se conectado em qualquer lugar com recursos de
                      conectividade, como Wi-Fi e Bluetooth, mesmo quando o seu
                      telefone não estiver por perto.
                    </p>
                    <p className="f-16">
                      Eleve seu estilo, potencialize suas atividades e aproveite
                      a comodidade em todas as áreas da sua vida.
                    </p>
                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3">
                      <ButtonPrimary
                        title="comprar agora"
                        type="button"
                        onClick={() => {
                          abrirChamadoWhatsapp(
                            "Olá, gostaria de fazer um orçamento do produto - Apple Watch"
                          );
                        }}
                        icon={<ArrowRight size={24} />}
                      />
                      <ButtonPlay
                        link="https://youtu.be/Nvb_Kta7v6U"
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
        <Container fluid className="p-4 p-xl-5">
          <div className="airpods-box p-4 p-xl-5 text-center">
            <Container className="p-4 p-xl-5">
              <h2 className="f-64">AIRPODS</h2>
              <p className="f-16">
                Desfrute de uma experiência sonora sem limites e livre-se dos
                fios.
              </p>
              <p className="f-16">
                Os AirPods proporcionam áudio de alta qualidade e uma
                conveniência excepcional. Seu design elegante e compacto os
                tornam perfeitos para acompanhar seu estilo de vida ativo.
                Conecte-se instantaneamente aos seus dispositivos Apple e
                desfrute de uma conexão perfeita, reproduzindo música,
                realizando chamadas e muito mais.
              </p>
              <p>
                Além disso, com a tecnologia de cancelamento de ruído, você pode
                se perder na música e nos podcasts, mergulhando em um som nítido
                e envolvente.
              </p>
              <p>
                Viva a sensação de liberdade e desfrute de uma qualidade sonora
                impecável com os AirPods - uma experiência auditiva inigualável.
              </p>
              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3">
                <ButtonPrimary
                  title="comprar agora"
                  type="button"
                  onClick={() => {
                    abrirChamadoWhatsapp(
                      "Olá, gostaria de fazer um orçamento do produto - Airpods"
                    );
                  }}
                  icon={<ArrowRight size={24} />}
                />
                <ButtonPlay
                  link="https://youtu.be/ql6mhhHCldY"
                  target="_blank"
                  icon={<Play size={28} />}
                />
              </div>
            </Container>
          </div>
        </Container>
      </section>

      <section>
        <Container fluid className="py-5">
          <Container className="py-5 d-flex flex-column align-items-center">
            <Parallax
              scale={[0, 1]}
              rotate={["-400deg", "0"]}
              rootMargin={{
                top: 500,
                right: 0,
                bottom: -300,
                left: 0,
              }}
              easing={"easeInOut"}
            >
              <div className="d-flex justify-content-center">
                <img
                  src="/iphone15.png"
                  width="80%"
                  alt="Produtos Apple"
                  draggable={false}
                />
              </div>
            </Parallax>
            <div className="text-center py-5">
              <p className="f-16">
                Além disso, sabemos o quão importante é encontrar o equilíbrio
                entre qualidade e valor, então estamos comprometidos em garantir
                que você obtenha o melhor custo-benefício possível, nos
                esforçamos para tornar a tecnologia acessível a todos.
              </p>
              <p className="f-16">
                No entanto, na Lithium, nossa dedicação vai além de produtos
                excepcionais. Nossa equipe de atendimento está pronta para te
                auxiliar em cada etapa da sua jornada de compra. Temos
                profissionais experientes e entusiasmados, prontos para
                responder a todas as suas perguntas e fornecer orientações
                personalizadas, garantindo que você faça a escolha certa.
              </p>
              <p className="f-16">
                Então, mergulhe no mundo da Lithium e descubra uma nova era de
                tecnologia e inovação. Estamos ansiosos para acompanhá-lo(a)
                nessa jornada e oferecer o melhor em produtos Apple com preços
                justos e atendimento exemplar. Seja bem-vindo(a) à Lithium, onde
                a sua satisfação é a nossa prioridade.
              </p>
            </div>
          </Container>
        </Container>
      </section>

      <section>
        <Container fluid className="py-5">
          <Container className="py-5">
            <h2 className="f-42">
              <ChatCircleText size={64} /> Veja o que pensam sobre nós.
            </h2>
            <Row className="pt-5">
              <Col sm="12" xl="4" className="order-first order-lg-last">
                <div className="sticky-top p-4">
                  <span>
                    <p>
                      Nosso objetivo é proporcionar uma experiência excepcional
                      a cada visitante.
                    </p>
                    <p>
                      Valorizamos o atendimento personalizado e a escuta atenta
                      para entender as necessidades de cada cliente, por isso
                      buscamos constantemente o feedback para melhorar
                      continuamente.
                    </p>
                    <p>
                      Suas opiniões e sugestões são valiosas para nós, e
                      implementamos mudanças com base nelas.Estamos prontos para
                      recebê-lo e garantir uma experiência de compra memorável,
                      positiva e totalmente satisfatória. Sua felicidade nos
                      impulsiona a melhorar a cada dia.
                    </p>
                    <p>Fique agora com alguns comentários:</p>
                  </span>
                </div>
              </Col>
              <Col>
                {Comentarios.map((item) => {
                  return (
                    <div key={item.id}>
                      <Comentario
                        nome={item.nome}
                        comentario={item.comentario}
                        foto={item.foto}
                      />
                    </div>
                  );
                })}
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section>
        <Container fluid className="py-5">
          <Container>
            <small>
              Agradecemos por explorar o inovador mundo da Lithium, sua loja de
              tecnologia com foco na excelência. Nosso objetivo é oferecer uma
              experiência de compra excepcional, levando diretamente para suas
              mãos a paixão pela incrível gama de produtos da Apple.
            </small>
            <small>
              Acreditamos que a tecnologia não conhece limites, e estamos aqui
              para garantir que você tenha acesso aos produtos mais avançados e
              desejados do mercado. Nossa seleção de produtos é cuidadosamente
              escolhida para atender às suas necessidades, e nossa equipe está
              pronta para orientá-lo e ajudá-lo a encontrar o produto perfeito.
            </small>
            <small>
              Na Lithium, valorizamos cada cliente e estamos empenhados em
              fornecer um serviço excepcional desde o momento em que você chega
              ao nosso site até o momento em que recebe seu novo dispositivo.
              Sua satisfação é nossa prioridade máxima.
            </small>
            <small>
              Explore nossa loja online e descubra uma ampla variedade de
              produtos inovadores da Apple, desde os últimos modelos de iPhone
              até os mais recentes lançamentos de MacBooks e iPads. Além disso,
              oferecemos uma seleção de acessórios premium para aprimorar ainda
              mais sua experiência tecnológica.
            </small>
            <small>
              Fique tranquilo sabendo que somos uma equipe apaixonada, pronta
              para compartilhar nosso conhecimento e ajudá-lo em cada etapa do
              caminho. Seja para tirar dúvidas, oferecer conselhos ou garantir
              um processo de compra tranquilo, estamos aqui para você.
            </small>
            <small>
              A Lithium é o seu destino definitivo para tecnologia Apple de
              ponta. Explore, escolha e deixe-nos ajudá-lo a levar a inovação
              para sua vida diária. Junte-se a nós agora e faça parte da nossa
              comunidade apaixonada por tecnologia.
            </small>
            <small>
              Obrigado por visitar a Lithium! Estamos ansiosos para atendê-lo e
              oferecer uma experiência de compra excepcional.
            </small>
          </Container>
        </Container>
      </section>

      <ButtonWhatsapp
        onClick={() => {
          abrirChamadoWhatsapp(
            "Olá, gostaria de fazer um orçamento de um produto Apple!"
          );
        }}
      />
      <img
        src="/svgs/dots.svg"
        className="dots-right slide-top"
        alt="dots"
        draggable={false}
      />
      <img
        src="/svgs/dots.svg"
        className="dots-left slide-top"
        alt="dots"
        draggable={false}
      />
    </>
  );
}
