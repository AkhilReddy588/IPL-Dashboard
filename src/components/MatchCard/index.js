import './index.css'

const MatchCard = props => {
  const {item} = props
  const {competing_team_logo, competing_team, result, match_status} = item
  const statStyle = match_status === 'Lost' ? 'lost' : 'win'
  return (
    <div className="recent-item">
      <img
        src={competing_team_logo}
        alt={`competing team ${competing_team}`}
        className="recent-logo"
      /> 
      <p className="recent-team">{competing_team}</p>
      <p className="result">{result}</p>
      <p className={statStyle}>{match_status}</p>
    </div>
  )
}
export default MatchCard
