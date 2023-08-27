import { ScrollArea, Table, createStyles, rem } from "@mantine/core";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
    header: {
        position: "sticky",
        zIndex: 50,
        top: 0,
        backgroundColor: theme.white,
        transition: "box-shadow 150ms ease",

        "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            borderBottom: `${rem(1)} solid ${theme.colors.gray[2]}`,
        },
    },

    scrolled: {
        boxShadow: theme.shadows.sm,
    },
}));

interface StickyHeaderTableProps {
    rows: JSX.Element[];
    header: JSX.Element;
}

const StickyHeaderTable = ({ rows, header }: StickyHeaderTableProps) => {
    const { classes, cx } = useStyles();
    const [scrolled, setScrolled] = useState(false);

    return (
        <ScrollArea.Autosize
            mah="100%"
            onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
        >
            <Table fontSize="sm" withBorder striped highlightOnHover miw={700}>
                <thead
                    className={cx(classes.header, {
                        [classes.scrolled]: scrolled,
                    })}
                >
                    {header}
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea.Autosize>
    );
};

export default StickyHeaderTable;
