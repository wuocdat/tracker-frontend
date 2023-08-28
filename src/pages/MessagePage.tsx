import { Box, Stack, Title } from "@mantine/core";
import { PAGES, mockContents } from "../constants";
import ActionsContainer from "../components/ActionsContainer";
import StickyHeaderTable from "../components/StickyHeaderTable";
import PageHeader from "../components/PageHeader";
import { CenterTd, CenterTh } from "../components/CenterTh";
import CreateNewModal from "../components/CreateNewModal";
import { useDisclosure } from "@mantine/hooks";

const MessageContent = () => {
    const data = mockContents;

    const [opened, { open, close }] = useDisclosure(false);

    const header = (
        <tr>
            <th>№</th>
            <CenterTh title="Content" />
            <CenterTh title="Actions" />
            <CenterTh title="Created At" />
            <CenterTh title="Updated At" />
        </tr>
    );

    const rows = data.map((row, index) => (
        <tr key={index}>
            <td width={50}>{index + 1}</td>
            <td>{row.text}</td>
            <CenterTd width={200} title={row.createdAt} />
            <CenterTd width={200} title={row.updatedAt} />
            <td width={200}>
                <ActionsContainer onDelete={() => {}} onEdit={() => {}} />
            </td>
        </tr>
    ));

    return (
        <Stack h="100%" px="md" spacing="lg" sx={{ overflow: "hidden" }}>
            <PageHeader title={PAGES.MESSAGE_CONTENT.label} onClick={open} />
            <Box sx={{ flex: 1, overflow: "hidden" }}>
                <StickyHeaderTable
                    withColumnBorders
                    rows={rows}
                    header={header}
                />
            </Box>
            <CreateNewModal
                size="lg"
                opened={opened}
                onClose={close}
                label="Add message:"
                title={<Title order={3}>Add new message</Title>}
            />
        </Stack>
    );
};

export default MessageContent;
