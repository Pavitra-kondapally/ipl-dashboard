// Write your code here
import './index.css'

const MatchCard = props => {
    const {recentMatchDetails} = props
    const {competing_team, competing_team_logo, result, match_status} = recentMatchDetails
    const resultClassName = result === "Won" ? "won-result" : "lost-result"

    return(
        <li className = "recent-match-card">
            <img src = {competing_team_logo} alt = `competing team ${competing_team}` className = "team-logo-img" />
            <h2 className = "team-name">{competing_team}</h2>
            <p className = "team-name">{result}</p>
            <p className = {resultClassName}>{match_status}</p>
        </li>
    )
}

export default MatchCard