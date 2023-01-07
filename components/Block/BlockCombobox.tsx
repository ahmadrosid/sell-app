import React from 'react';
import { Data, NoData, TComboboxItem } from '@udecode/plate-combobox';
import { getPluginOptions, PlateEditor, usePlateEditorRef } from '@udecode/plate-core';
import {
  ELEMENT_MENTION,
  getMentionOnSelectItem,
  MentionPlugin,
} from '@udecode/plate-mention';
import { Combobox, ComboboxProps } from '@udecode/plate-ui-combobox';
import { CommandItemProps, handleSelectCommand } from './blocks';
import { BlockComboboxItem } from './BlockComboboxItem';

export interface MentionComboboxProps<TData extends Data = NoData>
  extends Partial<ComboboxProps<TData>> {
  pluginKey?: string;
}

export const BlockCombobox = <TData extends CommandItemProps = CommandItemProps>({
  pluginKey = ELEMENT_MENTION,
  id = pluginKey,
  ...props
}: MentionComboboxProps<TData>) => {
  const editor = usePlateEditorRef();

  const { trigger } = getPluginOptions<MentionPlugin>(editor, pluginKey);

  return (
    <Combobox
      id={id}
      trigger={trigger!}
      controlled={true}
      onSelectItem={handleSelectCommand}
      onRenderItem={BlockComboboxItem}
      {...props}
    />
  );
};
