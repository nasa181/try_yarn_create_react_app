import { VisibilityFilters } from './actions'



const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_HISTORY,
  todos: []
}






function todoApp(state = initialState, action){
	switch(action.type){
		case SET_VISIBILITY_FILTER:
			return {...state, visibilityFilter: action.filter}
		case ADD_TODO:
			return {	
						...state,
						todos:[
							...state.todos,
							{
								text: action.text,
								completed: false
							}
						]
					}
		case TOGGLE_TODO:
			return state.map((todo, index) => {
				if(index === action.index){
					return {todo,{
						completed: !todo.completed
					}}
				}
			})
		default:
			return state
	}
}









const todoApp = combineReducers({
  visibilityFilter,
  todos
})


export default todoApp






