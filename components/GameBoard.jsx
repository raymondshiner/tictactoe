import styled from "styled-components"
import GameSquare from "./GameSquare"

const GameBoard = () => {
  return (
    <BackgroundLines>
      {[...Array(9)].map((_, index) => {
        return (
          <GameSquareWrapper key={`gamesquare-pos-${index}`}>
            <GameSquare />
          </GameSquareWrapper>
        )
      })}
    </BackgroundLines>
  )
}

const emptySquareSize = "70px"

const BackgroundLines = styled.div`
  display: grid;
  height: min-content;
  background-color: black;
  grid-template-columns: repeat(3, ${emptySquareSize});
  grid-template-rows: repeat(3, ${emptySquareSize});
  gap: 10px;
`

const GameSquareWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${emptySquareSize};
  height: 100%;
  background-color: white;
`

export default GameBoard
