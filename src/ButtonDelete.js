import {connect} from "react-redux";

function ButtonDelete(props) {

const {team} = props
    return (
        <div>
            <button onClick={() => props.deleteTeam(team.id)}>delete</button>
        </div>
    );
}
const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
  deleteTeam: (teamId) => dispatch({type: 'DELETE_TEAM' , payload: teamId})
})

export default connect(mapStateToProps, mapDispatchToProps) (ButtonDelete);
