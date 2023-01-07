import { ComboboxOnSelectItem, ELEMENT_CODE_BLOCK, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_MENTION_INPUT, TComboboxItem, toggleNodeType } from '@udecode/plate'
import { Editor, Transforms } from 'slate'

export type CommandItemProps = {
    value: string
}

export const BLOCKS_EDITOR_COMMANDS: TComboboxItem<CommandItemProps>[] = [
    {
        key: 'h1',
        text: 'Heading 1',
        data: { value: 'heading1' },
    },
    {
        key: 'h2',
        text: 'Heading 2',
        data: { value: 'Heading 2' },
    },
    {
        key: 'h3',
        text: 'Heading 3',
        data: { value: 'Heading 3' },
    },
    {
        key: 'p',
        text: 'Paragraph',
        data: { value: 'Paragraph' },
    },
    {
        key: 'code',
        text: 'Code block',
        data: { value: 'Code block' },
    }
];

export const handleSelectCommand: ComboboxOnSelectItem<any> = (
    editor,
    item
): void => {
    Transforms.removeNodes(editor as Editor, {
        // TODO: replace any
        match: (node: any) => node.type === ELEMENT_MENTION_INPUT,
    });
    switch (item.key) {
        case 'mention':
            editor.insertText('@');
            break;
        case 'h1':
            toggleNodeType(editor, { activeType: ELEMENT_H1 });
            break;
        case 'h2':
            toggleNodeType(editor, { activeType: ELEMENT_H2 });
            break;
        case 'h3':
            toggleNodeType(editor, { activeType: ELEMENT_H3 });
            break;
        case 'code':
            toggleNodeType(editor, { activeType: ELEMENT_CODE_BLOCK });
            break;
        default:
            break;
    }
};
