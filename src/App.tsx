import { GlobalStyle, Container } from './global'
import Main from './Main'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container className="App">
        <Main />
      </Container>
    </>
  )
}

export default App
