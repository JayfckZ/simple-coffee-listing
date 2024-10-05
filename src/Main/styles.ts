import styled from 'styled-components'
import { colors } from '../global'
import vector from '../media/vector.svg'

type Props = {
  selected: boolean
}

export const MainContainer = styled.main`
  background-color: ${colors.darkGray};
  background-image: url(${vector});
  background-repeat: no-repeat;
  background-position-x: 70%;
  border-radius: 8px;
  margin: 15% 0;
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 48px;
  }
`

export const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
`

export const Body = styled.p`
  font-size: 1rem;
  text-align: center;
  width: 55%;
  margin: 16px 0;
  color: ${colors.gray};
`

export const Button = styled.button<Props>`
  padding: 8px;
  font-size: 0.875rem;
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
