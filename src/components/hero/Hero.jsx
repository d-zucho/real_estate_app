import './hero.styles.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'

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

          {/* Search Bar */}
          <div className='search-bar flexCenter'>
            <HiLocationMarker color='var(--blue)' size={25} />
            <input type='text' name='hero-input' id='hero-input' />
            <button className='button'>Search</button>
          </div>

          <div className='flexCenter stats'>
            <div className='flexColStart stat'>
              {/* Stat 1 */}
              <span>
                <CountUp start={8800} end={9000} duration={6} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Premium Products</span>
            </div>
            {/* Stat 2 */}
            <div className='flexColStart stat'>
              <span>
                <CountUp start={1950} end={2000} duration={6} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Happy Customers</span>
            </div>
            {/* Stat 3 */}
            <div className='flexColStart stat'>
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Awards</span>
            </div>
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
