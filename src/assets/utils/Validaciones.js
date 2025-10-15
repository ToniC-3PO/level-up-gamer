
export default function Validaciones() {
            
            //Correo
            var email = document.getElementById('exampleInputEmail2').value;
            var reg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
            var valido = reg.test(email);
            var duoc = email.endsWith("@duocuc.cl");

            if(valido==true){
                //alert("Correo valido");
                
            }else{
                alert("Correo Invalido");
                
            }

            if(duoc){
                alert("Cuenta Duoc detectada");
                
                }

            
            //validacion contraseña
            var contra = document.getElementById('InputPassword2').value;
            var regpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&#]{8,15}/;
            var validpass = regpass.test(contra);

            if(validpass==true){
                //alert("Contraseña segura");
            }else{
                alert("La Contraseña no cumple con los requisitos");  
            }

            var confipass = document.getElementById('InputPassword2.1').value;
            var validConfipass = (confipass==contra);

            if(validConfipass){
                //alert("Confirmacion Valida");
            }else{
                alert("Confirmacion Invalida"); 
            }

            //Fecha nacimiento
            var cumple = new Date(document.getElementById("FechNac").value);
            var acty = new Date();
            var edad = acty.getFullYear() - cumple.getFullYear();
            var actm = acty.getMonth() - cumple.getMonth();
            
            if (actm < 0 || (actm === 0 && acty.getDate() < cumple.getDate())) {
            edad--;
            }

            if(cumple.getFullYear()<1900){
                alert("ponga una fecha valida");
            }

            if(edad >= 18){
                //alert("eres mayor de edad");
                edad = true;
                
            }else{
                alert("Tiene que ser mayor de edad");
  
            }



            var si = valido && validpass && validConfipass && edad;

            if(si){
                alert("Cuenta Creada");
                return true;

            }else{
                return false;
            }
        } 
    
        



 