let adFound: boolean = false
let videoAdFound: boolean = false
let shouldCloseVideoAd: boolean = false
setInterval(() => {
  chrome.storage.sync.get(
    {
      normalAdWaitSeconds: 5000,
      videoAdWaitSeconds: 5000,
    },
    ({ normalAdWaitSeconds, videoAdWaitSeconds }) => {
      const adClose: HTMLElement | null = document.querySelector(
        ".video-ads .close-padding",
      )
      const videoAdClose: HTMLElement | null = document.querySelector(
        ".videoAdUi .videoAdUiSkipButton",
      )
      const videoAdDisplayed: boolean = !!document.querySelector(".videoAdUi")

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
