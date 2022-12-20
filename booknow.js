//forms validation 
    /*-------when submit button is pressed?---
        1.Name has to be less than 25 characters
        get the value from input 
        2.Make sure the phone Number is less than 10 charcters 
        3.Make sure the email contains @ 
        4.Make sure the confirmation email is the same as the email 
    */

//introducing variables 
let ticketCost ; 
let tickcount ;  
let names ;
let costs ;
let  NumOfItems; 
let ovTickCount ; 
let  OvCosts; 
let OvTotal ; 
let OvNumOfItems; 
//tickcount is the number of tickets from each section 
//ticketCost is the total ticket cost that you have to pay for current order
//names is an array of the names of the types of tickets 
//WE need two variable to count the Numof items in current order and Num of items in overall order

window.addEventListener("load" , init); 
function init()
{
   tickcount = [0 , 0 , 0 , 0,  0]
    ticketCost = 0 ; 
    names = ["SL Adult" , "SL Child" , "Foreign Adult" , "Foreign Child", "Infant"]
 costs = [1200 , 700 , 5500 , 2700 , 0] ;
 NumOfItems = 0 ; 

 //overall order variables
 ovTickCount = [0,0,0,0,0] ; 
 OvCosts = [0 , 0, 0 , 0 , 0 ];
 OvTotal = 0 ; 
 OvNumOfItems = 0 ; 

}

//increase decrease buttons : Array prototype slice call is needed because Class name produces a node list
//which has to be converted into an array to use. 
//increase buttons
const increaseButtonsnode = document.getElementsByClassName("Countincrease");
let increaseButtons = Array.prototype.slice.call( increaseButtonsnode );

//decrease buttons 
const decreaseButtonsnode = document.getElementsByClassName("Countdecrease");
let decreaseButtons = Array.prototype.slice.call( decreaseButtonsnode);


//display buttons for the current quantity of tickets 
const displaybuttonsnode = document.querySelectorAll('[display-btn]')
let displaybuttons = Array.prototype.slice.call(displaybuttonsnode );

//display buttons for the current order
let orderdisplay2 = document.getElementsByClassName("orderDisplay"); 
let orderdisplay = Array.prototype.slice.call(orderdisplay2);

//buttons that shows that there are no items in the cart when there's no items
let NoItemsnode = document.getElementsByClassName("NoItems")
let NoItems = Array.prototype.slice.call(NoItemsnode); 

let NoItemsShow2 = document.getElementsByClassName("NoItemsShow")
let NoItemsShow = Array.prototype.slice.call(NoItemsShow2); 
NumOfItems = 0 ; 


//increase decrease buttons events 
//when an increase button or a decreaes button is pressed the following event will take place
for(let i=0; i<5 ; i++)
{
    let increase =  increaseButtons[i]
    increase.addEventListener("click" , increase=>
 {
   
    tickcount[i]++; 
    NumOfItems+=1 ; 
    CheckNum(NumOfItems); 
    displaybuttons[i].innerText =  tickcount[i]
    displayOrderInc(i); 
   
 });

 let decrease =  decreaseButtons[i]
 decrease.addEventListener("click" , decrease=>{

    if (tickcount[i]>0)
    {
         tickcount[i]-- ;
         NumOfItems-=0; 
        displaybuttons[i].innerText = tickcount[i] ;
        displayOrderDec(i);
       
    }  

 });

}

OvnumCheck (OvNumOfItems)
function CheckNum(NumOfItems)
{
    if(NumOfItems>0 )
{
    for(let i=0 ; i<NoItems.length ; i++)
    {
        console.log("we are getting here")
        NoItems[i].classList.remove("hide");

    }

    for(let i=0 ; i<NoItemsShow.length ; i++)
    {
        
        NoItemsShow[i].classList.add("hide");

    }
    
    

}


if(NumOfItems==0 )
{
    for(let i=0 ; i<NoItems.length ; i++)
    {
        
        NoItems[i].classList.add("hide");

    }

    for(let i=0 ; i<NoItemsShow.length ; i++)
    {
        
        NoItemsShow[i].classList.remove("hide");

    }
    
    

}

}


let noshowOvnode  = document.getElementsByClassName("noshowOv"); 
    let noshowOv = Array.prototype.slice.call(noshowOvnode); 
    let showOvnode = document.getElementsByClassName("showOv")
    let showOv = Array.prototype.slice.call(showOvnode); 

function OvnumCheck (OvNumOfItems)
{
    if(OvNumOfItems==0)
    {
        for(let i=0 ; i<noshowOv.length ; i++)
        {
          noshowOv[i].classList.add("hide");
        }

       

    }
    if (OvNumOfItems>1)
    {
       for(let i=0 ; i<noshowOv.length ; i++)
       {
         noshowOv[i].classList.remove("hide");
       }

       for(let i=0 ; i<showOv.length ; i++)
       {
         showOv[i].classList.add("hide");
       }
    }


}






