// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {matchCardDetails} = props
  const {id, name, teamImageUrl} = matchCardDetails

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <div className="item-container">
        <img src={teamImageUrl} className="team-card-image" alt="{name}" />
        <p className="team-name">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
