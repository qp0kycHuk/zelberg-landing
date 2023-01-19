import scrollBar from './functions/scrollbar'

const init = (): void => {

  const mobile = document.querySelector('.-mobile-') as HTMLElement

  if (!mobile) return

  const burger = document.querySelector('.-burger-') as HTMLButtonElement
  const close = mobile.querySelector('.-close-') as HTMLButtonElement

  const openModal = (): void => {

    scrollBar.hidden()

    mobile.classList.add('mobile--show')
    mobile.classList.add('pointer-all')

  }

  const closeModal = (): void => {

    scrollBar.show()

    mobile.classList.remove('mobile--show')
    mobile.classList.remove('pointer-all')

  }

  burger.addEventListener('click', openModal as EventListener)
  close.addEventListener('click', closeModal as EventListener)

  document.addEventListener('click', ((event: Event): void => {

    if (!(event.target as HTMLElement).hasAttribute('data-mobile') && !(event.target as HTMLElement).closest('[data-mobile]') && !(event.target as HTMLElement).closest('.-burger-')) closeModal()

    if ((event.target as HTMLElement).classList.contains('-mobile-link-')) closeModal()

  }) as EventListener)

}

export default { init }