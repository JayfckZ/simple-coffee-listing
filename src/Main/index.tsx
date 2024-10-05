import { useState, useEffect } from 'react'
import Card from '../Card'
import { MainContainer, Heading, Body, Button, CardGrid } from './styles'

const Main = () => {
  const [selected, setSelected] = useState('all')
  const [coffeeData, setCoffeeData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
        )
        const data = await response.json()
        setCoffeeData(data)
        setLoading(false)
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredCoffeeData: Coffee[] =
    selected === 'available'
      ? coffeeData.filter((item: Coffee) => item.available)
      : coffeeData

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
      <CardGrid>
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredCoffeeData.map((coffee: Coffee) => (
            <Card key={coffee.id} {...coffee} />
          ))
        )}
      </CardGrid>
    </MainContainer>
  )
}

export default Main
