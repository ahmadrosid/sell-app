import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_PARAGRAPH, withPlaceholders } from '@udecode/plate'

export const withStyledPlaceHolders = (components: any) =>
    withPlaceholders(components, [
        {
            key: ELEMENT_PARAGRAPH,
            placeholder: "Type '/' for commands",
            hideOnBlur: true,
        },
        {
            key: ELEMENT_H1,
            placeholder: 'Untitled',
            hideOnBlur: false,
        },
        {
            key: ELEMENT_H2,
            placeholder: 'Heading 2',
            hideOnBlur: false,
        },
        {
            key: ELEMENT_H3,
            placeholder: 'Heading 3',
            hideOnBlur: true,
        },
    ])
