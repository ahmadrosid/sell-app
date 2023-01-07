import {
    AutoformatRule,
    createPlateEditor,
    CreatePlateEditorOptions,
    createPluginFactory,
    createPlugins,
    createTEditor,
    Decorate,
    DecorateEntry,
    DOMHandler,
    EDescendant,
    EElement,
    EElementEntry,
    EElementOrText,
    ELEMENT_BLOCKQUOTE,
    ELEMENT_CODE_BLOCK,
    ELEMENT_CODE_LINE,
    ELEMENT_H1,
    ELEMENT_H2,
    ELEMENT_H3,
    ELEMENT_H4,
    ELEMENT_HR,
    ELEMENT_IMAGE,
    ELEMENT_LI,
    ELEMENT_LINK,
    ELEMENT_MEDIA_EMBED,
    ELEMENT_MENTION,
    ELEMENT_MENTION_INPUT,
    ELEMENT_OL,
    ELEMENT_PARAGRAPH,
    ELEMENT_TABLE,
    ELEMENT_TD,
    ELEMENT_TODO_LI,
    ELEMENT_TR,
    ELEMENT_UL,
    EMarks,
    ENode,
    ENodeEntry,
    EText,
    ETextEntry,
    getTEditor,
    InjectComponent,
    InjectProps,
    KeyboardHandler,
    NoInfer,
    OnChange,
    OverrideByKey,
    PlateEditor,
    PlatePlugin,
    PlatePluginComponent,
    PlatePluginInsertData,
    PlatePluginProps,
    PlateProps,
    PluginOptions,
    SerializeHtml,
    TCommentText,
    TElement,
    TImageElement,
    TLinkElement,
    TMediaEmbedElement,
    TMentionElement,
    TMentionInputElement,
    TNodeEntry,
    TReactEditor,
    TTableElement,
    TText,
    TTodoListItemElement,
    useEditorRef,
    useEditorState,
    usePlateActions,
    usePlateEditorRef,
    usePlateEditorState,
    usePlateSelectors,
    usePlateStates,
    WithOverride,
    PlateId,
} from '@udecode/plate';

import { CSSProperties } from 'styled-components';

/**
 * Text
 */
export type EmptyText = {
    text: '';
};

export type PlainText = {
    text: string;
};

export interface RichText extends TText, TCommentText {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
    kbd?: boolean;
    subscript?: boolean;
    backgroundColor?: CSSProperties['backgroundColor'];
    fontFamily?: CSSProperties['fontFamily'];
    color?: CSSProperties['color'];
    fontSize?: CSSProperties['fontSize'];
    fontWeight?: CSSProperties['fontWeight'];
}

/**
 * Inline Elements
 */

export interface MyLinkElement extends TLinkElement {
    type: typeof ELEMENT_LINK;
    children: RichText[];
}

export interface MyMentionInputElement extends TMentionInputElement {
    type: typeof ELEMENT_MENTION_INPUT;
    children: [PlainText];
}

export interface MyMentionElement extends TMentionElement {
    type: typeof ELEMENT_MENTION;
    children: [EmptyText];
}

export type MyInlineElement =
    | MyLinkElement
    | MyMentionElement
    | MyMentionInputElement;
export type MyInlineDescendant = MyInlineElement | RichText;
export type MyInlineChildren = MyInlineDescendant[];

/**
 * Block props
 */

export interface MyIndentProps {
    indent?: number;
}

export interface MyIndentListProps extends MyIndentProps {
    listStart?: number;
    listRestart?: number;
    listStyleType?: string;
}

export interface MyLineHeightProps {
    lineHeight?: CSSProperties['lineHeight'];
}

export interface MyAlignProps {
    align?: CSSProperties['textAlign'];
}

export interface MyBlockElement
    extends TElement,
    MyIndentListProps,
    MyLineHeightProps {
    id?: PlateId;
}

/**
 * Blocks
 */

export interface MyParagraphElement extends MyBlockElement {
    type: typeof ELEMENT_PARAGRAPH;
    children: MyInlineChildren;
}

export interface MyH1Element extends MyBlockElement {
    type: typeof ELEMENT_H1;
    children: MyInlineChildren;
}

export interface MyH2Element extends MyBlockElement {
    type: typeof ELEMENT_H2;
    children: MyInlineChildren;
}

export interface MyH3Element extends MyBlockElement {
    type: typeof ELEMENT_H3;
    children: MyInlineChildren;
}

export interface MyH4Element extends MyBlockElement {
    type: typeof ELEMENT_H4;
    children: MyInlineChildren;
}

export interface MyBlockquoteElement extends MyBlockElement {
    type: typeof ELEMENT_BLOCKQUOTE;
    children: MyInlineChildren;
}

export interface MyCodeBlockElement extends MyBlockElement {
    type: typeof ELEMENT_CODE_BLOCK;
    children: MyCodeLineElement[];
}

export interface MyCodeLineElement extends TElement {
    type: typeof ELEMENT_CODE_LINE;
    children: PlainText[];
}

export interface MyTableElement extends TTableElement, MyBlockElement {
    type: typeof ELEMENT_TABLE;
    children: MyTableRowElement[];
}

export interface MyTableRowElement extends TElement {
    type: typeof ELEMENT_TR;
    children: MyTableCellElement[];
}

export interface MyTableCellElement extends TElement {
    type: typeof ELEMENT_TD;
    children: MyNestableBlock[];
}

export interface MyBulletedListElement extends TElement, MyBlockElement {
    type: typeof ELEMENT_UL;
    children: MyListItemElement[];
}

