import formValidate from './functions/form-validate'
import dialog from './functions/dialog'

declare global {

  interface Window {

    ym: any

  }

}

const formSubmit = (event: Event): void => {

  event.preventDefault()

  const form = event.target as HTMLFormElement

  if (!formValidate.init(form)) return

  const formData: FormData = new FormData(form)
  const queryString: string = new URLSearchParams(formData as URLSearchParams).toString()
  const requestUrl: string = '/ajax/submit-handler.php'
  const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement

  submitBtn.setAttribute('disabled', 'disabled')

  dialog.open('fancybox-load', '/dialogs/dialog-load.php')

  fetch(requestUrl, {

    method: 'POST',
    body: formData

  }).then((response: Response): void => {

    response.text()

  }).then((): void => {

    dialog.close()

    if (form.classList.contains('-form-calc-')) {

      dialog.open('fancybox-dialog', `/dialogs/dialog-calc.php?${queryString}`)

    } else {

      dialog.open('fancybox-dialog', '/dialogs/dialog-submit.php')

    }

    window.ym(92177375, 'reachGoal', 'zayavka')

    form.reset()

    submitBtn.removeAttribute('disabled')

  }).catch((error: string): void =>

    console.log('The form has not been sent', error)

  )

}

const init = (): void => {

  document.addEventListener('submit', ((event: Event): void => {

    if ((event.target as HTMLFormElement).classList.contains('-form-submit-')) formSubmit(event)

  }) as EventListener)

}

export default { init }