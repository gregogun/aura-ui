import { createStitches, PropertyValue, ScaleValue, CSS as StitchesCSS } from '@stitches/react';
import {
  slate,
  slateDark,
  blue,
  blueDark,
  green,
  greenDark,
  red,
  redDark,
  yellow,
  yellowDark,
  crimson,
  crimsonDark,
  orange,
  orangeDark,
  violet,
  violetDark,
  blackA,
  whiteA,
} from './colors';

export const { styled, css, config, theme, createTheme, reset, getCssText, globalCss, keyframes } =
  createStitches({
    theme: {
      colors: {
        // neutrals
        ...slate,
        // for white text
        ...red,
        ...crimson,
        ...violet,
        ...blue,
        ...green,
        ...orange,
        // for black text
        ...yellow,
        // overlays
        ...blackA,
        ...whiteA,

        // custom
        focus: '$colors$blue8',
        slateSolidHover: 'hsl(206, 6.0%, 18.5%)',
        slateSolidActive: 'hsl(206, 6.0%, 25.5%)',
      },
      fonts: {
        body: 'ui-sans-serif,system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        heading:
          'ui-sans-serif,system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
      },
      fontSizes: {
        1: '.75rem',
        2: '.875rem',
        3: '1rem',
        4: '1.125rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.875rem',
        8: '2.25rem',
        9: '3rem',
        10: '3.75rem',
        11: '4.5rem',
        12: '6rem',
      },
      fontWeights: {
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600,
        7: 700,
        8: 800,
        9: 900,
      },
      lineHeights: {
        1: '1rem',
        2: '1.25rem',
        3: '1.5rem',
        4: '1.75rem',
        5: '1.75rem',
        6: '2rem',
        7: '2.25rem',
        8: '2.5rem',
        9: '3rem',
        10: '3.75rem',
        11: '4.5rem',
        12: '6rem',
      },
      radii: {
        1: '4px',
        2: '6px',
        3: '8px',
        4: '12px',
        5: '20px',
        round: '50%',
        pill: '9999px',
      },
      zIndices: {
        hide: -1,
        auto: 'auto',
        base: 0,
        docked: 10,
        dropdown: 1000,
        sticky: 1100,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800,
      },
      space: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        30: '120px',
      },
      sizes: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        16: '64px',
        20: '80px',
        30: '120px',
        40: '160px',
        50: '200px',
        60: '240px',
        80: '320px',
        100: '400px',
        120: '480px',
      },
      shadows: {
        1: '0px 1px 2px rgba(0, 0, 0, 0.05)',
        2: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        3: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        4: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        5: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        6: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
    },
    media: {
      bp1: '(min-width: 520px)',
      bp2: '(min-width: 700px)',
      bp3: '(min-width: 1200px)',
      bp4: '(min-width: 1800px)',
      reducedMotion: '(prefers-reduced-motion)',
      hover: '(any-hover: hover)',
      dark: '(prefers-color-scheme: dark)',
      light: '(prefers-color-scheme: light)',
    },
    utils: {
      p: (value: PropertyValue<'padding'>) => ({
        padding: value,
      }),
      pd: (value: PropertyValue<'padding'>) => ({
        padding: value,
      }),
      pt: (value: PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        'supports( padding-block-start: var(--space-1) )': {
          paddingTop: 'unset',
          paddingBlockStart: value,
        },
      }),
      pr: (value: PropertyValue<'paddingRight'>) => ({
        paddingRight: value,
        'supports( padding-inline-end: var(--space-1) )': {
          paddingRight: 'unset',
          paddingInlineEnd: value,
        },
      }),
      pb: (value: PropertyValue<'paddingBottom'>) => ({
        paddingBottom: value,
        'supports( padding-block-end: var(--space-1) )': {
          paddingBottom: 'unset',
          paddingBlockEnd: value,
        },
      }),
      pl: (value: PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        '@supports( padding-inline-start: var(--space-1) )': {
          paddingLeft: 'unset',
          paddingInlineStart: value,
        },
      }),
      px: (value: PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
        'supports( padding-inline-start: var(--space-1) )': {
          paddingLeft: 'unset',
          paddingRight: 'unset',
          paddingInlineStart: value,
          paddingInlineEnd: value,
        },
      }),
      py: (value: PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
        'supports( padding-block-start: var(--space-1) )': {
          paddingTop: 'unset',
          paddingBottom: 'unset',
          paddingBlockStart: value,
          paddingBlockEnd: value,
        },
      }),

      m: (value: PropertyValue<'margin'>) => ({
        margin: value,
      }),
      mt: (value: PropertyValue<'marginTop'>) => ({
        marginTop: value,
        'supports( margin-block-start: var(--space-1) )': {
          marginTop: 'unset',
          marginBlockStart: value,
        },
      }),
      mr: (value: PropertyValue<'marginRight'>) => ({
        marginRight: value,
        'supports( margin-inline-end: var(--space-1) )': {
          marginRight: 'unset',
          marginInlineEnd: value,
        },
      }),
      mb: (value: PropertyValue<'marginBottom'>) => ({
        marginBottom: value,
        'supports( margin-block-end: var(--space-1) )': {
          marginBottom: 'unset',
          marginBlockEnd: value,
        },
      }),
      ml: (value: PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        'supports( margin-inline-start: var(--space-1) )': {
          marginLeft: 'unset',
          marginInlineStart: value,
        },
      }),
      mx: (value: PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
        'supports( margin-inline-start: var(--space-1) )': {
          marginLeft: 'unset',
          marginRight: 'unset',
          marginInlineStart: value,
          marginInlineEnd: value,
        },
      }),
      my: (value: PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
        'supports( margin-block-start: var(--space-1) )': {
          marginTop: 'unset',
          marginBottom: 'unset',
          marginBlockStart: value,
          marginBlockEnd: value,
        },
      }),
      bg: (value: PropertyValue<'backgroundColor'>) => ({
        backgroundColor: value,
      }),
      br: (value: PropertyValue<'borderRadius'>) => ({
        borderRadius: value,
      }),
      btrr: (value: ScaleValue<'radii'>) => ({
        borderTopRightRadius: value,
      }),
      bbrr: (value: ScaleValue<'radii'>) => ({
        borderBottomRightRadius: value,
      }),
      bblr: (value: ScaleValue<'radii'>) => ({
        borderBottomLeftRadius: value,
      }),
      btlr: (value: ScaleValue<'radii'>) => ({
        borderTopLeftRadius: value,
      }),
      ox: (value: PropertyValue<'overflowX'>) => ({ overflowX: value }),
      oy: (value: PropertyValue<'overflowY'>) => ({ overflowY: value }),

      w: (value: PropertyValue<'width'>) => ({ width: value }),
      h: (value: PropertyValue<'height'>) => ({ height: value }),
      maxW: (value: PropertyValue<'maxWidth'>) => ({ maxWidth: value }),
      maxH: (value: PropertyValue<'maxHeight'>) => ({ maxHeight: value }),

      size: (value: PropertyValue<'width'>) => ({
        width: value,
        height: value,
      }),

      shadow: (value: PropertyValue<'boxShadow'>) => ({
        boxShadow: value,
      }),

      userSelect: (value: PropertyValue<'userSelect'>) => ({
        WebkitUserSelect: value,
        userSelect: value,
      }),
      appearance: (value: PropertyValue<'appearance'>) => ({
        WebkitAppearance: value,
        appearance: value,
      }),
      backgroundClip: (value: PropertyValue<'backgroundClip'>) => ({
        WebkitBackgroundClip: value,
        backgroundClip: value,
      }),
    },
  });

const darkModeConfig = {
  colors: {
    // neutrals
    ...slateDark,

    // for white text

    ...redDark,
    ...crimsonDark,
    ...violetDark,
    ...blueDark,
    ...greenDark,
    ...orangeDark,

    // for black text
    ...yellowDark,

    // custom
    focus: '$colors$blue10',
    slateSolidHover: 'hsl(206, 6.0%, 87.0%)',
    slateSolidActive: 'hsl(206, 6.0%, 78.0%)',
  },
};

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  'html, body': {
    padding: 0,
    margin: 0,
    fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
});

globalStyles();

export const darkTheme = createTheme('dark-theme', darkModeConfig);
export type CSS = StitchesCSS<typeof config>;
export type { ComponentProps, VariantProps, PropertyValue, ScaleValue } from '@stitches/react';
