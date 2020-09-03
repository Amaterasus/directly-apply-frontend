const BASE_URL: string = "https://directlyapply.herokuapp.com/"
const WAKE_UP_URL: string = BASE_URL + "wakeup"
const AUTH_URL: string = BASE_URL + "authorised"
const SIGN_UP_URL: string = BASE_URL + "signup"

const authGet = (url: string) => {
    const configObj = {
        method: "GET",
        headers: {
            "Authorised": localStorage.token
        }
    }
    return fetch(url, configObj).then(res => res.json())
}

const post = (url: string, data: object) => {
    console.log(data)
    const configObj = {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
        body: JSON.stringify(data)
    }

    return fetch(url, configObj)
}

const signUp = (data: object) => post(SIGN_UP_URL, data).then(res => res.json())

const wakeUp = () => fetch(WAKE_UP_URL).then(res => res.json()).then(console.log)

const authorise = () => authGet(AUTH_URL)

export { authorise, wakeUp, signUp}