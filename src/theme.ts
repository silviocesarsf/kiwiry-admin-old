import { createTheme, MantineTheme, MultiSelect } from "@mantine/core";

const greenPalette = [
  "#eef6e5", // 0 - muito claro
  "#d3e8b8", // 1
  "#b8da8b", // 2
  "#9dcc5e", // 3
  "#82be31", // 4
  "#5A900E", // 5 - base
  "#4e800c", // 6
  "#426f0a", // 7
  "#365f08", // 8
  "#2a4f06", // 9 - muito escuro
] as const;

export const theme = createTheme({
    fontFamily: 'Inter, sans-serif',
    primaryColor: 'green',
    colors: {
        green: greenPalette
    },
    components: {
        Button: {
            defaultProps: {
                size: 'md',
                radius: 'md'
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