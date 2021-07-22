var usuario = prompt ("¿Cual es tu peso?");
var planeta = parseInt(prompt("Elige un planeta.\n1 es Mercurio\n2 Es Venus\n3 Es Tierra\n4 Es Marte\n5 Es Jupiter\n6 Es Saturno\n7 Es Urano\n8 Es Nepturno"));
var peso = parseInt(usuario);
var g_mercurio = 3.7;
var g_venus = 8.9;
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var g_saturno = 10.4;
var g_urano = 8.9;
var g_nepturno = 11.15;
var peso_final;
var nombre = "";
if(planeta ==1)
{
    peso_final=peso*g_mercurio/g_tierra;
    nombre = "Mercurio";
}
peso_final=parseInt(peso_final);
document.write("Tu peso en " + nombre + "es <strong>" + peso_final + " kilos </strong>");