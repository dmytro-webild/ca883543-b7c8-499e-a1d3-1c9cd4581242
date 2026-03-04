"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import FooterCard from "@/components/sections/footer/FooterCard";
import { HelpCircle, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function FAQPage() {
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
            { name: "Inicio", id: "/" },
            { name: "Productos", id: "/#features" },
            { name: "Ubicación", id: "/#location" },
            { name: "FAQ", id: "/faq" },
            { name: "Contacto", id: "/contact" }
          ]}
          brandName="A mi manera"
          bottomLeftText="Pastelería Artesanal"
          bottomRightText="reservas@amimamera.com"
        />
      </div>

      <div id="faq" data-section="faq" className="pt-32">
        <FaqDouble
          title="Preguntas Frecuentes"
          description="Resuelve tus dudas sobre nuestros productos y servicios"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",              title: "¿Cuál es el tiempo de entrega para pedidos personalizados?",              content: "Para tortas personalizadas, recomendamos hacer el pedido con 48 horas de anticipación. Entregas urgentes consultar disponibilidad."
            },
            {
              id: "2",              title: "¿Ofrecen opciones sin gluten y sin lactosa?",              content: "Sí, contamos con línea de productos dietéticos. Consulta nuestros catálogos disponibles en tienda o por WhatsApp."
            },
            {
              id: "3",              title: "¿Pueden decorar tortas con temas personalizados?",              content: "Absolutamente. Realizamos diseños únicos según tus preferencias. Solicita tu presupuesto sin compromiso."
            },
            {
              id: "4",              title: "¿Ofrecen servicio de envío a domicilio?",              content: "Sí, disponible para la zona de Madrid. El envío tiene costo adicional según distancia."
            },
            {
              id: "5",              title: "¿Qué métodos de pago aceptan?",              content: "Aceptamos efectivo, tarjeta de crédito, débito y transferencia bancaria para pedidos en línea."
            },
            {
              id: "6",              title: "¿Tienen tienda física donde comprar?",              content: "Sí, visitanos en Calle Principal 123, Madrid. Horario: Lunes a Domingo de 9:00 a 20:00."
            }
          ]}
          textboxLayout="default"
          faqsAnimation="slide-up"
          useInvertedBackground={false}
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
