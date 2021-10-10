const submitBtn=document.getElementById("submit");

submitBtn.addEventListener("click",logIn);

function validate(email , password){
    if(email===''){
        document.getElementById('emailAlert').innerHTML
        ='Please Input Email';
    }
    if(password===''){
        document.getElementById('passwordAlert').innerHTML
        ='Please Input Password';
    }
    if(password.length <6){
        document.getElementById('passwordAlert').innerHTML
        ='Password should be at least 6 charechters';
    }
    if(!email.includes('@')
     || !email.includes('.')){
        document.getElementById('emailAlert').innerHTML
        ='Invalid Email';
    } 
    if((document.getElementById('emailAlert').innerHTML===''
    &&document.getElementById('passwordAlert').innerHTML==='')
    ){
        return true;
    }
    return false;
    
}

function logIn(){
    document.getElementById('emailAlert').innerHTML='';
    document.getElementById('passwordAlert').innerHTML='';
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    var xhr =new XMLHttpRequest();
    const url='http://127.0.0.1:8000/api/loginAdmin';
    console.log(validate(email,password));
    console.log(document.getElementById('passwordAlert').innerHTML);
    console.log(document.getElementById('emailAlert').innerHTML);

    if(validate(email,password)===false) return ;
    console.log("Valid!");
    window.location.href='../html/home.html';
    // try{
    // xhr.open("POST", url, true);
    // xhr.send(JSON.stringify({
    //     value: {"email": "bahringer.terrance@example.net",
    //     "password": "password"}
    //         }
    //     )
    // );
    // }catch(e){
    //     console.log(e);
    // }
}