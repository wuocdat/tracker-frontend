import { Box, Stack } from "@mantine/core";
import StickyHeaderTable from "../components/StickyHeaderTable";
import { mockUsers } from "../constants";
import { CenterTd, CenterTh } from "../components/CenterTh";

const UserPage = () => {
    const data = mockUsers;

    const header = (
        <tr>
            <CenterTh title="№" />
            <CenterTh title="UID" />
            <CenterTh title="Username" />
            <CenterTh title="Mess Number" />
            <CenterTh title="Latest Sending" />
            <CenterTh title="Created At" />
            <CenterTh title="Updated At" />
        </tr>
    );

    const rows = data.map((row, index) => (
        <tr key={index}>
            <CenterTd width={50} title={index + 1} />
            <CenterTd title={row.uid} />
            <CenterTd title={row.username} />
            <CenterTd title={row.mess_number} />
            <CenterTd title={row.latestMessageSentTime} />
            <CenterTd width={300} title={row.createdAt} />
            <CenterTd width={300} title={row.updatedAt} />
        </tr>
    ));

    return (
        <Stack h="100%" px="md" spacing="lg" sx={{ overflow: "hidden" }}>
            <Box sx={{ flex: 1, overflow: "hidden" }}>
                <StickyHeaderTable
                    withColumnBorders
                    rows={rows}
                    header={header}
                />
            </Box>
        </Stack>
    );
};

export default UserPage;
