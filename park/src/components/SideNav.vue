<template>
    <div class="side-nav-container">

            <router-link to="/">
        <div class="profile">
            <img src="../assets/logo.png" alt="">
            <span>{{ name }}</span>
            <span>{{ job }}</span>
        </div>
         </router-link>
        <div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'ParkBeomMin',
            job: 'Developer'
        };
    },
}
</script>

<style scoped>
.side-nav-container {
    width: 25%;
    height: 100%;
    background: #eee;
}

.profile{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile img {
    width: 152px;
    height: 152px;
    border-radius: 50%;
    margin-bottom: 10px;
}
</style>
