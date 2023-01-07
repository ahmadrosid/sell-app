import { EmojiCombobox, EmojiPlugin, withProps } from '@udecode/plate';
import { MyPlatePlugin } from '../types/plateTypes';

export const emojiPlugin: Partial<MyPlatePlugin<EmojiPlugin>> = {
    renderAfterEditable: withProps(EmojiCombobox, {
        styles: {
            root: {
                overflow: 'hidden'
            },
        },
    })
};
