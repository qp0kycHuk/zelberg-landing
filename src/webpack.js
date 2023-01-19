// Libraries
import yandexMap from './lib/yandex-map'
import fancybox from './lib/fancybox'

// Scripts
import scrollHeader from './ts/scroll-header'
import mobileMenu from './ts/mobile-menu'
import scrollTo from './ts/scroll-to'
import theme from './ts/theme'
import animation from './ts/animation'
import waved from './ts/waved'
import listing from './ts/listing'
import formSubmit from './ts/form-submit'
import inputs from './ts/inputs'
import maskTel from './ts/mask-tel'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', () => {

  yandexMap.init()
  fancybox.init()
  scrollHeader.init()
  mobileMenu.init()
  scrollTo.init()
  theme.init()
  animation.init()
  waved.init()
  listing.init()
  formSubmit.init()
  inputs.init()
  maskTel.init()

})