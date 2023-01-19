import { coordinates } from './functions/coordinates'

const getWaved = (event: MouseEvent): void => {

  const waved = (event.target as HTMLElement).closest('.-waved-') as HTMLElement
  const ripple = waved.querySelector('.ripple') as HTMLDivElement
  const circle = document.createElement('div') as HTMLDivElement

  const coordinates: coordinates = {

    top: event.clientY - waved.getBoundingClientRect().top,
    left: event.clientX - waved.getBoundingClientRect().left

  }

  circle.classList.add('ripple-circle')
  circle.style.top = `${coordinates.top}px`
  circle.style.left = `${coordinates.left}px`

  ripple.appendChild(circle)

  setTimeout((): void => circle.remove(), 1000)

}

const init = (): void => {

  const waveds = document.querySelectorAll('.-waved-') as NodeListOf<Element>

  waveds.forEach((element: Element): void => {

    const waved = element as HTMLElement

    if (!waved) return

    const ripple = document.createElement('div') as HTMLDivElement

    ripple.classList.add('ripple')
    waved.appendChild(ripple)

    waved.addEventListener('click', getWaved as EventListener)

  })

}

export default { init }