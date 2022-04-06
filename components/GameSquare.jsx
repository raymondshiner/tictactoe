import { useState } from "react"
import styled from "styled-components"

const getSquareColor = (squareValue) => {
  switch (squareValue.toLowerCase().trim()) {
    case "x":
      return "blue"
    case "o":
      return "red"
    default:
      return "#323232"
  }
}

const GameSquare = () => {
  const [value, setValue] = useState("")
  const squareColor = getSquareColor(value)

  return (
    <StyledBox
      backgroundColor={squareColor}
      onClick={() => setValue("x")}
      disabled={!!value}
    >
      {value}
    </StyledBox>
  )
}

const gameSquareSize = 50

const StyledBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-size: 30px;
  border: 1px solid black;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  width: ${gameSquareSize}px;
  height: ${gameSquareSize}px;
  background-color: ${(props) => props.backgroundColor};
  transition: 0.3s;
  opacity: ${(props) => (props.disabled ? 1 : 0.6)};
  :hover {
    opacity: 1;
  }
`

export default GameSquare
