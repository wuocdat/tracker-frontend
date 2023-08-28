import {
    ActionIcon,
    Box,
    Group,
    Stack,
    TextInput,
    Title,
    useMantineTheme,
} from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";

import { PAGES, getKeywordMockData } from "../constants";
import StickyHeaderTable from "../components/StickyHeaderTable";
import PageHeader from "../components/PageHeader";
import { CenterTd, CenterTh } from "../components/CenterTh";
import CreateNewModal from "../components/CreateNewModal";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const KeyWordPage = () => {
    const data = getKeywordMockData();

    const theme = useMantineTheme();

    const [opened, { open, close }] = useDisclosure(false);
    const [keywordId, setKeywordId] = useState<string>("");

    const header = (
        <tr>
            <CenterTh title="№" />
            <CenterTh title="KeyWord" />
            <CenterTh title="Created At" />
            <CenterTh title="Updated At" />
            <CenterTh title="Actions" />
        </tr>
    );

    const rows = data.map((row) => (
        <tr key={row.id}>
            <CenterTd width={50} title={row.id} />
            <td style={{ textAlign: "center" }}>
                {keywordId === row.id ? (
                    <TextInput
                        placeholder="Enter new name"
                        defaultValue={row.text}
                    />
                ) : (
                    row.text
                )}
            </td>
            <CenterTd width={300} title={row.createdAt} />
            <CenterTd width={300} title={row.updatedAt} />
            <td width={"200px"}>
                {
                    <Group position="center">
                        <ActionIcon
                            color={theme.primaryColor}
                            variant="transparent"
                            onClick={() => {
                                setKeywordId(row.id);
                            }}
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
            <PageHeader title={PAGES.KEY_WORKS.label} onClick={open} />
            <Box sx={{ flex: 1, overflow: "hidden" }}>
                <StickyHeaderTable
                    withColumnBorders
                    rows={rows}
                    header={header}
                />
            </Box>
            <CreateNewModal
                opened={opened}
                onClose={close}
                label="Add keywords:"
                title={<Title order={3}>Create new keywords</Title>}
            />
        </Stack>
    );
};

export default KeyWordPage;
