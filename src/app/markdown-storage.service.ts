import { Injectable } from '@angular/core';

interface Paragraph {
    title: string;
    content: string;
    images?: string;
}

interface Chapter {
    title: string;
    paragraphs: Paragraph[];
    exercises?: Paragraph[];
}

@Injectable()
export class MarkdownStorageService {
    public chapterOne: Chapter = {
        title: '# Introduction',
        paragraphs: [
            {
                title: 'What is HTML?',

                content: `
HTML is a  **markup**  language for  **describing**  web documents (web pages).

- HTML stands for  **H** yper  **T** ext  **M** arkup  **L** anguage
- A markup language is a set of  **markup tags**
- HTML documents are described by  **HTML tags**
- Each HTML tag  **describes**  different document content

Remember HTML documents must be text only as browsers can only read text, this means that any formatting must be commanded – this document will show you how.
                `
            }
        ]
    };
}
