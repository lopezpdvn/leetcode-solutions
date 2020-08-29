const f = s => {
  if(typeof s !== 'string')
    throw new Error();

  let a = 1, b = 0;
  if(!s) return a;

  if(s[0] !== '0') b = 1;
  if(s.length === 1) return b;

  let c = undefined;
  for(let i = 2; i <= s.length; i++) {
    c = 0;
    const num = parseInt(s.substring(i - 2, i));
    if(10 <= num && num <= 26); c += a;

    if(s[i-1] !== '0') c += b;
    a = b;
    b = c;
  }

  return c;
};

const testSetup = [
  ['', 1],
  ['12', 2],
  ['226', 3],
  ['111', 3],
  ['2', 1]
], log = console.log;

for(const [arg, ans] of testSetup) {
  if(f(arg) !== ans)
    throw new Error(args);
}

log('OK!');
