import {
  Box,
  HStack,
  VStack,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Footer: React.FunctionComponent = () => {
  return (
    <Container as="footer" role="contentinfo" alignSelf={'center'}>
      <Stack
        spacing="8"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        py={{ base: '12', md: '16' }}
      >
        <Stack
          direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
          spacing={{ base: '12', md: '8' }}
        >
          <Stack direction="row" spacing="8">
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="white">
                Product
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link">How it works</Button>
                <Button variant="link">Pricing</Button>
                <Button variant="link">Use Cases</Button>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="white">
                Legal
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link">Privacy</Button>
                <Button variant="link">Terms</Button>
                <Button variant="link">License</Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing="4">
            <Text fontSize="sm" fontWeight="semibold" color="white">
              Stay up to date
            </Text>
            <Stack
              spacing="4"
              direction={{ base: 'column', sm: 'row' }}
              maxW={{ lg: '360px' }}
            >
              <Input placeholder="Enter your email" type="email" required />
              <Button variant="primary" type="submit" flexShrink={0} color={"white"}>
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
      >
        <Text fontSize="sm" color="white">
          &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights
          reserved.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            color={"white"}
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            color={"white"}
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            color={"white"}
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Container>
  );
};
