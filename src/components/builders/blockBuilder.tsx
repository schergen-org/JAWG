import { Blocks, ContentBlock, contentType } from '../../types/Schema';
import Text from '../blocks/text/text'

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
                <Text
                    content={block.content as contentType[Blocks.TEXT]}
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
