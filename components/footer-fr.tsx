import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Universal Telecom"
              width={180}
              height={36}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 text-sm">
              Solutions de communication d'entreprise de nouvelle génération. Téléphonie cloud, IA conversationnelle et
              intégrations avancées.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Produits</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/fr/centralita-virtual" className="text-gray-300 hover:text-white transition-colors">
                  Standard Virtuel
                </Link>
              </li>
              <li>
                <Link href="/fr/whatsapp-business-api" className="text-gray-300 hover:text-white transition-colors">
                  WhatsApp Business API
                </Link>
              </li>
              <li>
                <Link href="/fr/agents-ia" className="text-gray-300 hover:text-white transition-colors">
                  Agents IA
                </Link>
              </li>
              <li>
                <Link href="/fr/analyse-appels" className="text-gray-300 hover:text-white transition-colors">
                  Analyse d'Appels
                </Link>
              </li>
              <li>
                <Link href="/fr/numeros-globaux" className="text-gray-300 hover:text-white transition-colors">
                  Numéros Globaux
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/fr/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/fr/demo" className="text-gray-300 hover:text-white transition-colors">
                  Demander une Démo
                </Link>
              </li>
              <li>
                <Link href="/fr/essai-gratuit" className="text-gray-300 hover:text-white transition-colors">
                  Essai Gratuit
                </Link>
              </li>
              <li>
                <Link href="/fr/support" className="text-gray-300 hover:text-white transition-colors">
                  Support Technique
                </Link>
              </li>
              <li>
                <Link
                  href="https://pclientes.unitele.es"
                  target="_blank"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Portail Client
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">+33 1 84 88 32 81</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">commercial@universaltelecom.es</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">Málaga, Espagne</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">
                  Lun-Jeu: 09:30-19:00
                  <br />
                  Ven: 09:30-18:00
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Universal Telecom. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/fr/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions Légales
              </Link>
              <Link
                href="/fr/politique-confidentialite"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Politique de Confidentialité
              </Link>
              <Link href="/fr/politique-cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
