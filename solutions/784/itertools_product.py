from itertools import product

def f(s, digits = '0123456789'):
    char_tuples = ((c,) if c in digits
                   else (c.lower(), c.upper())
                   for c in s)

    for x in product(*char_tuples):
        yield ''.join(x)

assert (*f('')     ,) == ('',)
assert (*f('a1b2') ,) == ('a1b2', 'a1B2',
                          'A1b2', 'A1B2')
assert (*f('3z4')  ,) == ('3z4', '3Z4')
assert (*f('12345'),) == ('12345',)
