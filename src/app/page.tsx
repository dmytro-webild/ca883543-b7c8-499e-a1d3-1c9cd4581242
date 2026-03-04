"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import FeatureCardEight from "@/components/sections/feature/FeatureCardEight";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Star, Heart, Cake, MapPin, HelpCircle, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function AmiManeraLanding() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="mediumLargeSizeMediumTitles"
      background="blurBottom"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Inicio", id: "hero" },
            { name: "Productos", id: "features" },
            { name: "Ubicación", id: "location" },
            { name: "FAQ", id: "/faq" },
            { name: "Contacto", id: "/contact" }
          ]}
          brandName="A mi manera"
          bottomLeftText="Pastelería Artesanal"
          bottomRightText="reservas@amimamera.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="A mi manera"
          description="Pastelería artesanal con sabores auténticos y diseños únicos creados con dedicación"
          buttons={[
            { text: "Descubre Nuestros Sabores", href: "#features" },
            { text: "Haz tu Pedido", href: "https://wa.me/34" }
          ]}
          slides={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/selective-focus-shot-delicious-decorative-cake-brown-table_181624-43875.jpg",              imageAlt: "Pasteles artesanales decorados"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-pretty-cupcakes_23-2147758340.jpg",              imageAlt: "Cupcakes y postres gourmet"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/wedding-cake_627829-11874.jpg",              imageAlt: "Tortas personalizadas"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Nuestra Historia"
          tagIcon={Star}
          title="Hecho con pasión y cuidado en cada detalle"
          description="Fundadores apasionados por la repostería"
          subdescription="Más de 15 años creando momentos dulces"
          icon={Heart}
          imageSrc="http://img.b2bpic.net/free-photo/bakery-atmospheric-photo_1321-4640.jpg"
          imageAlt="Equipo de pastelería A mi manera"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight
          title="Nuestros Productos Estrella"
          description="Descubre la variedad de delicias que creamos con ingredientes premium"
          tag="Especialidades"
          tagIcon={Cake}
          features={[
            {
              id: 1,
              title: "Tortas Personalizadas",              description: "Diseños únicos adaptados a tus eventos especiales con ingredientes frescos",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-wedding-cake_181624-44128.jpg"
            },
            {
              id: 2,
              title: "Cupcakes Gourmet",              description: "Pequeñas creaciones con sabores innovadores y coberturas artesanales",              imageSrc: "http://img.b2bpic.net/free-photo/cute-cupcakes-decorated-with-whipped-cream-hearts-flowers_140725-5796.jpg"
            },
            {
              id: 3,
              title: "Postres Dietéticos",              description: "Opciones sin gluten y bajas en azúcar sin sacrificar el sabor",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-tasty-crispbread-with-ripe-blueberries-strawberries-nuts-with-sour-cream-ceramic-plate_141793-6986.jpg"
            },
            {
              id: 4,
              title: "Bollería Artesanal",              description: "Pan de molde, croissants y panes dulces hechos cada mañana",              imageSrc: "http://img.b2bpic.net/free-photo/variety-sweet-biscuits-wooden-piece-with-dried-fruits-high-quality-photo_114579-68830.jpg"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Lo que Dicen Nuestros Clientes"
          description="Testimonios reales de personas que confían en nuestras creaciones"
          tag="Testimonios"
          testimonials={[
            {
              id: "1",              name: "María González",              role: "Clienta Regular",              company: "Madrid",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/woman-smiling_1187-3264.jpg",              imageAlt: "María González"
            },
            {
              id: "2",              name: "Carlos Martínez",              role: "Organizador de Bodas",              company: "Barcelona",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/pensive-person-alone-corridor-serious_1262-1042.jpg",              imageAlt: "Carlos Martínez"
            },
            {
              id: "3",              name: "Laura Fernández",              role: "Propietaria de Café",              company: "Valencia",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-businesswoman-smiling-camera_74855-4022.jpg",              imageAlt: "Laura Fernández"
            },
            {
              id: "4",              name: "Roberto Jiménez",              role: "Chef Pastelero",              company: "Sevilla",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-chef-with-copy-space_23-2148453415.jpg",              imageAlt: "Roberto Jiménez"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="location" data-section="location">
        <ContactCenter
          tag="Ubicación"
          tagIcon={MapPin}
          title="Visítanos en Nuestro Local"
          description="Encuentra nuestro establecimiento en el corazón del barrio. Abierto de lunes a domingo para servir tus delicias favoritas"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
          inputPlaceholder="Tu email para ofertas"
          buttonText="Suscribirse"
          termsText="Recibe nuestras nuevas creaciones y promociones exclusivas"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="A mi manera"
          copyrightText="© 2024 A mi manera Pastelería. Todos los derechos reservados."
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/amimamera",              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/amimamera",              ariaLabel: "Facebook"
            },
            {
              icon: MessageCircle,
              href: "https://wa.me/34",              ariaLabel: "WhatsApp"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
