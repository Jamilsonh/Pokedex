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
                  
                      <InformacoesUlLi>HP: 300</InformacoesUlLi>
                      <InformacoesUlLi>Ataque: 600</InformacoesUlLi>
                      <InformacoesUlLi>Defesa: 500</InformacoesUlLi>
                      <InformacoesUlLi>Velocidade: 300</InformacoesUlLi>
                      <InformacoesUlLi>Total: 1700</InformacoesUlLi>
                  
                </Status>

                <Habilidades>
                <h3>Habilidades</h3>

                  <HabilidadesUl>
                      <HabilidadesUl>Choque do trovão</HabilidadesUl>
                      <HabilidadesUl>Cabeçada</HabilidadesUl>
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
