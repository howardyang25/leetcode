/**
 * Initialize your data structure here.
 */

const Node = function(char) {
  this.char = char;
  this.isWord = false;
  this.children = {};
}

var Trie = function() {
  this.head = new Node('');
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let curNode = this.head;
  for (let i = 0; i < word.length; i++) {
    if (curNode.children[word[i]]) {
      curNode = curNode.children[word[i]];
    } else {
      const charNode = new Node(word[i]);
      curNode.children[word[i]] = charNode;
      curNode = charNode;
    }
  }

  curNode.isWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let curNode = this.head;
  for (let i = 0; i < word.length; i++) {
    if (curNode.children[word[i]] === undefined) {
      return false;
    }

    curNode = curNode.children[word[i]];
  }

  return curNode.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let curNode = this.head;
  for (let i = 0; i < prefix.length; i++) {
    if (curNode.children[prefix[i]] === undefined) {
      return false;
    }
    
    curNode = curNode.children[prefix[i]];
  }
  
  if (curNode.isWord) {
    return true;
  }
  
  const traverse = (node) => {
    const children = Object.values(node.children);
    for (let i = 0; i < children.length; i++) {
      if (children[i].isWord) {
        return true;
      }

      return traverse(children[i]);
    }
  };

  if (traverse(curNode)) {
    return true;
  }

  return false;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

 const obj = new Trie();
 obj.insert('ab');
 console.log(obj.search('ab'));
 console.log(obj.startsWith('ab'));