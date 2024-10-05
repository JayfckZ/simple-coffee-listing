import { CardContainer, Image, Label, Name, Price } from './styles'
import starFill from '../media/Star_fill.svg'
import star from '../media/Star.svg'

const Card = ({
  image,
  popular,
  name,
  price,
  rating,
  votes,
  available
}: Coffee) => {
  return (
    <CardContainer>
      {popular && <Label>Popular</Label>}
      <Image src={image} alt={name + 'image'} />
      <div className="card--flex">
        <Name>{name}</Name>
        <Price>{price}</Price>
      </div>
      <div className="card--flex">
        <div className="card--flex2">
          <img src={rating ? starFill : star} />
          {rating && <p className="rating">{rating}</p>}
          <p className="votes">{votes ? `(${votes} votes)` : '(No ratings)'}</p>
        </div>
        {!available && <p className="unavailable">Sold out</p>}
      </div>
    </CardContainer>
  )
}

export default Card
