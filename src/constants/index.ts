import { EThreadStatus } from "./../types/enums";
import {
    Bot,
    GroupType,
    KeyWord,
    MessageContent,
    Thread,
    User,
} from "../types";
import { EAccType } from "../types/enums";

export const PAGES = {
    KEY_WORKS: {
        path: "/",
        label: "Key Words",
    },
    MESSAGE_CONTENT: {
        path: "/message",
        label: "Message Content",
    },
    FANPAGE_MANAGEMENT: {
        path: "/fanpage",
        label: "Fanpage Management",
    },
    BOT_MANAGEMENT: {
        path: "/bot",
        label: "Bot management",
    },
    SENT_USERS: {
        path: "/user",
        label: "Users had been sent messages",
    },
    SETTING: {
        path: "/setting",
        label: "Setting",
    },
};

export const getKeywordMockData = (): KeyWord[] => {
    const data: KeyWord[] = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            id: i + "",
            text: `keyword ${i}`,
            createdAt: "27/08/2023 11:11:00",
            updatedAt: "27/08/2023 11:11:00",
        });
    }
    return data;
};

export const mockContents = Array<MessageContent>(50).fill({
    text: `
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque consequuntur ad necessitatibus repudiandae, rem vero laborum repellat impedit distinctio hic nostrum libero sed delectus velit, quidem eius, earum cumque quam.`,
    createdAt: "27/08/2023 11:11:00",
    updatedAt: "27/08/2023 11:11:00",
});

export const mockGroupData: GroupType[] = [
    {
        type: EAccType.FANPAGE,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.GROUP,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.GROUP,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.FANPAGE,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.GROUP,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.GROUP,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.FANPAGE,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.GROUP,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.GROUP,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.FANPAGE,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.GROUP,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.GROUP,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.FANPAGE,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.GROUP,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.GROUP,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.FANPAGE,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.GROUP,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.GROUP,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.FANPAGE,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.GROUP,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.GROUP,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.FANPAGE,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.GROUP,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
    {
        type: EAccType.GROUP,
        uid: "100047982434",
        createdAt: "27/08/2023 11:11:00",
        updatedAt: "27/08/2023 11:11:00",
    },
];

export const mockBot = Array<Bot>(50).fill({
    uui: "10002424942",
    cookie: "c_user=100081789893509;xs=41:Vv-uG7ptkQ9I5Q:2:1654604146:-1:-1;fr=0dZtnQgAbuqGXzcEf.AWV5E27gmcgHki-7fbXwlDmtklc.Bin0Fy..AAA.0.0.Bin0Fy.AWW2_LTmjbo;datr=ckGfYoqhYOIX8x_y9rT0NJop|BZS7ECLZ6UDZV6YKXFUMAOI5HX4PQB2Z",
    createdAt: "27/08/2023 11:11:00",
    updatedAt: "27/08/2023 11:11:00",
    status: "Live",
    username: "Marianne Ikbal",
    pass: "2ljHgslxjf@f",
    _2fa: "FLZO W5WO 5BNV DCBN 3FT2 HSDI PMZ2 DZSH",
    profile: "https://www.facebook.com/profile.php?id=100008566261853",
});

export const mockUsers = Array<User>(50).fill({
    uid: "10002424942",
    mess_number: 5,
    username: "Vern Sandra",
    latestMessageSentTime: "27/08/2023 11:11:00",
    createdAt: "27/08/2023 11:11:00",
    updatedAt: "27/08/2023 11:11:00",
});

export const mockThreads = Array<Thread>(50).fill({
    name: "10002424942_Marianne_Ikbal",
    status: EThreadStatus.RUN,
    createdAt: "27/08/2023 11:11:00",
    updatedAt: "27/08/2023 11:11:00",
});

export const mockBot2 = [
    {
        uui: "100012259088765",
        username: "Keeley Ellis",
    },
    {
        uui: "100046654057886",
        username: "Vern Sandra",
    },
    {
        uui: "100035940098367",
        username: "Arline Lex",
    },
    {
        uui: "100029760366581",
        username: "Grant Luanne",
    },
    {
        uui: "100026183130926",
        username: "David Sacheverell",
    },
];
