import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {item} = props
  const {name, teamImageUrl, id} = item
  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="li">
        <img src={teamImageUrl} className="team-img" />
        <p className="team-name">{name}</p>
      </li>
    </Link> 
  )
} 

export default TeamCard
