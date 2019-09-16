import countTimePassed from './countTimePassed';

describe('countTimePassed', () => {
    it('returns a number of seconds passed', () => {
        const result = countTimePassed(2000, 1000);
        expect(result).toBe(1);
    });

    it('returns 0 when invalid input value provided', () => {
        const result = countTimePassed();
        expect(result).toBe(0);

        expect(countTimePassed(1000, null)).toBe(0);
        expect(countTimePassed(null, 1000)).toBe(0);
        expect(countTimePassed(null)).toBe(0);
        expect(countTimePassed(true, true)).toBe(0);
        expect(countTimePassed('', '')).toBe(0);
        expect(countTimePassed('test', 'test')).toBe(0);
        expect(countTimePassed(-5000, -8000)).toBe(0);
        expect(countTimePassed(1000, 8000)).toBe(0);
    });
});
