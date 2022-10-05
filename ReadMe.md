expect : this function just check expect value is this.

toBe : function check it value equal or not.

toEqual :  If you want to check the value of an object, toEqual recursively checks every field of an object or array.

not : not is a keyword it behave like a ! euqal operator


Truthiness functions : 
toBeNull : check value must be null

toBeDefined : check value must be defined

toBeUndefined : check value must be undefined

toBeTruthy :  check value must be true

toBeFalsy :  check value must be false


Numbers Functions : 
toBeGreaterThan : check value must be greater than
toBeGreaterThanOrEqual : check value must be greater than or equal
toBeLessThan : check value must be less than
toBeLessThanOrEqual : check value must be less than or equal

For floating point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error.


String Functions : 
toMatch : You can check strings against regular expressions with toMatch function


Array functions : 
toContain : You can check if an array or iterable contains a particular item using toContain.