let totalbtn = document.getElementById("currentOrderTotalCost"); 
function displayOrderInc(number)
{
   
    //this is to append the child
    if (tickcount[number]==1)

   {
    console.log(number);
     const newOrder = document.createElement("td");
    newOrder.innerHTML = names[number];
    orderdisplay[number].appendChild(newOrder);
     
   const newOrderqty = document.createElement("td");
    newOrderqty.innerHTML = tickcount[number]
    orderdisplay[number].appendChild(newOrderqty);


    const newOrderCost = document.createElement("td");
    newOrderCost.innerHTML = costs[number] ;
    orderdisplay[number].appendChild(newOrderCost)
 
    //showing it in the total place 
    ticketCost+= costs[number]; 
    totalbtn.innerText = ticketCost
   

}

else {

  orderdisplay2[number].children[1].innerText =tickcount[number];
  orderdisplay2[number].children[2].innerText = costs[number]* tickcount[number]; 
  ticketCost += costs[number]
  totalbtn.innerText = ticketCost; 

}


}

function displayOrderDec(number)
{
    if(tickcount[number]==0)
    {
        const list =  orderdisplay2[number] ; 
        
        while (list.hasChildNodes()) {
            console.log("it has child nodes")
            list.removeChild(list.firstChild);

          }

          ticketCost-= costs[number]; 
        totalbtn.innerText = ticketCost

         
    }

    else
    {
        orderdisplay2[number].children[1].innerText =tickcount[number];
        orderdisplay2[number].children[2].innerText =costs[number]* tickcount[number]; 
        ticketCost-= costs[number]; 
        totalbtn.innerText = ticketCost

      }
      
 
    
}
//duration 
const duration = document.getElementById("duration"); 
let addTicketcost = 0 ; 
const durationTotal = document.getElementById("durationTotal")  

duration.addEventListener("change" , durationAddprice=>
{
   
    if(duration.value=="1/2d")
    {
      addTicketcost += tickcount[0]*350 + tickcount[1]*350 + tickcount[2]*450 + tickcount[3]*450; 
      ticketCost+= addTicketcost; 
      durationTotal.innerText = addTicketcost; 
      totalbtn.innerText = ticketCost; 
      
     
      
    }

    if(duration.value=="1d")
    {
      
      addTicketcost += tickcount[0]*600 + tickcount[1]*600 + tickcount[2]*800 + tickcount[3]*800; 
      ticketCost+= addTicketcost; 
      durationTotal.innerText = addTicketcost; 
      totalbtn.innerText = ticketCost; 
    }

    if(duration.value=="3h")
    {
        durationTotal.innerText = "Free"; 
    }
})



//Overall order summary thing 



//the display spaces for the overall order 
 let OvDisplaynode = document.getElementsByClassName("overallOrderDisplay"); 
 let OvDisplay = Array.prototype.slice.call( OvDisplaynode ); 

 let OverallTotal = document.getElementById("OvOrderTotal"); 

let addToOrder =  document.getElementById("addToOrder"); 
addToOrder.addEventListener("click" , addToOrder=>
{

    
    for(let i=0 ; i<5 ; i++ )
    {
        ovTickCount[i] +=tickcount[i] ; 
        OvDisplay[i].children[1].innerText = ovTickCount[i]; 
        
        OvCosts[i] =costs[i]*tickcount[i]; 
        console.log(OvCosts[i])
        OvDisplay[i].children[2].innerText = OvCosts[i]; 

        tickcount[i]= 0 ; 
        displaybuttons[i].innerText = 0 ; 

        //getting rid of the current items 
        const list =  orderdisplay2[i] ; 
        while (list.hasChildNodes()) {
            console.log("it has child nodes")
            list.removeChild(list.firstChild);

          }
         
          //add a space to sign the total amount 
          //It shouldn't need to include the duration amount because it confuses things
          //after adding it you should zero the ticket cost and show case it
       

        
    }
    alert("Your order was added to the overall order");

   
   
    OvTotal= ticketCost + OvTotal; 
    OverallTotal.innerText = OvTotal; 
    ticketCost = 0 ; 
    OvNumOfItems += NumOfItems ; 
    OvnumCheck (OvNumOfItems); 
    NumOfItems = 0 ; 
    CheckNum(NumOfItems); 

})

 
/**Favourites button */

let addTofav =  document.getElementById("addtofavourite"); 
addTofav.addEventListener("click" , addToFav=>
{
    
    for(let i=0 ; i<5; i++)
    {
        let key = i.toString();
        let tickstring = tickcount[i].toString();
        localStorage.setItem(key , tickstring); 

    }

    let  ytemp = ticketCost
    let  y= ytemp.toString();
     localStorage.setItem("6" , y)
    alert("Order added to favourites")
    //we should also have seperate variables for the total. so we can just add it.
     

})

