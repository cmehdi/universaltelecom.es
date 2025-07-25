import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900">Política de Privacidad</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    Protección de datos de carácter personal según el RGPD
                  </h3>
                  <p className="text-gray-700">
                    Universal Telecom Experts, S.L., en aplicación de la normativa vigente en materia de protección de
                    datos de carácter personal, informa que los datos personales que se recogen a través de los
                    formularios del Sitio web: <strong>www.universaltelecom.es</strong>, se incluyen en los ficheros
                    automatizados específicos de usuarios de los servicios de Universal Telecom Experts, S.L.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">Finalidad del tratamiento</h3>
                <p>
                  La recogida y tratamiento automatizado de los datos de carácter personal tiene como finalidad el
                  mantenimiento de la relación comercial y el desempeño de tareas de información, formación,
                  asesoramiento y otras actividades propias de Universal Telecom Experts, S.L.
                </p>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-orange-800 mb-3">
                    ¿Con qué finalidad trataremos tus datos personales?
                  </h4>
                  <p className="text-gray-700 mb-3">
                    En Universal Telecom Experts, S.L., trataremos tus datos personales con las siguientes finalidades:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                    <li>
                      Prestar sus servicios de acuerdo con las necesidades particulares de los clientes, con el fin de
                      cumplir los contratos suscritos por la misma.
                    </li>
                    <li>
                      Envío de información comercial y boletines sobre nuevos servicios ofrecidos en la web y del
                      sector.
                    </li>
                    <li>Ejecutar un contrato suscrito a distancia con el usuario.</li>
                    <li>Adquirir los productos ofrecidos a través de la página web.</li>
                    <li>Prestar los servicios contratados por el usuario.</li>
                    <li>Enviar información promocional vía electrónica.</li>
                    <li>Facilitar la información solicitada por el usuario a través del formulario de contacto.</li>
                  </ol>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">Conservación de datos</h3>
                <p>
                  Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o no
                  solicites su supresión y durante el plazo por el cuál pudieran derivarse responsabilidades legales por
                  los servicios prestados.
                </p>

                <h3 className="text-xl font-semibold text-gray-900">Legitimación</h3>
                <p>El tratamiento de tus datos se realiza con las siguientes bases jurídicas que legitiman el mismo:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    La solicitud de información y/o la contratación de los servicios de Universal Telecom Experts, S.L.,
                    cuyos términos y condiciones se pondrán a tu disposición en todo caso, de forma previa a una
                    eventual contratación.
                  </li>
                  <li>
                    El consentimiento libre, específico, informado e inequívoco, en tanto que te informamos poniendo a
                    tu disposición la presente política de privacidad.
                  </li>
                </ol>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">Importante</h4>
                  <p className="text-gray-700">
                    En caso de que no nos facilites tus datos o lo hagas de forma errónea o incompleta, no podremos
                    atender tu solicitud, resultando del todo imposible proporcionarte la información solicitada o
                    llevar a cabo la contratación de los servicios.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">Destinatarios</h3>
                <p>
                  Los datos no se comunicarán a ningún tercero ajeno a Universal Telecom Experts, S.L., salvo obligación
                  legal.
                </p>

                <h3 className="text-xl font-semibold text-gray-900">Datos recopilados por usuarios de los servicios</h3>
                <p>
                  En los casos en que el usuario incluya ficheros con datos de carácter personal en los servidores de
                  alojamiento compartido, Universal Telecom Experts, S.L. no se hace responsable del incumplimiento por
                  parte del usuario del RGPD.
                </p>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Ejercicio de Derechos</h3>
                  <p className="text-gray-700 mb-3">
                    El usuario podrá en cualquier momento ejercitar los derechos de acceso, oposición, rectificación,
                    cancelación, limitación y portabilidad reconocidos en el citado Reglamento (UE). El ejercicio de
                    estos derechos puede realizarlo el propio usuario a través de:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Email:</strong> info@instectelecom.com
                    </li>
                    <li>
                      <strong>Dirección:</strong> Calle Almogia, 14, Bloque 5, Local 30, C.P. 29007 – Málaga (Málaga)
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">Derechos propiedad intelectual</h3>
                <p>
                  Universal Telecom Experts, S.L. es titular de todos los derechos de autor, propiedad intelectual,
                  industrial, «know how» y cuantos otros derechos guardan relación con los contenidos del sitio web
                  www.universaltelecom.es y los servicios ofertados en el mismo.
                </p>

                <h3 className="text-xl font-semibold text-gray-900">Comunicaciones comerciales</h3>
                <p>
                  En aplicación de la LSSI, Universal Telecom Experts, S.L. no enviará comunicaciones publicitarias o
                  promocionales por correo electrónico u otro medio de comunicación electrónica equivalente que
                  previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las
                  mismas.
                </p>
                <p>
                  En el caso de usuarios con los que exista una relación contractual previa, Universal Telecom Experts,
                  S.L. sí está autorizado al envío de comunicaciones comerciales referentes a productos o servicios
                  similares a los que inicialmente fueron objeto de contratación con el cliente.
                </p>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-3">Compromiso del Usuario</h4>
                  <p className="text-gray-700">
                    El usuario manifiesta que todos los datos facilitados por él son ciertos y correctos, y se
                    compromete a mantenerlos actualizados, comunicando los cambios a Universal Telecom Experts, S.L.
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
