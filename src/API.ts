const BASE_URL: string = "https://directlyapply.herokuapp.com/"
const WAKE_UP_URL: string = BASE_URL + "wakeup"
const AUTH_URL: string = BASE_URL + "authorised"

const authGet = (url: string) => {
    const configObj = {
        method: "GET",
        headers: {
            "Authorised": localStorage.token
        }
    }
    return fetch(url, configObj).then(res => res.json())
}

const wakeUp = () => fetch(WAKE_UP_URL).then(res => res.json()).then(console.log)

const authorise = () => authGet(AUTH_URL)

export { authorise, wakeUp }