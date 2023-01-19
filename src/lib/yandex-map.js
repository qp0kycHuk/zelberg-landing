import ymaps from 'ymaps'

const init = () => {

  if (!document.querySelector('*[data-suggest-view]') && !document.getElementById('map')) return

  ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then((maps) => {

    const center = [55.8125750689438,37.6944679999999]
    const mark = [55.8125750689438,37.6944679999999]
    const inputs = [...document.querySelectorAll('[data-suggest-view]')]

    const map = new maps.Map('map', {

      center: center,
      zoom: 17

    })

    const placemark = new maps.Placemark((mark), {}, {

      iconLayout: 'default#image',
      iconImageHref: '../img/pictures/geo.png',
      iconImageSize: [50, 62],
      iconImageOffset: [-20, -50]

    })

    inputs.forEach((input) => {

      new maps.SuggestView(input, {

        results: 5,
        container: document.body

      })

    })

    map.controls.remove('geolocationControl')
    map.controls.remove('searchControl')
    map.controls.remove('trafficControl')
    map.controls.remove('typeSelector')
    map.controls.remove('fullscreenControl')
    map.controls.remove('rulerControl')
    map.behaviors.disable(['scrollZoom'])
    map.geoObjects.add(placemark)

  }).catch((error) =>

    console.log('Failed to load Yandex Maps', error)

  )

}

export default { init }