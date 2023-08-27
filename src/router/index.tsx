import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import KeyWordPage from "../pages/KeyWordPage";
import MessageContent from "../pages/MessagePage";
import GroupPage from "../pages/GroupPage";
import BotPage from "../pages/BotPage";
import UserPage from "../pages/UserPage";
import SettingPage from "../pages/SettingPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <KeyWordPage />,
            },
            {
                path: "message",
                element: <MessageContent />,
            },
            {
                path: "fanpage",
                element: <GroupPage />,
            },
            {
                path: "bot",
                element: <BotPage />,
            },
            {
                path: "user",
                element: <UserPage />,
            },
            {
                path: "setting",
                element: <SettingPage />,
            },
        ],
    },
]);
