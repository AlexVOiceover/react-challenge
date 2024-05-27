interface Props {
  name: string
}

function Greeting({name}: Props) {
  return (
    <p>{name}</p>
  )
}

export default Greeting