import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'
import ConfigurationContext from './context/ConfigurationContext'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onToggleShowContent = () => {
    this.setState(prev => ({showContent: !prev.showContent}))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prev => ({showLeftNavbar: !prev.showLeftNavbar}))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prev => ({showRightNavbar: !prev.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <ConfigurationController />
        <Layout />
      </ConfigurationContext.Provider>
    )
  }
}

export default App
