import Teams from "./Teams";

function Position(props) {
    const {column, teams, moveRightDown} = props

    return (
        <div>
            {column}
            {teams.filter(team => column === team.positionTeam)
                .map(team =>
            <Teams key={team.id} team={team} moveRightDown={moveRightDown}/>
                )}
        </div>
    );
}

export default Position;
