const api_endpoint = 'https://jsonplaceholder.typicode.com/posts/';

export function Http() {
    fetch(api_endpoint).then((json)=>{
        console.log(json)
    })
}