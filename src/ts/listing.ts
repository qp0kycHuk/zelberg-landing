const init = (): void => {

  const listings = document.querySelectorAll('.-listing-') as NodeListOf<Element>

  listings.forEach((element: Element): void => {

    const listing = element as HTMLElement

    if (!listing) return

    const items = listing.querySelectorAll('.-listing-item-') as NodeListOf<Element>
    const btn = listing.querySelector('.-listing-btn-') as HTMLButtonElement

    btn.addEventListener('click', ((): void => {

      for (let i: number = 0; i < items.length; i++) {

        if (items[i].classList.contains('d-sm-none')) items[i].classList.remove('d-sm-none')

        if (items[i].classList.contains('-scroll-')) items[i].classList.add('-show-')

        btn.remove()

      }

    }) as EventListener)

  })

}

export default { init }