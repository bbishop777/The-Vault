
module.exports = function() {
'use strict';
  var vault = {};
  return {
   getValue: function (key) {
    if (key === undefined) {
      return null;
    }
    else if (key === vault.vault_key) {
      return vault.vault_value;
    }
    else if (key !== vault.vault_key) {
      return null;
    }
  },
   setValue: function (key, value) {
     vault.vault_key = key;
     vault.vault_value = value;

   }
  };
};


