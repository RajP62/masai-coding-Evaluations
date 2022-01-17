const loadData = (key)=>{
    try{
        let data = JSON.parse(localStorage.getItem(key));
        return data || {auth: false, token: ""}
    }
    catch(e){
        return {auth: false, token: ""}
    }
}

const saveData = (key, data)=>{
    localStorage.setItem(key,JSON.stringify(data));
}

export {loadData, saveData};