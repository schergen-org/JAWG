import { Anchor, Box, Burger, Container, Group, Text } from '@mantine/core';
import { Page } from '../types/Schema';
import { useState } from 'react';
import classes from './Header.module.css';
import { useDisclosure } from '@mantine/hooks';

type headerProps = {
  pages: Page[];
}

export default function Header({ pages }: headerProps) {
    const [active, setActive] = useState(0);
    const [opened, { toggle }] = useDisclosure(false);

    const items = pages.map((page, index) => (
        <Anchor<'a'>
            href={'/' + page.route}
            key={page.title}
            className={classes.link}
            data-active={index === active || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(index);
            }}
        >
            {page.title}
        </Anchor>
    ));


    return (
        <header className={classes.header}>
            <Container className={classes.inner}>
            {/* <MantineLogo size={34} /> */}
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
    )
}