import {
    createBoldPlugin,
    createCodePlugin,
    createHorizontalRulePlugin,
    createItalicPlugin,
    createListPlugin,
    createSoftBreakPlugin,
    createStrikethroughPlugin,
    createSubscriptPlugin,
    createSuperscriptPlugin,
    createUnderlinePlugin,
} from '@udecode/plate';
import { plateUI } from '../common/plateUI';
import { createMyPlugins } from '../types/plateTypes';
import { softBreakPlugin } from './softBreakPlugin';

export const basicMarksPlugins = createMyPlugins(
    [
        createBoldPlugin(),
        createCodePlugin(),
        createItalicPlugin(),
        createStrikethroughPlugin(),
        createSubscriptPlugin(),
        createSuperscriptPlugin(),
        createUnderlinePlugin(),
        createListPlugin(),
        createHorizontalRulePlugin(),
        createSoftBreakPlugin(softBreakPlugin)
    ],
    {
        components: plateUI,
    }
);
