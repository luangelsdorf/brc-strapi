import React, {memo} from 'react';

import {Block, Container} from './components';

const HomePage = ({global: {plugins}, history: {push}}) => {
  return (
    <>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-8">
            <Block>
              <div className="container">
                <article>
                  <section>
                    <h1>Seja bem-vindo!</h1>
                    <p>
                      Por aqui, você pode editar e gerenciar os conteúdos textuais referentes ao site de forma
                      simples e direta. Aqui está um resumo sobre o que você precisa saber para usar a interface de
                      edição efetivamente:
                    </p>
                  </section>
                  <section>
                    <h3>Conteúdo Dinâmico</h3>
                    <p>
                      Esta seção é destinada a gerenciar conteúdos em escala, ou seja, conteúdos que possuem múltiplas
                      instâncias de um mesmo tipo, como por exemplo: posts do blog e tipo de serviços oferecidos.
                    </p>
                  </section>
                  <section>
                    <h3>Conteúdo Institucional</h3>
                    <p>
                      Esta seção corresponde aos conteúdos estáticos, como informações pessoais, informações de contato
                      e textos em geral que serão exibidos no site.
                    </p>
                  </section>
                  <section>
                    <p>
                      Além disso, no ambiente de edição, é possível salvar as alterações ao conteúdo, alterar o idioma
                      trabalhado e outras opções na parte direita da interface.
                    </p>
                  </section>
                </article>
              </div>
            </Block>
          </div>
          <div className="col-4">
            <Block>
              <a href="https://brcadv.com">
                <h1 className="text-center">
                  Visitar o Site
                </h1>
              </a>
              <div className="container">
                <div id="wrap">
                  <iframe src="https://brcadv.com" title="BRC Website" />
                </div>
              </div>
            </Block>
          </div>
        </div>

        <style jsx>{`
          section {
            margin-bottom: 30px;
          }
          h1 {
            margin-bottom: 10px ;
          }
          iframe {
            width: 1920px;
            height: 2000px;
          }
          #wrap {
            /*width: 100%;*/
            transform: scale(0.15);
            height: 500px;
            margin-left: -200px;
            margin-top: -200px;
          }
          a {
            color: #292b2c;
          }
          a:hover {
            color: #000;
          }
        `}</style>
      </Container>
    </>
  );
};

export default memo(HomePage);