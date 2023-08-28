import {
    Button,
    Modal,
    ModalProps,
    Stack,
    Textarea,
    Title,
} from "@mantine/core";

interface CreateNewModalProps extends ModalProps {
    label: string;
    rows?: number;
    placeholder?: string;
}

const CreateNewModal = ({
    label,
    rows,
    placeholder,
    ...props
}: CreateNewModalProps) => {
    return (
        <Modal padding="lg" {...props}>
            <Stack spacing="lg">
                <Textarea
                    label={<Title order={6}>{label}</Title>}
                    placeholder={
                        placeholder || "Each line corresponds to an item"
                    }
                    autosize
                    minRows={rows || 3}
                    maxRows={rows || 5}
                />
                <Button>Create</Button>
            </Stack>
        </Modal>
    );
};

export default CreateNewModal;
