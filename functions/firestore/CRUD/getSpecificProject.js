const admin = require('firebase-admin');

var configurationType = require('../keyAndConfiguration/configurationType')
//==================================================================================
//FUNCTION GETS SPECIFIC PROJECT INFORMATION AND CREATION OF OBJECT FOR PROJECT PAGE
//==================================================================================
//----------------------------------------------------------------------------------
//            parameter check for specific database and object creation
//----------------------------------------------------------------------------------
module.exports = async(req)=>{
    var base = req.query.base
    collectionName = configurationType.apps
    if(base===configurationType.desktop){
        base = configurationType.desktopReport
    }
    if(base===configurationType.graphicDesign){
        collectionName=configurationType.graphicJobs
    }
    console.log(req.query.name)
    return await (await getSpecificProject(base, req.query.name, collectionName)).data()
}
//----------------------------------------------------------------------------------
//                                select statement
//----------------------------------------------------------------------------------
async function getSpecificProject(docName, projectName,collectionName){
    const db  = await admin.firestore();
    let returnData = db.collection('projects').doc(docName).collection(collectionName).doc(projectName).get()
    return returnData
}