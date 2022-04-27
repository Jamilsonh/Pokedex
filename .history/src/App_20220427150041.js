import { Body, Cartao, CartaoTopo, Detalhes, InfromacoesH3, InformacoesUlLi, Habilidades, HabilidadesUl, Imagem, Infromacoes, Main, Nome, PokeDex, Status, Tipo } from "./Styles";
import Pica from './Images/pikachu.png'

function App() {
  return (
    <>
      <Body>
        <Main>
          <PokeDex>
            <Cartao>
              <CartaoTopo>
                <Detalhes>
                  <Nome><h2>Pikachu</h2></Nome>
                  <span>#001</span>
                </Detalhes>

                <Tipo><span>elétrico</span></Tipo>
                <Imagem src={Pica}>
                </Imagem>
              </CartaoTopo>

              <Infromacoes>
                <Status>
                <InfromacoesH3>Status</InfromacoesH3>
                  <InformacoesUlLi>
                      <InformacoesUlLi>HP: 300</InformacoesUlLi>
                      <li>Ataque: 600</li>
                      <li>Defesa: 500</li>
                      <li>Velocidade: 300</li>
                      <li>Total: 1700</li>
                  </InformacoesUlLi>
                </Status>

                <Habilidades>
                <h3>Habilidades</h3>

                  <HabilidadesUl>
                      <li>Choque do trovão</li>
                      <li>Cabeçada</li>
                  </HabilidadesUl>
                </Habilidades>
              </Infromacoes>
            </Cartao>
            </PokeDex>
          </Main>
        
      </Body>
    </>
  );
}

export default App;
