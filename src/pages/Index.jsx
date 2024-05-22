import { useState, useEffect } from "react";
import { Container, VStack, HStack, Box, Text, Button, Image, IconButton, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { FaHeart, FaUser } from "react-icons/fa";

const Index = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem("profiles")) || [
      {
        id: 1,
        name: "John Doe",
        age: 28,
        bio: "Love hiking and outdoor adventures.",
        img: "https://images.unsplash.com/photo-1505731266723-9adc6eb6ea96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBoaWtpbmd8ZW58MHx8fHwxNzE2NDEzNDc4fDA&ixlib=rb-4.0.3&q=80&w=1080",
      },
      {
        id: 2,
        name: "Jane Smith",
        age: 25,
        bio: "Avid reader and coffee enthusiast.",
        img: "https://images.unsplash.com/photo-1564247556387-6e97f44aa0cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJlYWRpbmclMjBib29rfGVufDB8fHx8MTcxNjQxMzQ3OXww&ixlib=rb-4.0.3&q=80&w=1080",
      },
    ];
    setProfiles(storedProfiles);
  }, []);

  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const handleLike = () => {
    alert(`You liked ${profiles[currentProfileIndex].name}`);
    nextProfile();
  };

  const handleDislike = () => {
    alert(`You disliked ${profiles[currentProfileIndex].name}`);
    nextProfile();
  };

  const nextProfile = () => {
    setCurrentProfileIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="3xl" fontWeight="bold">
          Find Your Match
        </Text>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" maxW="md">
          <Image src={profiles[currentProfileIndex].img} alt={profiles[currentProfileIndex].name} />
          <Box p="6">
            <HStack spacing={4} justifyContent="space-between">
              <Text fontSize="2xl" fontWeight="bold">
                {profiles[currentProfileIndex].name}, {profiles[currentProfileIndex].age}
              </Text>
              <IconButton aria-label="Profile" icon={<FaUser />} size="lg" />
            </HStack>
            <Text mt={2}>{profiles[currentProfileIndex].bio}</Text>
          </Box>
        </Box>
        <HStack spacing={4}>
          <Button colorScheme="red" onClick={handleDislike}>
            Dislike
          </Button>
          <Button colorScheme="green" onClick={handleLike}>
            Like
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
