const salon={
    name:"The Fashon Pet",
    address:{
        street:"Av.university",
        number:"212-k",
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}
//var salonName=saon.name;
//var salonNumber=salon.address.number;

var {name,address:{street,number}}=salon;// object destructuring

document.getElementById('footer-info').innerHTML=`
     <p> ${name} ${street} ${number}</p>`;

function displayText(){
    for(var i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].petName);
    }
}
var counter=0;
// CREATE THE OBJET CONSTRUCTOR 
class Pet{
    constructor(name,age,gender,type,breed,service,ownerName,contactPhone){
     this.name=name;
     this.age=age;
     this.gender=gender;
     this.type=type;
     this.breed=breed;
     this.service=service;
     this.ownerName=ownerName;
     this.contactPhone=contactPhone;
     this.price=0;
     this.idcounter++;
    }
}

// CREATE THE REGISTER FUNCTION
//read from the inputs and store the information into vars 
var inputName = $('petName');
var inputAge = $('petAge');
var inputGender = $('petGender');
var inputType = $('petType');
var inputBreed = $('petService');
var inputBreed = $('petBreed');
var imputService = $('ownerName');
var imputOwner = $('ownerName');
var inputPhone = $('ownerPhone');   

function register(){
      //create a generic objet and pass the info of the vars 
      var thePet = new Pet($('petName').val(),
      $('#petAge').val(),
      $('#petGender').val(),
      $('#petType').val(),
      $('#petBreed').val(),
      $('#petService').val(),
      $('#ownerName').val(),
      $('#ownerPhone').val());
      console.log(thePet);  
      // Push the Objet into the array
      salon.pets.push(thePet);
      //clear the inputs
      clear();
      //displayTable(thepet);
      display();
    }
    function clear (){
        inputName.val("");
        inputAge.val("");
        inputBreed.val("");
        inputGender.val("");
        inputOwner.val("");
        inputPhone.val("");
    }

    function updateprofits(){
        var profit=0;
        for(var i=0;i<salon.pets.length;i++){
            profit=profit+salon.pets[i].price;
        }
        document.getElementById('profits').innerHTML=`Profits = $${profit}.00`;
    }

    function deletePet(petId){
        //select the card with the pet 
        var card=$('#'+petId);
        console.log('delete pet'+petId);
        // search the pet in the array 
        var indexDelete;
        for(var i=0;i<salon.pets.length;i++){
            var selected=salon.pets[i];
            if(selected.id===petId){
                indexDelete=i;
                break;
            }
            console.log(i);
        }
        //delete the pet from the array
        salon.pets.splice(indexDelete,1);
        //delete the pet from the html
        card.remove();
        updateprofits();
    }
 function searchPet(){
     // add the search input, and search button 
     //get the valie from the input
     var ss=$('#searchPet').val();
     //search the pet on the array 
     salon.pets.forEach(aPet=>{
         if(aPet.name.toLowerCase().includes(ss.toLowerCase())||
         aPet.service.toLowerCase().includes(ss.toLowerCase())
         ){
             $('#'+aPet.id).removeClass('unactive');
         }else{
             $('#'+aPet.id).addClass('unactive');
         }
     });
     // change the css to display the result 
 }

    var pet1= new Pet("scooby",50,"male","dog","Dane","Hair", "Shaggy","5555555");
    var pet2= new Pet("scrappy ",50,"male","dog","mixed","full", "Shaggy","5555555");
    var pet3= new Pet("Tweety Bird  ",70,"male","mixed","bird","Dane","Full service", "Shaggy","8888-888-888");
    salon.pets.push(pet1);
    salon.pets.push(pet2);
    salon.pets.push(pet3);

    function init(){
        console.log("Executed");
        //create thre pets


        displayTable(pet1);
        displayTable(pet2);
        displayTable(pet3);
        display();
    

    
    ///hook events
    $('#register-btn').on('click',register);
    $('#search-btn').on('click',searchPet);
    $('#ownerPhone').keypress(function(e){
        console.log(e.key);
        if(e.key==="Enter"){
       register();
    }
   });
  $('#searchPEt').on('keyup',searchPet);
}

