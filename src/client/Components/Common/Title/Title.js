import { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';

const Title = css`
    text-align:center;
    font-size:${Themes.fontsize.h3};
    font-weight:${Themes.fontWeight.bold};
    color:${Themes.colors.black};
        ${breakpoint('md')`
        font-size:${Themes.fontsize.h2};
        `}
`
export default Title;