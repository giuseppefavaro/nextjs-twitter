const BASE_URL = "https://edgemony-backend.herokuapp.com/";

//type: /posts  or /messages 

const GET = async (type) => {
    const response = await fetch(`${BASE_URL}${type}`);
    const data = await response.json();
    return data;
}







export { GET };