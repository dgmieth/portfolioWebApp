//npm modules
const functions = require('firebase-functions')
const express = require('express')
//configured modules
const hbs = require('./_functions/hbsConfiguration')
//database firestore configuration
var firestoreConfiguration = require('./firestore/keyAndConfiguration/firestoreConfiguration')
var configurationType = require('./firestore/keyAndConfiguration/configurationType')
var chosenConfiguration = configurationType.dev
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

//api
var ipStack = require('./ipGeolocationAPI/ipStack')
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
//registers log in firebase
app.post('/registerLog', async(req, res)=>{
    var location = await ipStack(req.body.ip)
    var results = await insertVisitationLog(chosenConfiguration, req.body.ip, location.locationString)
    if(results.error===undefined){
        res.status(200).json({error: results.error})
    }else{
        res.status(200).json({success: results.success})
    }
})
//==================================================================================
//                            APP/SERVER INITIALIZATION
//==================================================================================
firestoreConfiguration(chosenConfiguration)  
exports.app = functions.https.onRequest(app)
