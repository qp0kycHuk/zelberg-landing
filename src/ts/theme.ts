const init = (): void => {

  const body = document.body as HTMLBodyElement
  const btns = body.querySelectorAll('.-switch-theme-') as NodeListOf<Element>

  let theme: string = 'auto'

  const btnsChecked = (check: boolean): void => {

    btns.forEach((element: Element): void => {

      const btn = element as HTMLInputElement

      btn.checked = check

    })

  }

  const darkTheme = (): void => {

    if (!body.hasAttribute('data-theme')) {

      theme = 'dark'
      body.setAttribute('data-theme', 'dark')

      btnsChecked(true)

      localStorage.setItem('theme', theme)

    } else {

      theme = 'auto'
      body.removeAttribute('data-theme')

      btnsChecked(false)

      localStorage.setItem('theme', theme)

    }

  }

  if (localStorage.getItem('theme')) {

    theme = String(localStorage.getItem('theme'))

    if (theme == 'dark') {

      body.setAttribute('data-theme', 'dark')

      btnsChecked(true)

    } else {

      body.removeAttribute('data-theme')

      btnsChecked(false)

    }

  }

  btns.forEach((element: Element): void => {

    const btn = element as HTMLInputElement

    btn.addEventListener('click', darkTheme as EventListener)

  })

  document.addEventListener('keyup', ((event: KeyboardEvent): void => {

    if (event.altKey && event.code == 'Digit5') darkTheme()

  }) as EventListener)

}

export default { init }