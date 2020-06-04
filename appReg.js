if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then((reg) => console.log("SW registrerad", reg)) //succesful promise fires in then method
        .catch((err) => console.log("SW INTE registrerad", err)) //UNsuccesful promise fires in then method
}
