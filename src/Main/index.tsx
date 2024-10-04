import { useState } from 'react'
import { MainContainer, Heading, Body, Button } from './styles'

const Main = () => {
  const [selected, setSelected] = useState('all')

  return (
    <MainContainer>
      <Heading>Our Collection</Heading>
      <Body>
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </Body>
      <div className="flex">
        <Button
          selected={selected === 'all'}
          onClick={() => setSelected('all')}
        >
          All Products
        </Button>
        <Button
          selected={selected === 'available'}
          onClick={() => setSelected('available')}
        >
          Available Now
        </Button>
      </div>
    </MainContainer>
  )
}

export default Main
