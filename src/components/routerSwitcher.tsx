import { Route, Routes } from 'react-router';
import { Page } from '../types/Schema';
import BlockBuilder from './builders/blockBuilder';

type routeSwitcherProps = {
  pages: Page[];
}
export  default function RouterSwitcher({ pages }: routeSwitcherProps) {
    return (
        <Routes>
            <Route path="/" element={
                (pages.length > 0) && 
            <BlockBuilder
                blocks={pages[0].content}
            />
            }/>
            {pages.map((page, index) => {
                return (
                    <Route 
                        key={index}
                        path={page.route} 
                        element={
                            <BlockBuilder
                                blocks={page.content}
                            />
                        }
                    />
                )
            })}
        </Routes>
    )
}
