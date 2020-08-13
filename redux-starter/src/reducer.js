// import {BUG_ADDED, BUG_REMOVED, BUG_RESOLVED} from './actionTypes'
import * as actions from './actionTypes'

// []

let lastId = 0

export default function reducer(state = [], action) {
  // method 1
  switch (action.type) {
    // case 'bugAdded':
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false
        }
      ]
    // case 'bugRemoved':
    case actions.BUG_REMOVED:
      return state.filter(bug => bug.id !== action.payload.id)
    // case 'bugResolved':
    case actions.BUG_RESOLVED:
      return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true})
    default:
      return state
  }

  /*
  // method 2
  // if (action.type === 'bugAdded') {
  if (action.type === actions.BUG_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      }
    ]
  // } else if (action.type === 'bugRemoved') {
  } else if (action.type === actions.BUG_REMOVED) {
    return state.filter(bug => bug.id !== action.payload.id)
  }
  // } else if (action.type === 'bugResolved') {
  } else if (action.type === actions.BUG_RESOLVED) {
    return state.map(bug => bug.id === action.payload.id ? bug.resolved = true : null)
  }
  return state
  */
}
