import {
    ActionIcon,
    Box,
    Group,
    Stack,
    TextInput,
    Title,
    useMantineTheme,
} from "@mantine/core";
import { PAGES } from "../constants";
import StickyHeaderTable from "../components/StickyHeaderTable";
import PageHeader from "../components/PageHeader";
import { CenterTd, CenterTh } from "../components/CenterTh";
import CreateNewModal from "../components/CreateNewModal";
import { useDisclosure } from "@mantine/hooks";
import { MessageService } from "../services";
import { useEffect, useState } from "react";
import { MessageContent } from "../types";
import useError from "../hooks/useError";
import { notifications } from "@mantine/notifications";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import DeleteModal from "../components/DeleteModal";

const MessagesContent = () => {
    const theme = useMantineTheme();

    const [messages, setMessages] = useState<MessageContent[]>([]);
    const [messageId, setMessageId] = useState<string | null>();
    const [id, setId] = useState<string | null>();
    const [inputValue, setInputValue] = useState<string>("");

    const showError = useError();

    const [opened, { open, close }] = useDisclosure(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const fetchMessages = async () => {
        try {
            const { data } = await MessageService.getMessages();
            if (data) {
                setMessages(data);
            }
        } catch (error) {
            showError(error);
        }
    };

    const handleCreateMessage = async (params: string) => {
        try {
            await MessageService.createMessgage({ content: params });
            notifications.show({
                title: "Successfully!",
                message: "Successfully created messeage",
                color: "green",
            });
            fetchMessages();
        } catch (error) {
            showError(error);
        } finally {
            close();
        }
    };

    const handleUpdateMessage = async () => {
        try {
            await MessageService.updateMessage({
                content: inputValue,
                id: messageId || "",
            });
            setInputValue("");
            setMessageId("");
            notifications.show({
                title: "Successfully!",
                message: "Successfully updated messeage",
                color: "green",
            });
            fetchMessages();
        } catch (error) {
            showError(error);
        }
    };

    const handleDeleteMessage = async (params: string) => {
        try {
            await MessageService.deleteMessage(params);
            notifications.show({
                title: "Successfully!",
                message: "Successfully deleted messeage",
                color: "green",
            });
            fetchMessages();
        } catch (error) {
            showError(error);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleUpdateMessage();
        }
    };
    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const header = (
        <tr>
            <th>№</th>
            <CenterTh title="Content" />
            <CenterTh title="Created At" />
            <CenterTh title="Updated At" />
            <CenterTh title="Actions" />
        </tr>
    );

    const rows = messages.map((row, index) => (
        <tr key={index}>
            <td width={50}>{index + 1}</td>
            <td style={{ textAlign: "center" }}>
                {messageId === row.id ? (
                    <TextInput
                        autoFocus
                        placeholder="Enter new name"
                        value={inputValue}
                        onChange={(event) => {
                            setInputValue(event.target.value);
                        }}
                        onKeyDown={handleKeyDown}
                    />
                ) : (
                    row.content
                )}
            </td>
            <CenterTd width={200} title={row.created_at} />
            <CenterTd width={200} title={row.updated_at} />
            <td width={"200px"}>
                {
                    <Group position="center">
                        <ActionIcon
                            color={theme.primaryColor}
                            variant="transparent"
                            onClick={() => {
                                setMessageId(row.id);
                                setInputValue(row.content);
                            }}
                        >
                            <IconEdit size="1.125rem" />
                        </ActionIcon>
                        <ActionIcon
                            color="red"
                            variant="transparent"
                            onClick={() => {
                                setShowDeleteModal(true);
                                setId(row.id);
                                setInputValue(row.content);
                            }}
                        >
                            <IconTrash size="1.125rem" />
                        </ActionIcon>
                    </Group>
                }
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
                onClickCreateButton={handleCreateMessage}
                label="Add message:"
                title={<Title order={3}>Add new message</Title>}
            />

            <DeleteModal
                text={inputValue}
                opened={showDeleteModal}
                onClose={handleCloseDeleteModal}
                onDelete={() => {
                    handleCloseDeleteModal();
                    handleDeleteMessage(id || "");
                }}
            />
        </Stack>
    );
};

export default MessagesContent;
