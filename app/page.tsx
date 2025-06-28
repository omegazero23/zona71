"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Palette, Users, Music, Building, MapPin, Phone, Mail, Brush, ChevronLeft, ChevronRight } from "lucide-react"

function ActivityCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    { src: "/placeholder.svg?height=300&width=400", alt: "Niños pintando en clase de arte en Zona 71" },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Salón de clases con mesas coloridas para actividades creativas",
    },
    { src: "/placeholder.svg?height=300&width=400", alt: "Materiales de arte y pintura para cursos de verano" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Instructora enseñando técnicas de arte a estudiantes" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Clase de salsa para niños en espacio creativo" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Espacio creativo con obras de arte de estudiantes" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Taller de verano en acción con niños creativos" },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Estudiantes trabajando en proyectos artísticos colaborativos",
    },
  ]

  // Responsive items per view
  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1 // mobile
      if (window.innerWidth < 1024) return 2 // tablet
      return 4 // desktop
    }
    return 4
  }

  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView())
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerView >= images.length ? 0 : prevIndex + itemsPerView))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerView < 0 ? Math.max(0, images.length - itemsPerView) : prevIndex - itemsPerView,
    )
  }

  const visibleImages = images.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleImages.map((image, index) => (
          <div key={currentIndex + index} className="rounded-lg overflow-hidden shadow-lg group">
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      {images.length > itemsPerView && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            disabled={currentIndex === 0}
            aria-label="Ver imágenes anteriores"
          >
            <ChevronLeft className="text-gray-600" size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            disabled={currentIndex + itemsPerView >= images.length}
            aria-label="Ver siguientes imágenes"
          >
            <ChevronRight className="text-gray-600" size={24} />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {images.length > itemsPerView && (
        <div className="flex justify-center mt-6 space-x-2" role="tablist" aria-label="Navegación de galería">
          {Array.from({ length: Math.ceil(images.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerView)}
              className={`w-3 h-3 rounded-full transition-colors ${
                Math.floor(currentIndex / itemsPerView) === index ? "bg-green-600" : "bg-gray-300"
              }`}
              role="tab"
              aria-selected={Math.floor(currentIndex / itemsPerView) === index}
              aria-label={`Ir a página ${index + 1} de la galería`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-50 to-orange-50 py-20 px-4 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-10 right-10 opacity-20" aria-hidden="true">
            <Palette className="text-orange-500" size={120} />
          </div>
          <div className="absolute bottom-10 right-32 opacity-15" aria-hidden="true">
            <Brush className="text-blue-500" size={80} />
          </div>
          <div className="absolute top-20 right-64 opacity-10" aria-hidden="true">
            <div className="w-16 h-16 bg-green-400 rounded-full"></div>
          </div>
          <div className="absolute bottom-32 right-20 opacity-10" aria-hidden="true">
            <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-blue-600 mb-6">
                BIENVENIDOS
                <br />A ZONA 71
              </h1>
              <p className="text-gray-700 text-xl mb-4 max-w-2xl">
                Un espacio creativo creado para brindar experiencias significativas a través del arte, el movimiento y
                la formación.
              </p>
              <address className="text-gray-600 mb-12 text-lg not-italic">
                Calle 21 #4798, Col. Centro, entre 52 y 54, Mérida, Yucatán
              </address>

              <nav aria-label="Servicios principales">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 px-4 text-xs sm:text-sm font-medium">
                    📚 Ver Curso de Verano
                  </Button>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 px-4 text-xs sm:text-sm font-medium">
                    🎨 Clases de arte
                  </Button>
                  <Button className="bg-green-500 hover:bg-green-600 text-white rounded-lg py-3 px-4 text-xs sm:text-sm font-medium">
                    🏢 Renta de Espacio
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 px-4 text-xs sm:text-sm font-medium">
                    ⬇️ Inscríbeme ahora
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </section>
      </header>

      <main>
        {/* About Section */}
        <section className="py-16 px-4 bg-white" aria-labelledby="about-heading">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center" aria-hidden="true">
                <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="text-green-600">
                    <Users size={48} />
                  </div>
                </div>
              </div>

              <div>
                <h2 id="about-heading" className="text-3xl font-bold text-blue-600 mb-6">
                  ¿QUIÉNES SOMOS?
                </h2>
                <p className="text-gray-700 text-lg mb-4">
                  Somos un espacio creativo para brindar experiencias significativas a través del arte, el movimiento y
                  la formación.
                </p>
                <p className="text-gray-700 text-lg">
                  Nuestro equipo está conformado por una emprendedora y una maestra de arte con experiencia trabajando
                  con niños.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-gray-50" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="services-heading" className="text-3xl font-bold text-center text-green-600 mb-12">
              OFERTA DE SERVICIOS
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <article>
                <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
                      aria-hidden="true"
                    >
                      <Palette className="text-orange-600" size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Curso de verano</h3>
                    <p className="text-sm text-gray-600 mb-4">Del 21 de julio al 21 de agosto</p>
                    <p className="text-sm text-gray-700">Verano para niños de 5 a 12 años</p>
                  </CardContent>
                </Card>
              </article>

              <article>
                <Card className="border-green-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                      aria-hidden="true"
                    >
                      <Brush className="text-green-600" size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Clases de arte</h3>
                    <p className="text-sm text-gray-600 mb-4">Martes y Jueves o Sábados</p>
                    <p className="text-sm text-gray-700">Clases intensivas con materiales incluidos</p>
                  </CardContent>
                </Card>
              </article>

              <article>
                <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4"
                      aria-hidden="true"
                    >
                      <Music className="text-yellow-600" size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Clases de salsa</h3>
                    <p className="text-sm text-gray-600 mb-4">Días sábados</p>
                    <p className="text-sm text-gray-700">Clases de salsa básico para niños y adultos</p>
                  </CardContent>
                </Card>
              </article>

              <article>
                <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                      aria-hidden="true"
                    >
                      <Building className="text-blue-600" size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Renta de salón</h3>
                    <p className="text-sm text-gray-600 mb-4">Disponible en horario matutino y vespertino</p>
                    <p className="text-sm text-gray-700">Capacidad: 20 personas</p>
                  </CardContent>
                </Card>
              </article>
            </div>
          </div>
        </section>

        {/* Activities Gallery */}
        <section className="py-16 px-4 bg-white" aria-labelledby="gallery-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="gallery-heading" className="text-3xl font-bold text-center text-green-600 mb-12">
              GALERÍA DE ACTIVIDADES
            </h2>

            <ActivityCarousel />
          </div>
        </section>

        {/* Location and Contact */}
        <section className="py-16 px-4 bg-gray-50" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="contact-heading" className="text-3xl font-bold text-center text-blue-600 mb-12">
              UBICACIÓN Y CONTACTO
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div
                  className="bg-gray-300 h-64 rounded-lg flex items-center justify-center mb-6"
                  role="img"
                  aria-label="Mapa de ubicación de Zona 71"
                >
                  <div className="text-center">
                    <MapPin className="text-red-500 mx-auto mb-2" size={48} />
                    <p className="text-gray-600">Mapa de ubicación</p>
                    <address className="text-sm text-gray-500 not-italic">Calle 21 #4798, Col. Centro</address>
                  </div>
                </div>
              </div>

              <div>
                <form className="space-y-4" aria-label="Formulario de contacto">
                  <div>
                    <label htmlFor="student-name" className="sr-only">
                      Nombre del estudiante
                    </label>
                    <Input
                      id="student-name"
                      name="student-name"
                      placeholder="Nombre del estudiante"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="activity-interest" className="sr-only">
                      Actividad de interés
                    </label>
                    <Input
                      id="activity-interest"
                      name="activity-interest"
                      placeholder="Actividad de interés"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Escríbenos tu mensaje"
                      className="w-full h-32 resize-none"
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Enviar mensaje
                  </Button>
                </form>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-600" size={20} aria-hidden="true" />
                    <a href="tel:+529991234567" className="text-gray-700 hover:text-blue-600">
                      999 123 4567
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-600" size={20} aria-hidden="true" />
                    <a href="mailto:info@zona71.com" className="text-gray-700 hover:text-blue-600">
                      info@zona71.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-600" size={20} aria-hidden="true" />
                    <address className="text-gray-700 not-italic">Calle 21 #4798, Col. Centro, entre 52 y 54</address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
