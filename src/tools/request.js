export function request (url, method = 'GET') {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.send()

    xhr.onload = function () {
      if (xhr.status >= 400) {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        })
      } else {
        resolve(JSON.parse(xhr.response))
      }
    }

    xhr.onerror = function () {
      reject({
        status: xhr.status,
        statusText: xhr.statusText
      })
    }
  })
}

export default request
