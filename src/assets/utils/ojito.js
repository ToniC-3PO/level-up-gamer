import ojoA from "../fotos/icons/eye_open.png";
import ojoC from "../fotos/icons/eye_closed.png";

export default function ojito() {
  const input = document.getElementById("InputPassword2");
  const icon = document.getElementById("coniconMostrar");


  if (input.type === "password") {
    input.type = "text";
    icon.src = ojoA;
  } else {
    input.type = "password";
    icon.src = ojoC;
  }
}