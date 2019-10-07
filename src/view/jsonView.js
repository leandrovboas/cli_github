async function ExibirJson(jsonObject) {
    if(jsonObject != null) {
        console.log(JSON.stringify(jsonObject))
    }
}

module.exports = {
    ExibirJson
}