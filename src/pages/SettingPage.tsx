import {
    ActionIcon,
    Box,
    Button,
    Flex,
    Group,
    MultiSelect,
    NumberInput,
    SelectItemProps,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import StickyHeaderTable from "../components/StickyHeaderTable";
import { getKeywordMockData, mockBot2, mockThreads } from "../constants";
import { CenterTd, CenterTh } from "../components/CenterTh";
import {
    IconPlayerPlayFilled,
    IconPlayerStopFilled,
} from "@tabler/icons-react";
import { forwardRef } from "react";

// interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
//     label: string;
//     uid: string;
// }

const BotItem = forwardRef<HTMLDivElement, SelectItemProps>(
    ({ label, value, ...others }, ref) => {
        return (
            <div ref={ref} {...others}>
                <Group position="apart">
                    <Text>{label}</Text>
                    <Text>{value}</Text>
                </Group>
            </div>
        );
    }
);

const SettingPage = () => {
    const tableData = mockThreads;

    const header = (
        <tr>
            <CenterTh title="№" />
            <CenterTh title="Thread Name" />
            <CenterTh title="Status" />
            <CenterTh title="Created At" />
            <CenterTh title="Updated At" />
            <CenterTh title="Action" />
        </tr>
    );

    const rows = tableData.map((row, index) => (
        <tr key={index}>
            <CenterTd width={50} title={index + 1} />
            <CenterTd title={row.name} />
            <CenterTd title={row.status} />
            <CenterTd width={300} title={row.createdAt} />
            <CenterTd width={300} title={row.updatedAt} />
            <td width={200}>
                <ActionIcon m="auto" color="red" variant="transparent">
                    <IconPlayerStopFilled size="1.125rem" />
                </ActionIcon>
            </td>
        </tr>
    ));

    return (
        <Stack h="100%" px="md" spacing="lg" bg="white">
            <Flex direction="row" align="start" gap="lg" mt="xs">
                <Group grow align="start" sx={{ flex: 1 }}>
                    <MultiSelect
                        itemComponent={BotItem}
                        data={mockBot2.map((bot) => ({
                            value: bot.uui,
                            label: bot.username,
                        }))}
                        label={<Title order={6}>Chọn tài khoản:</Title>}
                        placeholder="Pick all that you like"
                        searchable
                        clearable
                        nothingFound="Nothing Found"
                        maxDropdownHeight={400}
                    />
                    <MultiSelect
                        itemComponent={BotItem}
                        data={mockBot2.map((bot) => ({
                            value: bot.uui,
                            label: bot.username,
                        }))}
                        label={<Title order={6}>Chọn trang:</Title>}
                        placeholder="Pick all that you like"
                        searchable
                        clearable
                        nothingFound="Nothing Found"
                        maxDropdownHeight={400}
                    />
                    <MultiSelect
                        data={getKeywordMockData().map((item) => ({
                            value: item.id,
                            label: item.text,
                        }))}
                        label={<Title order={6}>Chọn từ khóa:</Title>}
                        placeholder="Pick all that you like"
                        searchable
                        clearable
                        nothingFound="Nothing Found"
                        maxDropdownHeight={400}
                    />
                </Group>
                <Group align="end">
                    <NumberInput
                        defaultValue={3}
                        placeholder="Your age"
                        label={<Title order={6}>Chọn thời gian quét:</Title>}
                    />

                    <Button miw={150}>Submit</Button>
                </Group>
            </Flex>

            <Box mt="sm" sx={{ flex: 1, overflow: "hidden" }}>
                <StickyHeaderTable
                    withColumnBorders
                    rows={rows}
                    header={header}
                />
            </Box>

            <Group>
                <Button
                    miw={200}
                    color="green"
                    variant="light"
                    leftIcon={<IconPlayerPlayFilled />}
                >
                    Start
                </Button>
                <Button
                    miw={200}
                    color="red"
                    variant="light"
                    leftIcon={<IconPlayerStopFilled />}
                >
                    Start
                </Button>
            </Group>
        </Stack>
    );
};

export default SettingPage;
