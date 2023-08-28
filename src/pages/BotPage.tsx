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

const BotPage = () => {
    const data = mockBot;

    const [opened, { open, close }] = useDisclosure(false);

    const header = (
        <tr>
            <th>№</th>
            <th>UID</th>
            <CenterTh title="Cookie" />
            <CenterTh title="Username" />
            <CenterTh title="Pass" />
            <CenterTh title="2FA" />
            {/* <CenterTh title="Profile" /> */}
            <CenterTh title="Status" />
            {/* <CenterTh title="Created At" /> */}
            <CenterTh title="Updated At" />
            <CenterTh title="Actions" />
        </tr>
    );

    const rows = data.map((row, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.uui}</td>
            <td>
                <Box m="auto" w={300}>
                    <Text truncate>{row.cookie}</Text>
                </Box>
            </td>
            <CenterTd title={row.username} />
            <CenterTd title={row.pass} />
            <td>
                <Box m="auto" w={200}>
                    <Text truncate>{row._2fa}</Text>
                </Box>
            </td>
            {/* <td>
                <Box m="auto" w={200}>
                    <Text truncate>{row.profile}</Text>
                </Box>
            </td> */}
            <CenterTd title={row.status} />
            {/* <CenterTd title={row.createdAt} /> */}
            <CenterTd title={row.updatedAt} />
            <td>
                <ActionsContainer onDelete={() => {}} onEdit={() => {}} />
            </td>
        </tr>
    ));

    return (
        <Stack h="100%" px="md" spacing="lg" sx={{ overflowY: "hidden" }}>
            <PageHeader title={PAGES.BOT_MANAGEMENT.label} onClick={open} />
            <Box sx={{ flex: 1, overflowY: "hidden" }}>
                <StickyHeaderTable
                    withColumnBorders
                    rows={rows}
                    header={header}
                />
            </Box>
            <Modal
                padding="lg"
                opened={opened}
                onClose={close}
                title={<Title order={3}>Add new account</Title>}
            >
                <Stack>
                    <TextInput
                        placeholder="Enter uid of account"
                        label="UID"
                        withAsterisk
                    />
                    <TextInput
                        placeholder="Enter password"
                        label="Password"
                        withAsterisk
                    />
                    <TextInput
                        placeholder="Enter 2fa"
                        label="2FA Code"
                        withAsterisk
                    />
                    <Button mt="lg">Add</Button>
                </Stack>
            </Modal>
        </Stack>
    );
};

export default BotPage;
