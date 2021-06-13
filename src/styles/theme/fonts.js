export const fonts = Object.freeze({
  family: "'Heebo', sans-serif",
  sizes: {
    xs: '.75rem',
    sm: '.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '1.75rem'
  },
  weight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900
  },
})

export const fontsPropName = Object.freeze({
  sizes: Object.freeze(Object.keys(fonts.sizes)),
  weight: Object.freeze(Object.keys(fonts.weight)),
})
