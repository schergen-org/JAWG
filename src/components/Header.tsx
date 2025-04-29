import { Box, Burger, Container, Group, Text } from '@mantine/core';
import { Page } from '../types/Schema';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router';
import classes from './Header.module.css';

type headerProps = {
    title: string;
    pages: Page[];
}

export default function Header({ title, pages }: headerProps) {
    const location = useLocation();
    const [opened, { toggle }] = useDisclosure(false);

    const items = pages.map((page, index) => {
        const route = '/' + page.route;
        const isHome = index === 0;
        const isActive = isHome
            ? location.pathname === '/' || location.pathname === route
            : location.pathname === route;

        return (
            <Link
                to={route}
                key={page.title}
                className={classes.link}
                data-active={isActive || undefined}
            >
                {page.title}
            </Link>
        );
    });

    return (
        <header className={classes.header}>
            <Container className={classes.inner}>
                <Text
                    size="xl"
                    fw={900}
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                >
                    {title}
                </Text>
                <Box className={classes.links} visibleFrom="sm">
                    <Group gap={0} justify="flex-end" className={classes.links}>
                        {items}
                    </Group>
                </Box>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    className={classes.burger}
                    size="sm"
                    hiddenFrom="sm"
                />
            </Container>
        </header>
    );
}
