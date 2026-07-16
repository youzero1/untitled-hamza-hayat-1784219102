import { useState, useCallback } from 'react'

type SquareValue = 'X' | 'O' | null

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function calculateWinner(squares: SquareValue[]): { winner: 'X' | 'O'; line: number[] } | null {
  for (const [a, b, c] of WINNING_LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a] as 'X' | 'O', line: [a, b, c] }
    }
  }
  return null
}

export function useGameLogic() {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 })
  const [gameOver, setGameOver] = useState(false)

  const result = calculateWinner(squares)
  const winner = result?.winner ?? null
  const winningLine = result?.line ?? null
  const isDraw = !winner && squares.every((s) => s !== null)
  const currentPlayer: 'X' | 'O' = xIsNext ? 'X' : 'O'

  const handleSquareClick = useCallback(
    (index: number) => {
      if (squares[index] || winner || gameOver) return

      const nextSquares = squares.slice()
      nextSquares[index] = xIsNext ? 'X' : 'O'
      setSquares(nextSquares)
      setXIsNext(!xIsNext)

      const newResult = calculateWinner(nextSquares)
      if (newResult) {
        setGameOver(true)
        setScores((prev) => ({ ...prev, [newResult.winner]: prev[newResult.winner] + 1 }))
      } else if (nextSquares.every((s) => s !== null)) {
        setGameOver(true)
        setScores((prev) => ({ ...prev, draws: prev.draws + 1 }))
      }
    },
    [squares, xIsNext, winner, gameOver],
  )

  const resetGame = useCallback(() => {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
    setGameOver(false)
  }, [])

  const resetAll = useCallback(() => {
    resetGame()
    setScores({ X: 0, O: 0, draws: 0 })
  }, [resetGame])

  return {
    squares,
    currentPlayer,
    winner,
    winningLine,
    isDraw,
    scores,
    gameOver,
    handleSquareClick,
    resetGame,
    resetAll,
  }
}
