<template>
    <div class="allbooks">
        <h2>Book Collection</h2>
        <div class="row">
            <div class="column" v-for="(item, key) in items" :key="key">
                <div class="card">
                    <img class="card-img-top" :src="item.image" alt="Card image cap">
                    <div class="card-body">
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
</template>

<script>
export default {
     data() {
    return {
      windowSize: 3,
      items: []
    };
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
    }
  }
}
</script>

<style scoped>
.allbooks {
    margin-top: 100px;
    position: absolute;
    margin-left: 40px;
}
h2 {
    font-weight: 500;
    font-size: 30px;
    color: #162D5A;
}
.column{
    float: left;
    width: 33%;
    padding: 15px;
    margin-left: -10px;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.card {
    height: 600px;
  margin: 0 15px;
  background: #DDE6E8;
  border: 1px solid #8A8F83;
  box-sizing: border-box;
  cursor: pointer;
  margin-bottom: 2px;
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