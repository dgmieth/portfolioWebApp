const admin = require('firebase-admin');
//==================================================================================
//    FUNCTION GETS ALL PROJECTS FROM FIREBASE AND CREATES OBJ FOR THE HOME PAGE
//==================================================================================
//----------------------------------------------------------------------------------
//                                 object creation
//----------------------------------------------------------------------------------
module.exports = async () => {
    var mobileApp = new Array()
    var webApp = new Array()
    var desktopAndReport = new Array()
    var graphicDesign = new Array()

    await getProjectsInfo('mobileApp').then(docs => {
        docs.forEach(doc => {
            mobileApp.push(doc.data())
        })
        return null
    })
    await getProjectsInfo('webApp').then(docs => {
        docs.forEach(doc => {
            webApp.push(doc.data())
        })
        return null
    })
    await getProjectsInfo('desktop&Report').then(docs => {
        docs.forEach(doc => {
            desktopAndReport.push(doc.data())
        })
        return null
    })
    await getProjectsInfo('graphicDesign').then(docs => {
        docs.forEach(doc => {
            graphicDesign.push(doc.data())
        })
        return null
    })
    var data = {
        pageTitle: 'Home',
        mobile: mobileApp,
        web: webApp,
        desktop: desktopAndReport,
        graphicDesign: graphicDesign
    }
    return data
}
//----------------------------------------------------------------------------------
//                                 accessing database
//----------------------------------------------------------------------------------
async function getProjectsInfo(docName){
    const db  = await admin.firestore();
    let returnData = db.collection('projects').doc(docName).collection('apps').get()
    
    return returnData
}