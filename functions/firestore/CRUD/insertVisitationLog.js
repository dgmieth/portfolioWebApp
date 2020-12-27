const admin = require('firebase-admin');
//==================================================================================
//      FUNCTION INSERTS TIME STAMP AND A NEW DOCUMENT IN THE FIREBASE DATABASE
//==================================================================================
//----------------------------------------------------------------------------------
//       checks if user is already logged in, if not register login in database
//----------------------------------------------------------------------------------
module.exports = async(chosenConfiguration, ip, location)=>{
    return await insertVisitationLog(chosenConfiguration, ip, location)
}
//----------------------------------------------------------------------------------
//                      insert into database statement
//----------------------------------------------------------------------------------
async function insertVisitationLog(chosenConfiguration, ip, location){
    var newTime = new Date()
    if (chosenConfiguration==='production'){
        var docTitle = ''
        newTime.setHours(newTime.getHours()-3)
        docTitle = `${docTitle}${newTime.getUTCFullYear()}` 
    
        if((newTime.getUTCMonth() + 1) <= 9){
            docTitle = `${docTitle}-0${(newTime.getUTCMonth() + 1)}`
        } else {
            docTitle = `${docTitle}-${(newTime.getUTCMonth()+1)}`
        }
        if(newTime.getUTCDate() <= 9){
            docTitle = `${docTitle}-0${newTime.getUTCDate()}`
        } else {
            docTitle = `${docTitle}-${newTime.getUTCDate()}`
        }
        if(newTime.getUTCHours() <= 9){
            docTitle = `${docTitle} 0${newTime.getUTCHours()}`
        } else {
            docTitle = `${docTitle} ${newTime.getUTCHours()}`
        }
        if(newTime.getUTCMinutes() <= 9){
            docTitle = `${docTitle}:0${newTime.getUTCMinutes()}`
        } else {
            docTitle = `${docTitle}:${newTime.getUTCMinutes()}`
        }
        if(newTime.getUTCSeconds()  <= 9){
            docTitle = `${docTitle}:0${newTime.getUTCSeconds()}`
        } else {
            docTitle = `${docTitle}:${newTime.getUTCSeconds()}`
        } 
        const writeResult = await admin.firestore().collection('logIn_log').doc(`${docTitle}`).set({
            logged: true,
            time: new Date(),
            ip: ip, 
            location: location 
        })
        .catch((error)=>{
            return({error: 'Location not saved'}, undefined)
        })
        return(undefined,{success: 'Location saved'})
    }
}