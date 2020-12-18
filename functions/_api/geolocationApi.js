const request = require('request')

var key = '79e2547157a554c92fdd4792e35baa24'
var limit = 1

module.exports = (lat,lon,callback)=>{
    var url= `http://api.positionstack.com/v1/reverse?access_key=${key}&query=${lat},${lon}&limit=${limit}`
    request({url: url},(err,response)=>{
        var data = JSON.parse(response.body).data
        if(data){
            if(data.length > 0){
                var cityString = `${data[0].locality}, ${data[0].region_code}, ${data[0].country}`
                return callback(cityString)
            } else {
                return callback('-1')
            }
        }
        if(err){
            return callback('-1')
        }
        return callback('-1')
    })
}