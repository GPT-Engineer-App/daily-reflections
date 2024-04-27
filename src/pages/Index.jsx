import { Box, Container, Heading, Text, VStack, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} alignItems="flex-start">
        <Box>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwcGVyc29ufGVufDB8fHx8MTcxNDE5NzM4OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image" />
        </Box>
        <Heading as="h1">Welcome to My Blog!</Heading>
        <Text fontSize="xl">Hi, I'm John Doe, a software developer, writer, and a lifelong learner. This blog is a personal journey through my life, thoughts, and adventures. I love to share my experiences and learnings on technology, travel, and life lessons.</Text>
        <Heading as="h2" size="lg">
          Latest Posts
        </Heading>
        <VStack spacing={4} alignItems="flex-start">
          <Link href="#" fontSize="2xl" fontWeight="bold">
            Exploring the World of Open Source
          </Link>
          <Text>Dive into my experiences contributing to open source projects and how it has shaped my career and personal growth.</Text>
          <Link href="#" fontSize="2xl" fontWeight="bold">
            The Joy of Learning New Languages
          </Link>
          <Text>My journey learning Spanish and how it opened up new cultures, friends, and perspectives.</Text>
        </VStack>
        <Heading as="h2" size="lg">
          Connect with Me
        </Heading>
        <Box display="flex" gap="20px">
          <Link href="https://twitter.com/johndoe" isExternal>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <FaLinkedin size="24px" />
          </Link>
          <Link href="https://github.com/johndoe" isExternal>
            <FaGithub size="24px" />
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
