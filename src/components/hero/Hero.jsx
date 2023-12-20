import './hero.styles.css'
import { HiLocationMarker } from 'react-icons/hi'

const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings flexCenter innerWidth hero-container'>
        {/* HERO LEFT */}
        <div className='flexColStart hero-left'>
          <div className='hero-title'>
            <div className='orange-circle' />
            <h1>
              Discover <br /> Most Suitable <br />
              Property
            </h1>
          </div>
          <div className='flexColStart hero-desc'>
            <span>Find a variety of properties that suit your ever need</span>
            <span>Forget the hassle in looking for the perfect home</span>
          </div>
          <div className='search-bar flexCenter'>
            <HiLocationMarker color='var(--blue)' size={25} />
            <input type='text' name='hero-input' id='hero-input' />
            <button className='button'>Search</button>
          </div>
        </div>

        {/* HERO RIGHT */}
        <div className='hero-right'>
          <div className='image-container'>
            <img src='./hero-image.png' alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
