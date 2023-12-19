import './header.styles.css'

const Header = () => {
  return (
    <header className='h-wrapper'>
      <div className='h-container flexCenter paddings innerWidth'>
        <img src='./logo.png' alt='logo' width={100} />

        <div className='h-menu flexCenter'>
          <a href='#'></a>
          <a href='#'>Our Values</a>
          <a href='#'>Contact Us</a>
          <a href='#'>Get Started</a>
          <button className='button'>
            <a href='#'>Contact</a>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
