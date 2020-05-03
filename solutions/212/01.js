
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (board, words) => {
};

const buildTrie = (paths, nullNode = '$') => {
  const trie = new Map();

  paths.forEach(path => {
    let node = trie, child = undefined;

    for(const x of path) {
      if(undefined === (child = node.get(x))) {
        child = new Map();
        node.set(x, child);
      }
      node = child;
    }

    node.set(nullNode, path);
  });

  return trie;
};

const log = console.log;
const words = ['oath', 'dig', 'dog', 'dogs'];
const trie = buildTrie(words);
