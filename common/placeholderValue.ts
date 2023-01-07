
import { MyParagraphElement, MyH1Element } from "../types/plateTypes";
import { getNodesWithId } from "./getNodesWithId";

const values = [
    {
        type: 'h1',
        children: [
            {
                text: '🧱 Elements',
            },
        ],
    } as MyH1Element,
    {
        type: 'p',
        children: [
            {
                text: "The basic marks consist of text formatting such as bold, italic, underline, strikethrough, subscript, superscript, and code."
            },
        ],
    } as MyParagraphElement,
]

export const placeholderValue = getNodesWithId(values)