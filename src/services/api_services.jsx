import axios from 'axios'

const EMAIL_API= import.meta.env.VITE_EMAIL_API 

const sendEmail=(mailObj)=>axios.post(EMAIL_API,mailObj).then(res=>res)

export {sendEmail}