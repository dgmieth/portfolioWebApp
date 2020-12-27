const rq = require('request-promise-native')
var key = 'c2285c61e52fdece1f23237bd14e077b'

module.exports = async (ip)=>{
    var objData = {
        locationString: ''
    }
    var options = {
        method: "GET",
        url : `http://api.ipstack.com/${ip}?access_key=${key}`
    }
    await rq(options).then((success)=>{
        var data = JSON.parse(success)
        objData.locationString = `${data.city}, ${data.region_code} - ${data.country_name}`
    }).catch((error)=>{
        objData.locationString = 'No location found'
    })
    return objData
}