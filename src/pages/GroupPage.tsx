import { ActionIcon, Box, Stack, Title } from "@mantine/core";
import { PAGES, mockGroupData } from "../constants";
import StickyHeaderTable from "../components/StickyHeaderTable";
import PageHeader from "../components/PageHeader";
import { CenterTd, CenterTh } from "../components/CenterTh";
import { IconTrash } from "@tabler/icons-react";
import CreateNewModal from "../components/CreateNewModal";
import { useDisclosure } from "@mantine/hooks";

const GroupPage = () => {
    const data = mockGroupData;

    const [opened, { open, close }] = useDisclosure(false);

    const header = (
        <tr>
            <th>№</th>
            <th>UUI</th>
            <th>Type</th>
            <CenterTh title="Created At" />
            <CenterTh title="Updated At" />
            <CenterTh title="Actions" />
        </tr>
    );

    const rows = data.map((row, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.uid}</td>
            <td>{row.type}</td>
            <CenterTd width={200} title={row.createdAt} />
            <CenterTd width={200} title={row.updatedAt} />
            <td width={100}>
                <ActionIcon m="auto" color="red" variant="transparent">
                    <IconTrash size="1.125rem" />
                </ActionIcon>
            </td>
        </tr>
    ));

    return (
        <Stack h="100%" px="md" spacing="lg" sx={{ overflow: "hidden" }}>
            <PageHeader title={PAGES.FANPAGE_MANAGEMENT.label} onClick={open} />
            <Box sx={{ flex: 1, overflowY: "hidden" }}>
                <StickyHeaderTable
                    withColumnBorders
                    rows={rows}
                    header={header}
                />
            </Box>
            <CreateNewModal
                opened={opened}
                onClose={close}
                label="Add uid:"
                placeholder="Each line corresponds to an uid"
                title={<Title order={3}>Add new fanpage</Title>}
            />
        </Stack>
    );
};

export default GroupPage;
