export default function handleResponseFromAPI(promise) {
    return promise
        .then(function() {
            ({status: 200, body: "Success"});
        })
        .catch(function() {
            Error
        })
        .finally(function() {
            console.log("Got a response from the API");
        })
}