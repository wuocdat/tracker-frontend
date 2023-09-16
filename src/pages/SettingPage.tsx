import {
    ActionIcon,
    Box,
    Button,
    Flex,
    Group,
    LoadingOverlay,
    MultiSelect,
    NumberInput,
    SelectItemProps,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import StickyHeaderTable from "../components/StickyHeaderTable";
import { CenterTd, CenterTh } from "../components/CenterTh";
import {
    IconPlayerPlayFilled,
    IconPlayerStopFilled,
} from "@tabler/icons-react";
import { forwardRef, useEffect, useState } from "react";
import { Bot, GroupType, KeyWord, SettingsType, Thread } from "../types";
import {
    BotService,
    KeywordService,
    PageService,
    SettingsService,
} from "../services";
import useError from "../hooks/useError";
import { ECommand } from "../types/enums";
import { notifications } from "@mantine/notifications";

// interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
//     label: string;
//     uid: string;
// }

const BotItem = forwardRef<HTMLDivElement, SelectItemProps>(
    ({ label, value, ...others }, ref) => {
        return (
            <div ref={ref} {...others}>
                <Group position="apart">
                    <Text>{value}</Text>
                    <Text>{label != value && label}</Text>
                </Group>
            </div>
        );
    }
);

const SettingPage = () => {
    const [bots, setBots] = useState<Bot[]>([]);
    const [pages, setPages] = useState<GroupType[]>([]);
    const [keywords, setKeywords] = useState<KeyWord[]>([]);
    const [settings, setSettings] = useState<SettingsType | null>();
    const [processes, setProcesses] = useState<Thread[]>([]);

    const [selectedPageIds, setPageIds] = useState<string[]>([]);
    const [selectedBotIds, setBotIds] = useState<string[]>([]);
    const [selectedKeywordIds, setKeywordIds] = useState<string[]>([]);
    const [timeInterval, setTimeInterval] = useState<number | "">(1);

    const [commandLoading, setCommandLoading] = useState<boolean>(false);

    const showError = useError();

    const fetchSettings = async () => {
        try {
            const { data } = await SettingsService.getSettings();

            if (data) {
                setSettings(data);
            }
        } catch (error) {
            showError(error);
        }
    };

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

    const fetchPages = async () => {
        try {
            const { data } = await PageService.getPages();
            if (data) {
                setPages(data);
            }
        } catch (error) {
            showError(error);
        }
    };

    const fetchKeywords = async () => {
        try {
            const { data } = await KeywordService.getKeywords();

            if (data) {
                setKeywords(data);
            }
        } catch (error) {
            showError(error);
        }
    };

    const handleStartProcess = async () => {
        setCommandLoading(true);
        try {
            if (!!settings && settings.command == ECommand.STOP) {
                await SettingsService.putCommand(ECommand.RUN);
                fetchSettings();
            }
        } catch (error) {
            showError(error);
        } finally {
            setCommandLoading(false);
        }
    };

    const handleStopProcess = async () => {
        setCommandLoading(true);
        try {
            if (!!settings && settings.command == ECommand.RUN) {
                await SettingsService.putCommand(ECommand.STOP);
                fetchSettings();
            }
        } catch (error) {
            showError(error);
        } finally {
            setCommandLoading(false);
        }
    };

    const handleSubmitSettings = async () => {
        setCommandLoading(true);
        try {
            if (!settings || settings.command == ECommand.STOP) {
                if (
                    selectedBotIds.length != 0 &&
                    selectedKeywordIds.length != 0 &&
                    selectedPageIds.length != 0 &&
                    !!timeInterval
                ) {
                    await SettingsService.postNewSetting({
                        bots: selectedBotIds,
                        pages: selectedPageIds,
                        keywords: selectedKeywordIds,
                        time_interval: timeInterval,
                    });
                    setBotIds([]);
                    setPageIds([]);
                    setKeywordIds([]);
                    setTimeInterval(1);
                    notifications.show({
                        title: "Successfully!",
                        message: "Successfully submit command",
                        color: "green",
                    });
                    fetchSettings();
                }
            }
        } catch (error) {
            showError(error);
        } finally {
            setCommandLoading(false);
        }
    };

    useEffect(() => {
        fetchKeywords();
        fetchPages();
        fetchBots();
        fetchSettings();
    }, []);

    const header = (
        <tr>
            <CenterTh title="№" />
            <CenterTh title="Name" />
            <CenterTh title="Status" />
            <CenterTh title="Created At" />
            <CenterTh title="Updated At" />
            <CenterTh title="Action" />
        </tr>
    );

    const rows = processes.map((row, index) => (
        <tr key={index}>
            <CenterTd width={50} title={index + 1} />
            <CenterTd title={row.name} />
            <CenterTd title={row.status} />
            <CenterTd width={300} title={row.created_at} />
            <CenterTd width={300} title={row.created_at} />
            <td width={200}>
                <ActionIcon m="auto" color="red" variant="transparent">
                    <IconPlayerStopFilled size="1.125rem" />
                </ActionIcon>
            </td>
        </tr>
    ));

    return (
        <Stack h="100%" px="md" spacing="lg" bg="white" pos="relative">
            <LoadingOverlay visible={commandLoading} />
            <Flex direction="row" align="start" gap="lg" mt="xs">
                <Group grow align="start" sx={{ flex: 1 }}>
                    <MultiSelect
                        itemComponent={BotItem}
                        data={bots.map((bot) => ({
                            value: bot.id,
                            label: bot.name || bot.id,
                        }))}
                        value={selectedBotIds}
                        onChange={setBotIds}
                        label={<Title order={6}>Chọn tài khoản:</Title>}
                        placeholder="Pick all that you like"
                        searchable
                        clearable
                        nothingFound="Nothing Found"
                        maxDropdownHeight={400}
                    />
                    <MultiSelect
                        itemComponent={BotItem}
                        data={pages.map((page) => ({
                            value: page.id,
                            label: page.name || page.id,
                        }))}
                        value={selectedPageIds}
                        onChange={setPageIds}
                        label={<Title order={6}>Chọn trang:</Title>}
                        placeholder="Pick all that you like"
                        searchable
                        clearable
                        nothingFound="Nothing Found"
                        maxDropdownHeight={400}
                    />
                    <MultiSelect
                        data={keywords.map((item) => ({
                            value: item.id,
                            label: item.text,
                        }))}
                        value={selectedKeywordIds}
                        onChange={setKeywordIds}
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
                        min={1}
                        value={timeInterval ? timeInterval : 0}
                        onChange={setTimeInterval}
                        placeholder="Your age"
                        label={<Title order={6}>Chọn thời gian quét:</Title>}
                    />

                    <Button
                        disabled={
                            !!settings && settings.command == ECommand.RUN
                        }
                        miw={150}
                        onClick={handleSubmitSettings}
                    >
                        Submit
                    </Button>
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
                    disabled={!settings || settings.command == ECommand.RUN}
                    leftIcon={<IconPlayerPlayFilled />}
                    onClick={handleStartProcess}
                >
                    Start
                </Button>
                <Button
                    miw={200}
                    color="red"
                    variant="light"
                    disabled={!settings || settings.command == ECommand.STOP}
                    leftIcon={<IconPlayerStopFilled />}
                    onClick={handleStopProcess}
                >
                    Stop
                </Button>
            </Group>
        </Stack>
    );
};

export default SettingPage;
