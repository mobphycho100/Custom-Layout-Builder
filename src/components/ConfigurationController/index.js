// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="controller-container">
          <h1>Layout</h1>
          <div className="checkbox-container">
            <input
              id="content"
              type="checkbox"
              checked={showContent}
              onChange={onToggleShowContent}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div className="checkbox-container">
            <input
              id="leftNavbar"
              type="checkbox"
              checked={showLeftNavbar}
              onChange={onToggleShowLeftNavbar}
            />
            <label htmlFor="leftNavbar">Left Navbar</label>
          </div>
          <div className="checkbox-container">
            <input
              id="rightNavbar"
              type="checkbox"
              checked={showRightNavbar}
              onChange={onToggleShowRightNavbar}
            />
            <label htmlFor="rightNavbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
