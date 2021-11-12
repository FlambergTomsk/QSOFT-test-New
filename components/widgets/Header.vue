<template>
  <div
    class="header"
  >
    <div class="header__panel panel">
      <img
        src="~/static/logo.svg"
        alt="Logo"
        class="panel__logo"
      >
      <custom-area
        v-model="search"
        class="panel__search"
        is-hide-error
        placeholder="Найти..."
      />
      <div class="panel__profile profile">
        <div class="profile__name">
          {{ name }}
        </div>
        <div class="profile__picture">
          <img
            src="~/static/profile.png"
            alt="Profile logo"
            class="profile__logo"
          >
          <img
            src="~/static/userIcon.svg"
            alt="Profile logo"
            class="profile__icon"
          >
        </div>
      </div>
    </div>
    <custom-area
      v-model="search"
      class="header__search"
      is-hide-error
      placeholder="Найти..."
    />
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      name: 'Константин',
      search: '',
    };
  },
  watch: {
    search() {
      this.setSearchValue(this.search);
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    ...mapActions({
      setSearchValue: 'data/setSearchValue',

    }),
    handleScroll() {
      const obj = document.querySelector('.panel');
      if (window.pageYOffset > 150) {
        obj.classList.add('panel_fixed');
      } else {
        obj.classList.remove('panel_fixed');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header{
  transition: 0.5s;
  font-family: $Roboto;
  font-size: 14px;
  font-style: normal;
  flex-wrap: wrap;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.01em;
  text-align: right;
  color: $greySearch;
  -webkit-box-shadow:0px 3px 10px $greyShadow;
  -moz-box-shadow:0px 3px 10px $greyShadow;
  box-shadow:0px 3px 10px $greyShadow;
  display: flex;
  justify-content: center;

  &__search{
    display: none;
  }

  &__panel{
    max-width: 1170px;
    height: 80px;
    margin: 0 auto 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $white;
    z-index: 2000;
    width: 100%;
   }
}
.panel{
  transition: 0.5s;
  &_fixed{
    margin: 0 auto;
    max-height: 60px;
    max-width: 1170px;
    width: 100%;
    background-color: $white;
    border-radius: 0 0 10px 10px;
    animation-duration: 1s;
    border-top: none;
    animation-name: show_header;
    box-shadow:0px 3px 10px $greyShadow;
    z-index: 2000;
    position: fixed;
    top: 0;
  }
  &__search{
    padding: 0 60px 0 61px;
    width: 100%;
    align-self: center;
  }
  &__logo{
    max-width: 135px;
  }
}
.profile{
  display: flex;
  align-items: center;
  border-left: 1px solid $greyBorder;
  height: 100%;
    &__name{
    padding: 0 10px 0 19px;
  }
  &__logo{
    min-width: 40px;
    min-height: 40px;
  }
  &__icon{
    display: none;
  }
}
@keyframes show_header {
  0%{
    opacity: 0;
    top: -100px
  }
  100%{
    opacity: 1;
    top:0;
  }
}

@include _1199{
  .header{
    &__panel{
      padding: 0 20px;
    }
  }
  .panel{
    &__search{
      padding: 0 50px;
    }
  }
}

@include _767{
  .panel{
    &__search{
      display: none;
    }
  }
  .header{
    &__search{
      display: block;
      width: 100%;
    }
  }
}

@include _575{
  .profile{
    border: none;
    &__name{
      display: none;
    }
    &__logo{
      display: none;
    }
    &__icon{
      display: block;
    }
  }
  .header{
    &__panel{
      max-height: 63px;
    }
  }
}
</style>
