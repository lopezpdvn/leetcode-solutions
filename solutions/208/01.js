'use strict'; const log = console.log; (async ()=>{

class Trie {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.words = new Set();
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    this.words.add(word);
  };

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    return this.words.has(word);
  };

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    for(const word of this.words)
      if(word.startsWith(prefix))
        return true;
    return false;
  };
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

})();
