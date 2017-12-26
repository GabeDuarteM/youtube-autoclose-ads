let adFound: boolean = false
let videoAdFound: boolean = false
let shouldCloseVideoAd: boolean = false
setInterval(() => {
  chrome.storage.sync.get(
    {
      normalAdWaitSeconds: 5,
      videoAdWaitSeconds: 5,
    },
    ({ normalAdWaitSeconds, videoAdWaitSeconds }) => {
      const adClose: HTMLElement | null = document.querySelector(".adDisplay .close-button")
      const videoAdClose: HTMLElement | null = document.querySelector(".videoAdUiSkipButton")
      const videoAdDisplayed: boolean = !!document.querySelector(".videoAdUiPreSkipButton")

      if (adClose && !adFound) {
        setTimeout(() => {
          adClose.click()
          adFound = false
        }, normalAdWaitSeconds)
        adFound = true
      }

      if (videoAdDisplayed && !videoAdFound) {
        setTimeout(() => {
          shouldCloseVideoAd = true
        }, videoAdWaitSeconds)

        videoAdFound = true
      }

      if (videoAdClose && shouldCloseVideoAd) {
        videoAdClose.click()
        shouldCloseVideoAd = false
        videoAdFound = false
      }
    },
  )
}, 100)
