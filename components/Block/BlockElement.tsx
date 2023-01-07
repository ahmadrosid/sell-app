import React, { useEffect } from 'react';
import { createNode, getHandler, Value } from '@udecode/plate-core';
import { getRootProps } from '@udecode/plate-styled-components';
import { useFocused, useSelected } from 'slate-react';
import { getMentionElementStyles, MentionElementProps, insertNodes, setNodes, ELEMENT_H1, ELEMENT_DEFAULT, ELEMENT_H2, withPlaceholder } from '@udecode/plate';
import { MyH1Element, MyH2Element } from 'types/plateTypes';

export const BlockElement = <V extends Value>(
    props: MentionElementProps<V>
) => {
    const {
        attributes,
        children,
        nodeProps,
        element,
        prefix,
        onClick,
        renderLabel,
        editor
    } = props;

    const rootProps = getRootProps(props);

    const selected = useSelected();
    const focused = useFocused();

    const styles = getMentionElementStyles({ ...props, selected, focused });

    console.log({ element, props });
    console.log(editor.selection);

    // switch (element.value) {
    //     case "Heading 1":
    //         editor.insertNode(
    //             {
    //                 type: 'h2',
    //                 children: [
    //                     {
    //                         text: '🧱 Elements',
    //                     },
    //                 ],
    //             } as MyH2Element)
    //         return;
    //     case "Heading 2":
    //         editor.insertNode(
    //             {
    //                 type: 'h2',
    //                 children: [
    //                     {
    //                         text: '',
    //                     },
    //                 ],
    //             } as MyH2Element
    //         )
    //         return
    // }

    return (
        <span
            {...attributes}
            data-slate-value={element.value}
            className={styles.root.className}
            css={styles.root.css}
            contentEditable={false}
            onClick={getHandler(onClick, element)}
            {...rootProps}
            {...nodeProps}
        >
            {prefix}
            {renderLabel ? renderLabel(element) : element.value}
            {children}
        </span>
    );
};
