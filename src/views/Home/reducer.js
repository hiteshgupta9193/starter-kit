const initialState = {}

export default function homeReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'XYZ': {
      return state
    }
    default:
      return state
  }
}