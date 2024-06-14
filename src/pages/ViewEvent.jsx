import { useParams } from "react-router-dom";
import { Container, Heading, Text, VStack, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ViewEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const foundEvent = storedEvents[id];
    setEvent(foundEvent);
  }, [id]);

  if (!event) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Heading as="h1" size="2xl" textAlign="center">Event Not Found</Heading>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">{event.title}</Heading>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
          <Text mt={4}>{event.details}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default ViewEvent;