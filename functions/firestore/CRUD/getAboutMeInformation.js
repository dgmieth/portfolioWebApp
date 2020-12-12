const admin = require('firebase-admin')
//==================================================================================
//  FUNCTION GETS PERSONAL INFO FROM THE DATABASE AND CREATES OBJ FOR ABOUT PAGE
//==================================================================================
//----------------------------------------------------------------------------------
//                                object creation
//----------------------------------------------------------------------------------
module.exports = async() =>{
    var data = new Array()
    await getAboutMeInformation().then(docs => {
        docs.forEach(doc => {
            data.push(doc.data())
        })
        return null
    })
    return data
}
//----------------------------------------------------------------------------------
//                                select statement 
//----------------------------------------------------------------------------------
async function getAboutMeInformation(){
    const db  = await admin.firestore();
    let returnData = db.collection('aboutMe').get()
    return returnData
}