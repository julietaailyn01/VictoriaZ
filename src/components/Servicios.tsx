import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";

const ServicioCard = ({
  title,
  descriptions,
}: {
  title: string;
  descriptions: string[];
}) => (
  <Flex
    border="1px"
    borderColor="#bea3d8"
    borderRadius="md"
    p={[4, 4, 10]} // Padding más pequeño en pantallas pequeñas
    direction="column"
    align="center"
    textAlign="center"
    shadow="sm"
    _hover={{ shadow: "md", transform: "scale(1.02)" }}
    transition="all 0.3s"
  >
    <Text fontWeight="bold" fontSize={["md", "lg", "xl"]} mb={4}>
      {title}
    </Text>
    <Flex
      direction="column"
      align="flex-start"
      gap={2}
      w="fit-content"
      mx="auto"
    >
      {descriptions.map((description, index) => (
        <Flex key={index} align="center">
          <Box
            as="span"
            w="8px"
            h="8px"
            bg="#bea3d8"
            borderRadius="50%"
            mr={3}
          />
          <Text fontSize={["xs", "sm", "md"]}>{description}</Text>
        </Flex>
      ))}
    </Flex>
  </Flex>
);

const Servicios = () => (
  <Box py={12} minH="100vh" px={8} bg="#f2edf7">
    {/* Nueva sección con el speech */}
    <Box textAlign="center" bg="#bea3d8" p={10} borderRadius="md" mb={12}>
      <Text fontSize="xl" fontWeight="bold" color="white" mb={4}>
        Recursos humanos y desarrollo organizacional
      </Text>
      <Text fontSize="lg" fontWeight="bold" color="black" mt={4}>
        ¿Tenés un proyecto en mente? ¡Hablemos!
      </Text>
    </Box>

    <Text fontSize="2xl" fontWeight="bold" mb={12} textAlign="center">
      Servicios
    </Text>
    <SimpleGrid columns={[1, 1, 2]} spacing={[6, 10]}>
      <ServicioCard
        title="Ayuda al armado de CV"
        descriptions={[
          "Revisión profesional.",
          "Ajuste a estándares laborales.",
          "Asesoramiento personalizado.",
        ]}
      />
      <ServicioCard
        title="Reclutamiento y selección"
        descriptions={[
          "Búsqueda activa de candidatos.",
          "Evaluación profesional.",
          "Entrevistas personales.",
        ]}
      />
      <ServicioCard
        title="Cursos básicos de RRHH"
        descriptions={[
          "Capacitación en reclutamiento.",
          "Talleres prácticos.",
          "Formación integral.",
        ]}
      />
      <ServicioCard
        title="Liquidación de sueldo"
        descriptions={[
          "Liquidación básica.",
          "Cálculo de haberes.",
          "Gestión avanzada.",
        ]}
      />
    </SimpleGrid>
  </Box>
);

export default Servicios;
