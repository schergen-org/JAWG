import './text.css'
import { TextBlock } from '../../../types/blocks/TextBlock'

type textProps = {
  content: TextBlock,
  title: string
}
export default function Text({ content, title }: textProps) {
  return (
    <>
      <h2>{title}</h2>
      <div>{content.text}</div>
    </>
  )
}
