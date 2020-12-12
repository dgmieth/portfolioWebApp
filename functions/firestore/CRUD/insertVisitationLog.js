const admin = require('firebase-admin');
//==================================================================================
//      FUNCTION INSERTS TIME STAMP AND A NEW DOCUMENT IN THE FIREBASE DATABASE
//==================================================================================
//----------------------------------------------------------------------------------
//       checks if user is already logged in, if not register login in database
//----------------------------------------------------------------------------------
module.exports = async (req,res,next)=>{
    if(!req.logged){
        req.logged = true
        req.userString = JSON.stringify(req.headers["user-agent"])
        await insertVisitationLog(req)
    }
    next()
}
//----------------------------------------------------------------------------------
//                      insert into database statement
//----------------------------------------------------------------------------------
async function insertVisitationLog(request){
    var newTime = new Date()
    var docTitle = 'W_'
    docTitle = docTitle + newTime.getUTCFullYear()
    if((newTime.getUTCMonth() + 1) <= 9){
        docTitle = docTitle  + '0' + (newTime.getUTCMonth() + 1)
    } else {
        docTitle = docTitle + (newTime.getUTCMonth()+1)
    }
    if(newTime.getUTCDate() <= 9){
        docTitle = docTitle + '0' + newTime.getUTCDate()
    } else {
        docTitle = docTitle + newTime.getUTCDate()
    }
    if(newTime.getUTCHours() <= 9){
        docTitle = docTitle + '_0' + newTime.getUTCHours()
    } else {
        docTitle = docTitle + '_' + newTime.getUTCHours()
    }
    if(newTime.getUTCMinutes() <= 9){
        docTitle = docTitle + '0' + newTime.getUTCMinutes()
    } else {
        docTitle = docTitle + newTime.getUTCMinutes()
    }
    if(newTime.getUTCSeconds()  <= 9){
        docTitle = docTitle + '0' + newTime.getUTCSeconds()
    } else {
        docTitle = docTitle + newTime.getUTCSeconds()
    }
    
    // const writeResult = await admin.firestore().collection('logIn_log').doc(`${docTitle}`).set({
    //     logged: request.logged,
    //     userAgentString: request.userString,
    //     time: new Date()
    // })
    // .catch((error)=>{console.error("Error writing document: ", error)})
    
    }