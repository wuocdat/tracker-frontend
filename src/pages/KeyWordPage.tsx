import {
    ActionIcon,
    Box,
    Button,
    Group,
    Stack,
    Title,
    useMantineTheme,
} from "@mantine/core";
import { PAGES, getKeywordMockData } from "../constants";
import { IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";
import StickyHeaderTable from "../components/StickyHeaderTable";

const KeyWordPage = () => {
    const data = getKeywordMockData();

    const theme = useMantineTheme();

    const header = (
        <tr>
            <th>№</th>
            <th>KeyWord</th>
            <th style={{ textAlign: "center" }}>Actions</th>
        </tr>
    );

    const rows = data.map((row) => (
        <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.text}</td>
            <td width={"200px"}>
                {
                    <Group position="center">
                        <ActionIcon
                            color={theme.primaryColor}
                            variant="transparent"
                        >
                            <IconEdit size="1.125rem" />
                        </ActionIcon>
                        <ActionIcon color="red" variant="transparent">
                            <IconTrash size="1.125rem" />
                        </ActionIcon>
                    </Group>
                }
            </td>
        </tr>
    ));

    return (
        <Stack h="100%" px="md" spacing="lg" sx={{ overflow: "hidden" }}>
            <Group position="apart">
                <Title order={2}>{PAGES.KEY_WORKS.label}</Title>
                <Button leftIcon={<IconPlus size="1rem" />}>Add</Button>
            </Group>
            <Box sx={{ flex: 1, overflow: "hidden" }}>
                <StickyHeaderTable rows={rows} header={header} />
            </Box>
        </Stack>
    );
};

export default KeyWordPage;
