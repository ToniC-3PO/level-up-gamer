import ojoA from "../fotos/icons/eye_open.png";
import ojoC from "../fotos/icons/eye_closed.png";

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