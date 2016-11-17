const api_endpoint = 'https://jsonplaceholder.typicode.com/posts/';

export async function Http(url) {
    var response;
    response = await fetch(url);
    if(response.ok){
        let json = await response.json()
        console.log(json)
        return json;
    }

}