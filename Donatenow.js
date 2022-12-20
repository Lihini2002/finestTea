
let donatenowbtn = document.getElementById("DonateNow"); 
console.log("found it")
donatenowbtn.addEventListener("click" , donatenowf)

function donatenowf (event)
{
    

    //check validity 
    if(CreditForm.checkValidity())
    {
        
        
            let donationQtyNOde = document.getElementsByName("DonAmount");
            let donationQty = Array.prototype.slice.call(donationQtyNOde);

            
            let hideelementsnode = document.getElementsByClassName("hideelements");
            let hideelements = Array.prototype.slice.call(hideelementsnode);

            let donMessage = document.getElementById("CustomDonateMessage");
           
              
            for(i = 0; i < donationQty.length; i++) {
                if(donationQty[i].checked)
                {
                   
                    let result = document.getElementById("DonAmountid"); 
                    result.classList.remove("hide");
                    result.innerText = `Donation Amount: Rs.${donationQty[i].value}`
                    
                  
                    donMessage.classList.remove("hide")
                   donMessage.innerText  = `Thank you for your donation of Rs.${donationQty[i].value}` 
                   
    
                
                }

                hideelements[i].classList.add("hide"); 
                
            }

    
    }

    else
    {
        alert("Please fill all the required data")
    }
}