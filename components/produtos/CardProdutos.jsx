"use client"
import { opcoesProduto, showModal } from "@/redux/features/produtosReducer";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function CardProdutos() {
  const dispatch = useDispatch();
  const { produtoSelecionado, opcoes, openModal } = useSelector(
    (state) => state.produtos
  );

  return (
    <>
      {openModal && (
        <div className="bg-card-produtos">
          <div className="card-produtos slide-in-top p-4">
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                dispatch(showModal(false));
              }}
            />
            <Container>
              <Row className="g-1">
                {produtoSelecionado.produtos.map((item) => {
                  return (
                    <Col sm="12" xl>
                      <button
                        key={item.id}
                        type="button"
                        className="btn btn-light d-flex align-items-center gap-2 f-16"
                        onClick={() => {
                          dispatch(opcoesProduto(item));
                        }}
                      >
                        <div
                          key={item.color}
                          className="produtos-cores"
                          style={{ backgroundColor: item.color }}
                        />
                        {item.title}
                      </button>
                    </Col>
                  );
                })}
              </Row>
              <Row className="g-4 align-items-center">
                <Col sm="12" xl="4">
                  <img src={opcoes?.photo} alt="" width="100%" />
                </Col>
                <Col sm="12" xl="8">
                  <h2 className="fw-bold">{opcoes?.title}</h2>
                  <h3 className="f-24">{opcoes?.subtitle}</h3>
                  {opcoes?.description?.map((desc, index) => {
                    return (
                      <p key={index} className="p-0 mb-1">
                        {desc}
                      </p>
                    );
                  })}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}
