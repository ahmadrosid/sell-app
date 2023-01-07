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

export const BLOCKS_EDITOR_COMMANDS: TComboboxItem<CommandItemProps>[] = [
    {
        key: 'h1',
        text: 'Heading 1',
        data: { icon: Title, value: 'heading1' },
    },
    {
        key: 'h2',
        text: 'Heading 2',
        data: { icon: Title, value: 'Heading 2' },
    },
    {
        key: 'h3',
        text: 'Heading 3',
        data: { icon: Title, value: 'Heading 3' },
    }
];
