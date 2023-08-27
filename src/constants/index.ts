import { Bot, GroupType, KeyWord, MessageContent } from "../types";

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
        });
    }
    return data;
};

export const mockContents = Array<MessageContent>(50).fill({
    text: `
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque consequuntur ad necessitatibus repudiandae, rem vero laborum repellat impedit distinctio hic nostrum libero sed delectus velit, quidem eius, earum cumque quam.`,
});

export const mockGroupData: GroupType[] = [
    {
        type: "fanpage",
        uid: "100047982434",
    },
    {
        type: "group",
        uid: "100047982434",
    },
    {
        type: "group",
        uid: "100047982434",
    },
    {
        type: "fanpage",
        uid: "100047982434",
    },
    {
        type: "group",
        uid: "100047982434",
    },
    {
        type: "group",
        uid: "100047982434",
    },
    {
        type: "fanpage",
        uid: "100047982434",
    },
    {
        type: "group",
        uid: "100047982434",
    },
    {
        type: "group",
        uid: "100047982434",
    },
    {
        type: "fanpage",
        uid: "100047982434",
    },
    {
        type: "group",
        uid: "100047982434",
    },
    {
        type: "group",
        uid: "100047982434",
    },
    {
        type: "fanpage",
        uid: "100047982434",
    },
    {
        type: "group",
        uid: "100047982434",
    },
    {
        type: "group",
        uid: "100047982434",
    },
    {
        type: "fanpage",
        uid: "100047982434",
    },
    {
        type: "group",
        uid: "100047982434",
    },
    {
        type: "group",
        uid: "100047982434",
    },
    {
        type: "fanpage",
        uid: "100047982434",
    },
    {
        type: "group",
        uid: "100047982434",
    },
    {
        type: "group",
        uid: "100047982434",
    },
    {
        type: "fanpage",
        uid: "100047982434",
    },
    {
        type: "group",
        uid: "100047982434",
    },
    {
        type: "group",
        uid: "100047982434",
    },
];

export const mockBot: Bot[] = Array(50).fill({
    uui: "10002424942",
    cookie: "c_user=100081789893509;xs=41:Vv-uG7ptkQ9I5Q:2:1654604146:-1:-1;fr=0dZtnQgAbuqGXzcEf.AWV5E27gmcgHki-7fbXwlDmtklc.Bin0Fy..AAA.0.0.Bin0Fy.AWW2_LTmjbo;datr=ckGfYoqhYOIX8x_y9rT0NJop|BZS7ECLZ6UDZV6YKXFUMAOI5HX4PQB2Z",
});
