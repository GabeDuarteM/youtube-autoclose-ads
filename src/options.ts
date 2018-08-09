const saveOptions = () => {
  const normalAdWaitSeconds: string = (document.getElementById(
    "normalAdWaitSeconds",
  ) as HTMLInputElement).value
  const videoAdWaitSeconds: string = (document.getElementById(
    "videoAdWaitSeconds",
  ) as HTMLInputElement).value
  chrome.storage.sync.set(
    {
      normalAdWaitSeconds: Number(normalAdWaitSeconds) * 1000,
      videoAdWaitSeconds: Number(videoAdWaitSeconds) * 1000,
    },
    () => {
      const status = document.getElementById("status") as HTMLElement
      status.textContent = "Options saved."
      setTimeout(() => {
        status.innerHTML = "&nbsp;"
      }, 1000)
    },
  )
}

const restoreOptions = () => {
  chrome.storage.sync.get(
    {
      normalAdWaitSeconds: 5000,
      videoAdWaitSeconds: 5000,
    },
    ({ normalAdWaitSeconds, videoAdWaitSeconds }) => {
      // tslint:disable-next-line:semicolon
      ;(document.getElementById(
        "normalAdWaitSeconds",
      ) as HTMLInputElement).value = `${normalAdWaitSeconds / 1000}`
      ;(document.getElementById(
        "videoAdWaitSeconds",
      ) as HTMLInputElement).value = `${videoAdWaitSeconds / 1000}`
    },
  )
}

document.addEventListener("DOMContentLoaded", restoreOptions)
;(document.getElementById("save") as HTMLElement).addEventListener(
  "click",
  saveOptions,
)
