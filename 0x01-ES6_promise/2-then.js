export default function handleResponseFromAPI(promise) {
    promise
        .then(function() {
            return ({status: 200, body: "Success"});
        })
        .catch(function() {
            return Error
        })
        .finally(function() {
            console.log("Got a response from the API");
        })
}