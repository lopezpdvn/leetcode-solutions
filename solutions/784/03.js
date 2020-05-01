/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = S => {
  const digits = '0123456789';

  const sets = [...S].map(
    c => digits.includes(c) ? [c]
           : [c.toLowerCase(), c.toUpperCase()]);

  return cartesianProd(sets).map(s => s.join(''));
};

const cartesianProd = arrs => {
  if(!arrs || !arrs.length || arrs.some(a => !a))
    throw new Error('invalid input');

  if(arrs.some(a => !a.length))
    return [];

  let A = [[]];
  for(const a of arrs) {
    const _A = A;
    A = new Array(_A.length * a.length);

    let i = 0;
    for(const tuple of _A)
      for(const e of a)
        A[i++] = tuple.concat(e);
  }

  return A;
};
