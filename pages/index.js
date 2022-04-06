import { GameBoard } from "components"
import styled from "styled-components"

const App = () => {
  return (
    <Wrapper>
      <GameBoard />
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  height: 100vh;
`
