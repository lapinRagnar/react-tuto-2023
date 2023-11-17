// import React from 'react'

ReactDOM.render(
  <div>
    <Navbar />
    <h1>App</h1>
  </div>,
  document.getElementById('root')
)



function Navbar() {

  const [open, setOpen] = React.useState(true)
  const toggleNav = () => {
    console.log('toggleNav')
    setOpen(!open)
  }

  return (
    <div className="navbar">
      <ul className={open ? 'menu' : 'cacher'}>
        <li>Home</li>
        <li>About</li>
      </ul>
      <img
        onClick={toggleNav} 
        className="hamburger"
        src="assets/icons/hamburger.svg" 
        alt="hamburger"
        height="20"
        width="20"
        />
    </div>
  )
}


