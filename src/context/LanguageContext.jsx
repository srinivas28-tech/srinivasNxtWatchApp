import React from 'react'

const ModeContext = React.createContext({
  isDark: false,
  changeMode: () => {},
  savedList: [],
  saveVideo: () => {},
  removeVideo: () => {},
})
export default ModeContext
