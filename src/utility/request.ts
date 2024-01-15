import fetch from "node-fetch"

export const getRequest = async (url:string):Promise<JSON>=>{
    const response = await fetch(url)
    return await response.json()  
}

export const postRequest = async (url:string,body:any):Promise<JSON>=>{
    const response = await fetch(url,
        {
            method: 'post',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        })
    return await response.json()
   
}