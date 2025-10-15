let flag = true;
        function ojito(){
        //ocultar o mostrar ojo contraseña
        if(flag){
                document.getElementById("InputPassword2").type = "password";
                document.getElementById("coniconMostrar").src ="assets/fotos/icons/eye_closed.png";
                flag=false;

        }else{
                document.getElementById("InputPassword2").type = "text";
                document.getElementById("coniconMostrar").src = "assets/fotos/icons/eye_open.png";
                flag=true;
        } 
    }