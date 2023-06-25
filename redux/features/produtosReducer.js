import { Produtos } from "@/documents/produtos";
import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const initialState = {
  produtoSelecionado: {},
  opcoes: {},
  openModal: false,
};

//actions
export const selectProduto = createAction("SELECT_PRODUTO");
export const opcoesProduto = createAction("OPCOES_PRODUTO");
export const showModal = createAction("OPEN_MODAL");

export const getCategoria = (categoria) => {
  return (dispatch) => {
    let produto = Produtos.find((el) => el.id === categoria);
    dispatch(showModal(true));
    dispatch(selectProduto(produto));
    dispatch(opcoesProduto(produto.produtos[0]))
  };
};

export const getProduto = (produto) => {
  return (dispatch) => {

    dispatch(opcoesProduto())
  };
};

//reducers
export const produtosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectProduto, (state, action) => {
      return { ...state, produtoSelecionado: action.payload };
    })
    .addCase(opcoesProduto, (state, action) => {
      return { ...state, opcoes: action.payload };
    })
    .addCase(showModal, (state, action) => {
      return { ...state, openModal: action.payload };
    });
});
