import { EmojiCombobox, EmojiPlugin, withProps } from '@udecode/plate';
import fonts from '../common/fonts';
import { MyPlatePlugin } from '../types/plateTypes';

export const emojiPlugin: Partial<MyPlatePlugin<EmojiPlugin>> = {
    renderAfterEditable: withProps(EmojiCombobox, {
        styles: {
            root: {
                fontFamily: fonts.base,
                overflow: 'hidden'
            },
        },
    })
};
