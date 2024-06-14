import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { title, details };
    // Save the event to localStorage or send it to a backend server
    const events = JSON.parse(localStorage.getItem("events")) || [];
    events.push(newEvent);
    localStorage.setItem("events", JSON.stringify(events));
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">Create New Event</Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl id="title" isRequired>
              <FormLabel>Event Title</FormLabel>
              <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl id="details" isRequired>
              <FormLabel>Event Details</FormLabel>
              <Textarea value={details} onChange={(e) => setDetails(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="100%">Create Event</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default CreateEvent;