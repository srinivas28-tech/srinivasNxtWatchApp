import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideo from './components/SavedVideo'
import ModeContext from './context/LanguageContext'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, savedList: []}

  changeMode = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  save = item => {
    this.setState(prev => ({savedList: [item, ...prev.savedList]}))
  }

  remove = item => {
    const {savedList} = this.state
    const newList = savedList.filter(each => each.id !== item.id)
    this.setState({savedList: newList})
  }

  render() {
    const {isDark, savedList} = this.state
    return (
      <ModeContext.Provider
        value={{
          savedList,
          saveVideo: this.save,
          isDark,
          changeMode: this.changeMode,
          removeVideo: this.remove,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideo} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/bad-path" component={NotFound} />
          <ProtectedRoute component={NotFound} />
        </Switch>
      </ModeContext.Provider>
    )
  }
}

export default App
