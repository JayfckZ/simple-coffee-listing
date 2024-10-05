import styled from 'styled-components'
import { colors } from '../global'

type Props = {
  selected: boolean
}

export const MainContainer = styled.main`
  background-color: ${colors.darkGray};
  border-radius: 8px;
  margin: 20% 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }
`

export const Heading = styled.h1`
  font-size: 32px;
  text-align: center;
`

export const Body = styled.p`
  font-size: 16px;
  text-align: center;
  width: 50%;
  margin: 16px 0;
  color: ${colors.gray};
`

export const Button = styled.button<Props>`
  padding: 8px;
  font-size: 14px;
  background-color: ${(props) =>
    props.selected ? colors.gray : 'transparent'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all ease 0.3s;
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px 32px;
`
