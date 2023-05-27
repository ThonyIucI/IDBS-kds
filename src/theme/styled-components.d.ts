import 'styled-components';


// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        mediaQueries: {
            xsmall: string
            small: string
            medium: string
            large: string
        };


        colors: {
            primary: string;
            secondary: string;
            success: string;
            error: string;
            info: string;
            text: string
        };
    }
}