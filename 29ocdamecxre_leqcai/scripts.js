// switch (Expression){
//     case value1:

//         break;
        
//         case value2:

//         break;
    
//     default:

// }
function lectureAssistant(){
let day = prompt("enter weeks day")

switch (day) {
    case "monday":
    alert("U dont have a lecture today");
    break;

    case "tuesday":
        alert("You have a lecture today");
        break;
    
    case "wensday":
     alert("U dont have a lecture today")
     break
     
     case "thirsday":
        alert("U have a lecture today")
    case "friday":
        alert("U dont have a lecture")
    break
    
    case "friday":
        alert("U dont have a lecture")
        break

    case "saturday":
        alert("U have lecture today")
        break

    case "sunday":
        alert("No lecture")
        break
    default: 

         alert("ohmeingot")
}
}
// Tenary syntax//

// condition ? expression_if_true : expression_if_false//

let isRaning = false;

let weatherReport = isRaning ? "Bring umbrella its raning!" :  "Be glad to wake up to todays amazing weather!" 
console.log(weatherReport);

let size = 0

function updSize(){
 size = document.getElementById("sizeNumber").value;
 size >= 10 && size <= 13 
     ? (document.getElementById("showSize").innerHTML = "Your Size 😎:XS")
     : size >= 14 && size<= 17 
     ? (document.getElementById("showSize").innerHTML = "Your Size 😎:S")
     :size >= 18 && size<= 21
     ? (document.getElementById("showSize").innerHTML = "Your Size 😎:M")
     :size >= 22 && size<= 25
     ? (document.getElementById("showSize").innerHTML = "Your Size 😎:L")
     :size >= 26 && size<= 30
     ? (document.getElementById("showSize").innerHTML = "Your Size 😎:XL")
     :size >= 31 && size<= 35
     ? (document.getElementById("showSize").innerHTML = "Your Size 😎:XXL")
     : (document.getElementById("showSize").innerHTML = "Your Size 😎:WE DK")

}
