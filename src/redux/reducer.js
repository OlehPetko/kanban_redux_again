const initialState = {
    columns: [1, 2, 3, 4,],
    teams: [
        {id: Math.random(), team: 'Liverpool', positionTeam: 1, commentary: true},
        {id: Math.random(), team: 'Manchester', positionTeam: 2, commentary: true},
        {id: Math.random(), team: 'London', positionTeam: 3, commentary: true},
        {id: Math.random(), team: 'Vancouver', positionTeam: 4, commentary: true},
    ]
}
const teams = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TEAM':
            return {
                ...state, teams: [...state.teams, {
                    id: Math.random(), team: action.payload.newTeam,
                    positionTeam: 1, commentary: true
                }]
            }
        case 'MOVE_TEAM':
            return {
                ...state, teams: state.teams.map(el => el.id === action.payload.teamId ?
                    {
                        ...el,
                        positionTeam: state.columns[state.columns.indexOf(el.positionTeam) + action.payload.valueTeam]
                    } : el)
            }
        case 'DELETE_TEAM':
            return {
                ...state, teams: state.teams.filter(el => el.id !== action.payload)
            }


        default:
            return state

    }
}

export default teams