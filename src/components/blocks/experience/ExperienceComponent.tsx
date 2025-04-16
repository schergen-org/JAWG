import './ExperienceComponent.css'
import { Badge, Paper, Text } from '@mantine/core'
import { ExperienceBlock } from '../../../types/blocks/ExperienceBlock'

type experienceProps = {
  content: ExperienceBlock[],
  title: string
}
export default function ExperienceComponent({ content, title }: experienceProps) {
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
            {
                content.map((experience: ExperienceBlock, index: number) => {
                    return (
                        <Paper 
                            m={10}
                            withBorder
                            key={index}
                            p={10}
                        > 
                            <Text size="lg">{experience.title}</Text>
                            <Text size='sm'>{experience.description}</Text>
                            <Text size='sm'>{experience.startDate} - {experience.endDate}</Text>
                            {experience.tags.map((tag: string, index: number) => {
                                return (
                                    <Badge key={index}>{tag}</Badge>
                                )
                            })}
                        </Paper>
                    )
                })
            }
        </Paper>
    )
}
