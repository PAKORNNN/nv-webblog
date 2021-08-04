<template>
<div>
    <h2>Get All Users</h2> 
    <h4> จำนวนผู้ใช้งาน {{ users.length }}</h4>
    <p> 
        <button v-on:click="navigateTo('/user/create')"> สร้างผู้ใช้งาน </button> 
        </p>
    <div v-for="users in users" v-bind:key="users.id">
        <p>id: {{ users.id }}</p>
        <p>ชื่อ-นามสกุล: {{ users.name }} - {{ users.lastname }}</p>
        <p>Email: {{ users.email }}</p>
        <p>Password: {{ users.password }}</p>
        <p><button v-on:click="navigateTo('/user/' + users.id)"> ดูข้อมูลผู้ใช้ </button>
            <button v-on:click="navigateTo('/user/edit/' + users.id)"> แก้ไขข้อมูล </button>
            <button v-on:click="deleteUser(user)"> ลบข้อมูล </button>
        </p>
        <hr>
   </div>
</div>
</template>
<script>

import UsersService from '@/services/UsersService'   

export default { 
    data(){
        return {
            users: [],
        };
    },
    async created() {
        try {
            this.users = (await UsersService.index()).data;
        } catch (error) {
            console.log(error);
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        },
        async deleteUser(user){
             let result = confirm("Want to delete")
             if(result) { 
                try{
                    await UsersService.delete(user)
                    this.refreshData()
                }catch(err){
                    console.log(err)
                }
            } 
        },
        async refreshData(){
            this.users = (await UsersService.index()).data
        }
    },
};
</script>
<style scoped>


</style>
