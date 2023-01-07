
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
                text: 'Next, let\'s create a new controller for our proxy to the PhotoRoom API. The reason we do this instead of calling the API directly from the frontend is because we want to secure the API key that we have.',
            },
        ],
    } as MyParagraphElement,
]

export const placeholderValue = getNodesWithId(values)