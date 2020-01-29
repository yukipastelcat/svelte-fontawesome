import normalizeIconArgs from '../src/normalize-icon-args';

describe(`💫 ${normalizeIconArgs.name}()`, () => {
  const EXPECTED_KEYS = ['prefix', 'iconName'];
  test('undefined', () => {
    const result = normalizeIconArgs(undefined);
    expect(result).toBe(undefined);
  })
  test('null', () => {
    const result = normalizeIconArgs(null);
    expect(result).toBe(null);
  });
  test('""', () => {
    const result = normalizeIconArgs('');
    expect(EXPECTED_KEYS.every(key => Object.keys(result).includes(key))).toBe(true);
  });
  test('string value', () => {
    const result = normalizeIconArgs('brain');
    expect(result).toHaveProperty('prefix', 'fas');
    expect(result).toHaveProperty('iconName', 'brain');
  });
  test('array value', () => {
    const result = normalizeIconArgs(['fab', 'github']);
    expect(result).toHaveProperty('prefix', 'fab');
    expect(result).toHaveProperty('iconName', 'github');
  });
  test('object value', () => {
    const result = normalizeIconArgs({
      prefix: 'fab', 
      iconName: 'github'
    });
    expect(result).toHaveProperty('prefix', 'fab');
    expect(result).toHaveProperty('iconName', 'github');
  });
  test('incorrect object value', () => {
    const result = normalizeIconArgs({
      you: 'expected an icon definition here,', 
      but: 'it was me, Dio!'
    });
    expect(result).toBe(undefined);
  });
});
