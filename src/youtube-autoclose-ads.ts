let adFound = false
let videoAdFound = false
let shouldCloseVideoAd = false
setInterval(() => {
  chrome.storage.sync.get(
    {
      normalAdWaitSeconds: 5000,
      videoAdWaitSeconds: 5000,
    },
    ({ normalAdWaitSeconds, videoAdWaitSeconds }) => {
      const adClose: HTMLElement | null = document.querySelector(
        '.ytp-ad-overlay-close-container .ytp-ad-overlay-close-button',
      )
      const videoAdClose: HTMLElement | null = document.querySelector(
        '.ytp-ad-skip-button-container .ytp-ad-skip-button',
      )
      const videoAdDisplayed: boolean = !!document.querySelector(
        '.ytp-ad-skip-button-container',
      )

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
