import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import {Rings} from 'react-loader-spinner'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamData: {},
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }
  componentDidMount() {
    this.getTeamData()
  }
  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const updatedData = await response.json()
    this.setState({
      teamData: updatedData,
      latestMatchDetails: updatedData.latest_match_details,
      recentMatches: updatedData.recent_matches,
      isLoading: false,
    })
    console.log(updatedData)
  }
  render() {
    const {teamData, latestMatchDetails, recentMatches, isLoading} = this.state
    const {team_banner_url} = teamData
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`team-matches ${id}`}>
        {isLoading ? (
          <div testid="loader">
            <Rings type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : ( 
          <>
            <img
              src={team_banner_url}
              className="banner-img"
              alt="team banner"
            />
            <div className="latest-matches-section">
              <p className="latest-matches-hed">Latest Matches</p>
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>
            <ul className="recents-section">
              {recentMatches.map(eachItem => (
                <MatchCard item={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
