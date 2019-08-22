<template>
    <div>
        <div class="single">
            <h2>Book Details</h2>
            <div class="row">
                <div class="column1">
                    <img :src="item.image" alt="book">
                </div>
                <div class="column2">
                    <p class="title">{{ item.title }}</p>
                    <p class="author">by: {{ item.authors }}</p>
                    <p class="publisher">Publisher: {{ item.publisher }}</p>
                    <p>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star ml-3"></i>
                        <i class="fa fa-star ml-3"></i>
                        <i class="fa fa-star ml-3"></i>
                        <i class="fas fa-star ml-3"></i>
					</p>
                    <router-link :to="{name: 'allbooks'}">
                    <button>Start Reading</button>
                    </router-link>
                    <router-link :to="{name: 'allbooks'}">
                    <button>Download</button>
                    </router-link>
                </div>
            </div>
            
            
            <div class="dark">
                <h3>SYNOPSIS</h3>
                <p class="desc">{{ item.desc }}</p>
            </div>
        </div>
        
    
        
    </div>
</template>

<script>
    export default{
        name:'singlebook',
        props: ['id'],
            data() {
                return{
                    apiResponse:{},
                    item: [],
                    error:{}
            }
    },
    components:{},
        mounted() {
            let id = this.$route.params.id
            this.$http.get('https://api.itbook.store/1.0/books/'+id)
            .then(response =>{
            console.log(response)
            this.item = response.data
            console.log(this.item)
            })
        }
    };
</script>


<style scoped>
.single {
    margin-top: 100px;
    position: absolute;
    font-family: Roboto;
}
h2 {
    font-weight: 500;
    font-size: 30px;
    color: #162D5A;
    margin-left: 40px;
}
img {
    height: 600px;
    width: 500px;
}
.column1 {
    float: left;
    width: 40%;
    margin-left: -25px;
}
.column2 {
    float: left;
    width: 40%;
    margin-top: 90px;
    margin-left: -80px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.title {
    font-weight: 500;
    font-size: 30px;
    color: #162D5A;
    margin-bottom: 20px;
}
.author {
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  color: #9DB1BF;
   margin-bottom: 20px;
}
.publisher {
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  color: #162D5A;
   margin-bottom: 20px;
}
.fa{
	margin-top: 10px;
	font-size: 30px;
    color: #FE6E4F;
    margin-bottom: 20px;
}
.fas {
   margin-top: 10px;
	font-size: 30px;
    color: #c4c4c4;
    margin-bottom: 20px; 
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
    margin-right: 20px; 
}
.dark {
    width: 1350px;
    height: 650px;
    margin-left: 0px;
    margin-top: 0px;
    background: #F4F3F1;
    align-items: center;
    justify-content: center;
}
h3 {
    margin-left: 40px;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: #162D5A;
    padding-top: 20px;
}
.desc {
    margin-left: 40px;
    margin-right: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
}
.pdf {
    margin-left: 40px;
    margin-right: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    letter-spacing: 0.02em
}
/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width:600px) {
  .column {
    width: 100%;
  }
}
</style>