export function criarLinkWhatsApp(mensagem) {
  mensagem = encodeURIComponent(mensagem);
  const numeroTelefone = "5511964159987";
  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagem}`;

  return linkWhatsApp;
}

export function abrirChamadoWhatsapp(msg) {
  let link = criarLinkWhatsApp(msg);
  window.open(link, "_blank");
}
