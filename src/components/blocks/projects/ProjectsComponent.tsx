import './ProjectsComponent.css'
import { ProjectBlock } from '../../../types/blocks/ProjectBlock'
import { Badge, Paper, Text } from '@mantine/core'

type projectsProps = {
  content: ProjectBlock[],
  title: string
}
export default function ProjectsComponent({ content, title }: projectsProps) {
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
                content.map((project: ProjectBlock, index: number) => {
                    return (
                        <Paper 
                            m={10}
                            withBorder
                            key={index}
                            p={10}
                        > 
                            <Text size="lg">{project.title}</Text>
                            <Text size='sm'>{project.description}</Text>
                            <Text size='sm'>{project.link}</Text>
                            {project.tags.map((tag: string, index: number) => {
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
