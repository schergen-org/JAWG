import './text.css'
import { TextBlock } from '../../../types/blocks/TextBlock'

type textProps = {
    content: TextBlock
}
export default function Text({content}: textProps) {
    return (
        <div>{content.text}</div>
    )
}
