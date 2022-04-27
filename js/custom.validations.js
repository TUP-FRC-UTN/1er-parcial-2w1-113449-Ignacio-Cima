$.validator.addMethod("combo", function(value, element){
    console.log(value);
    if(value == 0){
        return false;
    }
    else{
        return true;
    }
}, "Seleccione una opción");