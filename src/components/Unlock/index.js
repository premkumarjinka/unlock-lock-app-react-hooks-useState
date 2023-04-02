import {useState} from 'react'
import {Container, Image, Button, Para} from './styledComponents'

const Unlock = () => {
  const [a, setA] = useState(true)

  const img = a
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const text = a ? 'Your Device is Locked' : 'Your Device is Unlocked'

  const alter = a ? 'Unlock' : 'Lock'

  const atr = a ? 'lock' : 'unlock'

  const onButton = () => {
    setA(prevState => !prevState)
  }

  return (
    <Container>
      <Image src={img} alt={atr} />
      <Para>{text}</Para>
      <Button type="button" onClick={onButton}>
        {alter}
      </Button>
    </Container>
  )
}
export default Unlock
