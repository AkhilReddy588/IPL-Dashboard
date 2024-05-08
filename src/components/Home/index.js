import {Component} from 'react'
import {Rings} from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}
  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsList: updatedData, isLoading: false})
  }
  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="bgm">
        <div className="logo-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="logo-heading">IPL Dashboard</h1>
        </div>
        <div className="teams-section"> 
          {isLoading ? (
            <div testid="loader">
              <Rings type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            teamsList.map(eachItem => (
              <TeamCard item={eachItem} key={eachItem.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default Home
