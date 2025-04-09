import theme from './theme';

describe('Theme palette', () => {
  test('primary color palette', () => {
    expect(theme.palette.primary.main).toBe('#feea00');
    expect(theme.palette.primary.dark).toBe('#feea00');
    expect(theme.palette.primary.light).toBe('rgba(254, 234, 0, 0.6)');
    expect(theme.palette.primary.contrastText).toBe('rgba(254, 234, 0, 0.4)');
  });

  test('secondary color palette', () => {
    expect(theme.palette.secondary.dark).toBe('#c6a700');
    expect(theme.palette.secondary.main).toBe('#ef97e3');
    expect(theme.palette.secondary.light).toBe('rgba(239, 151, 227, 0.6)');
    expect(theme.palette.secondary.contrastText).toBe(
      'rgba(239, 151, 227, 0.4)',
    );
  });

  test('custom black palette', () => {
    expect(theme.palette.custom.black.highEmphasis).toBe('#000000');
    expect(theme.palette.custom.black.mediumEmphasis).toBe('#4a4a4a');
    expect(theme.palette.custom.black.lowEmphasis).toBe('#7a7a7a');
    expect(theme.palette.custom.black.transparent).toBe('rgba(0, 0, 0, 0.1)');
  });

  test('custom white palette', () => {
    expect(theme.palette.custom.white.highEmphasis).toBe('#ffffff');
    expect(theme.palette.custom.white.mediumEmphasis).toBe(
      'rgba(255, 255, 255, 0.6)',
    );
    expect(theme.palette.custom.white.lowEmphasis).toBe('#9f9f9f');
    expect(theme.palette.custom.white.transparent).toBe(
      'rgba(255, 255, 255, 0.1)',
    );
  });

  test('custom additional colors', () => {
    expect(theme.palette.custom.additional.green).toBe('#4caf50');
    expect(theme.palette.custom.additional.red).toBe('#f56969');
    expect(theme.palette.custom.additional.purple).toBe('#9c27b0');
    expect(theme.palette.custom.additional.blue).toBe('#0126E5');
    expect(theme.palette.custom.additional.lightBlue).toBe(
      '#94A9E8 !important',
    );
  });
});

describe('Theme typography', () => {
  test('font family', () => {
    expect(theme.typography.fontFamily).toBe(
      '"Mulish", "Roboto", "Helvetica", "Arial", sans-serif',
    );
  });

  test('title typography', () => {
    expect(theme.typography.title.fontSize).toBe(64);
    expect(theme.typography.title.fontWeight).toBe(800);
    expect(theme.typography.title.letterSpacing).toBe(0);
    expect(theme.typography.title.lineHeight).toBe(4.375);
  });

  test('h1 typography', () => {
    expect(theme.typography.h1.fontSize).toBe(40);
    expect(theme.typography.h1.fontWeight).toBe(800);
    expect(theme.typography.h1.letterSpacing).toBe(0);
    expect(theme.typography.h1.lineHeight).toBe(3);
  });

  test('h2 typography', () => {
    expect(theme.typography.h2.fontSize).toBe(32);
    expect(theme.typography.h2.fontWeight).toBe(800);
    expect(theme.typography.h2.letterSpacing).toBe(0);
    expect(theme.typography.h2.lineHeight).toBe(1.75);
  });

  test('body1 typography', () => {
    expect(theme.typography.body1.fontSize).toBe(20);
    expect(theme.typography.body1.fontWeight).toBe(800);
    expect(theme.typography.body1.lineHeight).toBe(1.875);
  });

  test('body2 typography', () => {
    expect(theme.typography.body2.fontSize).toBe(16);
    expect(theme.typography.body2.fontWeight).toBe(500);
    expect(theme.typography.body2.lineHeight).toBe(0);
  });

  test('caption typography', () => {
    expect(theme.typography.caption.fontSize).toBe(12);
    expect(theme.typography.caption.fontWeight).toBe(500);
    expect(theme.typography.caption.lineHeight).toBe(1.5);
  });
});
