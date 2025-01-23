import { useState } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FaUser, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Navbar from "@/components/Navbar";

const Contacto = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevenir recarga de página
    console.log("Formulario enviado, datos:", formData); // Verificar que se captura el evento

    emailjs
      .send(
        "service_xqzn36d", // Tu Service ID
        "template_1fm1cuy", // Tu Template ID
        formData, // Datos del formulario
        "i5QyBWaY2s18CWJEh" // Tu Public Key
      )
      .then(
        (result) => {
          console.log("Éxito:", result);
          alert("Mensaje enviado correctamente");
          setFormData({ from_name: "", reply_to: "", mensaje: "" }); // Limpiar el formulario
        },
        (error) => {
          console.error("Error al enviar el mensaje:", error);
          alert("Hubo un error al enviar el mensaje");
        }
      );
  };

  return (
    <>
      <Navbar />
      <Flex
        align="center"
        bg="#FFFBF2"
        h={{ base: "auto", xl: "100vh" }}
        w="100%"
        pt={{ base: 20, xl: 10 }}
        direction={{ base: "column", xl: "row" }}
      >
        {/* Cuadrados de Información de Contacto */}
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          //   w={{ base: "100%", lg: "40%" }}
          h={{ base: "auto", xl: "100%" }}
          p={{ base: 4, xl: 10 }}
          spacing={6}
          position={{ base: "relative", xl: "absolute" }}
          zIndex={1}
          alignContent="center"
          ml={10}
        >
          <Flex
            direction="column"
            align="center"
            textAlign="center"
            bg="#4B4B4B"
            p={4}
            shadow="md"
            gap={4}
            w="320px"
            h="200px"
            justify="center"
          >
            <Icon as={FaUser} boxSize={6} color="#EA9FFF" />
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="white">
                NOMBRE
              </Text>
              <Text color="white">Victoria Zagari</Text>
            </Box>
          </Flex>

          <Flex
            direction="column"
            align="center"
            textAlign="center"
            bg="#4B4B4B"
            p={4}
            shadow="md"
            gap={4}
            w="320px"
            h="200px"
            justify="center"
          >
            <Icon as={FaPhoneAlt} boxSize={6} color="#EA9FFF" />
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="white">
                TELÉFONO
              </Text>
              <Text color="white">11-6959-4371</Text>
            </Box>
          </Flex>

          <Flex
            direction="column"
            align="center"
            textAlign="center"
            bg="#4B4B4B"
            p={4}
            shadow="md"
            gap={4}
            w="320px"
            h="200px"
            justify="center"
          >
            <Icon as={FaMapMarkerAlt} boxSize={6} color="#EA9FFF" />
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="white">
                UBICACIÓN
              </Text>
              <Text color="white">CABA, Argentina</Text>
            </Box>
          </Flex>

          <Flex
            direction="column"
            align="center"
            textAlign="center"
            bg="#4B4B4B"
            p={4}
            shadow="md"
            gap={4}
            w="320px"
            h="200px"
            justify="center"
          >
            <Icon as={FaEnvelope} boxSize={6} color="#EA9FFF" />
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="white">
                CORREO
              </Text>
              <Text color="white">victoriazagari@outlook.com</Text>
            </Box>
          </Flex>
        </SimpleGrid>

        {/* Formulario de Contacto */}
        <Box w="100%" alignContent="center" h="100%" mr={10}>
          <Box
            bg="#EA9FFF"
            borderRadius="0"
            display="flex"
            p={8}
            shadow="md"
            w={{ base: "90%", xl: "60%" }}
            h="60%"
            alignItems="center"
            justifySelf="flex-end"
            justifyContent="center"
            position="relative"
          >
            <Box w="60%" alignItems="center">
              <form onSubmit={handleSubmit}>
                <Text
                  fontSize="4xl"
                  fontWeight="bold"
                  mb={12}
                  color="Black"
                  textAlign="center"
                >
                  Contactame
                </Text>
                <Input
                  placeholder="Nombre"
                  mb={6}
                  bg="white"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                />
                <Input
                  placeholder="Email"
                  mb={6}
                  bg="white"
                  name="reply_to"
                  value={formData.reply_to}
                  onChange={handleChange}
                />
                <Textarea
                  placeholder="Mensaje"
                  mb={6}
                  bg="white"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                />
                <Box
                  w="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button
                    type="submit"
                    border="1px solid purple"
                    bg="transparent"
                    color="black"
                    w="fit-content"
                    _hover={{ bg: "purple", color: "white" }}
                  >
                    ENVIAR
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Contacto;
