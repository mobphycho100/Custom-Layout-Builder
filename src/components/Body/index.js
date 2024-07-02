// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => {
  const renderLeftNavbar = () => (
    <nav className="left-navbar">
      <h1>Left Navbar Menu</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </nav>
  )

  const renderContent = () => (
    <div className="content">
      <h1>Content</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  )

  const renderRightNavbar = () => (
    <nav className="right-navbar">
      <h1>Right Navbar</h1>
      <div className="img-place-container">
        <div className="img-place">Ad 1</div>
        <div className="img-place">Ad 2</div>
      </div>
    </nav>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value

        return (
          <div className="body-container">
            {showLeftNavbar ? renderLeftNavbar() : null}
            {showContent ? renderContent() : null}
            {showRightNavbar ? renderRightNavbar() : null}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
