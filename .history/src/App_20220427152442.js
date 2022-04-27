import { Body, Cartao, CartaoTopo, Detalhes, InfromacoesH3, ListPokemon, Listagem, InformacoesUlLi, Habilidades, HabilidadesUl, Imagem, Infromacoes, Main, Nome, PokeDex, Status, Tipo } from "./Styles";
import Pica from './Images/pikachu.png'
import CabecaPikachu from './Images/cabeca-pikachu.png'

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
                <Imagem src={Pica}></Imagem>
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
                <InfromacoesH3>Habilidades</InfromacoesH3>
                      <HabilidadesUl>Choque do trovão</HabilidadesUl>
                      <HabilidadesUl>Cabeçada</HabilidadesUl>
                </Habilidades>
              </Infromacoes>
            </Cartao>

            <Listagem>
              <ul>
                <li>
                  <ListPokemon>
                    <img src="src/images/cabeca-pikachu.png" alt="Cabeça do Pikachu">
                    <span>PIKACHU</span>
                  </ListPokemon>
                </li>



              </ul>

            </Listagem>



          </PokeDex>
        </Main>
      </Body>
    </>
  );
}

export default App;
