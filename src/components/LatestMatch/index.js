// Write your code here
import './index.css'

const LatestMatch = props => {
    const {bannerImage,
            competingTeamName,
            competingTeamLogo,
            date,
            venue,
            result,
            firstInnings,
            secondInnings,
            manOfTheMatch,
            umpires} = props

    return(
        <div className = "latest-match-card">
            <div className = "competing-match-details">
                <h1 className = "">{competingTeamName}</h1>
                <p className = "">{competingTeamName}>{date}</p>
                <p className = "">{competingTeamName}>{venue}</p>
                <p className = "">{competingTeamName}>{result}</p>
            </div>
            <img src = {competingTeamLogo} className = "competing-team-img" alt = `competing team ${competing_team}` />
            <div className = "latest-match-details">
                <p className = "match-details-title">First innings</p>
                <p className = "match-details-title">{firstInnings}</p>
                <p className = "match-details-title">Second innings</p>
                <p className = "match-details-title">{secondInnings}</p>
                <p className = "match-details-title">Man of the Match</p>
                <p className = "match-details-title">{manOfTheMatch}</p>
                <p className = "match-details-title">Umpires</p>
                <p className = "match-details-title">{umpires}</p>
            </div>
        </div>
    )
}

export default LatestMatch