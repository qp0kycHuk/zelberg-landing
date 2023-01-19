import { coordinates } from './functions/coordinates'
import scrolledPage from './functions/scrolled-page'

const offset = (element: HTMLElement): coordinates => {

  const coordinates: coordinates = {

    top: element.getBoundingClientRect().top + scrolledPage.init().top,
    left: element.getBoundingClientRect().left + scrolledPage.init().left

  }

  return coordinates

}

const animationOnScroll = (): void => {

  const scrollItems = document.querySelectorAll('.-scroll-') as NodeListOf<Element>

  scrollItems.forEach((element: Element): void => {

    const scrollItem = element as HTMLElement

    if (!scrollItem) return

    const height: number = scrollItem.offsetHeight
    const offsetTop: number = offset(scrollItem).top
    const screenPosition: number = 3

    let point: number = window.innerHeight - height / screenPosition

    if (point > window.innerHeight) point = window.innerHeight - window.innerHeight / screenPosition

    if (scrolledPage.init().top > offsetTop - point && scrolledPage.init().top < offsetTop + height) {

      scrollItem.classList.add('-show-')

    }

  })

}

const init = (): void => {

  animationOnScroll()

  document.addEventListener('scroll', animationOnScroll as EventListener)

}

export default { init }