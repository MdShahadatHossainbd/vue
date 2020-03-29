new Vue({
 el: '#vue-app',
 data:{
   name:'Shahadat',
   job: 'Student',
   website: 'https://www.mdshahadat.com',
   website1: 'https://www.mdshahadat.com',
   websiteTag: '<a href="https://www.mdshahadat.com">Shahadat Hossain</a>'
 },
 methods: {
   greet: function(time){
     return 'Good'+" "+ time+" "+this.name;
   }
 }

});
