'use strict';

function assign(element, mixins) {
  mixins.forEach(function(mixin) {
    const { name } = mixin;

    element[name] = mixin;
  });
}

function unassign(element, mixins) {
  mixins.forEach(function(mixin) {
    const { name } = mixin;

    delete element[name];
  });
}

module.exports = {
  assign: assign,
  unassign: unassign
};
