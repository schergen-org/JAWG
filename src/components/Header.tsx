import { Box, Burger, Container, Group, Text } from '@mantine/core';
import { Page } from '../types/Schema';
import classes from './Header.module.css';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router';

type headerProps = {
  pages: Page[];
}

export default function Header({ pages }: headerProps) {
    const location = useLocation();
    const [opened, { toggle }] = useDisclosure(false);

    const items = pages.map((page) => {
        const isActive = location.pathname === '/' + page.route;

        return (
            <Link
                to={'/' + page.route}
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
                <Text>Titel</Text>
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
