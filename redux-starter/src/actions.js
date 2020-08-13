import * as actions from './actionTypes'

// Add functions
// method 1
export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      // description: description
      description
    }
  }
}

// method 2
export const bugAdded1 = description => ({
  type: actions.BUG_ADDED,
  payload: {
    // description: description
    description
  }
})

// Remove functions
// method 1
export function bugRemoved(id) {
  return {
    type: actions.BUG_REMOVED,
    payload: {
      // id: id
      id
    }
  }
}

// method 2
export const bugRemoved1 = id => ({
  type: actions.BUG_REMOVED,
  payload: {
    // id: id
    id
  }
})

// Resolve bug functions
// method 1
export function bugResolved(id) {
  return {
    type: actions.BUG_RESOLVED,
    payload: {
      // id: id
      id
    }
  }
}

//method 2
export const bugResolved1 = id => ({
  type: actions.BUG_RESOLVED,
  payload: {
    // id: id
    id
  }
})