let addFav = document.getElementById("addFav"); 
addFav.addEventListener("click" ,addFav=>
{
    for(let i=0 ; i<5 ;i++)
    {
        let key = i.toString();
        let x  = localStorage.getItem(key)
        //x is the number of tickcounts 

        //new order calculations
        console.log(names[i]+"has"+x+ "tickets")
        //it needs to access the i child of the ovcount

        ovTickCount[i] += +x;
        OvDisplay[i].children[1].innerText = ovTickCount[i]; 
        
        OvCosts[i] =costs[i]*  ovTickCount[i]; 
        OvDisplay[i].children[2].innerText = OvCosts[i]; 
       
    }

      let y = localStorage.getItem("6");
      console.log("this is total stored in local storage"+y); 
     console.log("this is Ovtotal:"+OvTotal)
      OverallTotal.innerText = +y + OvTotal; 
     
})

let CustomOrderNode = document.getElementsByClassName("CustomOrder"); 
let CustomOrder = Array.prototype.slice.call( CustomOrderNode);

const placeOrder = document.getElementById("placeOrder"); 
placeOrder.addEventListener("click" , placeOrder=>
{

    //check validity 
    if(Formid.checkValidity())
    {
        alert("Your order was placed succesfully")
        console.log("it checks")
       let x  = document.getElementById("contentBox"); 
       x.classList.add("hide");
       
       let y = document.getElementById("customMessageBox"); 
       y.classList.remove("hide");
      
       for(let i=0 ; i<5 ; i++)
       {
         CustomOrder[i].innerText = `${names[i]}:  ${ovTickCount[i]}`
       }

       let z = document.getElementById("CustomDuration"); 
       z.innerText = `For a period of ${duration.value} . The additional cost due to the duration type chosen is RS.${addTicketcost}`

       let w = document.getElementById("CustomTotal"); 
       w.innerText = `Your total is Rs.${OvTotal}`

       showOv[0].classList.remove("hide");
       for(let i=0 ; i<noshowOv.length ; i++)
       {
         
         noshowOv[i].classList.add("hide")
       }

       

       

    }

    else
    {
        alert("Please fill all the required fields and try again")
    }
    
})

/***CHeck for loyalty */
let checkLoyalty = document.getElementById("checkforloyalty"); 
let loyaltyResult= document.getElementById("loyaltyresult"); 
checkLoyalty.addEventListener("click" , LoyaltyCheck=>
{
    if(OvNumOfItems>3)
    {
        console.log("Loylaty points are awarded")
        let loyalty = OvNumOfItems*15; 
        console.log(loyalty); 
       let loyaltyString = loyalty.toString(); 
       loyaltyResult.innerText = `You have won ${loyalty } loyalty points`; 
       localStorage.setItem("loyalty", loyaltyString);
    }

    else
    {
        loyaltyResult.innerText = "Sorry , you have to purchase more than three items to win loyalty points"
    }
})


/**FORM  
let fullname = document.getElementById("name").value.trim();  
let tel = document.getElementById("tel").value.trim();
let email = document.getElementById("email").value.trim(); 
let emailConfirm = document.getElementById("email-confirm").value.trim();
const submit = document.getElementById("submit");

const ename = document.getElementById("errorname")
const etel = document.getElementById("errortel")
const eemail = document.getElementById("erroremail")
const eemailConfirm = document.getElementById("erroremailconfirm")



     let at = "@";
    let dot = ".";
    let lat = email.indexOf(at);
    let lstr = email.length;
    var ldot = email.indexOf(dot);

submit.addEventListener('click' , (submitevent)); 
function submitevent(e)
{
   let bool=  checkValidity()
   if(bool==false);
   {
    e.preventDefault; 

   }
    
    
}



function checkValidity()
{
    let success = true;

    if((fullname.length)==0) 
    {
        success = false;
        ename.innerText = "Please fill this field";
    }
    
    else{          
       ename.innerHTML = "";
    }

    if(tel.length==0) 
    {
        success = false;
     etel.innerHTML = "Please fill this field";
    }
    else{
       etel.innerHTML = "";
    }

    if(email.length==0)
     {
        success = false;
        eemail.innerHTML = "Please fill this field";
    }       


    if( email.indexOf(at) == -1 || email.indexOf(at) == 0 || email.indexOf(at) == lstr){
        success = false;
       eemail.innerHTML = "Please Enter a valid email address";
    } 
    
    else{
        eemail.innerHTML = "";
    }

    if( emailConfirm.length==0)
     {
        success = false;
        eemailConfirm.innerHTML = "Please fill this field";
    }      


    if(emailConfirm!= email)
    {
        success = false;
       eemailConfirm.innerHTML = "Please provide matching email addresses";
    }
   

 else
 {
    eemailConfirm.innerHTML = "";
 }
 return success; 
 console.log("we do the funnction ")
}


 
  
   // return success;

*/