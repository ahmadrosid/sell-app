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
    AutoformatPlugin,
    createAutoformatPlugin
} from "@udecode/plate";
import { createDndPlugin } from '@udecode/plate-ui-dnd';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { EditorValue, createMyPlugins, MyEditor } from "../types/plateTypes";
import { plateUI } from '@common/plateUI';
import { editorProps } from "@common/editableProps";
import { placeholderValue } from "@common/placeholderValue";

import { MarkBalloonToolbar } from "@components/MarkBaloonToolbar";
import { exitBreakPlugin } from "@plugins/exitBreakPlugin";
import { withStyledDraggables } from "@components/withStyledDraggables";
import { withStyledPlaceHolders } from "@components/withStyledPlaceHolders";
import { basicElementsPlugins } from "@plugins/basicElementsPlugins";
import { basicMarksPlugins } from "@plugins/basicMarksPlugins";
import { resetBlockTypePlugin } from "@plugins/resetBlockTypePlugin";
import { trailingBlockPlugin } from "@plugins/trailingBlockPlugin";
import { BLOCKS_EDITOR_COMMANDS } from '@components/Block/blocks';
import { emojiPlugin } from "@plugins/emojiPlugin";
import { autoformatPlugin } from "@plugins/autoformatPlugin";
import { BlockCombobox } from "./Block/BlockCombobox";

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
            component: null,
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
        createAutoformatPlugin<AutoformatPlugin<EditorValue, MyEditor>, EditorValue>(
            autoformatPlugin
        ),
    ],
    {
        components,
    }
);

const handleOnchange = (vals: EditorValue) => {
    // console.log({ vals: vals.slice(-1)[0].type });
}

const Editor = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Plate<EditorValue>
                editableProps={editorProps}
                plugins={plugins}
                onChange={handleOnchange}
                initialValue={initialValue} >
                <MarkBalloonToolbar />
                <BlockCombobox
                    styles={{
                        root: {
                            overflow: "hidden",
                            borderRadius: '4px',
                        }
                    }}
                    items={[...BLOCKS_EDITOR_COMMANDS]}
                    pluginKey="/" />
            </Plate>
        </DndProvider>
    );
}

export default Editor;