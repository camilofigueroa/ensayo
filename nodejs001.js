
/**
 * Autor: Camilo Figueroa
 * 20/05/2016
 */

/*Esta l�nea funcion� perfecto, hay que recordar que al compilar o al ejecutar se realiza con el comando b�sico
Prompt command: node ruta_archivo/archivo
*/
/*console.log( "Aqu�" );*/


//Hora de crar un servidor
var http = require( "http" );

var manejador = function( solicitud, respuesta )
{
    console.log( "Hola mundo" );
    respuesta.end( "Esto se deber� colocar en el navegador." );
};

var servidor = http.createServer( manejador );

servidor.listen( 8080 );