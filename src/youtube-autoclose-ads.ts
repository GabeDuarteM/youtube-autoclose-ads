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
      const adClose: HTMLElement | null = document.querySelector(".video-ads .ytp-ad-overlay-close-button")
      const videoAdClose: HTMLElement | null = document.querySelector('.video-ads .ytp-button')
      const videoAdDisplayed: boolean = !!document.querySelector(".ytp-ad-player-overlay-skip-or-preview")

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
