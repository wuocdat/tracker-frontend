import { ActionIcon, Box, Stack, Title } from "@mantine/core";
import { PAGES, mockGroupData } from "../constants";
import StickyHeaderTable from "../components/StickyHeaderTable";
import PageHeader from "../components/PageHeader";
import { CenterTd, CenterTh } from "../components/CenterTh";
import { IconCircleCheckFilled, IconTrash } from "@tabler/icons-react";
import CreateNewModal from "../components/CreateNewModal";
import { useDisclosure } from "@mantine/hooks";
import { PageService } from "../services";
import { useEffect, useState } from "react";
import { GroupType } from "../types";
import useError from "../hooks/useError";
import { notifications } from "@mantine/notifications";
import DeleteModal from "../components/DeleteModal";

const GroupPage = () => {
  const [pages, setPages] = useState<GroupType[]>([]);
  const [id, setId] = useState<string | null>();
  const [opened, { open, close }] = useDisclosure(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const showError = useError();

  const fetchGroup = async () => {
    try {
      const { data } = await PageService.getPages();
      if (data) {
        setPages(data);
      }
    } catch (error) {
      showError(error);
    }
  };

  const handleCreatePage = async (params: string) => {
    try {
      await PageService.createPage({ id: params });
      notifications.show({
        title: "Successfully!",
        message: "Successfully created messeage",
        color: "green",
      });
      fetchGroup();
    } catch (error) {
      showError(error);
    } finally {
      close();
    }
  };

  const handleDeletePage = async (params: string) => {
    try {
      await PageService.deletePage(params);
      notifications.show({
        title: "Successfully!",
        message: "Successfully deleted messeage",
        color: "green",
      });
      fetchGroup();
    } catch (error) {
      showError(error);
    }
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };
  useEffect(() => {
    fetchGroup();
  }, []);

  const header = (
    <tr>
      <th>№</th>
      <th>UUI</th>
      <th>Type</th>
      <CenterTh title="Monitoring status" />
      <CenterTh title="Created At" />
      <CenterTh title="Updated At" />
      <CenterTh title="Actions" />
    </tr>
  );

  const rows = pages.map((row, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{row.id}</td>
      <td>{row.type}</td>
      <CenterTd
        title={
          row.monitoring_status && (
            <IconCircleCheckFilled style={{ color: "greenyellow" }} />
          )
        }
      />
      <CenterTd width={200} title={row.created_at} />
      <CenterTd width={200} title={row.updated_at} />
      <td width={100}>
        <ActionIcon
          m="auto"
          color="red"
          variant="transparent"
          onClick={() => {
            setShowDeleteModal(true);
            setId(row.id);
          }}
        >
          <IconTrash size="1.125rem" />
        </ActionIcon>
      </td>
    </tr>
  ));

  return (
    <Stack h="100%" px="md" spacing="lg" sx={{ overflow: "hidden" }}>
      <PageHeader title={PAGES.FANPAGE_MANAGEMENT.label} onClick={open} />
      <Box sx={{ flex: 1, overflowY: "hidden" }}>
        <StickyHeaderTable withColumnBorders rows={rows} header={header} />
      </Box>
      <CreateNewModal
        opened={opened}
        onClose={close}
        onClickCreateButton={handleCreatePage}
        label="Add uid:"
        placeholder="Each line corresponds to an uid"
        title={<Title order={3}>Add new fanpage</Title>}
      />
      <DeleteModal
        text={id || ""}
        opened={showDeleteModal}
        onClose={handleCloseDeleteModal}
        onDelete={() => {
          handleCloseDeleteModal();
          handleDeletePage(id || "");
        }}
      />
    </Stack>
  );
};

export default GroupPage;
