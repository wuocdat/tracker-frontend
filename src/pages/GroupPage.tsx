import { Box, Button, Group, Stack, Title } from "@mantine/core";
import ActionsContainer from "../components/ActionsContainer";
import { PAGES, mockGroupData } from "../constants";
import { IconPlus } from "@tabler/icons-react";
import StickyHeaderTable from "../components/StickyHeaderTable";

const GroupPage = () => {
    const data = mockGroupData;

    const header = (
        <tr>
            <th>№</th>
            <th>UUI</th>
            <th>Type</th>
            <th style={{ textAlign: "center" }}>Actions</th>
        </tr>
    );

    const rows = data.map((row, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.uid}</td>
            <td>{row.type}</td>
            <td width={"200px"}>
                <ActionsContainer onDelete={() => {}} onEdit={() => {}} />{" "}
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

export default GroupPage;
