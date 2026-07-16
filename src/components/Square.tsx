import { memo } from 'react'

type SquareProps = {
  value: 'X' | 'O' | null
  onClick: () => void
  isWinning: boolean
  index: number
}

const Square = memo(({ value, onClick, isWinning, index }: SquareProps) => {
  const delay = `${index * 30}ms`

  return (
    <button
      onClick={onClick}
      className={`
        relative aspect-square w-full rounded-2xl text-5xl sm:text-6xl md:text-7xl font-extrabold
        transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent
        ${
          isWinning
            ? 'bg-gradient-to-br from-yellow-400 to-amber-500 scale-105 shadow-lg shadow-yellow-500/40'
            : value
            ? 'bg-white/10 backdrop-blur-sm shadow-inner'
            : 'bg-white/5 backdrop-blur-sm hover:bg-white/15 hover:scale-[1.03] active:scale-95 cursor-pointer'
        }
        border border-white/10
      `}
      style={{ animationDelay: delay }}
      disabled={!!value}
      aria-label={value ? `Square ${index + 1}: ${value}` : `Square ${index + 1}: empty`}
    >
      {value && (
        <span
          className={`
            inline-block animate-pop
            ${isWinning ? 'text-slate-900' : value === 'X' ? 'text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]' : 'text-pink-400 drop-shadow-[0_0_12px_rgba(244,114,182,0.5)]'}
          `}
        >
          {value}
        </span>
      )}
    </button>
  )
})

Square.displayName = 'Square'
export default Square
