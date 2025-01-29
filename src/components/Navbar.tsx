import {
  Box,
  Flex,
  Text,
  Link,
  Image,
  IconButton,
  VStack,
  Collapse,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importamos los íconos de react-icons
import { useRouter } from "next/router";

interface NavBarProps {
  isHome?: boolean;
}

const Navbar = ({ isHome = false }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el menú
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen); // Alternar entre abierto/cerrado

  const getLinkColor = (path: string) => {
    return router.pathname === path ? "purple" : isHome ? "white" : "black";
  };

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      w="full"
      bg={!isHome ? "#bea3d8" : "transparent"}
      backdropFilter="blur(10px)"
      zIndex="10"
      px={8}
      py={2}
      color={!isHome ? "black" : "white"}
      boxShadow={!isHome ? "sm" : "none"}
    >
      <Flex justify="space-between" align="center">
        {/* Logo */}
        <Flex align="center">
          <Image src="/images/3.png" alt="Logo" boxSize="60px" mr={2} />
        </Flex>

        {/* Botón de menú hamburguesa (solo visible en pantallas pequeñas) */}
        <IconButton
          display={{ base: "block", md: "none" }}
          aria-label="Abrir menú"
          icon={isOpen ? <FaTimes /> : <FaBars />} // Usamos los íconos de react-icons
          onClick={toggleMenu}
          bg="transparent"
          color={!isHome ? "black" : "white"}
          _hover={{ bg: "transparent" }}
        />

        {/* Enlaces de navegación para pantallas grandes */}
        <Flex display={{ base: "none", md: "flex" }} gap={6} justify="center">
          <Link
            href="/"
            fontWeight="medium"
            color={getLinkColor("/")}
            _hover={{ color: "purple" }}
          >
            Inicio
          </Link>
          <Link
            href="/sobremi"
            fontWeight="medium"
            color={getLinkColor("/sobremi")}
            _hover={{ color: "purple" }}
          >
            Sobre mí
          </Link>
          <Link
            href="/contacto"
            fontWeight="medium"
            color={getLinkColor("/contacto")}
            _hover={{ color: "purple" }}
          >
            Contacto
          </Link>
        </Flex>
      </Flex>

      {/* Menú desplegable para pantallas pequeñas */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          bg={!isHome ? "#bea3d8" : "rgba(0, 0, 0, 0.8)"}
          color={!isHome ? "black" : "white"}
          px={4}
          py={4}
          mt={2}
        >
          <VStack align="start" spacing={4}>
            <Link
              href="/"
              fontWeight="medium"
              color={getLinkColor("/")}
              _hover={{ color: "purple" }}
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              href="/sobremi"
              fontWeight="medium"
              color={getLinkColor("/sobremi")}
              _hover={{ color: "purple" }}
              onClick={toggleMenu}
            >
              Sobre mí
            </Link>
            <Link
              href="/contacto"
              fontWeight="medium"
              color={getLinkColor("/contacto")}
              _hover={{ color: "purple" }}
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
