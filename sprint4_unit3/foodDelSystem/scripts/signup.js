
async function registerUser(ev){
    let form = document.querySelector(`form`);

    ev.preventDefault();
    let userData = {
        name:form.name.value,
        email:form.email.value,
        password:form.password.value,
        username:form.username.value,
        mobile:form.mobile.value,
        description:form.description.value,
    }
    userData = JSON.stringify(userData);

    try{
        let data = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
            method:'POST',
            body:userData,
            headers:{
                'Content-Type':'application/json',
            }
        });
        let {error} = await data.json();
        if(error===false){
            window.location.href="login.html";
        }
    }
    catch(err){
        console.log(err)
    }
}