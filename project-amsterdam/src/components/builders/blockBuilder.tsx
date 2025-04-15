import { Blocks, ContentBlock, contentType } from '../../types/Schema';
import Text from '../blocks/text/text'

type blockBuilderProps = {
  blocks: ContentBlock[];
}
export default function BlockBuilder({ blocks }: blockBuilderProps) {
  return (
    <>
      {
        blocks.map((block) => {
          return (
            <div
              key={block.title}
            >
              <h2>
                {block.title}
              </h2>
              {block.blockType === Blocks.TEXT &&
                <Text
                  content={block.content as contentType[Blocks.TEXT]}
                />
              }
            </div>
          )
        })
      }

    </>
  )
}
