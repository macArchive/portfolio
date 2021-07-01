import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Stack as="section" id="contact" spacing={3}>
      <Heading size="lg">Contact</Heading>
      <form>
        <Stack spacing={4} align="center" mb={6}>
          <FormControl maxW="400px" mx="auto">
            <FormLabel>Name</FormLabel>
            <Input type="text" required />
          </FormControl>
          <FormControl maxW="400px" mx="auto">
            <FormLabel>Email</FormLabel>
            <Input type="email" required />
          </FormControl>
          <FormControl maxW="400px" mx="auto">
            <FormLabel>Message</FormLabel>
            <Textarea required resize="none" />
          </FormControl>
          <Button w="100%" maxW="400px" mx="auto" type="submit">
            Send
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
