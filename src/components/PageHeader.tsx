import { Button, Group, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

interface PageHeaderProps {
    title: string;
    onClick: () => void;
}

const PageHeader = ({ title, onClick }: PageHeaderProps) => {
    return (
        <Group position="apart">
            <Title order={2}>{title}</Title>
            <Button
                variant="outline"
                leftIcon={<IconPlus size="1rem" />}
                onClick={onClick}
            >
                Add
            </Button>
        </Group>
    );
};

export default PageHeader;
