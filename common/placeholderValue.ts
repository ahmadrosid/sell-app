
import { MyParagraphElement, MyH1Element } from "../types/plateTypes";
import { getNodesWithId } from "./getNodesWithId";

const values = [
    {
        type: 'h1',
        children: [
            {
                text: '',
            },
        ],
    } as MyH1Element,
    {
        type: 'p',
        children: [
            {
                text: '',
            },
        ],
    } as MyParagraphElement,
]

export const placeholderValue = getNodesWithId(values)