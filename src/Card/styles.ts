import styled from 'styled-components'
import { colors } from '../global'

export const CardContainer = styled.div`
  position: relative;

  .card--flex,
  .card--flex2 {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
  }

  .card--flex {
    justify-content: space-between;
    margin-top: 8px;
  }

  .rating,
  .votes {
    margin-left: 4px;
  }

  .votes {
    color: ${colors.gray};
  }

  .unavailable {
    color: ${colors.red};
  }
`

export const Image = styled.img`
  border-radius: 14px;
`

export const Label = styled.span`
  border-radius: 24px;
  background-color: ${colors.yellow};
  color: ${colors.black};
  font-size: 0.625rem;
  padding: 4px 10px;
  position: absolute;
  top: 8px;
  left: 8px;
`

export const Price = styled.span`
  border-radius: 4px;
  background-color: ${colors.green};
  color: ${colors.black};
  font-size: 0.75rem;
  padding: 4px 8px;
`

export const Name = styled.h2`
  font-size: 0.875rem;
`
