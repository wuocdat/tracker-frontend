import { Box, Button, Group, Stack, Title } from "@mantine/core";
import { PAGES, mockContents } from "../constants";
import ActionsContainer from "../components/ActionsContainer";
import { IconPlus } from "@tabler/icons-react";
import StickyHeaderTable from "../components/StickyHeaderTable";

const MessageContent = () => {
    const data = mockContents;

    const header = (
        <tr>
            <th>№</th>
            <th style={{ textAlign: "center" }}>Content</th>
            <th style={{ textAlign: "center" }}>Actions</th>
        </tr>
    );

    const rows = data.map((row, index) => (
        <tr key={index}>
            <td width={50}>{index + 1}</td>
            <td>{row.text}</td>
            <td width={200}>
                <ActionsContainer onDelete={() => {}} onEdit={() => {}} />
            </td>
        </tr>
    ));

    return (
        <Stack h="100%" px="md" spacing="lg" sx={{ overflow: "hidden" }}>
            <Group position="apart">
                <Title order={2}>{PAGES.MESSAGE_CONTENT.label}</Title>
                <Button leftIcon={<IconPlus size="1rem" />}>Add</Button>
            </Group>
            <Box sx={{ flex: 1, overflow: "hidden" }}>
                <StickyHeaderTable rows={rows} header={header} />
            </Box>
        </Stack>
    );
};

export default MessageContent;
