"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterCard from "@/components/sections/footer/FooterCard";
import { MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function ContactPage() {
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
            { name: "", id: "/#location" },
            { name: "FAQ", id: "/faq" },
            { name: "Contacto", id: "/contact" }
          ]}
          brandName="A mi manera"
          bottomLeftText="Pastelería Artesanal"
          bottomRightText="reservas@amimamera.com"
        />
      </div>

      <div id="contact" data-section="contact" className="pt-32">
        <ContactCenter
          tag="Contacto"
          tagIcon={MapPin}
          title="¡Conecta con Nosotros!"
          description="Estamos aquí para responder tus preguntas y ayudarte con tus pedidos especiales. Suscríbete para recibir nuestras promociones exclusivas."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={true}
          inputPlaceholder="Tu email para ofertas"
          buttonText="Suscribirse"
          termsText="Recibe nuestras nuevas creaciones y promociones exclusivas cada semana."
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
