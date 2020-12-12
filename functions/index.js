//npm modules
const functions = require('firebase-functions')
const express = require('express')
//configured modules
const hbs = require('./_functions/hbsConfiguration')
//database firestore configuration
var firestoreConfiguration = require('./firestore/keyAndConfiguration/firestoreConfiguration')
var configurationType = require('./firestore/keyAndConfiguration/configurationType')
//database statements
var getAboutMeInformation = require('./firestore/CRUD/getAboutMeInformation')
var getSpecificProject = require('./firestore/CRUD/getSpecificProject')
var getProjectsInfo = require('./firestore/CRUD/getProjectsInfo')
//middlewares
var insertVisitationLog = require('./firestore/CRUD/insertVisitationLog')
//paths
const viewsPaths = './views/templates'
const publicPath = '../public/'
//app creating and cofiguration
const app = express()
app.set('view engine', 'hbs')
app.set('views', viewsPaths)
app.use(express.static(publicPath))
app.use(express.urlencoded())
app.use(express.json())
//configure middleware in app
app.use(insertVisitationLog)

//==================================================================================
//                                   ROUTING
//==================================================================================
//----------------------------------------------------------------------------------
//                                 pages routes
//----------------------------------------------------------------------------------
//homePage
app.get('', async (req,res)=>{
    res.render('home', await getProjectsInfo())
})
//aboutPage
app.get('/about', async (req,res)=>{
    res.render('about', {pageTitle: 'About', fields: await getAboutMeInformation()})
})
//projectPages
app.get('/home/project', async (req,res)=>{
    res.render('project', await getSpecificProject(req))
})
//----------------------------------------------------------------------------------
//                                service routes
//----------------------------------------------------------------------------------
//teste
 app.get('/teste',async (request,response) =>{
     var db_result = await getFirestore();
     response.render('teste',{db_result});
 });
//==================================================================================
//                                ASYNC FUNCTIONS
//==================================================================================
//get data from fireStore for homePage
 //async function getFirestore(){
   //  const firestore_con  = await admin.firestore();
     //let sfRef = firestore_con.collection('projects').doc('mobileApp').collection('apps').get().then(docs => {
       //  docs.forEach(doc =>{
         //    console.log('Found subcollection with id:', doc.data()['id']);
         //})
   // });
    //return sfRef
//}
//==================================================================================
//                            APP/SERVER INITIALIZATION
//==================================================================================
firestoreConfiguration(configurationType.dev)  
exports.app = functions.https.onRequest(app)
