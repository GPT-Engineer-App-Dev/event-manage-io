import { Container, Text, VStack, Heading, Box, Button, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">Event Management App</Heading>
        <Text fontSize="xl" textAlign="center">Manage your events efficiently and effortlessly.</Text>
        <Button leftIcon={<FaPlus />} colorScheme="teal" size="lg" onClick={() => navigate("/create-event")}>Create New Event</Button>
        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>Upcoming Events</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {events.map((event, index) => (
              <Link to={`/event/${index}`} key={index}>
                <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
                  <Heading fontSize="xl">{event.title}</Heading>
                  <Text mt={4}>{event.details}</Text>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;