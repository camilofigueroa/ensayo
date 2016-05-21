
/**
 * Autor: Camilo Figueroa
 * 20/05/2016
 * En esta versi�n ya se dejar� de lado la utilizaci�n de un servidor b�sico y pasaremos a algo m�s complicado.
 */

/*Esta l�nea funcion� perfecto, hay que recordar que al compilar o al ejecutar se realiza con el comando b�sico
Prompt command: node ruta_archivo/archivo
*/
/*console.log( "Aqu�" );*/


//Hora de crear un servidor
var http = require( "http" );

var manejador = function( solicitud, respuesta )
{
    console.log( "Hola mundo" );
    respuesta.end( "Esto se deber� colocar en el navegador." );
};

var servidor = http.createServer( manejador );

servidor.listen( 8080 );