import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import { IconButton } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar isHome={true} />
      <Hero />
      <Servicios />

      {/* Botón de WhatsApp */}
      <IconButton
        as="a"
        href="https://wa.me/5491169594371"
        target="_blank"
        aria-label="WhatsApp"
        icon={<FaWhatsapp size="2xl" />}
        colorScheme="green"
        size="lg"
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex={10}
        borderRadius="full"
        shadow="md"
        _hover={{ transform: "scale(1.1)" }}
        transition="all 0.2s"
      />
    </>
  );
}
