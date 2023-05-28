"use client";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import { ArrowRight, CaretDoubleDown } from "@phosphor-icons/react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <main>
        <img
          src="/elipse-1.png"
          alt="elipse-azul"
          draggable={false}
          className="elipse-1"
        />
        <a
          href="mailto:lithium@gmail.com"
          rel="noreferrer"
          className="email-right-screen f-12"
        >
          lithium@gmail.com
        </a>
        <Container fluid className="py-5 hero-1">
          <Container>
            <Row>
              <Col sm="12" xl="7">
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
              </Col>
            </Row>
          </Container>
        </Container>
        <div className="w-100 d-flex justify-content-center py-5">
          <CaretDoubleDown size={32} color="#fff" />
        </div>
      </main>

      <section>
        <Container fluid className="py-5">
          <Container>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex
            commodi quo impedit illum repudiandae expedita omnis laudantium
            excepturi iste beatae consequuntur esse quas illo soluta nam
            corporis aliquid incidunt in, tempore vitae ducimus blanditiis
            ratione ipsam! Consequuntur voluptatum ut sapiente autem neque
            quidem. Eius reprehenderit quasi numquam cum a error voluptatibus
            saepe quaerat aliquam? Aliquam esse quaerat consequuntur quos vitae
            similique, et dolore accusantium aut fugit, necessitatibus, facere
            officiis dignissimos nisi accusamus. Sint consequuntur quaerat
            itaque non illum impedit, corporis esse expedita dignissimos tempore
            officia hic. Dignissimos dolor doloribus facere sit excepturi
            laborum quam ad vero? Eveniet error culpa ab ut, unde laborum
            provident ducimus vero ad assumenda. Error porro eius sequi illo
            deleniti! Pariatur nam doloremque distinctio incidunt. Provident sed
            eius voluptatibus asperiores, laudantium eum laboriosam cumque odio
            labore? Eaque ipsum officia architecto dicta vitae delectus at quae
            natus ut voluptatum. Deleniti facere id mollitia illo, suscipit
            itaque?
          </Container>
        </Container>
      </section>
    </>
  );
}
