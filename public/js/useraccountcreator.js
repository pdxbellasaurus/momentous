//element to create user account creator form
const openAccountCreator = document.querySelector("button")


//opens function to prompt user to create account
openAccountCreator.addEventListener("click", function (){
    
    //create a form element

   const body = document.querySelector("body");

    //create local storage for user text input 


    const name = document.createElement("input");

    name.setAttribute("type", "text");
    name.setAttribute("name", "Fullname");
    name.setAttribute("placeholder", "Please enter your name");
    body.appendChild(name)

    //create email element
    const email = document.createElement("input");
    
    email.setAttribute("type", "text");
    email.setAttribute("placeholder", "Please enter your email");
    body.appendChild(email)

    //create username element
    const userName = document.createElement("input");
    userName.setAttribute("type", "text");
    userName.setAttribute("name", "UserName");
    userName.setAttribute("placeholder", "Please enter your desired Username");
    body.appendChild(userName)
    

    //create a function to check username availability
    function checkUsername(event){
        event.preventDefault();
    if (userName === loginform(userName)) {
        return alert("You must be more creative with your Username selection!");
    }};


    //create input element for password
    const password = document.createElement("input");
    password.setAttribute("type", "password");
    password.setAttribute("name", "password");
    password.setAttribute("placeholder", "Please enter a discreet password");
    body.appendChild(password)

    //create element to set item in localstorage
    var setItem =  document.createElement("input");


    //element to get 'pre saved' username + password from local storage if item is saved in cookies
    const getItem =  document.createElement("input");
    

    const submitBtn = document.createElement("input");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("value", "Submit");
    body.appendChild(submitBtn)

    
    
    const loginform = [name, email, userName, password]

});






