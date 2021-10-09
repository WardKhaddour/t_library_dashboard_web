const submitBtn=document.getElementById("submit");

submitBtn.addEventListener("click",logIn);

function validate(email , password){
    if(email===''){
        document.getElementById('email_alert').innerHTML='Please Input Email';

    }
    if(password===''){
        document.getElementById('password_alert').innerHTML='Please Input Password';
    }
    if(password.length <6){
        document.getElementById('password_alert').innerHTML='Password should be at least 6 charechters';
    }
    if(!email.includes('@') || !email.includes('.')){
        document.getElementById('email_alert').innerHTML='Invalid Email';
    } 
    if(document.getElementById('email_alert').innerHTML===''||document.getElementById('email_alert').innerHTML===''){
        return false;
    }
    return true;
    
}

function logIn(){
    document.getElementById('email_alert').innerHTML='';
    document.getElementById('password_alert').innerHTML='';
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    var xhr =new XMLHttpRequest();
    const url='http://127.0.0.1:8000/api/loginAdmin';
    if(!validate(email,password)) return ;
    try{
    xhr.open("POST", url, true);
    xhr.send(JSON.stringify({
        value: {"email": "bahringer.terrance@example.net",
        "password": "password"}
            }
        )
    );
    }catch(e){
        console.log(e);
    }
}