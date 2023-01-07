import { TEditableProps } from "@udecode/plate";
import { EditorValue } from "../types/plateTypes";

export const editorProps: TEditableProps<EditorValue> = {
    spellCheck: false,
    autoFocus: false,
    placeholder: "Type here..."
}