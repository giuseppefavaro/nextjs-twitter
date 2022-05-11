const BASE_URL = "https://edgemony-backend.herokuapp.com/";

//type: /posts  or /messages 

const GET = async (type) => {
    const response = await fetch(`${BASE_URL}${type}`);
    const data = await response.json();
    return data;
}



const POST = async (type, body) => {
    const response = await fetch(`${BASE_URL}${type}`, {
        method: "POST",
        body,
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    return data;
};


  

  



export { GET, POST };