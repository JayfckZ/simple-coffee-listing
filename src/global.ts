import { styled, createGlobalStyle } from 'styled-components'
import bgImage from './media/bg-cafe.jpg'

export const colors = {
  darkGray: '#1B1D1F',
  black: '#111315',
  gray: '#6F757C',
  green: '#BEE3CC',
  white: '#FEF7EE',
  yellow: '#F6C768',
  red: '#ED735D'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "DM Sans", sans-serif;
    font-weight: bold;
    color: ${colors.white};
  }

  body {
    background-color: ${colors.black};
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: contain;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
