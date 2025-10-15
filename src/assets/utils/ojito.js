import ojoA from "/../assets/fotos/icons/eye_open";
import ojoC from "/../";

export default function ojito(){
        let flag = true;

        if(flag){
                document.getElementById("InputPassword2").type = "password";
                document.getElementById("coniconMostrar").src = {ojoC};
                flag=false;

        }else{
                document.getElementById("InputPassword2").type = "text";
                document.getElementById("coniconMostrar").src = {ojoA};
                flag=true;
        } 
    }
