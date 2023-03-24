# Kiosko CFDi 4.0
Es una herramienta segura, fácil,configurable y flexible de usar que sirve para que sus clientes se autofacturen en línea o bien en un kiosko local.
Permite la emision de CFDi versión 4.0.
## Puesta en marcha.
  * **Clone este repositorio.**
  * **Descargar y configurar Devkron.**
      * Disponible para windows y linux.
      * **Link de descarga:** <a href="https://devkron.org">https://devkron.org</a>
      * **Documentación:** <a href="https://docs.induxsoft.net/es/devkron/">https://docs.induxsoft.net/es/devkron/</a>
 * **Coloque el contenido de la carpeta src de este repositorio en la carpeta física de su servidor web (generalmente dentro de la carpeta raíz de Devkron/web).**
 * **Copie el archivo(API) induxsoft.cfdi.v40.dll a la carpeta raíz de devkron(ubicación de binarios).**
     * Clone repositorio: https://github.com/Induxsoft/cfdi-4.0-api
     * **Carpeta /C#/.Net 5.0/.-** Disponible para Linux y Windows(.Net Core).
     * **Carpeta /C#/.Net Framework 4.5/.-** Disponible para Windows(.Net Framework).
 * **Edite y configure el archivo conf.dkl(ubicado en raíz de la carpeta física de su servidor web) datos importantes como:**
    * URL de host.
    * Ruta de la carpeta fisica del sitio web.
    * Datos de emisor(RFC)
    * Cuenta de timbres(usuario y contraseña).
    * Certificado, llave privada y contraseña.
    * Servidor smtp para envio de correo.
 * **Configure e inicie servicios de fastcgi y servidor web.**
    * **Documentación:** https://docs.induxsoft.net/es/devkron/


