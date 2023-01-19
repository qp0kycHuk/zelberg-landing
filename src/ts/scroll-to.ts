import scrolledPage from './functions/scrolled-page'

const scrollTo = (event: Event): void => {

  event.preventDefault()

  const id: string = String((event.target as HTMLAnchorElement).getAttribute('href'))
  const block = document.querySelector(id) as HTMLElement
  const offsetTop: number = block.getBoundingClientRect().top + scrolledPage.init().top

  window.scrollTo({

    top: offsetTop,
    behavior: 'smooth'

  })

}

const init = (): void => {

  document.addEventListener('click', ((event: Event): void => {

    if ((event.target as HTMLElement).hasAttribute('data-href')) scrollTo(event)

  }) as EventListener)

}

export default { init }