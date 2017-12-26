const saveOptions = () => {
  const normalAdWaitSeconds: string = (document.getElementById("normalAdWaitSeconds") as HTMLInputElement).value
  const videoAdWaitSeconds: string = (document.getElementById("videoAdWaitSeconds") as HTMLInputElement).value
  chrome.storage.sync.set(
    {
      normalAdWaitSeconds,
      videoAdWaitSeconds,
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
      normalAdWaitSeconds: 5,
      videoAdWaitSeconds: 5,
    },
    ({ normalAdWaitSeconds, videoAdWaitSeconds }) => {
      // tslint:disable-next-line:semicolon
      ;(document.getElementById("normalAdWaitSeconds") as HTMLInputElement).value = normalAdWaitSeconds
      ;(document.getElementById("videoAdWaitSeconds") as HTMLInputElement).value = videoAdWaitSeconds
    },
  )
}

document.addEventListener("DOMContentLoaded", restoreOptions)
;(document.getElementById("save") as HTMLElement).addEventListener("click", saveOptions)
