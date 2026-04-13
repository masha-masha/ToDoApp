import { Container, Group, Text, Anchor, Divider, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { IconBrandGithub } from "@tabler/icons-react";

export function Footer() {
 const { t } = useTranslation();

 return (
  <Container size="xs" mt="xl" pb="md">
   <Divider mb="sm" variant="dashed" />
   <Stack gap="xs">
    <Group justify="space-between">
     <Text size="sm" c="dimmed">
      © {new Date().getFullYear()} — {t("footerMadeBy")}
     </Text>

     <Group gap="xs">
      <Anchor
       href="https://github.com/masha-masha/ToDoApp"
       target="_blank"
       c="dimmed"
       size="sm"
       display="flex"
       style={{ alignItems: "center", gap: "4px" }}
      >
       <IconBrandGithub size={16} />
       {t("footerSourceCode")}
      </Anchor>
     </Group>
    </Group>
   </Stack>
  </Container>
 );
}