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
type ContentBlock = {
    [title:string] : {
        blockType: string;
        content: TextBlock | ProjectBlock[] | ExperienceBlock[];
    }
}