const init = (form: HTMLFormElement): boolean => {

  const validates = form.querySelectorAll('.-validate-') as NodeListOf<Element>
  const download = form.querySelector('.-download-') as HTMLLabelElement

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

          error.innerText = 'Пожалуйста, введите ваш номер!'

        }

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