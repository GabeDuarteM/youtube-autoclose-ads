let adFound: boolean = false
setInterval(() => {
  chrome.storage.sync.get(
    {
      normalAdWaitSeconds: 5,
      videoAdWaitSeconds: 5,
    },
    ({ normalAdWaitSeconds, videoAdWaitSeconds }) => {
      const adClose: HTMLElement | null = document.querySelector(".adDisplay .close-button")
      const videoAdClose: HTMLElement | null = document.querySelector(".videoAdUiSkipButton")
      if (adClose && !adFound) {
        setTimeout(() => {
          adClose.click()
          adFound = false
        }, normalAdWaitSeconds)
        adFound = true
      }
      if (videoAdClose) {
        videoAdClose.click()
      }
    },
  )
}, 100)
