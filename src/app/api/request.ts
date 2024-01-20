// import axios from 'axios'

// const instance = axios.create({
//   baseURL: `${process.env.BASE_URL}/api/`,
//   adapter: require('axios/lib/adapters/http')
// })


// export default instance

class BaseRequest{
  POST<T = any>(url: string, args: T){
    return Request(url, args, 'POST')
  }
  GET<T = any>(url: string, args: T){
    return Request(url, args, 'GET')
  }
}
function Request<T = any>(url: string, args: T, method = 'POST'){
  console.log('process.env.BASE_URL=====>', process.env.BASE_URL)
  return fetch(`${process.env.BASE_URL || ''}api${url}`, { 
    method, 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(args) 
  })
    .then(res => res.json())
}

const request = new BaseRequest()

export default request