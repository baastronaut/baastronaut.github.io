import {
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconRocket } from "@tabler/icons-react";
import { PropsWithChildren } from "react";

export default function HomePage() {
  return (
    <>
      <Box
        sx={(theme) => ({
          background: `linear-gradient(180deg, ${theme.fn.rgba(
            theme.black,
            0.4
          )}, ${theme.fn.rgba(
            theme.black,
            0.4
          )}), url(/home/bg.webp) no-repeat top center / 100%`,
        })}
      >
        <Container py={120}>
          <Stack spacing="xl">
            <Group>
              <Title color="white">Baastronaut</Title>
              <ThemeIcon size={40} radius={999}>
                <IconRocket />
              </ThemeIcon>
            </Group>

            <Text weight="500" size="xl" color="white" sx={{ maxWidth: 500 }}>
              Low code platform. Powerful REST APIs for developers.
              User-Friendly Interface for everyone else
            </Text>

            <Button
              component="a"
              size="lg"
              sx={{ alignSelf: "flex-start" }}
              href="https://github.com/baastronaut/baastronaut"
              target="_blank"
            >
              Get Started
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container>
        <Section>
          <Title order={2}>What is Baastronaut?</Title>

          <Text>
            Baastronaut is an open-source Airtable alternative built on{" "}
            <Anchor href="https://postgrest.org" target="_blank">
              {" "}
              PostgREST
            </Anchor>
            . It provides a spreadsheet-like user-friendly interface and allows
            non-technical users to easily create spreadsheets with data type
            validations, while providing flexible and comprehensive REST APIs
            for developers to work with.
          </Text>
        </Section>

        <Section>
          <Title order={2}>How It Works</Title>

          <Box
            component="iframe"
            src="https://drive.google.com/file/d/1jQNXy-_MQFk8XUm6SyXOz6BMv1U9bldT/preview"
            width="640"
            height="480"
            sx={{ border: "none" }}
            allow="autoplay"
          ></Box>

          <Text>
            In Baastronaut, there are projects and spreadsheets (or tables).
            These are mapped to Postgres’ schemas and, you guessed it, tables.
            This structure allows us to use PostgREST to generate REST APIs (and
            API docs that are in-synced) and also use Postgres database features
            to implement other cool features.
          </Text>
        </Section>
      </Container>

      <Card sx={{ width: "100%" }} radius={0}>
        <Container>
          <Section>
            <Title order={2}>Get Started Today</Title>

            <Button
              component="a"
              size="lg"
              sx={{ alignSelf: "flex-start" }}
              href="https://github.com/baastronaut/baastronaut"
              target="_blank"
            >
              Check out our Github Repo
            </Button>
          </Section>
        </Container>
      </Card>

      <footer>
        <Container>
          <Box py="xs">
            <Text size="sm">&copy; 2023 Baastronaut. All rights reserved</Text>
          </Box>
        </Container>
      </footer>
    </>
  );
}

function Section({ children }: PropsWithChildren) {
  return (
    <Box component="section" py="xl">
      <Stack>{children}</Stack>
    </Box>
  );
}
