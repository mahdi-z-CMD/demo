
// router
import { Link } from "react-router-dom"

export const Companyy = ({game}) => {

  return (
    <div className="game">
      <img src={game.thumbnail} alt="" />
      <Link to={`/game/${game.id}`}>{game.title}</Link>
    </div>
  )
}