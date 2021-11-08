async function loginUser(ev){
    ev.preventDefault();
    let form = document.querySelector(`form`);
    let userDet = {
        username:form.username.value,
        password:form.password.value,
    }
    let loginData = JSON.stringify(userDet);
    try{
        let data = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
            method:'POST',
            body:loginData,
            headers:{
                'Content-Type':'application/json',
            }
        })
        let res = await data.json();
        console.log(res)
        let {error} = res;
        console.log()
        if(error===true){
            alert('Invalid credentials entered');
        }
        else{
            window.location.href = "menu.html";
        }
    }
    catch(err){
        console.log(err);
    }
}