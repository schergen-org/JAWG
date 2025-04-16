import { Blocks, ContentBlock, contentType } from '../../types/Schema';
import ExperienceComponent from '../blocks/experience/ExperienceComponent';
import ProjectsComponent from '../blocks/projects/ProjectsComponent';
import TextComponent from '../blocks/text/TextComponent'

type blockBuilderProps = {
  blocks: ContentBlock[];
}
export default function BlockBuilder({ blocks }: blockBuilderProps) {
    return (
        <>
            {
                blocks.map((block: ContentBlock, index: number) => {
                    return (
                        <div
                            key={index}
                        >
                            {block.blockType === Blocks.TEXT &&
                                <TextComponent
                                    content={block.content as contentType[Blocks.TEXT]}
                                    title={block.title}
                                />
                            }
                            {block.blockType === Blocks.PROJECT &&
                                <ProjectsComponent
                                    content={block.content as contentType[Blocks.PROJECT]}
                                    title={block.title}
                                />
                            }
                            {block.blockType === Blocks.EXPERIENCE &&
                                <ExperienceComponent
                                    content={block.content as contentType[Blocks.EXPERIENCE]}
                                    title={block.title}
                                />
                            }
                        </div>
                    )
                })
            }

        </>
    )
}
