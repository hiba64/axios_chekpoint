const axios = require('axios')
const requeteone =axios.get(  "https://api.openweathermap.org/data/2.5/weather?q=Brasil&APPID=90066c1ded495762d56240881de66b4a")
const requetetwo=axios.get(  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=90066c1ded495762d56240881de66b4a")
axios.all([requeteone,requetetwo])
.then(axios.spread((responseone,responsetwo)=>{
    console.log(responseone.data)
    console.log(responsetwo.data)
}))
.catch(er=>console.log(er))