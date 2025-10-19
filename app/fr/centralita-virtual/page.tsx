import { Phone, CheckCircle, ArrowRight, Users, Zap, Shield, BarChart3, Headphones, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Standard Virtuel Professionnel | PBX Cloud | Universal Telecom",
  description:
    "Standard téléphonique virtuel professionnel dans le cloud. PBX sans matériel, configuration en 15 minutes. Intégration CRM, IA avancée et support 24/7. Essai gratuit 14 jours.",
  keywords:
    "standard virtuel, pbx cloud, standard entreprise, système téléphonique virtuel, standard ip, voip entreprise",
  openGraph: {
    title: "Standard Virtuel Professionnel - Le PBX du Futur",
    description:
      "Standard Virtuel sans matériel. Configuration instantanée, intégration CRM et IA avancée. Plus de 2 000 entreprises nous font confiance.",
    type: "website",
  },
}

export default function StandardVirtuelPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  PBX cloud professionnel
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Standard Virtuel: Le PBX du Futur
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Oubliez le matériel. Adoptez le cloud. Notre standard virtuel élimine la complexité technique des
                  systèmes téléphoniques traditionnels et révolutionne la communication d'entreprise.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Avantages concurrentiels uniques de notre Standard Virtuel
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      Configuration en 15 minutes : Votre standard virtuel prêt à l'emploi aujourd'hui
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      Évolutivité instantanée : Ajoutez des utilisateurs illimités à votre standard virtuel
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      Intégration CRM native : Clientify, HubSpot, Odoo, Zoho et plus
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">
                      Audio HD garanti : Qualité supérieure aux lignes traditionnelles
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/fr/essai-gratuit?produit=standard-virtuel">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                    Essai Gratuit 14 Jours <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/fr/demo?produit=standard-virtuel">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                  >
                    Demander une Démo
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pbx01-iaFxSiCeGs0unly1YAoBCStrmX4ODg.png"
                alt="Tableau de bord du standard virtuel avec statistiques d'agents, métriques d'appels et surveillance en temps réel"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités Principales */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Fonctionnalités Complètes du Standard Virtuel
            </h2>
            <p className="text-xl text-gray-600">
              Tous les outils professionnels dont vous avez besoin sur une seule plateforme
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Gestion des Extensions */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Gestion Avancée des Extensions</h3>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pbx02-d2IU4MJVlaWfTAjSkshjt5U9Low1Ip.png"
                alt="Panneau de gestion des extensions avec configuration détaillée des utilisateurs et permissions"
                width={600}
                height={400}
                className="rounded-xl shadow-lg border border-gray-200"
              />
              <p className="text-gray-600">
                Gérez toutes les extensions depuis un panneau intuitif. Configurez les permissions, enregistrements,
                transferts et fonctionnalités spécifiques pour chaque utilisateur de votre standard virtuel.
              </p>
            </div>

            {/* Historique des Appels */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Historique Complet des Appels</h3>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pbx03-ASEcvfiTZjKkXRlIRpDYwdxUT4UBuH.png"
                alt="Historique détaillé des appels avec filtres avancés et lecture audio"
                width={600}
                height={400}
                className="rounded-xl shadow-lg border border-gray-200"
              />
              <p className="text-gray-600">
                Accédez à l'historique complet avec filtres avancés, durée, statut des appels et lecture directe des
                enregistrements. Exportez les données pour analyse externe.
              </p>
            </div>

            {/* Gestion des Contacts */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Base de Données de Contacts Intégrée</h3>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pbx04-akkWSlZhUX99hw4eOW3ATyxPP4kgTG.png"
                alt="Système de gestion de contacts avec import, export et classification automatique"
                width={600}
                height={400}
                className="rounded-xl shadow-lg border border-gray-200"
              />
              <p className="text-gray-600">
                Gérez plus de 900 contacts avec import en masse, classification automatique et synchronisation CRM.
                Recherche avancée et actions rapides incluses.
              </p>
            </div>

            {/* Tableau de Bord Temps Réel */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Surveillance en Temps Réel</h3>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pbx01-iaFxSiCeGs0unly1YAoBCStrmX4ODg.png"
                alt="Tableau de bord en temps réel avec statistiques d'agents, appels actifs et niveau de service"
                width={600}
                height={400}
                className="rounded-xl shadow-lg border border-gray-200"
              />
              <p className="text-gray-600">
                Surveillez l'état de votre standard virtuel instantanément : agents connectés, appels en cours,
                statistiques de service et métriques de performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans et Tarifs */}
      <section className="py-20 bg-white" id="plans">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Plans de Standard Virtuel qui s'adaptent à votre croissance
            </h2>
            <p className="text-xl text-gray-600">
              Pas de petits caractères, pas de surprises avec votre standard virtuel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan Global */}
            <Card className="relative border-2 border-gray-200 hover:border-orange-300 transition-colors">
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Global</CardTitle>
                  <CardDescription>Standard virtuel parfait pour les petites entreprises</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-orange-500">45€</div>
                  <div className="text-gray-500">/mois</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">6 utilisateurs inclus</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">500 minutes par utilisateur</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">1 numéro local gratuit</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">SVI personnalisable</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Enregistrement d'appels</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Application mobile incluse</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Support 24/7</span>
                  </li>
                </ul>
                <Link href="/fr/essai-gratuit?produit=standard-virtuel&plan=global">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Commencer</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plan Smart */}
            <Card className="relative border-2 border-purple-300 hover:border-purple-400 transition-colors">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-500 text-white">Plus Populaire</Badge>
              </div>
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Smart</CardTitle>
                  <CardDescription>Standard virtuel avec IA basique pour entreprises en croissance</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-purple-500">112,5€</div>
                  <div className="text-gray-500">/mois</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Tout du plan Global</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">IA : Transcription automatique</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">IA : Résumé d'appels</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">1 000 minutes par utilisateur</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Intégration CRM basique</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Analyses avancées</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">File d'attente intelligente</span>
                  </li>
                </ul>
                <Link href="/fr/essai-gratuit?produit=standard-virtuel&plan=smart">
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Commencer</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plan Total */}
            <Card className="relative border-2 border-blue-300 hover:border-blue-400 transition-colors">
              <CardHeader className="text-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Plan Total</CardTitle>
                  <CardDescription>Le standard virtuel complet avec IA avancée</CardDescription>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-500">225€</div>
                  <div className="text-gray-500">/mois</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Tout du plan Smart</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">IA : Analyse de sentiment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Intégration WhatsApp Business</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Appels illimités</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">3 numéros locaux inclus</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">API REST complète</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Support technique prioritaire</span>
                  </li>
                </ul>
                <Link href="/fr/essai-gratuit?produit=standard-virtuel&plan=total">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Commencer</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-lg font-semibold mb-4">Services additionnels pour votre Standard Virtuel</h3>
            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto text-sm">
              <div>
                Utilisateur supplémentaire : <strong>à partir de 7,5€/mois + TVA</strong>
              </div>
              <div>
                Numéro supplémentaire : <strong>5€/mois</strong>
              </div>
              <div>
                Enregistrements 3 mois : <strong>5 Go inclus</strong>
              </div>
              <div>
                Rapports Avancés : <strong>Inclus</strong>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto">
              <p>
                <strong>Qu'est-ce qui est inclus avec chaque utilisateur dans votre Standard Virtuel ?</strong> Chaque
                utilisateur a un accès complet au standard virtuel : extension téléphonique, application mobile, panneau
                web, enregistrement d'appels, intégration CRM, statistiques personnelles et support technique inclus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intégrations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Intégrations CRM qui boostent votre Standard Virtuel
            </h2>
            <p className="text-xl text-gray-600">Connectez votre standard virtuel aux outils que vous utilisez déjà</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-orange-500" />
                  CRM et Ventes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="font-medium">Clientify</div>
                    <div className="text-sm text-gray-600">Intégration complète avec votre CRM espagnol</div>
                  </div>
                  <div>
                    <div className="font-medium">HubSpot</div>
                    <div className="text-sm text-gray-600">Création de tickets et suivi des leads</div>
                  </div>
                  <div>
                    <div className="font-medium">Odoo</div>
                    <div className="text-sm text-gray-600">ERP complet avec gestion des appels</div>
                  </div>
                  <div>
                    <div className="font-medium">Zoho CRM</div>
                    <div className="text-sm text-gray-600">Enregistrement automatique des appels et contacts</div>
                  </div>
                  <div>
                    <div className="font-medium">Google Contacts</div>
                    <div className="text-sm text-gray-600">Synchronisation automatique des contacts</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-500" />
                  Outils de Productivité
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="font-medium">Zapier</div>
                    <div className="text-sm text-gray-600">Plus de 500 intégrations disponibles</div>
                  </div>
                  <div>
                    <div className="font-medium">Slack</div>
                    <div className="text-sm text-gray-600">Notifications d'appels manqués</div>
                  </div>
                  <div>
                    <div className="font-medium">Google Workspace</div>
                    <div className="text-sm text-gray-600">Intégration complète avec Gmail et Calendar</div>
                  </div>
                  <div>
                    <div className="font-medium">Zendesk</div>
                    <div className="text-sm text-gray-600">Support client intégré</div>
                  </div>
                  <div>
                    <div className="font-medium">Make (Integromat)</div>
                    <div className="text-sm text-gray-600">Automatisation avancée des processus</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Headphones className="w-5 h-5 mr-2 text-green-500" />
                  API REST Complète
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Développez des intégrations personnalisées avec notre API documentée. Points de terminaison pour la
                  gestion des utilisateurs, appels, enregistrements et analyses de votre standard virtuel.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Voir Documentation API
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cas d'Usage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Cas d'usage réels de notre Standard Virtuel
            </h2>
            <p className="text-xl text-gray-600">
              Entreprises qui ont déjà transformé leur communication avec notre standard virtuel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Cabinet de conseil (25 employés)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Migration d'un standard traditionnel vers notre standard virtuel avec des économies de{" "}
                  <strong>1 200€/an</strong> en maintenance. L'intégration HubSpot a automatisé l'enregistrement de plus
                  de 200 contacts mensuels.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">Économies : 1 200€/an avec le standard virtuel</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Clinique dentaire (8 lignes)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Réduction de <strong>40%</strong> des appels manqués grâce au SVI intelligent du standard virtuel. Les
                  rappels automatiques par WhatsApp ont augmenté la présence de 25%.
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">-40% d'appels manqués</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pas de petits caractères */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Pas de petits caractères, pas de surprises avec votre Standard Virtuel
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold">Installation gratuite</h3>
              <p className="text-sm text-gray-600">Configurez votre standard virtuel depuis notre panneau web</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold">Portabilité incluse</h3>
              <p className="text-sm text-gray-600">Conservez vos numéros actuels dans le standard virtuel</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold">Facturation transparente</h3>
              <p className="text-sm text-gray-600">Pas de coûts cachés dans votre standard virtuel</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                <Headphones className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold">Support inclus</h3>
              <p className="text-sm text-gray-600">
                Techniciens spécialisés en standard virtuel sans coût supplémentaire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Prêt à moderniser votre système téléphonique avec notre Standard Virtuel ?
            </h2>
            <p className="text-xl opacity-90">
              Rejoignez les entreprises qui profitent déjà de communications illimitées avec notre standard virtuel. La
              migration est plus facile que vous ne le pensez.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/demo?produit=standard-virtuel">
                <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8">
                  Demander une Démo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/fr/essai-gratuit?produit=standard-virtuel">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent"
                >
                  Essai Gratuit 14 Jours
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
