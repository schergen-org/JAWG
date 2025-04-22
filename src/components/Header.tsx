import { NavLink } from '@mantine/core';
import { Page } from '../types/Schema';

type headerProps = {
  pages: Page[];
}

export default function Header({ pages }: headerProps) {
    return (
        pages.map((page, index) => {
            return (
                <NavLink
                    key={index}
                    label={page.title}
                    href={'/' + page.route}
                />
            )
        })
    )
}