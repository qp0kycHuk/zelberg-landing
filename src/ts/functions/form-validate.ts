const emailInput = (input: HTMLInputElement): boolean => {

  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)

}

const init = (form: HTMLFormElement): boolean => {

  const validates = form.querySelectorAll('.-validate-') as NodeListOf<Element>

  let valid: boolean = true

  validates.forEach((element: Element): void => {

    const validate = element as HTMLLabelElement
    const inputs = validate.querySelectorAll('.-validate-input-') as NodeListOf<Element>
    const error = validate.querySelector('.-validate-error-') as HTMLElement

    inputs.forEach((element: Element): void => {

      const input = element as HTMLInputElement

      const inputError = (): void => {

        input.focus()
        input.classList.add('input--error')
        error.classList.remove('anim--fade')
        valid = false

      }

      const maxLengthInputTel = (numb: number): void => {

        if (input.value.length > 0 && input.value.length < numb) {

          error.innerText = 'Введите корректный номер!'

          inputError()

        }

      }

      if (input.value == null || input.value == '' || input.value.length == 0) {

        inputError()

      } else {

        input.classList.remove('input--error')
        error.classList.add('anim--fade')

      }

      if (input.classList.contains('-input-name-')) {

        if (input.value.length == 1) inputError()

      }

      if (input.classList.contains('-input-tel-')) {

        if (input.value[1] == '7') {

          maxLengthInputTel(18)

        } else if (input.value[0] == '8') {

          maxLengthInputTel(17)

        } else if (input.value[1] !== '7') {

          maxLengthInputTel(11)

        } else {

          error.innerText = 'Введите ваш номер!'

        }

      }

      if (input.classList.contains('-input-email-')) {

        if (emailInput(input)) inputError()

      }

      if (input.classList.contains('-input-height-')) {

        const value: number = Number(input.value.replace(' ', ''))

        if (value < 30 && value > 0) {

          error.innerText = 'Высота не может быть меньше 30'
          inputError()

        } else if (value > 1000) {

          error.innerText = 'Высота не может быть больше 1000'
          inputError()

        } else {

          error.innerText = 'Укажите высоту!'

        }

      }

      if (input.classList.contains('-input-select-')) {

        if (input.value == '0') inputError()

      }

      input.addEventListener('input', ((): void => {

        if (input.value.length > 0) {

          input.classList.remove('input--error')
          error.classList.add('anim--fade')

        }

      }) as EventListener, { once: true })

    })

  })

  return valid

}

export default { init }