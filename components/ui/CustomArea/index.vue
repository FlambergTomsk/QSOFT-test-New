<template>
  <ValidationProvider
    v-slot="{errors}"
    tag="div"
    class="custom-area"
    :rules="rules"
    :name="name"
    :vid="vid"
    mode="eager"
    slim
  >
    <div class="custom-area__body">
      <span
        class="icon-search custom-area__search"
      />
      <input
        class="custom-area__input"
        :placeholder="placeholder"
        :value="value"
        :type="type"
        :autocomplete="autocomplete"
        @input="input"
      >
      <button
        v-if="isClose"
        class="custom-area__button"
        @click="clear()"
      >
        <span
          class="icon-cancel-circle custom-area__close"
        />
      </button>
    </div>
    <div
      v-if="!isHideError"
      class="custom-area__err"
    >
      {{ errors[0] }}
    </div>
  </validationprovider>
</template>
import Vue from 'vue';
<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: '',
    },
    isInput: {
      type: Boolean,
      default: false,
    },
    isTextArea: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: [String, Number],
      default: '',
    },
    errorText: {
      type: String,
      default: '',
    },
    tip: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isHideError: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    autocomplete: {
      type: String,
      default: 'on',
    },
    rules: {
      type: [String, Array, Object],
      description: 'Vee validate validation rules',
      default: '',
    },
    name: {
      type: String,
      description: 'Input name (used for validation)',
      default: '',
    },
    vid: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isClose: false,
    };
  },
  methods: {
    input($event) {
      this.$emit('input', $event.target.value, $event.target);
      this.isClose = true;
      if ($event.target.value === '') { this.isClose = false; }
    },

    clear() {
      this.$emit('input', '');
      this.isClose = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-area {
  position: relative;
  &__body {
    display: flex;
    align-items: center;
    position: relative;

    //&:focus-visible .custom-area__button{
    //  display: block;
    //}
  }
  &__search {
    position: absolute;
    left: 13px;
    &:before {
      font-size: 16px;
      background: $greySearch;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &__button{
    position: absolute;
    right: 13px;
    //display: none;
  }
  &__close {
    &:before {
      font-size: 16px;
      background: $greySearch;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &__err {
    color: $red;
    font-size: 12px;
    min-height: 23px;
  }
  &__input {
    font-family: $Roboto;
    background: $white;
    border-radius: 5px;
    border: 1px solid $greyBorder;
    padding: 12px 39px;
    transition: .5s;
    width: 100%;
    color: $greySearch;
    font-size: 14px;
    font-style: normal;
    line-height: 16.41px;
    letter-spacing: 0em;
    text-align: left;
    height: 40px;
    max-width:100%;
    box-sizing: border-box;
    &:focus {
      border-color:$red;
    }

    &::placeholder {
      color: $greyText;
      opacity: 0.5;
      line-height: 19px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0em;
      text-align: left;
    }
    &:hover {
      border-color:$red;
    }
    &_indent {
      padding-left: 100px;
    }
  }
}
@include _575 {
  .custom-area {
    &__left {
      padding-right: 10px;
    }
    &__err {
      min-height: 13px;
    }
  }
}

</style>
