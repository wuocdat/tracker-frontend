import { Navbar, createStyles, getStylesRef } from "@mantine/core";
import {
    IconAdjustments,
    IconBrandTelegram,
    IconExplicit,
    IconRobot,
    IconUserShare,
    IconUsersGroup,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import { PAGES } from "../constants";

const useStyles = createStyles((theme) => ({
    link: {
        ...theme.fn.focusStyles(),
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        fontSize: theme.fontSizes.sm,
        color: theme.colors.gray[7],
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor: theme.colors.gray[0],
            color: theme.black,

            [`& .${getStylesRef("icon")}`]: {
                color: theme.black,
            },
        },
    },

    linkIcon: {
        ref: getStylesRef("icon"),
        color: theme.colors.gray[6],
        marginRight: theme.spacing.sm,
    },

    linkActive: {
        "&, &:hover": {
            backgroundColor: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).background,
            color: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).color,
            [`& .${getStylesRef("icon")}`]: {
                color: theme.fn.variant({
                    variant: "light",
                    color: theme.primaryColor,
                }).color,
            },
        },
    },
}));

const data = [
    { page: PAGES.KEY_WORKS, icon: IconExplicit },
    {
        page: PAGES.MESSAGE_CONTENT,
        icon: IconBrandTelegram,
    },
    { page: PAGES.FANPAGE_MANAGEMENT, icon: IconUsersGroup },
    { page: PAGES.BOT_MANAGEMENT, icon: IconRobot },
    { page: PAGES.SENT_USERS, icon: IconUserShare },
    { page: PAGES.SETTING, icon: IconAdjustments },
];

const SideBar = () => {
    const { classes, cx } = useStyles();

    const links = data.map((item) => (
        <NavLink
            className={({ isActive }) =>
                cx(classes.link, {
                    [classes.linkActive]: isActive,
                })
            }
            to={item.page.path}
            key={item.page.label}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.page.label}</span>
        </NavLink>
    ));

    return (
        <Navbar width={{ base: 300 }} height="100%" p="xs">
            {links}
        </Navbar>
    );
};

export default SideBar;
