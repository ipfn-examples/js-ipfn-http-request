/**
 * @license
 * Copyright (c) 2017 Łukasz Kurowski <crackcomm@gmail.com>
 */

import { get } from '../src';

describe('HTTP', () => {
  it('should get github site', async () => {
    const { status, header, body } = await get('https://facebook.github.io/jest/');
    expect(status.code).toBe(200);
    expect(status.text).toBe('OK');
    expect(body.length).toBeGreaterThan(30);
    expect(Object.keys(header).length).toBeGreaterThanOrEqual(3);
  });
});
