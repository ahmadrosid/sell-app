import { AutoformatPlugin } from '@udecode/plate';
import { MyEditor, MyPlatePlugin, EditorValue } from '../types/plateTypes';
import { autoformatRules } from './autoformatRules';

export const autoformatPlugin: Partial<
  MyPlatePlugin<AutoformatPlugin<EditorValue, MyEditor>>
> = {
  options: {
    rules: autoformatRules as any,
    enableUndoOnDelete: true,
  },
};
