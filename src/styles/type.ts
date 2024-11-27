export type Theme = {
    colors: {
        primary: string;
        secondary: string;
        background1: string;
        background2: string;
    };
    fonts: {
        primary: string;
    };
    fontSize: {
        size12: string;
        size14: string;
        size16: string;
        size18: string;
        size20: string;
        size30: string;
        size60: string;
        size100: string;
    };
    fontWeight: {
        weight200: string;
        weight300: string;
        light: string;
        medium: string;
        semibold: string;
        bold: string;
        extrabold: string;
        dark: string;
    };
    textLineHeight: {
        normal: string;
        medium: string;
        extra: string;
    };

    padding: {
        btnPadding: string;
    },

    margin:{
        linkMargin: string;
    };

    borderRadius:{
        radius: string;
    },

    texttransform: {
        upper: string;
        lower: string;
    }
};
