import Position from "./Position";
import {useState} from "react";
import {connect} from "react-redux";

function App(props) {
    const {columns, teams} = props
    const [newTeam, setNewTeam] = useState([])
    const addNewTeam = () => {
        props.addTeam(newTeam)
        setNewTeam([])
    }

    return (
        <div>
            <input placeholder='add new team' value={newTeam} onChange={event => setNewTeam(event.target.value)}/>
            <button onClick={addNewTeam}>add team</button>
            {columns.map(column =>
                <Position key={column} column={column} teams={teams} moveRightDown={props.moveRightDown}/>
            )}

        </div>
    );
}

const mapStateToProps = (state) => ({
    columns: state.columns,
    teams: state.teams

})

const mapDispatchToProps = (dispatch) => ({
    addTeam: (newTeam, newPositionTeam) => dispatch({type: 'ADD_TEAM', payload: {newTeam, newPositionTeam}}),
    moveRightDown: (teamId, valueTeam) => dispatch({type: 'MOVE_TEAM', payload: {teamId, valueTeam}})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
