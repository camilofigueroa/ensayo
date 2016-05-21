
/**
 * Autor: Camilo Figueroa
 * 20/05/2016
 * En esta versión ya se dejará de lado la utilización de un servidor básico y pasaremos a algo más complicado.
 */

/*Esta línea funcionó perfecto, hay que recordar que al compilar o al ejecutar se realiza con el comando básico
Prompt command: node ruta_archivo/archivo
*/
/*console.log( "Aquí" );*/


//Hora de crear un servidor
var http = require( "http" );

var manejador = function( solicitud, respuesta )
{
    console.log( "Hola mundo" );
    respuesta.end( "Esto se deberá colocar en el navegador." );
};

var servidor = http.createServer( manejador );

servidor.listen( 8080 );