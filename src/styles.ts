import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEEEEE',
  preto: '#111111',
  cinza: '#333333',
  verde: '#10ac84'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.preto};
    color: ${cores.branca};
    padding-top: 40px;

  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
