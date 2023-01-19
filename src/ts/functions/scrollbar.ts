const show = (): void => {

  const html = document.documentElement as HTMLElement

  html.classList.remove('overflow-hidden')
  html.style.marginRight = '0'

}

const hidden = (): void => {

  const html = document.documentElement as HTMLElement
  const scrollBarWidth: number = window.innerWidth - html.clientWidth

  html.classList.add('overflow-hidden')
  html.style.marginRight = `${scrollBarWidth}px`

}

export default { show, hidden }