import {
    Plate,
    createTrailingBlockPlugin,
    createNormalizeTypesPlugin,
    createExitBreakPlugin,
    ELEMENT_H1,
    createResetNodePlugin,
    createNodeIdPlugin,
    createMentionPlugin,
    createEmojiPlugin,
    MentionCombobox,
} from "@udecode/plate";
import {
    createDndPlugin,
} from '@udecode/plate-ui-dnd';

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
import { basicMarksPlugins } from "../plugins/basicMarksPlugins";
import { resetBlockTypePlugin } from "../plugins/resetBlockTypePlugin";
import { trailingBlockPlugin } from "../plugins/trailingBlockPlugin";
import { TEXT_EDITOR_COMMANDS } from '../plugins/mentionables';
import { emojiPlugin } from "../plugins/emojiPlugin";
import { MentionElement } from "./MentionElement";

const initialValue = placeholderValue;

const placeHolder = withStyledPlaceHolders(plateUI)
const components = withStyledDraggables(placeHolder);

const plugins = createMyPlugins(
    [
        ...basicElementsPlugins,
        ...basicMarksPlugins,
        createNodeIdPlugin(),
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
    // console.log({ vals: vals.slice(-1)[0].type });
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
                    }
                }} items={[...TEXT_EDITOR_COMMANDS]} pluginKey="/" />
            </Plate>
        </DndProvider>
    );
}

