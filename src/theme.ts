import { createTheme, MantineTheme, MultiSelect } from "@mantine/core";

const greenPalette = [
    '#e6f4ea',
    '#c7e8ca',
    '#a8d8aa',
    '#89c78a',
    '#6ab66a',
    '#4ba54a',
    '#8CB936',
    '#1d832a',
    '#1a7225',
    '#166120'
] as const;

export const theme = createTheme({
    fontFamily: 'Montserrat, sans-serif',
    primaryColor: 'green',
    colors: {
        green: greenPalette
    },
    components: {
        Button: {
            defaultProps: {
                size: 'md',
                radius: 'lg'
            }
        },
        Input: {
            styles: (theme: MantineTheme) => ({
                input: {
                    backgroundColor: theme.white,
                    color: theme.colors.gray[10],
                    '&:focus': {
                        borderColor: theme.colors.green[7],
                    },
                }
            }),
            defaultProps: {
                size: 'md',
                radius: 'md'
            },
        },
        Select: {
            styles: (theme: MantineTheme) => ({
                input: {
                    backgroundColor: theme.white,
                    color: theme.colors.gray[10],
                    '&:focus': {
                        borderColor: theme.colors.green[7],
                    },
                }
            }),
            defaultProps: {
                size: 'md',
                radius: 'md'
            },
        },
        MultiSelect: {
            styles: (theme: MantineTheme) => ({
                input: {
                    backgroundColor: theme.white,
                    color: theme.colors.gray[10],
                    '&:focus': {
                        borderColor: theme.colors.green[7],
                    },
                }
            }),
            defaultProps: {
                size: 'md',
                radius: 'md'
            },
        },
        Textarea: {
            styles: (theme: MantineTheme) => ({
                input: {
                    backgroundColor: theme.white,
                    color: theme.colors.gray[10],
                    '&:focus': {
                        borderColor: theme.colors.green[7],
                    },
                }
            }),
            defaultProps: {
                size: 'md',
                radius: 'md'
            },
        },
        Modal: {
            defaultProps: {
                size: 'xl',
                overlayProps: {
                    backgroundOpacity: 0.55,
                    blur: 3,
                }
            },
            styles: (theme: MantineTheme) => ({
                header: {
                    marginBottom: theme.spacing.md,
                    paddingTop: theme.spacing.sm,
                    paddingBottom: theme.spacing.sm,
                    color: theme.colors.gray[6]
                },
            }),
        }
    },
})