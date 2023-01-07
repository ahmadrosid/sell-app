import {
    Plate,
    createTrailingBlockPlugin,
    createNormalizeTypesPlugin,
    createDndPlugin,
    createExitBreakPlugin,
    ELEMENT_H1,
    createResetNodePlugin,
    createNodeIdPlugin,
    createMentionPlugin,
    createEmojiPlugin,
    MentionElement,
    MentionCombobox,
    createComboboxPlugin
} from "@udecode/plate";

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { EditorValue, createMyPlugins } from "../types/plateTypes";
import { editorProps } from "../common/editableProps";
import { plateUI } from '../common/plateUI';

import { MarkBalloonToolbar } from "../components/MarkBaloonToolbar";
import { withStyledDraggables } from "./withStyledDraggables";
import { exitBreakPlugin } from "../plugins/exitBreakPlugin";
import { withStyledPlaceHolders } from "./withStyledPlaceHolders";
import { placeholderValue } from "../common/placeholderValue";
import { basicElementsPlugins } from "../plugins/basicElementsPlugins";
import { resetBlockTypePlugin } from "../plugins/resetBlockTypePlugin";
import { trailingBlockPlugin } from "../plugins/trailingBlockPlugin";
import { TEXT_EDITOR_COMMANDS } from '../plugins/mentionables';
import fonts from "../common/fonts";
import { emojiPlugin } from "../plugins/emojiPlugin";

const initialValue = placeholderValue;

const placeHolder = withStyledPlaceHolders(plateUI)
const components = withStyledDraggables(placeHolder);

const plugins = createMyPlugins(
    [
        ...basicElementsPlugins,
        createNodeIdPlugin(),
        createComboboxPlugin(),
        createMentionPlugin({
            key: '/',
            component: MentionElement,
            options: { trigger: '/' },
        }),
        createTrailingBlockPlugin(trailingBlockPlugin),
        createResetNodePlugin(resetBlockTypePlugin),
        createNormalizeTypesPlugin({
            options: {
                rules: [{ path: [0], strictType: ELEMENT_H1 }],
            },
        }),
        createEmojiPlugin(emojiPlugin),
        createDndPlugin({ options: { enableScroller: true } }),
        createExitBreakPlugin(exitBreakPlugin),
    ],
    {
        components,
    }
);

const handleOnchange = (vals: EditorValue) => {
    console.log({ vals: vals.slice(-1)[0].type });
}

export default function Editor() {
    return (
        <DndProvider backend={HTML5Backend}>
            <Plate<EditorValue>
                editableProps={editorProps}
                plugins={plugins}
                onChange={handleOnchange}
                initialValue={initialValue} >
                <MarkBalloonToolbar />
                <MentionCombobox styles={{
                    root: {
                        overflow: "hidden",
                        borderRadius: '4px',
                        fontFamily: fonts.base
                    }
                }} items={[...TEXT_EDITOR_COMMANDS]} pluginKey="/" />
            </Plate>
        </DndProvider>
    );
}

