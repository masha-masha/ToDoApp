import { Stack, Title, Text, Progress } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface TodoHeaderProps {
 total: number;
 completed: number;
}
export const TodoHeader = ({ total, completed }: TodoHeaderProps) => {
 const { t } = useTranslation();
 const progress = total > 0 ? (completed / total) * 100 : 0;

 return (
  <Stack gap={5}>
   <Title order={2} c="blue.7">
    {t("title")}
   </Title>
   <Text size="sm" c="dimmed">
    {t("itemsLeft", { completed, total })}
   </Text>
   <Progress
    value={progress}
    size="sm"
    radius="xl"
    animated={progress === 100}
   />
  </Stack>
 );
};
