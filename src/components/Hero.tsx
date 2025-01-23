import { Box, Text, Image, Flex } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box position="relative" h="100vh" w="100vw">
      {/* Imagen de fondo */}
      <Image
        src="/images/2.png"
        alt="Imagen Hero"
        objectFit="cover"
        w="full"
        h="full"
        position="absolute"
        zIndex={-1}
      />

      {/* Contenido encima de la imagen */}
      <Flex
        direction={["column", "column", "row"]} // Apila en pantallas pequeñas, usa fila en grandes
        align="center"
        justify="center"
        h="full"
        px={[4, 8]} // Ajusta el padding
        bg="rgba(0, 0, 0, 0.5)"
        color="white"
        textAlign="center"
      >
        <Flex direction="column" w={["100%", "100%", "50%"]} mb={[4, 0]}>
          <Text
            fontSize={["lg", "4xl"]} // Tamaño más pequeño en pantallas pequeñas
            fontWeight="bold"
            fontFamily="Instrument Serif"
            mb={4}
          >
            "Estoy convencido de que nada de lo que hacemos es más importante
            que contratar y desarrollar a la gente. Al final del día se apuesta
            por las personas, no por las estrategias.”
          </Text>
          <Text fontSize={["sm", "lg"]} fontStyle="italic">
            - Lawrence Bossidy
          </Text>
        </Flex>
        <Box w={["100%", "100%", "50%"]}></Box>
      </Flex>
    </Box>
  );
};

export default Hero;
