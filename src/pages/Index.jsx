import { Container, Text, VStack, Heading, Box, Button, SimpleGrid, Image } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">Event Management App</Heading>
        <Text fontSize="xl" textAlign="center">Manage your events efficiently and effortlessly.</Text>
        <Button leftIcon={<FaPlus />} colorScheme="teal" size="lg">Create New Event</Button>
        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>Upcoming Events</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Event 1</Heading>
              <Text mt={4}>Details about Event 1</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Event 2</Heading>
              <Text mt={4}>Details about Event 2</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;