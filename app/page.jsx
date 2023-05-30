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
    window.addEventListener('resize', checkScreenWidth);

    // Executa a verificação inicial quando o componente é montado
    checkScreenWidth();

    // Remove o ouvinte de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
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
          <Container className="p-4">
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
        <div className="card-shadow py-4">
          <CaretDoubleDown size={32} color="#fff" className="slide-in-top" />
        </div>
      </main>

      <section>
        <Container fluid className="py-5">
          <Container className="py-5">
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
                    Bem-vindos ao inovador mundo da Lithium, a sua nova loja de
                    tecnologia onde a excelência é nossa prioridade. Somos uma
                    equipe apaixonada pela incrível gama de produtos da Apple, e
                    nosso objetivo é levar essa paixão diretamente para suas
                    mãos.
                  </p>
                  <p className="f-16">
                    Nós acreditamos que não há limites quando se trata de
                    tecnologia, e estamos prontos para oferecer uma experiência
                    de compra excepcional, garantindo que você tenha acesso aos
                    produtos mais avançados e desejados do mercado.
                  </p>
                  <p className="f-16">
                    Nossa seleção de produtos é cuidadosamente escolhida para
                    atender às suas necessidades e contamos com a expertise da
                    nossa equipe para orientá-lo e garantir que você encontre o
                    produto perfeito.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </Container>
      </section>

      <section className="macbooks-bg">
        <Container fluid className="p-0 m-0 d-flex align-items-center h-100">
          <Container>
            <Row>
              <Col sm="12" xl="7">
                <Parallax translateY={["-120px", "120px"]} disabled={isSmallScreen ? true : false} >
                  <div className="main-card p-5">
                    <h2 className="f-64">MACBOOKS</h2>
                    <p>
                      Experimente todo o potencial da tecnologia em suas mãos ao
                      adquirir um MacBook. Máquinas que combinam um design
                      elegante, um desempenho excepcional e recursos inovadores,
                      proporcionando uma experiência única para os usuários.
                    </p>
                    <p>
                      Seja você um estudante, um profissional criativo ou um
                      entusiasta da tecnologia, os MacBooks são a escolha ideal
                      para impulsionar sua produtividade e levar sua
                      criatividade a novos patamares.
                    </p>
                    <p>
                      Desfrute da liberdade de um sistema operacional intuitivo,
                      experimente a velocidade impressionante dos processadores
                      e confie na durabilidade de um produto de alta qualidade.
                    </p>
                    <p>
                      Eleve sua experiência tecnológica a um novo nível com o
                      seu novo MacBook - uma combinação perfeita de estilo,
                      desempenho e inovação.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <ButtonPrimary
                        title="macbooks"
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

      <section>
        <Container fluid className="py-5">
          <Container className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque at qui voluptates, corporis officia ipsam ratione dolorem quo, esse quod voluptatum quas! Nesciunt culpa, neque cum repudiandae consequuntur, perferendis corrupti minima perspiciatis praesentium quam reprehenderit quae iure natus similique. Saepe provident ipsam necessitatibus dignissimos, molestias quasi minus amet eaque quidem cumque obcaecati, dicta ut impedit! Inventore quasi iste sint voluptatibus, ut expedita nesciunt voluptate vel consequuntur! Ipsa aliquam delectus nemo deserunt quia provident corporis et laborum perspiciatis omnis. Animi iure rem qui earum, quia repellendus, nobis dolor quo illo, debitis aperiam porro quidem voluptatum. Aperiam, distinctio velit accusamus sit quidem mollitia harum accusantium beatae blanditiis enim qui iusto animi voluptatibus ea inventore optio excepturi deleniti impedit earum exercitationem perspiciatis rem obcaecati nesciunt? Itaque, quidem! In quasi molestiae, nemo praesentium corrupti dolorem, ut hic quos nobis modi culpa. Magni sapiente, deleniti eius fuga nostrum totam corrupti itaque asperiores numquam. Sapiente cupiditate odit rem, qui quod odio vitae? Tempora nesciunt consequatur officiis ut hic, iste quia delectus, modi, fuga quasi cum suscipit velit tempore repellendus ipsam. Quasi illum minima cupiditate aspernatur. Ipsam, vero? Animi quos amet architecto praesentium quis possimus consequuntur velit. Dicta natus vel itaque dolore, architecto nobis quam tempore. Tempora temporibus a voluptatibus laudantium, quisquam aliquid ipsam dolorum consequuntur necessitatibus id nesciunt delectus aut? Ullam, ipsa libero unde repellat culpa eaque tempore modi minima, voluptates, perspiciatis consequatur incidunt. Blanditiis, labore ratione, distinctio repudiandae dolores in ipsam quod nemo aliquam minus vero inventore illum non commodi nisi sunt molestias iure voluptate necessitatibus, reprehenderit doloremque officiis et ea. Culpa autem ullam non deserunt assumenda perferendis rerum! Quaerat delectus non eligendi quisquam quo earum? Itaque reiciendis illum ducimus molestias nam possimus ex cumque natus, aperiam, qui ipsum laudantium voluptatem ea omnis architecto laborum mollitia porro reprehenderit quidem! Fugit ad impedit consequatur, ab quam similique explicabo temporibus quaerat deserunt mollitia, veniam enim. Eum, quos modi? Cupiditate tempore nulla expedita, magnam repudiandae vel totam vitae officiis deleniti est ipsum ut eveniet suscipit rerum optio perferendis harum impedit quidem deserunt. Optio temporibus ratione non aliquid voluptates natus quaerat! Quis atque repudiandae natus fuga, explicabo vitae debitis doloribus soluta odit sit ea. Nostrum neque quis veniam dolores aliquam pariatur modi in reprehenderit aspernatur, ullam nam corrupti commodi voluptatum veritatis odit. Minus quasi deleniti officia asperiores, recusandae, ab architecto qui sint iste dolores voluptas rem laboriosam nostrum alias ex explicabo incidunt, assumenda amet aut vel cupiditate tempora corporis omnis eveniet! Labore ipsa veritatis aut maxime, aliquid ipsam, voluptatum quos, quis accusamus provident adipisci officia quia dignissimos est? Modi tempore nobis quos. Ad ratione, iusto nihil doloremque obcaecati excepturi id eaque recusandae porro! Ut, ipsum necessitatibus quidem, nostrum iste totam voluptatum exercitationem, consectetur aperiam est obcaecati illo officia quasi corporis ratione quas. Repudiandae libero pariatur repellat similique, est repellendus accusantium exercitationem eius numquam recusandae eum ipsum fugit animi voluptatibus ipsa architecto fuga amet officiis impedit fugiat alias! Nemo, quam. Placeat facere eos reprehenderit inventore mollitia, dolor deserunt assumenda pariatur qui architecto quisquam cumque aperiam, consectetur maxime aspernatur veritatis. Numquam nostrum molestias reiciendis dolor, odio eveniet possimus accusamus cum fugiat ipsum libero atque excepturi, ut velit repellendus quos non ea iusto voluptatibus quisquam aliquam. Excepturi rem debitis sequi. Maiores id minima veritatis veniam odit. Ad quibusdam quisquam eveniet iste sapiente doloribus eaque, voluptatum sequi harum, ipsum reiciendis consequuntur reprehenderit quia blanditiis sed officiis magni repudiandae sit esse dicta praesentium iure, asperiores sunt. Cupiditate, minus nam sunt maiores magnam ut praesentium, reiciendis sequi quasi ea laborum vel assumenda labore doloremque ipsa deserunt minima quae, provident accusamus enim? Adipisci, minima rerum. Nisi quo incidunt reiciendis et nesciunt at molestias explicabo aliquid consectetur architecto similique excepturi, error odio cum praesentium rem ea magni culpa deleniti! Minus vel dignissimos et totam, provident cum quos incidunt quaerat eum eos vitae iusto? Laborum aperiam exercitationem quod architecto fugit ratione enim. Alias incidunt voluptatum illum magnam voluptate iusto, dolorem sit porro similique nam autem. Minus placeat corrupti recusandae ipsam mollitia harum rerum earum provident tempora molestiae velit, id at, sit, repudiandae vero iste. Cumque exercitationem dicta similique recusandae inventore amet soluta, ex quidem repellat temporibus fugit praesentium. Assumenda aspernatur optio velit excepturi cupiditate officia. Voluptatum odio quo aspernatur fugit? Delectus modi et debitis eligendi doloremque magnam. Quisquam ad ipsum nostrum minima quaerat rem eum sed alias, id nihil. Saepe libero neque optio inventore ea, nulla eum ab ex provident modi animi debitis aspernatur dolores reiciendis odio architecto quibusdam quia ullam quaerat temporibus totam officia esse. Aperiam beatae aspernatur sequi rerum officiis temporibus, repellendus praesentium asperiores itaque, aliquid et reiciendis nostrum eius saepe. Rem earum eveniet culpa maxime odio libero deserunt ad! Enim excepturi eveniet error perspiciatis dolorum, accusantium facilis suscipit nesciunt, nostrum minus corporis cumque, qui tempore placeat quia eius repellat consectetur quaerat reiciendis sapiente molestias eligendi quos. Ducimus eligendi deleniti incidunt sit architecto iste voluptas, alias officia quod debitis impedit rem sapiente dolorum adipisci asperiores maiores ex eaque? Officiis id minus aspernatur, dignissimos, quasi quo corrupti nam perferendis, soluta vero ea assumenda quam autem quisquam mollitia quia explicabo corporis nesciunt provident enim error pariatur dolore dolorem. Praesentium quos voluptatem unde placeat? Consectetur cumque explicabo ad commodi cum. Repudiandae tenetur dolorem cupiditate, deleniti nesciunt ipsum assumenda possimus aut dolorum. Itaque repellat quibusdam molestiae maxime est, consectetur tempore sequi numquam amet soluta ipsam laudantium distinctio alias aut, laborum earum velit et quae voluptate facere. Impedit et dignissimos nam maxime. Soluta possimus, atque est fugiat laudantium enim fuga dolorem illo totam sequi voluptas voluptate esse perspiciatis voluptates delectus necessitatibus labore recusandae mollitia. Consequuntur reprehenderit voluptatibus temporibus libero eveniet nulla ad assumenda quaerat laudantium? Repellat aut temporibus maxime ea id optio ex modi incidunt architecto. Eos autem perferendis repudiandae at, nostrum ducimus sed alias obcaecati magnam eum in adipisci assumenda possimus veniam repellat suscipit doloremque voluptatum? In, pariatur id laboriosam sunt veniam sequi repellat at ipsa iure quis deleniti laborum cupiditate consequuntur. Repudiandae eius sit odio quas qui quae provident quidem dolores, culpa voluptatem sunt animi sapiente commodi facilis quod aspernatur id eum velit recusandae praesentium adipisci nemo, voluptates tempore rerum. Libero similique sint reiciendis a repellendus error maxime iste aut laborum velit nostrum architecto dolore incidunt nulla consequatur, eveniet delectus. Maxime perferendis ipsa voluptas harum inventore earum, sunt doloremque error sed velit quis aperiam, explicabo cum dolorum quae odit eius expedita amet recusandae minus! Soluta et eaque placeat cumque? Quasi quisquam est autem! Consectetur nostrum delectus corporis cupiditate nisi, at culpa ipsum. Iure expedita sapiente porro delectus possimus eum, quia eaque in itaque omnis nostrum rerum nihil! Suscipit ut aperiam sit esse. Id voluptatibus sapiente provident distinctio eligendi sunt beatae sequi sit quas pariatur illum quos voluptas ipsa sed eius ab explicabo, veniam nihil. Accusamus quas a ipsum culpa autem in quis harum fugiat, sed officiis consectetur delectus explicabo, tempore non dolorum sint. Quo, perferendis quaerat asperiores, aliquid nam aut earum beatae, error non corporis repellat. Voluptatibus ratione corporis, dolorem autem amet, corrupti numquam labore id dignissimos ab unde est vero, cumque minima omnis optio tenetur facilis? Quo quisquam expedita itaque minima illo esse, voluptas accusamus commodi laborum corrupti possimus officia excepturi doloremque dolores fugiat autem dolorum perferendis ea aliquid corporis saepe. Quos iure eaque minima deserunt nam reprehenderit dolorum unde id in, atque, dignissimos repellendus quasi eos corrupti ullam cumque assumenda ut consectetur ipsam magnam laboriosam. Soluta a alias nihil doloremque tempora amet suscipit laudantium animi accusamus, expedita saepe veritatis voluptas harum architecto est molestiae. Adipisci iusto porro facere error, ratione numquam vel cum similique accusantium assumenda tempora laborum vero aliquid, minima, delectus illum iure animi optio excepturi? Labore quod voluptate necessitatibus dignissimos eligendi ullam nesciunt maiores amet excepturi dolorem fugit, consequuntur ipsum officiis eos ad eaque tempore numquam? Obcaecati asperiores sed, eligendi amet numquam aliquid dolorem ab libero praesentium quisquam perferendis fugit impedit eaque eveniet exercitationem dicta distinctio neque veritatis omnis a optio quia. Voluptas excepturi nisi suscipit odio cupiditate vel vitae repellat, itaque qui ab sapiente officiis at harum, numquam debitis praesentium illo optio commodi vero neque asperiores ratione, reiciendis quae. Quas, ipsum repellat. Eius dolorum exercitationem mollitia beatae, ipsam alias nostrum eaque distinctio, quasi, eum magnam. Ex cupiditate vitae dolor, autem assumenda doloremque commodi tenetur accusantium. Officiis illum explicabo iusto soluta rerum! Sequi rem neque sunt. Omnis modi rerum beatae totam. Modi nobis amet eligendi mollitia deserunt nihil! Voluptatem ea, quo ratione saepe animi esse sapiente doloremque distinctio nam beatae adipisci aperiam, iste deserunt labore nisi cupiditate sequi recusandae sit porro similique? Laborum explicabo laudantium quaerat qui corrupti a inventore impedit. Laudantium pariatur cupiditate minus dolorem. Facilis illum deleniti earum nisi eaque quo labore dolorem, dolor, hic at neque debitis doloribus et nam adipisci quaerat porro ipsa aliquam, accusantium culpa sint quod vitae blanditiis! Exercitationem at aut voluptates error modi nihil harum omnis quaerat earum necessitatibus. Saepe ea eligendi excepturi nulla, ducimus fuga sunt temporibus ratione asperiores officiis eveniet. Autem corporis eveniet, ducimus dignissimos corrupti fugiat suscipit enim omnis aliquid quisquam voluptas nemo commodi officiis iusto sequi ea? Officiis, nostrum harum ipsa labore facilis placeat alias necessitatibus incidunt illo est quasi totam ab molestias.
          </Container>
        </Container>
      </section>
    </>
  );
}
