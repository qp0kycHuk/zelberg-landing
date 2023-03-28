
const createOptions = (source: string) => {

  fetch(source).then((response: Response) => {

    response.json().then((data) => {

      const select = document.querySelector('.-select-panel-') as HTMLSelectElement

      select.innerHTML = ''

      for (let key in data) {

        const option = document.createElement('option')

        option.value = key
        option.innerText = data[key]
        select.appendChild(option)

      }

    })

  })

}

const init = (): void => {

  createOptions('https://fitout.su/ajax/get_panel.php?type=1')

  document.addEventListener('input', ((event: Event): void => {

    if ((event.target as HTMLSelectElement).classList.contains('-select-type-')) {

      if ((event.target as HTMLSelectElement).value == '1') {

        createOptions('https://fitout.su/ajax/get_panel.php?type=1')

      } else {

        createOptions('https://fitout.su/ajax/get_panel.php?type=2')

      }

    }

  }) as EventListener)

}

export default { init }