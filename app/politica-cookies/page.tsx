import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900">Política de Cookies</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Universal Telecom Experts, S.L. informa acerca del uso de las cookies en su página web:
                  <strong> www.universaltelecom.es</strong>
                </p>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4">¿Qué son las cookies?</h3>
                  <p className="text-gray-700">
                    Las cookies son archivos que se pueden descargar en su equipo a través de las páginas web. Son
                    herramientas que tienen un papel esencial para la prestación de numerosos servicios de la sociedad
                    de la información. Entre otros, permiten a una página web almacenar y recuperar información sobre
                    los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información obtenida, se
                    pueden utilizar para reconocer al usuario y mejorar el servicio ofrecido.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">Tipos de cookies</h3>

                <h4 className="text-lg font-semibold text-gray-800">Según la entidad que las gestione:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Cookies propias:</strong> Aquéllas que se envían al equipo terminal del usuario desde un
                    equipo o dominio gestionado por el propio editor.
                  </li>
                  <li>
                    <strong>Cookies de terceros:</strong> Aquéllas que se envían al equipo terminal del usuario desde un
                    equipo o dominio que no es gestionado por el editor.
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-800">Según el plazo de tiempo:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Cookies de sesión:</strong> Diseñadas para recabar y almacenar datos mientras el usuario
                    accede a una página web.
                  </li>
                  <li>
                    <strong>Cookies persistentes:</strong> Los datos siguen almacenados en el terminal durante un
                    periodo definido por el responsable de la cookie.
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-800">Según su finalidad:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Cookies técnicas:</strong> Permiten al usuario la navegación a través de una página web y la
                    utilización de las diferentes opciones o servicios.
                  </li>
                  <li>
                    <strong>Cookies de personalización:</strong> Permiten al usuario acceder al servicio con
                    características predefinidas.
                  </li>
                  <li>
                    <strong>Cookies de análisis:</strong> Permiten el seguimiento y análisis del comportamiento de los
                    usuarios.
                  </li>
                  <li>
                    <strong>Cookies publicitarias:</strong> Permiten la gestión de los espacios publicitarios.
                  </li>
                  <li>
                    <strong>Cookies de publicidad comportamental:</strong> Almacenan información del comportamiento de
                    los usuarios para mostrar publicidad específica.
                  </li>
                  <li>
                    <strong>Cookies de redes sociales externas:</strong> Se utilizan para que los visitantes puedan
                    interactuar con el contenido de diferentes plataformas sociales.
                  </li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Desactivación y eliminación de cookies</h3>
                  <p className="text-gray-700 mb-4">
                    Tienes la opción de permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la
                    configuración de las opciones del navegador. Al desactivar cookies, algunos de los servicios
                    disponibles podrían dejar de estar operativos.
                  </p>
                  <p className="text-gray-700 mb-4">Configuración por navegador:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Microsoft Internet Explorer o Microsoft Edge:</strong>{" "}
                      <a
                        href="http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Configurar cookies
                      </a>
                    </li>
                    <li>
                      <strong>Mozilla Firefox:</strong>{" "}
                      <a
                        href="http://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Configurar cookies
                      </a>
                    </li>
                    <li>
                      <strong>Chrome:</strong>{" "}
                      <a
                        href="https://support.google.com/accounts/answer/61416?hl=es"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Configurar cookies
                      </a>
                    </li>
                    <li>
                      <strong>Safari:</strong>{" "}
                      <a
                        href="http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-las-cookies/"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Configurar cookies
                      </a>
                    </li>
                    <li>
                      <strong>Opera:</strong>{" "}
                      <a
                        href="http://help.opera.com/Linux/10.60/es-ES/cookies.html"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Configurar cookies
                      </a>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">Cookies utilizadas en www.universaltelecom.es</h3>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duración</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tipo</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Finalidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">_utma</td>
                        <td className="border border-gray-300 px-4 py-2">2 años</td>
                        <td className="border border-gray-300 px-4 py-2">Tercero</td>
                        <td className="border border-gray-300 px-4 py-2">Analítica</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">_utmb</td>
                        <td className="border border-gray-300 px-4 py-2">30 minutos</td>
                        <td className="border border-gray-300 px-4 py-2">Tercero</td>
                        <td className="border border-gray-300 px-4 py-2">Analítica</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">_utmc</td>
                        <td className="border border-gray-300 px-4 py-2">Sesión</td>
                        <td className="border border-gray-300 px-4 py-2">Tercero</td>
                        <td className="border border-gray-300 px-4 py-2">Analítica</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">_utmz</td>
                        <td className="border border-gray-300 px-4 py-2">6 meses</td>
                        <td className="border border-gray-300 px-4 py-2">Tercero</td>
                        <td className="border border-gray-300 px-4 py-2">Analítica</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">_ga</td>
                        <td className="border border-gray-300 px-4 py-2">2 años</td>
                        <td className="border border-gray-300 px-4 py-2">Tercero</td>
                        <td className="border border-gray-300 px-4 py-2">Analítica</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">_gat</td>
                        <td className="border border-gray-300 px-4 py-2">1 minuto</td>
                        <td className="border border-gray-300 px-4 py-2">Tercero</td>
                        <td className="border border-gray-300 px-4 py-2">Publicidad comportamental</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">_gid</td>
                        <td className="border border-gray-300 px-4 py-2">24 horas</td>
                        <td className="border border-gray-300 px-4 py-2">Tercero</td>
                        <td className="border border-gray-300 px-4 py-2">Publicidad comportamental</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">Gestión de Cookies</h4>
                  <p className="text-gray-700">
                    www.universaltelecom.es muestra información sobre su Política de cookies en la parte inferior o
                    superior de cualquier página del portal con cada inicio de sesión.
                  </p>
                  <p className="text-gray-700 mt-3">
                    <strong>Aceptar cookies:</strong> No se volverá a visualizar este aviso al acceder a cualquier
                    página del portal durante la presente sesión.
                  </p>
                </div>

                <div className="text-center text-sm text-gray-500 mt-8 pt-6 border-t">
                  <p>REV: 20.3009</p>
                  <p>Última actualización: {new Date().toLocaleDateString("es-ES")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
