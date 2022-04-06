import styled from "styled-components"

const GameBoard = () => {
  return (
    <BackgroundLines>
      {[...Array(9)].map((_, index) => {
        return <GameSquare key={`gamesquare-pos-${index}`} />
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

const GameSquare = styled.div`
  width: ${emptySquareSize};
  height: 100%;
  background-color: white;
`

export default GameBoard
