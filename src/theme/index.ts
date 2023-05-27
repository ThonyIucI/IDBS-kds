import { DefaultTheme } from 'styled-components';

const colors = {
    primary: '#032b43',
    secondary: '#3f88c5',
    success: '#136f63',
    error: '#d00000',
    info: '#ffba08',
    text:'black'
};

const mediaQueries = {
    xsmall: 'only screen and (max-width: 300px)',
    small: 'only screen and (max-width: 600px)',
    medium: 'only screen and (max-width: 960px)',
    large: 'only screen and (min-width: 961px)',
};

const theme: DefaultTheme = {
    colors,
    mediaQueries,
};

export default theme;