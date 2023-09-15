import {
  Box,
  Button,
  Modal,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import ActionsContainer from "../components/ActionsContainer";
import { PAGES, mockBot } from "../constants";
import StickyHeaderTable from "../components/StickyHeaderTable";
import PageHeader from "../components/PageHeader";
import { CenterTd, CenterTh } from "../components/CenterTh";
import { useDisclosure } from "@mantine/hooks";
import { isNotEmpty, useForm } from "@mantine/form";
import useError from "../hooks/useError";
import { BotService, PageService } from "../services";
import { notifications } from "@mantine/notifications";
import { Bot } from "../types";
import { useEffect, useState } from "react";
import DeleteModal from "../components/DeleteModal";
import { IconCircleCheckFilled } from "@tabler/icons-react";

const BotPage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [updateOpened, { open: updateOpen, close: updateClose }] =
    useDisclosure(false);
  const [deleteOpened, { open: deleteOpen, close: deleteClose }] =
    useDisclosure(false);

  const [bots, setBots] = useState<Bot[]>([]);
  const [deleteBotId, setDeleteBotId] = useState<string | null>();

  type FormValues = typeof form.values;
  const showError = useError();

  const form = useForm({
    initialValues: { id: "", password: "", fa_code: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      id: isNotEmpty("Enter id"),
      password: isNotEmpty("Enter password"),
      fa_code: isNotEmpty("Enter fa_code"),
    },
  });

  const updateForm = useForm({
    initialValues: {
      id: "",
      password: "",
      fa_code: "",
    },

    validate: {
      id: isNotEmpty("Enter id"),
      password: isNotEmpty("Enter password"),
      fa_code: isNotEmpty("Enter fa_code"),
    },
  });

  const fetchBots = async () => {
    try {
      const { data } = await BotService.getBots();
      if (data) {
        setBots(data);
      }
    } catch (error) {
      showError(error);
    }
  };

  const handleDeleteBot = async () => {
    if (deleteBotId) {
      try {
        await BotService.deleteBot(deleteBotId);

        notifications.show({
          title: "Successfully!",
          message: "Successfully deleted bot",
          color: "green",
        });
        fetchBots();
      } catch (error) {
        showError(error);
      } finally {
        deleteClose();
      }
    }
  };

  const handleOpenUpdateForm = (bot: Bot) => {
    updateForm.setValues({
      id: bot.id,
      password: bot.password,
      fa_code: bot.fa_code,
    });
    updateOpen();
  };

  const handleUpdateBot = async (values: FormValues) => {
    try {
      await BotService.updateBot(values);
      notifications.show({
        title: "Successfully!",
        message: "Successfully updated bot",
        color: "green",
      });
      fetchBots();
    } catch (error) {
      showError(error);
    } finally {
      updateClose();
    }
  };

  const handleCreateBot = async (values: FormValues) => {
    try {
      await BotService.createBot(values);
      notifications.show({
        title: "Successfully!",
        message: "Successfully created bot",
        color: "green",
      });
      fetchBots();
    } catch (error) {
      showError(error);
    } finally {
      form.setValues({ id: "", password: "", fa_code: "" });
      close();
    }
  };

  useEffect(() => {
    fetchBots();
  }, []);

  const header = (
    <tr>
      <th>№</th>
      <th>UID</th>
      <CenterTh title="Username" />
      <CenterTh title="Pass" />
      <CenterTh title="2FA" />
      <CenterTh title="Profile" />
      <CenterTh title="Status" />
      <CenterTh title="Logged" />
      {/* <CenterTh title="Created At" /> */}
      <CenterTh title="Updated At" />
      <CenterTh title="Actions" />
    </tr>
  );

  const rows = bots.map((row, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{row.id}</td>
      <CenterTd title={row.name} />
      <CenterTd title={row.password} />
      <td>
        <Box m="auto" w={200}>
          <Text ta="center" truncate>
            {row.fa_code}
          </Text>
        </Box>
      </td>
      <CenterTd title={row.profile} />
      <CenterTd title={row.status} />
      <CenterTd
        title={
          row.is_logged_in && (
            <IconCircleCheckFilled style={{ color: "greenyellow" }} />
          )
        }
      />
      {/* <CenterTd title={row.createdAt} /> */}
      <CenterTd title={row.updated_at} />
      <td>
        <ActionsContainer
          onEdit={() => {
            handleOpenUpdateForm(row);
          }}
          onDelete={() => {
            setDeleteBotId(row.id);
            deleteOpen();
          }}
        />
      </td>
    </tr>
  ));

  return (
    <Stack h="100%" px="md" spacing="lg" sx={{ overflowY: "hidden" }}>
      <PageHeader title={PAGES.BOT_MANAGEMENT.label} onClick={open} />
      <Box sx={{ flex: 1, overflowY: "hidden" }}>
        <StickyHeaderTable withColumnBorders rows={rows} header={header} />
      </Box>
      <Modal
        padding="lg"
        opened={opened}
        onClose={close}
        title={<Title order={3}>Add new account</Title>}
      >
        <form onSubmit={form.onSubmit(handleCreateBot)}>
          <Stack>
            <TextInput
              placeholder="Enter uid of account"
              label="UID"
              withAsterisk
              {...form.getInputProps("id")}
            />
            <TextInput
              placeholder="Enter password"
              label="Password"
              withAsterisk
              {...form.getInputProps("password")}
            />
            <TextInput
              placeholder="Enter 2fa"
              label="2FA Code"
              withAsterisk
              {...form.getInputProps("fa_code")}
            />
            <Button mt="lg" type="submit">
              Add
            </Button>
          </Stack>
        </form>
      </Modal>

      <Modal
        padding="lg"
        opened={updateOpened}
        onClose={updateClose}
        title={<Title order={3}>Update account</Title>}
      >
        <form onSubmit={updateForm.onSubmit(handleUpdateBot)}>
          <Stack>
            <TextInput
              placeholder="Enter uid of account"
              label="UID"
              withAsterisk
              {...updateForm.getInputProps("id")}
            />
            <TextInput
              placeholder="Enter password"
              label="Password"
              withAsterisk
              {...updateForm.getInputProps("password")}
            />
            <TextInput
              placeholder="Enter 2fa"
              label="2FA Code"
              withAsterisk
              {...updateForm.getInputProps("fa_code")}
            />
            <Button mt="lg" type="submit">
              Add
            </Button>
          </Stack>
        </form>
      </Modal>
      <DeleteModal
        opened={deleteOpened}
        onClose={deleteClose}
        text="this bot"
        onDelete={handleDeleteBot}
      />
    </Stack>
  );
};

export default BotPage;
