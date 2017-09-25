export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_HISTORY: 'SHOW_HISTORY',
  SHOW_PROJECT_META: 'SHOW_PROJECT_META',
  SHOW_BLOG_META: 'SHOW_BLOG_META',
  SHOW_PROJECT_CONTENT: 'SHOW_PROJECT_CONTENT',
  SHOW_BLOG_CONTENT: 'SHOW_BLOG_CONTENT'
}


export function addTodo(text){
	return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
	return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
	return { type: SET_VISIBILITY_FILTER, filter }
}