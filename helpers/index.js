export function criarLinkWhatsApp(mensagem) {
  mensagem = encodeURIComponent(mensagem);
  const numeroTelefone = "5511986213371";
  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagem}`;

  return linkWhatsApp;
}

export function abrirChamadoWhatsapp(msg) {
  let link = criarLinkWhatsApp(msg);
  window.open(link, "_blank");
}

export function maskBRL(numero) {
  const valor = parseFloat(numero).toFixed(2);
  return `R$ ${valor.replace(".", ",")}`;
}

export function maskCEP(cep) {
  return cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
}

export function maskCPF(cpf) {
  return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
}

export function maskCNPJ(cnpj) {
  return cnpj.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5"
  );
}

export function maskTelefone(telefone) {
  if (telefone.length === 10) {
    return telefone.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
  } else if (telefone.length === 11) {
    return telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else {
    return telefone;
  }
}
