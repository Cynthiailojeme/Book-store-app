<template>
    <div>
        <nav>
            <ul class="left">
                <li>Bookstore</li>
                <li class="lower">your store</li>
            </ul>

            <router-link :to="{name: 'home'}">
                <ul class="right">
                    <li><i class="fas fa-bars"></i></li>
                </ul>
            </router-link>
        </nav>
    </div>
</template>

<style scoped>
    nav {
        margin-right: 50px;
        margin-top: 30px;
        
    }
    ul {
        list-style: none;
    }
    .left {
        float: left;
        font-size: 32px;
        line-height: 37px;
        color: #162D5A;
        font-weight: bold;
    }
    .right {
        float: right;
        color: #000000;
        text-decoration: none;
    }
    .lower {
        font-size: 14px;
        line-height: 16px;
        color: #162D5A;
        margin-left: 90px;
    }
</style>