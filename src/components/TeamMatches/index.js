// Write your code here
import { Component } from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
    state = {matchDetails : {}, isLoading: true }

    componentDidMount() {
        this.getTeamMatchDetails()
    }

    getTeamMatchDetails = async () => {
        const {match} = this.props
        const {params} = match
        const {id} = params

        const response = await fetch('https://apis.ccbp.in/ipl/:id')
        const data = await response.json()

        const updatedData = {
            bannerImage: data.team_banner_url,
            competingTeamName: data.latest_match_details.competing_team,
            competingTeamLogo: data.latest_match_details.competing_team_logo,
            date: data.latest_match_details.date,
            venue: data.latest_match_details.venue,
            result: data.latest_match_details.result,
            firstInnings: data.latest_match_details.first_innings,
            secondInnings: data.latest_match_details.second_innings,
            manOfTheMatch: data.latest_match_details.man_of_the_match,
            umpires: data.latest_match_details.umpires,
            recentMatchesData: data.recent_matches
        }
        this.setState({matchDetails: updatedData, isLoading: false})
    }

    render() {
        const{isLoading, matchDetails} = this.state
        const {
            bannerImage,
            competingTeamName,
            competingTeamLogo,
            date,
            venue,
            result,
            firstInnings,
            secondInnings,
            manOfTheMatch,
            umpires
        } = matchDetails

        return(
            {
                isLoading ? (<div testid="loader"> 
                                <Loader type="Oval" color="#ffffff" height={50} width={50} />
                             </div>)
                           : (
                               <div className = "team-details-container">
                                    <img src = {bannerImage} className = "banner-image" alt = "team banner"/>
                                    <p className = "latest-match-title">Latest Match</p>
                                    <LatestMatch 
                                        bannerImage = {bannerImage}
                                        competingTeamName = {competingTeamName}
                                        competingTeamLogo = {competingTeamLogo}
                                        date = {date}
                                        venue = {venue}
                                        result = {result}
                                        firstInnings = {firstInnings}
                                        secondInnings = {secondInnings}
                                        manOfTheMatch = {manOfTheMatch}
                                        umpires = {umpires}
                                    />
                                    <ul className = "recent-matches-list">
                                        {
                                            recentMatchesData.map(eachMatch => <MatchCard recentMatchDetails = {eachMatch} key = {eachMatch.id}/>)
                                        }
                                    </ul>
                                </div>
                           )
            }
            
        )
    }
}

export default TeamMatches