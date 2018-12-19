import { css } from 'styled-components';
import Themes from '../../../Assets/Styles/Themes';
import breakpoint from 'styled-components-breakpoint';

export default Text = css`
    font-size:${Themes.fontsize.p1};
    font-weight:${Themes.fontWeight.regular};
    line-height:26px;
    font-color:${Themes.colors.black};
        ${breakpoint('md')`
        font-size:${Themes.fontsize.p1};
        line-height:28px;
    `}
    
`