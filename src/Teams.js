import ButtonDelete from "./ButtonDelete";

function Teams(props) {

    const {team, moveRightDown} = props
    return (
        <div>
            {team.team}
            <button disabled={team.positionTeam === 1} onClick={() => moveRightDown(team.id, -1)}>⬆</button>
            <button disabled={team.positionTeam === 4} onClick={() => moveRightDown(team.id, 1)}>⬇</button>
            <ButtonDelete team={team} />
        </div>
    );
}

export default Teams;
