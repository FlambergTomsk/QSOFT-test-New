<template>
  <div class="content">
    <div class="content__field field">
      <div class="field__title">
        НАШИ ПАРТНЕРЫ
      </div>
      <div class="field__partners partners">
        <div
          v-for="(item, j) in filteredPartners"
          :key="`item-${item}-${j}`"
          class="partners__item item"
        >
          <img
            :src="item.logo"
            alt="Company logo"
            :class="item.class"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Content',
  data() {
    return {
      partners: [
        {
          name: 'Henkel',
          logo: require('~/static/henkel.svg'),
        },
        {
          name: 'John Deere',
          logo: require('~/static/johnDeeree.svg'),
        },
        {
          name: 'McDonalds.svg',
          logo: require('~/static/mcDonalds.svg'),
        },
        {
          name: 'Ikea',
          logo: require('~/static/ikea.svg'),
        },
        {
          name: 'Reebok',
          logo: require('~/static/reebok.svg'),
        },
        {
          name: 'Nike',
          logo: require('~/static/nike.svg'),
        },
        {
          name: 'Caterpillar',
          logo: require('~/static/caterpillar.svg'),
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      searchValue: 'data/getSearchValue',
    }),
    filteredPartners() {
      return this.partners.filter((item) => item.name.toLowerCase().includes(this.searchValue.toLowerCase()));
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {

    handleScroll() {
      const obj = document.querySelector('.field');
      if (window.pageYOffset > 150) {
        obj.classList.add('field_fixed');
      } else {
        obj.classList.remove('field_fixed');
      }
    },
  },

};
</script>

<style lang="scss" scoped>
.content{
  transition: 0.5s;
  &__field{
    margin: 70px 0 73px 0;
  }
}

.field{
  transition: 0.5s;
  &__partners{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
  }
  &_fixed{
    margin-top: 150px;
  }

  &__title{
    font-size: 36px;
    font-weight: 500;
    line-height: 58px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 20px;
  }
}
.partners{
  transition: 0.5s;
  &__item{
    width: 270px;
    height: 120px;
    border: 1px solid $greyBorder;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      box-shadow: -3px 0 40px rgba(0, 0, 0, 0.1);
    }
  }
}

@include _1199{
  .content{
    &__field{
      padding: 0 20px;
    }
  }

  .field{
    &__partners{
      transition: 1s;
      gap: 20px;
    }
  }

  .partners{
    &__item{
      width: 229px;
    }
  }
}

@include _767{
  .field{
    &__partners{
      justify-content: space-around;
    }
  }
}
@include _575{
  .partners{
    &__item{
      width: 335px;
    }
  }
}
</style>
