import Square from './Square'

type BoardProps = {
  squares: ('X' | 'O' | null)[]
  onSquareClick: (index: number) => void
  winningLine: number[] | null
}

export default function Board({ squares, onSquareClick, winningLine }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-sm mx-auto">
      {squares.map((value, i) => (
        <Square
          key={i}
          index={i}
          value={value}
          onClick={() => onSquareClick(i)}
          isWinning={winningLine !== null && winningLine.includes(i)}
        />
      ))}
    </div>
  )
}
