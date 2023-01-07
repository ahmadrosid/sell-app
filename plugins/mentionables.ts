import { TComboboxItem } from '@udecode/plate'
import { FormatListBulleted } from '@styled-icons/material/FormatListBulleted'
import { CheckBox } from '@styled-icons/material/CheckBox'
import { Code } from '@styled-icons/material/Code'
import { Link } from '@styled-icons/material/Link'
import { AlternateEmail } from '@styled-icons/material/AlternateEmail'
import { Title } from '@styled-icons/material/Title'
import { StyledIcon } from '@styled-icons/styled-icon';

type CommandItemProps = {
    icon: StyledIcon,
    value: string
}

export const TEXT_EDITOR_COMMANDS: TComboboxItem<CommandItemProps>[] = [
    {
        key: 'heading1',
        text: 'Heading 1',
        data: { icon: Title, value: 'heading1' },
    },
    {
        key: 'heading2',
        text: 'Heading 2',
        data: { icon: Title, value: 'heading2' },
    },
    {
        key: 'bullist',
        text: 'Bulleted list',
        data: { icon: FormatListBulleted, value: 'bullist' },
    },
    {
        key: 'mention',
        text: 'Mention person',
        data: { icon: AlternateEmail, value: 'mention' },
    },
    {
        key: 'check',
        text: 'Checklist',
        data: { icon: CheckBox, value: 'check' },
    },
    {
        key: 'cod',
        text: 'Code block',
        data: { icon: Code, value: 'cod' },
    },
    {
        key: 'hyp',
        text: 'Hyperlink',
        data: { icon: Link, value: 'hyp' },
    },
];
