const hbs = require('hbs')

//==================================================================================
//                               HBS CONFIGURATION
//==================================================================================
//----------------------------------------------------------------------------------
//                                hbs partials
//----------------------------------------------------------------------------------
//partials Path
const partialsPaths = './views/partials'
//registering partials
hbs.registerPartials(partialsPaths)
//----------------------------------------------------------------------------------
//                                hbs helpers
//----------------------------------------------------------------------------------
hbs.handlebars.registerHelper("p_creator", (text)=>{
    var t1 = text
    if(t1===undefined){
        t1 = ''
    }
    var result = "<p>" + t1 + "</p>"
    return new hbs.handlebars.SafeString(result)
})
hbs.handlebars.registerHelper('url_creator', (value, key)=>{
    if(key==="GitHub"){
        return new hbs.handlebars.SafeString(`<p><strong>${key}: </strong> <a href="${value}" target="_blank">${value}</a></p>`)
    }
    if (key==="1_phone"){
        return new hbs.handlebars.SafeString(`<p><strong>Phone: </strong> ${value}</p>`)
    }
    if (key==="2_email"){
        return new hbs.handlebars.SafeString(`<p><strong>E-mail: </strong> <a href="mailto:${value}">${value}</a></p>`)
    }
    if (key==="3_linkedIn"){
        return new hbs.handlebars.SafeString(`<p><strong>Linked-In: </strong> <a href="https://www.linkedin.com/in/diego-mieth-94a6a5154/" target="_blank">${value}</a></p>`)
    }
    return new hbs.handlebars.SafeString(`<p><strong>${key}:</strong> ${value}</p>`)
    
})
hbs.handlebars.registerHelper('isPersonalInfo', (value, options)=>{
    if(value === 'personalInfo'){
        return options.fn(this)
    } 
    return options.inverse(this)
})
hbs.handlebars.registerHelper('isProfessionaExperience', (value, options)=>{
    if(value === 'professionalExperience'){
        return options.fn(this)
    } 
    return options.inverse(this)
})
hbs.handlebars.registerHelper('isEducation', (value, options)=>{
    if(value === 'education'){
        return options.fn(this)
    } 
    return options.inverse(this)
})
hbs.handlebars.registerHelper('isLanguage', (value, options)=>{
    if(value === 'languages'){
        return options.fn(this)
    } 
    return options.inverse(this)
})
hbs.handlebars.registerHelper('isCourse', (value, options)=>{
    if(value === 'courses'){
        return options.fn(this)
    } 
    return options.inverse(this)
})
hbs.handlebars.registerHelper('isSkill', (value, options)=>{
    if(value === 'skills'){
        return options.fn(this)
    } 
    return options.inverse(this)
})
hbs.handlebars.registerHelper('p_description', (value)=>{
    return new hbs.handlebars.SafeString(`${value}`)
})

module.exports = hbs