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

import { PAGES } from "../constants";
import StickyHeaderTable from "../components/StickyHeaderTable";
import PageHeader from "../components/PageHeader";
import { CenterTd, CenterTh } from "../components/CenterTh";
import CreateNewModal from "../components/CreateNewModal";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { KeyWord } from "../types";
import useError from "../hooks/useError";
import { KeywordService } from "../services";
import { formatTime } from "../utils";

const KeyWordPage = () => {
    const [keywords, setKeywords] = useState<KeyWord[]>([]);

    const theme = useMantineTheme();
    const showError = useError();

    const [opened, { open, close }] = useDisclosure(false);
    const [keywordId, setKeywordId] = useState<string>("");

    const fetchKeywords = async () => {
        try {
            const { data } = await KeywordService.getKeywords();

            if (data) {
                setKeywords(data);
            }
        } catch (error) {
            showError(error);
        }
    };

    useEffect(() => {
        fetchKeywords();
    }, []);

    const header = (
        <tr>
            <CenterTh title="№" />
            <CenterTh title="KeyWord" />
            <CenterTh title="Created At" />
            <CenterTh title="Updated At" />
            <CenterTh title="Actions" />
        </tr>
    );

    const rows = keywords.map((row, index) => (
        <tr key={row._id}>
            <CenterTd width={50} title={index + 1} />
            <td style={{ textAlign: "center" }}>
                {keywordId === row._id ? (
                    <TextInput
                        placeholder="Enter new name"
                        defaultValue={row.text}
                    />
                ) : (
                    row.text
                )}
            </td>
            <CenterTd width={300} title={formatTime(row.created_at)} />
            <CenterTd width={300} title={formatTime(row.updated_at)} />
            <td width={"200px"}>
                {
                    <Group position="center">
                        <ActionIcon
                            color={theme.primaryColor}
                            variant="transparent"
                            onClick={() => {
                                setKeywordId(row._id);
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
