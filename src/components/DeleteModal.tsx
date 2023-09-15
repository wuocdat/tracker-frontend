import { Button, Group, Modal, ModalProps, Stack, Title } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

interface DeleteModalProps extends ModalProps {
  text: string;
  onDelete: () => void;
}
const DeleteModal = ({ text, onDelete, ...props }: DeleteModalProps) => {
  return (
    <Modal centered withCloseButton={false} {...props}>
      <Stack spacing="lg">
        <Title ta="center" order={3} px="lg">
          {`Are you sure you want to delete ${text} ?`}
        </Title>
        <Group position="center">
          <Button variant="subtle" color="gray" onClick={props.onClose}>
            Cancel
          </Button>
          <Button
            leftIcon={<IconTrash size={20} />}
            onClick={onDelete}
            color="red"
          >
            Delete
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
export default DeleteModal;
