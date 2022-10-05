function sum(a,b) {
    return a+b;
}

test('Sum of two no is : ', () => {
    expect(sum(2,5)).toBe(5);
});


beforeEach(() => { // this middleware function call always before all tests
    console.log("Database coonection start...");
})

afterEach(() => { // this middleware function call always after all tests
    console.log("Database coonection close...");
})

test('Sum of two no not equal to : ', () => {
    expect(sum(2,5)).not.toBe(5);
});

test('Value check :', () => {
    const n = 34;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('Numbers : ', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
})

var obj = {
    name : "aman",
    age : 12
}

test('Object checking : ', () => {
    expect(obj).toEqual({
        name : "aman",
        age : 12
    });
})


test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});