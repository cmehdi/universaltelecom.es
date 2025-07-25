"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Phone,
  Mail,
  MapPin,
  Headphones,
  MessageSquare,
  Bot,
  BarChart3,
  Hash,
  Send,
  Wifi,
  Smartphone,
  Code,
} from "lucide-react"

export function Footer() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const allServices = [
    {
      name: "Centralita Virtual",
      href: "/centralita-virtual",
      icon: Headphones,
    },
    {
      name: "WhatsApp Business API",
      href: "/whatsapp-api",
      icon: MessageSquare,
    },
    {
      name: "Agente IA & Chatbot",
      href: "/agente-ia-chatbot",
      icon: Bot,
    },
    {
      name: "Análisis de Llamadas IA",
      href: "/analisis-llamadas-ia",
      icon: BarChart3,
    },
    {
      name: "Numeración Global",
      href: "/numeracion-global",
      icon: Hash,
    },
    {
      name: "API SMS",
      href: "/api-sms",
      icon: Send,
    },
    {
      name: "Fibra Óptica",
      href: "/fibra-optica",
      icon: Wifi,
    },
    {
      name: "Móviles Utio",
      href: "/moviles",
      icon: Smartphone,
    },
    {
      name: "APIs & Integraciones",
      href: "/apis",
      icon: Code,
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image src="/logo.png" alt="Universal Telecom" width={180} height={36} className="h-8 w-auto" />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Soluciones de comunicación empresarial en la nube. Más de 2.000 empresas confían en nosotros en 9+ países.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nuestros Servicios */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Nuestros Servicios</h3>
            <div className="grid grid-cols-2 gap-2">
              {allServices.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`flex items-center text-sm py-1 transition-colors ${
                      isActive(service.href) ? "text-blue-400 font-medium" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2 flex-shrink-0" />
                    {service.name}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="tel:+34951047200" className="hover:text-white">
                  951 047 200
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="mailto:comercial@universaltelecom.es" className="hover:text-white">
                  comercial@universaltelecom.es
                </a>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <div>Calle Compositor Lehmberg Ruiz, 13</div>
                  <div>29007 Málaga, España</div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Horario de Atención</h4>
              <div className="text-sm text-gray-300">
                <div>Lun-Jue: 09:30-19:00</div>
                <div>Viernes: 09:30-18:00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enlaces legales */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-4 md:mb-0">
              <Link href="/aviso-legal" className="hover:text-white">
                Aviso Legal
              </Link>
              <Link href="/politica-privacidad" className="hover:text-white">
                Política de Privacidad
              </Link>
              <Link href="/politica-cookies" className="hover:text-white">
                Política de Cookies
              </Link>
              <Link href="/contacto" className="hover:text-white">
                Contacto
              </Link>
            </div>
            <div className="text-sm text-gray-400">© 2024 Universal Telecom. Todos los derechos reservados.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
