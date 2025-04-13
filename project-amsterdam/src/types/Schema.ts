import { ExperienceBlock } from "./blocks/ExperienceBlock";
import { ProjectBlock } from "./blocks/ProjectBlock";
import { TextBlock } from "./blocks/TextBlock";

export interface Schema {
    title: string;
    icon: string;
    theme?: Object;
    content: ContentBlock[];
    impressum?: {
        text: string;
    }
}

// ContentBlock containing the sections title and defining its content
export type ContentBlock = {
    title: string;
    blockType: BlockTypes;
    content: contentType[BlockTypes] 
}

export type BlockTypes = keyof contentType

export type contentType = {
    Text: TextBlock;
    Project: ProjectBlock[];
    Experience: ExperienceBlock[];
}