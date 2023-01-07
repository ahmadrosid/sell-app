import {
    CodeBlockElement,
    createPlateUI,
    ELEMENT_CODE_BLOCK,
    ELEMENT_PARAGRAPH,
    ELEMENT_H1,
    ELEMENT_H2,
    ELEMENT_H3,
    StyledElement,
    withProps,
} from '@udecode/plate';

export const plateUI = createPlateUI({
    [ELEMENT_CODE_BLOCK]: CodeBlockElement,
    [ELEMENT_PARAGRAPH]: withProps(StyledElement, {
        as: 'p',
        styles: {
            root: {
                marginTop: '3px',
                padding: '4px 0',
            },
        },
        prefixClassNames: 'p',
    }),
    [ELEMENT_H1]:withProps(StyledElement, {
        as: 'h1',
        styles: {
            root: {
                color: 'rgb(55, 53, 47)',
                fontSize: '40px',
                marginTop: '55px'
            },
        },
    }),
    [ELEMENT_H2]:withProps(StyledElement, {
        as: 'h2',
        styles: {
            root: {
                color: 'rgb(55, 53, 47)',
                fontSize: '1.5em',
                lineHeight: '1.3',
                fontWeight: '600'
            },
        },
    }),
    [ELEMENT_H3]:withProps(StyledElement, {
        as: 'h3',
        styles: {
            root: {
                color: 'rgb(55, 53, 47)',
            },
        },
    }),
});
