import { ActionIcon, Group, useMantineTheme } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";

interface ActionsContainerProps {
    onEdit: () => void;
    onDelete: () => void;
}

const ActionsContainer = ({ onDelete, onEdit }: ActionsContainerProps) => {
    const theme = useMantineTheme();

    return (
        <Group position="center">
            <ActionIcon
                color={theme.primaryColor}
                variant="transparent"
                onClick={onEdit}
            >
                <IconEdit size="1.125rem" />
            </ActionIcon>
            <ActionIcon color="red" variant="transparent" onClick={onDelete}>
                <IconTrash size="1.125rem" />
            </ActionIcon>
        </Group>
    );
};

export default ActionsContainer;
