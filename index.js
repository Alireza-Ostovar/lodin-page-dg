const emailregex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
const mobileregex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/

const form = document.getElementById('form')
const forminput = document.getElementById('form-input')
const formerror = document.getElementById('form-error')

form.addEventListener('submit' , (event)=>{
    event.preventDefault()

    const resultofemailregex =emailregex.test(forminput.value)
    const resultofmobileregex = mobileregex.test(forminput.value)

    console.log(resultofemailregex || resultofmobileregex)

    if(!(resultofemailregex|| resultofmobileregex)){
        formerror.innerHTML ='شماره موبایل یا ایمیل نادرست است'
    }else{
        formerror.innerHTML = ''
    }
})