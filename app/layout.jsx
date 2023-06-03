"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import "./globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Loja de tecnologia com produtos Apple. Experiência de compra excepcional, expertise em produtos Apple e garantia de qualidade."
        />
        <meta
          name="keywords"
          content="loja de tecnologia, produtos Apple, inovação tecnológica, experiência de compra excepcional, expertise em produtos Apple, qualidade garantida, acessórios Apple, lançamentos Apple, promoções exclusivas, serviço personalizado, atendimento especializado, garantia de satisfação, conveniência e praticidade, amplas opções de escolha, suporte técnico especializado, confiabilidade e durabilidade, facilidade de compra, preços competitivos, frete grátis, pagamento seguro"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lithium - Sua Loja de Tecnologia Apple</title>
      </head>
      <ParallaxProvider>
        <body>{children}</body>
      </ParallaxProvider>
    </html>
  );
}
