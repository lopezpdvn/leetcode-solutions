const f = s => {
  if(typeof s !== 'string')
    throw new Error();

  let a = 1, b = 1, answer;
  if(!s.length) return a;
  if(s.length === 1) return b;

  for(let i = 2; i <= s.length; i++) {
    answer = 0;

    if(s[i-1] !== '0')
      answer += b;

    const digit2 = parseInt(s.substring(i - 2, i));
    if(10 <= digit2 && digit2 <= 26)
      answer += a;

    a = b;
    b = answer;
  }

  return answer;
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
