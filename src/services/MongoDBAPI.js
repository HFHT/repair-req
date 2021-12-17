// Azure serverless functions are utilized to access the MongoDB

export async function MongoAPI( req, setter ) {
    const headers = new Headers();

    const options = {
        method: "GET",
        headers: headers
    };

    const baseURL = `${process.env.REACT_APP_AZURE_FUNC_URL}`;

    return fetch(`${baseURL}/api/HFHTMongoAPI?req=${JSON.stringify(req)}`, options)
        .then(response => response.json())
        .then(data => {setter(data)})
        .catch(error => console.log(error));

}
