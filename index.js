/* 1- Calcular e informar un sueldo sabiendo que:

  - La categoria define el sueldo basico mensual (1: u$s 1000, 2: u$s 1500, 3: u$s 2000)
  - La subcategoria define el multiplicador (A: x1.5, B: x2, C: x2.5)
  - Ambos datos son ingresados por el usuario

3- Informar dentro de que rango esta el sueldo:

  - Rango `inicial`: entre u$s 1500 inclusive y u$s 3000 inclusive
  - Rango `intermedio`: entre u$s 3000 exclusive y u$s 4000 inclusive
  - Rango `avanzado`: si supera los u$s 4000  */


var categoria_sueldo = parseInt(prompt("Ingrese su categoria (sueldo básico mensual)"));
var categoria_multiplicador = (prompt("Ingrese su subcategoria (multiplicador)"));

if(categoria_sueldo == 1){
    alert("Su sueldo está dentro del rango inicial")
}
else if((categoria_sueldo == 2) && (categoria_multiplicador == "a")){
    alert("Su sueldo está dentro del rango inicial")
}
else if((categoria_sueldo == 2) && (categoria_multiplicador == "b")){
    alert("Su sueldo está dentro del rango intermedio")
}
else{
    alert("Su sueldo está dentro del rango avanzado")
}