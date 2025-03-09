

function con(){
    let input = document.getElementById("dob").value
    input.max = new Date().toISOString().split("T")[0]
 
    let birthYear = new Date(input).getFullYear()
    let birthMonth = new Date(input).getMonth() + 1
    let birthDay = new Date(input).getDate()
 
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth() + 1
    let day = today.getDate() ;    
 
    let ageYear = year - birthYear
    let ageMonth = month - birthMonth
    let ageDay = day - birthDay
 
    let age = ageDay + "-" + ageMonth + "-" + ageYear
 
    if(input === NaN || input == "" || input == null){
       let display = document.querySelector(".display")
       display.innerHTML = "Please Enter The Valid  Birth-Date"
    }else if(month > birthMonth){
       console.log("plese enter valid date")
    }
    else{
    let display = document.querySelector(".display")
    display.innerHTML = "You are " + ageYear + " years, " + Math.abs(ageMonth) + " Months and " + Math.abs(ageDay) + " days old"
    }
    if(input >= month){
        console.log("plese select an valid month")
    }
 }
 
 