import Navbar from "@/components/Navbar";
import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Button,
  Divider,
  Image,
} from "@chakra-ui/react";

// Datos de formación
const formacionData = [
  {
    titulo: "Licenciatura en Administración de RRHH",
    instituto: "Universidad de la Marina Mercante",
    fecha: "jun 2013",
  },
  {
    titulo: "Perito Mercantil con orientación en Legislación lm",
    instituto: "Instituto Guardia de Honor del Ssmo Rosario",
    fecha: "jun 2008",
  },
  {
    titulo: "Herramientas de Administración de Personal",
    instituto: "UTN",
    fecha: "Ene 2025",
  },
  {
    titulo: "Asistente de Recursos Humanos",
    instituto: "Capacitate",
    fecha: "Ene 2025",
  },
  {
    titulo: "Liderazgo Público",
    instituto: "INAP",
    fecha: "Ene 2025",
  },
  {
    titulo: "Seguridad en la información",
    instituto: "CRJPPF",
    fecha: "Ene 2025",
  },
  {
    titulo: "Introducción a la Seguridad e Higiene en el Trabajo",
    instituto: "INAP",
    fecha: "Ene 2025",
  },
  {
    titulo: "Excel: Funciones Avanzadas",
    instituto: "INAP",
    fecha: "Ene 2025",
  },
  {
    titulo: "Diplomatura en Gestión de los RRHH en el Sector Público",
    instituto: "INAP",
    fecha: "Ene 2025",
  },
  {
    titulo: "Gestión Administrativa: Roles y Funciones",
    instituto: "INAP",
    fecha: "Ene 2025",
  },
  {
    titulo:
      "Introducción a la Organización del Trabajo: Claves para Administrar el Tiempo",
    instituto: "INAP",
    fecha: "Ene 2025",
  },
  {
    titulo: "Gestión del Cambio Organizacional",
    instituto: "INAP",
    fecha: "Ene 2025",
  },
  {
    titulo: "Riesgos Derivados de la Organización del Trabajo",
    instituto: "INAP",
    fecha: "Ene 2025",
  },
  {
    titulo: "Selección para Perfiles IT",
    instituto: "Capacitate UBA",
    fecha: "Ene 2025",
  },
  {
    titulo: "Régimen de Contrataciones de la Administración Nacional",
    instituto: "INAP",
    fecha: "Ene 2025",
  },
  {
    titulo: "El Enfoque de Derechos en las Políticas Públicas",
    instituto: "INAP",
    fecha: "Ene 2025",
  },
  {
    titulo: "Curso de Inglés",
    instituto:
      "IUPFA (Instituto Universitario de la Policía Federal Argentina)",
    fecha: "Ene 2025",
  },
  {
    titulo: "Curso de Prevención de Riesgos en Espacios Confinados",
    instituto: "FISO",
    fecha: "Ene 2025",
  },
  {
    titulo: "Curso de Empleo Público",
    instituto: "INAP",
    fecha: "Ene 2025",
  },
  {
    titulo: "Curso de Aspectos Generales de la Redacción",
    instituto: "INAP",
    fecha: "Ene 2025",
  },
  {
    titulo: "Diplomatura en RRHH",
    instituto: "Capacitate",
    fecha: "nov 2024",
  },
  {
    titulo: "Curso para Selección de Perfiles IT",
    instituto: "Capacitate",
    fecha: "nov 2024",
  },
];

// Datos de experiencia
const experienciaData = [
  {
    puesto: "Asistente Administrativa",
    fecha: "jul 2015 - presente",
    lugar: "Caja de Retiros, Jubilaciones y pensiones de la PFA, CABA",
    tareas: [
      "Atención al público.",
      "Atención telefónica.",
      "Entrada y salida de expedientes.",
      "Trabajar expedientes.",
    ],
  },
  {
    puesto: "Pasantía",
    fecha: "dic 2012 - dic 2013",
    lugar: "Aiesec",
    tareas: [
      "Controlar que los documentos estén en orden.",
      "Assessment Center.",
      "Reclutamiento.",
      "Selección.",
      "Soporte al área de Capacitaciones.",
      "Capacitadora.",
    ],
  },
  {
    puesto: "Data Entry",
    fecha: "dic 2012 - dic 2012",
    lugar: "Call Center, CABA",
    tareas: ["Recibía mensajes de voz y los transcribía a mensajes de texto."],
  },
];

const SobreMi = () => {
  return (
    <Box bg="#f2edf7">
      <Navbar />
      <Box w="90%" mr="5%" ml="5%" pt={16} pb={10}>
        {/* Sección de Sobre mí */}
        <Box id="sobre-mi" mb={12} mt={10}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            mb={6}
          >
            <Text fontSize="3xl" fontWeight="bold" textAlign="left">
              Sobre mí
            </Text>
            <Image
              src="/images/perfil.jpeg"
              alt="Foto de perfil"
              borderRadius="full"
              boxSize={{ base: "50px", md: "100px", lg: "150px" }}
              objectFit="cover"
              objectPosition="top"
            />
          </Flex>

          <Text fontSize="xl" color="gray.700" maxW="100%">
            Con años de experiencia en administración pública, he perfeccionado
            mis habilidades en la resolución de conflictos y en la construcción
            de relaciones sólidas con organizaciones y beneficiarios. Además, he
            adquirido experiencia en gestión administrativa y manejo de
            archivos. Mi rol en Recursos Humanos me ha permitido desarrollar
            experiencia en capacitación de personal, reclutamiento, selección,
            realización de entrevistas y organización de expedientes personales.
          </Text>

          <Divider borderColor="gray.400" mt={8} />
        </Box>

        {/* Sección de Experiencia */}
        <Box id="experiencia" mb={12}>
          <Text fontSize="3xl" fontWeight="bold" mb={6}>
            Experiencia
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {experienciaData.map((item, index) => (
              <Flex
                key={index}
                direction="column"
                p={4}
                border="1px solid"
                borderColor="#bea3d8"
                borderRadius="md"
                shadow="sm"
              >
                <Text fontWeight="bold" mb={1}>
                  {item.puesto}
                </Text>
                <Text fontSize="sm" color="gray.600" mb={1}>
                  {item.fecha}
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="purple" mb={2}>
                  {item.lugar}
                </Text>
                <Box>
                  {item.tareas.map((tarea, idx) => (
                    <Text key={idx} fontSize="sm" mb={1}>
                      • {tarea}
                    </Text>
                  ))}
                </Box>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>

        {/* Sección de Formación */}
        <Box id="formacion" mb={12}>
          <Text fontSize="3xl" fontWeight="bold" mb={6}>
            Formación
          </Text>
          {formacionData.map((item, index) => (
            <Flex
              key={index}
              justify="space-between"
              align="center"
              p={4}
              borderBottom="1px solid"
              borderColor="gray.200"
              _last={{ borderBottom: "none" }}
            >
              <Box>
                <Text fontWeight="bold" fontSize="lg">
                  {item.titulo}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {item.instituto}
                </Text>
              </Box>
              <Text fontSize="sm" color="gray.600">
                {item.fecha}
              </Text>
            </Flex>
          ))}
        </Box>

        {/* Botón para Descargar CV */}
        <Box textAlign="center" mt={8}>
          <Button
            colorScheme="purple"
            size="lg"
            as="a"
            href="/cv.pdf"
            download="cv.pdf"
          >
            Descargar CV
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SobreMi;