export interface MyNumberedListElement extends TElement, MyBlockElement {
    type: typeof ELEMENT_OL;
    children: MyListItemElement[];
}

export interface MyListItemElement extends TElement, MyBlockElement {
    type: typeof ELEMENT_LI;
    children: MyInlineChildren;
}

export interface MyTodoListElement
    extends TTodoListItemElement,
    MyBlockElement {
    type: typeof ELEMENT_TODO_LI;
    children: MyInlineChildren;
}

export interface MyImageElement extends TImageElement, MyBlockElement {
    type: typeof ELEMENT_IMAGE;
    children: [EmptyText];
}

export interface MyMediaEmbedElement
    extends TMediaEmbedElement,
    MyBlockElement {
    type: typeof ELEMENT_MEDIA_EMBED;
    children: [EmptyText];
}

export interface MyHrElement extends MyBlockElement {
    type: typeof ELEMENT_HR;
    children: [EmptyText];
}

export type MyNestableBlock = MyParagraphElement;

export type MyBlock = Exclude<MyElement, MyInlineElement>;
export type MyBlockEntry = TNodeEntry<MyBlock>;

export type MyRootBlock =
    | MyParagraphElement
    | MyH1Element
    | MyH2Element
    | MyH3Element
    | MyH4Element
    | MyBlockquoteElement
    | MyCodeBlockElement
    | MyTableElement
    | MyBulletedListElement
    | MyNumberedListElement
    | MyTodoListElement
    | MyImageElement
    | MyMediaEmbedElement
    | MyHrElement;

export type EditorValue = MyRootBlock[];

/**
 * Editor types
 */

export type MyEditor = PlateEditor<EditorValue> & { isDragging?: boolean };
export type MyReactEditor = TReactEditor<EditorValue>;
export type MyNode = ENode<EditorValue>;
export type MyNodeEntry = ENodeEntry<EditorValue>;
export type MyElement = EElement<EditorValue>;
export type MyElementEntry = EElementEntry<EditorValue>;
export type MyText = EText<EditorValue>;
export type MyTextEntry = ETextEntry<EditorValue>;
export type MyElementOrText = EElementOrText<EditorValue>;
export type MyDescendant = EDescendant<EditorValue>;
export type MyMarks = EMarks<EditorValue>;
export type MyMark = keyof MyMarks;

/**
 * Plate types
 */

export type MyDecorate<P = PluginOptions> = Decorate<P, EditorValue, MyEditor>;
export type MyDecorateEntry = DecorateEntry<EditorValue>;
export type MyDOMHandler<P = PluginOptions> = DOMHandler<P, EditorValue, MyEditor>;
export type MyInjectComponent = InjectComponent<EditorValue>;
export type MyInjectProps = InjectProps<EditorValue>;
export type MyKeyboardHandler<P = PluginOptions> = KeyboardHandler<
    P,
    EditorValue,
    MyEditor
>;
export type MyOnChange<P = PluginOptions> = OnChange<P, EditorValue, MyEditor>;
export type MyOverrideByKey = OverrideByKey<EditorValue, MyEditor>;
export type MyPlatePlugin<P = PluginOptions> = PlatePlugin<
    P,
    EditorValue,
    MyEditor
>;
export type MyPlatePluginInsertData = PlatePluginInsertData<EditorValue>;
export type MyPlatePluginProps = PlatePluginProps<EditorValue>;
export type MyPlateProps = PlateProps<EditorValue, MyEditor>;
export type MySerializeHtml = SerializeHtml<EditorValue>;
export type MyWithOverride<P = PluginOptions> = WithOverride<
    P,
    EditorValue,
    MyEditor
>;

/**
 * Plate store, Slate context
 */

export const getMyEditor = (editor: MyEditor) =>
    getTEditor<EditorValue, MyEditor>(editor);
export const useMyEditorRef = () => useEditorRef<EditorValue, MyEditor>();
export const useMyEditorState = () => useEditorState<EditorValue, MyEditor>();
export const useMyPlateEditorRef = (id?: PlateId) =>
    usePlateEditorRef<EditorValue, MyEditor>(id);
export const useMyPlateEditorState = (id?: PlateId) =>
    usePlateEditorState<EditorValue, MyEditor>(id);
export const useMyPlateSelectors = (id?: PlateId) =>
    usePlateSelectors<EditorValue, MyEditor>(id);
export const useMyPlateActions = (id?: PlateId) =>
    usePlateActions<EditorValue, MyEditor>(id);
export const useMyPlateStates = (id?: PlateId) =>
    usePlateStates<EditorValue, MyEditor>(id);

/**
 * Utils
 */
export const createMyEditor = () => createTEditor() as MyEditor;
export const createMyPlateEditor = (
    options: CreatePlateEditorOptions<EditorValue, MyEditor> = {}
) => createPlateEditor<EditorValue, MyEditor>(options);
export const createMyPluginFactory = <P = PluginOptions>(
    defaultPlugin: PlatePlugin<NoInfer<P>, EditorValue, MyEditor>
) => createPluginFactory(defaultPlugin);
export const createMyPlugins = (
    plugins: MyPlatePlugin[],
    options?: {
        components?: Record<string, PlatePluginComponent>;
        overrideByKey?: MyOverrideByKey;
    }
) => createPlugins<EditorValue, MyEditor>(plugins, options);

export type MyAutoformatRule = AutoformatRule<EditorValue, MyEditor>;
