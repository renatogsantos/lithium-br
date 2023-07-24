"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import "./globals.scss";
import { store } from "../redux/store";
import { Provider } from "react-redux";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
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

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-25E88CFM89"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-25E88CFM89');
            `,
          }}
        />
      </head>
      <Provider store={store}>
        <ParallaxProvider>
          <body suppressHydrationWarning={true}>{children}</body>
        </ParallaxProvider>
      </Provider>
    </html>
  );
}
