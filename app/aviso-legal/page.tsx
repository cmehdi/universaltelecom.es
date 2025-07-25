import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900">Aviso Legal</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio,
                  de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), el propietario de
                  la web, le informa de lo siguiente:
                </p>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4">Datos de la Empresa</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Denominación social:</strong> Universal Telecom Experts, S.L.
                    </li>
                    <li>
                      <strong>NIF:</strong> B92635515
                    </li>
                    <li>
                      <strong>Domicilio:</strong> Calle Almogia, 14, Bloque 5, Local 30, 29007 – Málaga (Málaga)
                    </li>
                    <li>
                      <strong>Inscrita en el Registro Mercantil de Málaga:</strong> Tomo 3803, folio 102, sección, hoja
                      número MA-77199, inscripción 1
                    </li>
                    <li>
                      <strong>Autorización administrativa:</strong> Operador de comunicaciones electrónicas (Internet,
                      VoIP y Móvil)
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">Limitación de Responsabilidad</h3>
                <p>
                  Con los límites establecidos en la ley, Universal Telecom Experts, S.L. no asume ninguna
                  responsabilidad derivada de la falta de veracidad, integridad, actualización y precisión de los datos
                  o informaciones que contienen sus páginas web.
                </p>
                <p>
                  Los contenidos e información no vinculan a Universal Telecom Experts, S.L. ni constituyen opiniones,
                  consejos o asesoramiento legal de ningún tipo pues se trata meramente de un servicio ofrecido con
                  carácter informativo y divulgativo.
                </p>

                <h3 className="text-xl font-semibold text-gray-900">Enlaces a Terceros</h3>
                <p>
                  Las páginas de Internet de Universal Telecom Experts, S.L. pueden contener enlaces (links) a otras
                  páginas de terceras partes que Universal Telecom Experts, S.L. no puede controlar. Por lo tanto,
                  Universal Telecom Experts, S.L. no puede asumir responsabilidades por el contenido que pueda aparecer
                  en páginas de terceros.
                </p>

                <h3 className="text-xl font-semibold text-gray-900">Propiedad Intelectual</h3>
                <p>
                  Los textos, imágenes, sonidos, animaciones, software y el resto de contenidos incluidos en este
                  website son propiedad exclusiva de Universal Telecom Experts, S.L. o sus licenciantes. Cualquier acto
                  de transmisión, distribución, cesión, reproducción, almacenamiento o comunicación pública total o
                  parcial, deberá contar con el consentimiento expreso de Universal Telecom Experts, S.L.
                </p>

                <h3 className="text-xl font-semibold text-gray-900">Protección de Datos</h3>
                <p>
                  Para acceder a algunos de los servicios que Universal Telecom Experts, S.L. ofrece a través del sitio
                  web, deberá proporcionar algunos datos de carácter personal. En cumplimiento de lo establecido en el
                  Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la
                  protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre
                  circulación de estos datos le informamos que, mediante la cumplimentación de los presentes
                  formularios, sus datos personales quedarán incorporados y serán tratados en los ficheros de Universal
                  Telecom Experts, S.L. con el fin de poderle prestar y ofrecer nuestros servicios así como para
                  informarle de las mejoras del sitio Web.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Ejercicio de Derechos</h4>
                  <p className="text-gray-700">
                    Tendrá la posibilidad en todo momento de ejercer los derechos de acceso, rectificación, cancelación,
                    oposición, limitación y portabilidad de sus datos de carácter personal, de manera gratuita mediante:
                  </p>
                  <ul className="mt-3 space-y-1 text-gray-700">
                    <li>
                      <strong>Email:</strong> info@instectelecom.com
                    </li>
                    <li>
                      <strong>Dirección:</strong> Calle Almogia, 14, Bloque 5, Local 30, 29007 – Málaga (Málaga)
                    </li>
                  </ul>
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
