import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  console.log(latestMatchDetails)
  const updatesDetails = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
    date: latestMatchDetails.date,
  }
  const {
    umpires,
    result,
    manOfTheMatch,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
    date,
  } = updatesDetails
  return (
    <div className="latest-match-card">
      <div className="first">
        <div>
          <p className="compete-team">{competingTeam}</p>
          <p className="compete-team">{date}</p>
          <p className="date">{venue}</p>
          <p className="date">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="compete-team-logo"
        />
      </div>
      <hr className="line" />
      <div className="second">
        <p className="date">First Innings</p>
        <p className="ans">{firstInnings}</p>
        <p className="date">Second Innings</p>
        <p className="ans">{secondInnings}</p>
        <p className="date">Man Of The Match</p>
        <p className="ans">{manOfTheMatch}</p>
        <p className="date">Umpires</p>
        <p className="ans">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
