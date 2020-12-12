const admin = require('firebase-admin');
//==================================================================================
//FUNCTION GETS SPECIFIC PROJECT INFORMATION AND CREATION OF OBJECT FOR PROJECT PAGE
//==================================================================================
//----------------------------------------------------------------------------------
//            parameter check for specific database and object creation
//----------------------------------------------------------------------------------
module.exports = async(req)=>{
    var base = req.query.base
    if(base==='desktop'){
        base = 'desktop&Report'
    }
    return await (await getSpecificProject(base, req.query.name)).data()
}
//----------------------------------------------------------------------------------
//                                select statement
//----------------------------------------------------------------------------------
async function getSpecificProject(docName, projectName){
    const db  = await admin.firestore();
    let returnData = db.collection('projects').doc(docName).collection('apps').doc(projectName).get()
    return returnData
}