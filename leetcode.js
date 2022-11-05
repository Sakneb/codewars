//Merge Two Sorted Lists
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 ? l1 : l2;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
//https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function (l1, l2) {
  let l3 = new ListNode();
  let curr = l3;
  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return l3.next;
};

//   14. Longest Common Prefix
//   Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function (strs) {
  "use strict";
  if (strs === undefined || strs.length === 0) {
    return "";
  }

  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};

var longestCommonPrefix = function (strs) {
  // Longest common prefix string
  let longestCommonPrefix = "";
  // Base condition
  if (strs == null || strs.length == 0) {
    return longestCommonPrefix;
  }
  // Find the minimum length string from the array
  let minimumLength = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    minimumLength = Math.min(minimumLength, strs[i].length);
  }
  // Loop for the minimum length
  for (let i = 0; i < minimumLength; i++) {
    // Get the current character from first string
    let current = strs[0][i];
    // Check if this character is found in all other strings or not
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] != current) {
        return longestCommonPrefix;
      }
    }
    longestCommonPrefix += current;
  }
  return longestCommonPrefix;
};


var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return '';
    var result = '';
    for(var i = 0; i < strs[0].length; i++) {
        if (strs.every(function (item) {
                return strs[0][i] === item[i];
            })) {
            result += strs[0][i];
        } else {
            break;
        }
    }
    return result;
};