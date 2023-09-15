import {
  Button,
  Modal,
  ModalProps,
  Stack,
  Textarea,
  Title,
} from "@mantine/core";
import { useState } from "react";

interface CreateNewModalProps extends ModalProps {
  label: string;
  rows?: number;
  placeholder?: string;
  onClickCreateButton: (params: string) => void;
}

const CreateNewModal = ({
  label,
  rows,
  placeholder,
  onClickCreateButton,
  ...props
}: CreateNewModalProps) => {
  const [value, setValue] = useState("");

  const handleCreate = () => {
    onClickCreateButton(value);
    setValue("");
  };

  return (
    <Modal padding="lg" {...props}>
      <Stack spacing="lg">
        <Textarea
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          label={<Title order={6}>{label}</Title>}
          placeholder={placeholder || "Each line corresponds to an item"}
          autosize
          minRows={rows || 3}
          maxRows={rows || 5}
        />
        <Button onClick={handleCreate}>Create</Button>
      </Stack>
    </Modal>
  );
};

export default CreateNewModal;
