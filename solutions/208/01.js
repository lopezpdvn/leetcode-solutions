'use strict'; const log = console.log; (async ()=>{

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;
    for(const currChar of word) {
      if(!node.containsKey(currChar))
        node.put(currChar, new TrieNode());
      node = node.get(currChar);
    }
    node.setEnd();
  };

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const node = this.searchPrefix(word);
    return !!node && node.isEnd;
  };

  // search a prefix or whole key in trie and
  // returns the node where search ends
  searchPrefix(word) {
    let node = this.root;
    for(const curChar of word) {
      if(node.containsKey(curChar))
        node = node.get(curChar);
      else
        return null;
    }
    return node;
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    const node = this.searchPrefix(prefix);
    return node !== null;
  };
}

class TrieNode {
  constructor() {
    this.isEnd = Boolean();
    this.links = new Array(TrieNode.R);
  }

  containsKey(ch) {
    const chIndex = ch.charCodeAt(0) -
                    TrieNode.aCharCode;
    return this.links[chIndex] !== undefined;
  }

  put(ch, node) {
    const chIndex = ch.charCodeAt(0) -
          TrieNode.aCharCode;
    this.links[chIndex] = node;
  }

  get(ch) {
    const chIndex = ch.charCodeAt(0) -
          TrieNode.aCharCode;
    return this.links[chIndex];
  }

  setEnd() {
    this.isEnd = true;
  }
}

TrieNode.R = 26;
TrieNode.aCharCode = 'a'.charCodeAt(0);

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

//const x = new Trie();
//const a = x.search('a');
//log(a);
// log(x.insert('apple'));
// log(x.search('apple'));
// log(x.search('app'));
// log(x.startsWith('app'));
// log(x.insert('app'));
// log(x.search('app'));

})();
