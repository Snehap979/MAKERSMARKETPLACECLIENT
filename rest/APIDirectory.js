const scheme = 'http'
const host = 'localhost'
const port = '7000'


const baseUrl = `${scheme}://${host}:${(port)}`
export const registerUser= () => { return `${baseUrl}/users` }
export const authenticateUser = () => { return `${baseUrl}/authenticateUser`}
export const getEnergy= () => {return `${baseUrl}`} 
export const getBase=()=>{return `${baseUrl}/upload`}
export const saveMakers=()=>{
    return `${baseUrl}/makers`
}
export const getProductsList = (emailId) => {return `${baseUrl}/products/${emailId}` } 