const Card = ({ image, popular, name, price, rating, votes }: Coffee) => {
  return (
    <div>
      <img src={image} alt={name + 'image'} />
      <h3>{name}</h3>
      <p>
        {price}, {rating}, {votes}, {popular}
      </p>
    </div>
  )
}

export default Card
