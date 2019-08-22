<template>
    <div class="books">
        <div class="header">
            <p class="small">FIND A TRUE COLLECTION OF BOOKS</p>
            <p class="large">Discover the largest book
            <br>collection in the world.</p>

            <router-link :to="{name: 'allbooks'}">
            <button>See Collection</button>
            </router-link>
        </div>

        <div class="dark" id="v-carousel" type="x/template">
            <div class="card-carousel-wrapper">
              <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"><img src="../assets/navleft.png" alt=""></div>
              <div class="card-carousel">
                <div class="card-carousel--overflow-container">
                  <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
                    <div class="card-carousel--card" v-for="(item, key) in items" :key="key">
                      <img :src="item.image" alt="">
                      <div class="card-carousel--card--footer">
                        <p class="bookname">{{ item.title }}</p>
                        <p class="price"><span>Price:</span>{{ item.price }}</p>
                        <p class="intro">{{ item.subtitle }}</p>
                        <router-link :to="{name: 'singlebook', params:{id: item.isbn13}}">
                        <p class="view">VIEW DETAILS</p>
                        </router-link>                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"><img src="../assets/navright.png" alt=""></div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 220,
      items: []
    };
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.items.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    }
  },
  created: function()
      {
          this.fetchItems();
      },
  methods: {
    fetchItems(){
          {
              this.$http.get('https://api.itbook.store/1.0/new').then((response) => {
                console.log(response.body.books);
                  this.items = response.body.books;
              });
          }
    },
      moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    }
  }
}
</script>

<style scoped>
.books {
    position: absolute;
    margin-top: 130px;
    font-family: Roboto;
    font-style: normal;
}
.header {
    margin-left: 40px;
}
.small {
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.07em;
    color: #162D5A;
}
.large {
    margin-top: 0px;
    font-weight: bold;
    font-size: 60px;
    line-height: 1.2;
    color: #162D5A;
}
button {
    margin-top: 40px;
    width: 234px;
    height: 70px;
    background: #FE6E4F;
    border-radius: 6px;
    font-size: 20px;
    color: #FFFFFF;
    border: none;
}
.dark {
    width: 1350px;
    height: 650px;
    margin-left: 0px;
    margin-top: 80px;
    background: #F4F3F1;
}
.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 40px;
  color: #666a73;
}
.card-carousel {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  width: 990px;
}
.card-carousel--overflow-container {
  overflow: hidden;
}
.card-carousel--nav__left {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  box-sizing: border-box;
  margin-right: 90px;
  transition: transform 150ms linear;
}
.card-carousel--nav__right {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  box-sizing: border-box;
  margin: 0 10px;
  transition: transform 150ms linear;
}
.card-carousel--nav__left[disabled], .card-carousel--nav__right[disabled] {
  opacity: 0.2;
  border-color: black;
}
.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}
.card-carousel-cards .card-carousel--card {
  margin: 0 15px;
  width: 300px;
  height: 600px;
  background: #DDE6E8;
  border: 1px solid #8A8F83;
  box-sizing: border-box;
  cursor: pointer;
  margin-bottom: 2px;
}
.card-carousel--card img {
  width: 300px;
  height: 400px;
  margin-top: -30px;
  transition: opacity 150ms linear;
  user-select: none;
}
.card-carousel-cards .card-carousel--card img:hover {
  opacity: 0.5;
}
.card-carousel-cards .card-carousel--card--footer {
  border-top: 0;
  padding: 7px 15px;
}
.bookname {
  font-weight: 500;
font-size: 18px;
color: #162D5A;
}
.author {
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  color: #9DB1BF;
}
.intro {
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  color: #162D5A;
}
.view {
  font-weight: bold;
  font-size: 15px;
  color: #FE6E4F;
}

</style>