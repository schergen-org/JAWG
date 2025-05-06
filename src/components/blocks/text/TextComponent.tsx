import './TextComponent.css'
import { TextBlock } from '../../../types/blocks/TextBlock'
import { Paper, Text } from '@mantine/core'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type textProps = {
    content: TextBlock,
    title: string
}
export default function TextComponent({ content, title }: textProps) {
    return (
        <Paper
            withBorder
            shadow="xl"
            radius="xl"
            p={10}
            m={10}
        >
            <Text
                size="xl"
                c="blue"
            >
                {title}
            </Text>
            <Markdown
                remarkPlugins={[remarkGfm]}
            >
                {content.text}
            </Markdown>
        </Paper>
    )
}
