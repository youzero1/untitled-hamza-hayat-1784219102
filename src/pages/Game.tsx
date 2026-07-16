import Board from '../components/Board'
import ScoreBoard from '../components/ScoreBoard'
import { useGameLogic } from '../hooks/useGameLogic'

export default function Game() {
  const {
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
  } = useGameLogic()

  const statusMessage = winner
    ? `🎉 Player ${winner} wins!`
    : isDraw
    ? "🤝 It's a draw!"
    : `Player ${currentPlayer}'s turn`

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 gap-6 sm:gap-8">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 tracking-tight">
        Tic Tac Toe
      </h1>

      {/* Scoreboard */}
      <ScoreBoard scores={scores} currentPlayer={currentPlayer} winner={winner} />

      {/* Status */}
      <div
        className={`
          text-lg sm:text-xl font-semibold transition-all duration-300
          ${
            winner
              ? 'text-yellow-300 animate-bounce'
              : isDraw
              ? 'text-slate-300'
              : currentPlayer === 'X'
              ? 'text-cyan-400'
              : 'text-pink-400'
          }
        `}
      >
        {statusMessage}
      </div>

      {/* Board */}
      <Board squares={squares} onSquareClick={handleSquareClick} winningLine={winningLine} />

      {/* Buttons */}
      <div className="flex gap-3 sm:gap-4 mt-2">
        {gameOver && (
          <button
            onClick={resetGame}
            className="px-6 py-3 rounded-xl font-bold text-sm sm:text-base
              bg-gradient-to-r from-cyan-500 to-purple-500 text-white
              hover:from-cyan-400 hover:to-purple-400
              active:scale-95 transition-all duration-200
              shadow-lg shadow-purple-500/30"
          >
            Play Again
          </button>
        )}
        <button
          onClick={resetAll}
          className="px-6 py-3 rounded-xl font-bold text-sm sm:text-base
            bg-white/10 text-white border border-white/20
            hover:bg-white/20 active:scale-95 transition-all duration-200"
        >
          Reset Scores
        </button>
      </div>
    </div>
  )
}
