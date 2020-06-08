import { openBlock, createBlock, renderSlot } from 'vue';

//
//
//
//
//
//

var script = {

};

function render(_ctx, _cache) {
  return (openBlock(), createBlock("button", null, [
    renderSlot(_ctx.$slots, "default")
  ]))
}

script.render = render;
script.__file = "src/components/BaseButton/BaseButton.vue";

//
//
//
//

var script$1 = {

};

const _hoisted_1 = {
  type: "text",
  name: "",
  id: ""
};

function render$1(_ctx, _cache) {
  return (openBlock(), createBlock("input", _hoisted_1))
}

script$1.render = render$1;
script$1.__file = "src/components/BaseInput/BaseInput.vue";

export { script as BaseButton, script$1 as BaseInput };
