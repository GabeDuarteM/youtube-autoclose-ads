let adFound: boolean = false
setInterval(() => {
  const adClose: HTMLElement | null = document.querySelector(".adDisplay .close-button")
  const videoAdClose: HTMLElement | null = document.querySelector(".videoAdUiSkipButton")
  if (adClose && !adFound) {
    setTimeout(() => {
      adClose.click()
      adFound = false
    }, 5000)
    adFound = true
  }
  if (videoAdClose) {
    videoAdClose.click()
  }
}, 100)
