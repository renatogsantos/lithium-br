import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function CardProdutos({ categoriaSelecionada }) {
  const [produtoSelecionado, setProdutoSelecionado] = useState();
  const produtos = categoriaSelecionada ? categoriaSelecionada.produtos : [];

  //seleciona o produto "macbook", próximo passo seria escolher as opções diponíveis

  useEffect(() => {
    setProdutoSelecionado(produtos[0]);
  }, [categoriaSelecionada]);

  return (
    <>
      {produtoSelecionado && (
        <div className="bg-card-produtos">
          <div className="card-produtos p-4">
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                setProdutoSelecionado(null);
              }}
            ></button>
            <Container>
              <Row className="g-4 align-items-center">
                <Col sm="12" xl="4">
                  <img src={produtoSelecionado.photo} alt="" width="100%" />
                  <div className="d-flex justify-content-evenly w-100">
                    {produtoSelecionado.colors.map((cor) => {
                      return (
                        <button
                          type="button"
                          key={cor}
                          className="produtos-cores mb-4"
                          style={{ backgroundColor: cor }}
                        />
                      );
                    })}
                  </div>
                </Col>
                <Col sm="12" xl="8">
                  <h2>{produtoSelecionado.title}</h2>
                  {produtoSelecionado.description.map((desc, index) => {
                    return (
                      <p key={index} className="p-0 mb-1">
                        {desc}
                      </p>
                    );
                  })}
                  <span></span>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}
