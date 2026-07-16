type ScoreBoardProps = {
  scores: { X: number; O: number; draws: number }
  currentPlayer: 'X' | 'O'
  winner: 'X' | 'O' | null
}

export default function ScoreBoard({ scores, currentPlayer, winner }: ScoreBoardProps) {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-6 w-full max-w-sm mx-auto">
      {/* Player X */}
      <div
        className={`
          flex-1 text-center rounded-xl py-3 px-2 transition-all duration-300
          ${
            !winner && currentPlayer === 'X'
              ? 'bg-cyan-500/20 border-2 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-105'
              : 'bg-white/5 border border-white/10'
          }
        `}
      >
        <div className="text-cyan-400 font-bold text-lg sm:text-xl">X</div>
        <div className="text-white text-2xl sm:text-3xl font-extrabold">{scores.X}</div>
      </div>

      {/* Draws */}
      <div className="flex-1 text-center rounded-xl py-3 px-2 bg-white/5 border border-white/10">
        <div className="text-slate-400 font-bold text-sm sm:text-base">Draw</div>
        <div className="text-white text-2xl sm:text-3xl font-extrabold">{scores.draws}</div>
      </div>

      {/* Player O */}
      <div
        className={`
          flex-1 text-center rounded-xl py-3 px-2 transition-all duration-300
          ${
            !winner && currentPlayer === 'O'
              ? 'bg-pink-500/20 border-2 border-pink-400 shadow-lg shadow-pink-500/20 scale-105'
              : 'bg-white/5 border border-white/10'
          }
        `}
      >
        <div className="text-pink-400 font-bold text-lg sm:text-xl">O</div>
        <div className="text-white text-2xl sm:text-3xl font-extrabold">{scores.O}</div>
      </div>
    </div>
  )
}
