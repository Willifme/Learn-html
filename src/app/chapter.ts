interface Paragraph {
    title: string;
    content: string;
    images?: string;
}

export interface Chapter {
    title: string;
    paragraphs: Paragraph[];
    exercises?: Paragraph[];
}
