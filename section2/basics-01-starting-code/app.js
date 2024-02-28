const app = Vue.createApp({
    data() {
        return {
            name: 'Doh Gwang Sun',
            age: 49,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            text: 'This is a paragraph',
        }
    },
    methods: {
        calculateAge(){
            return this.age + 5;
        },
        calculateRandomNumber(){
            return Math.random();
        }
    }
});

app.mount('#user-goal');



// const app = Vue.createApp({
//     data() {
//         return {
//             courseGoalA: 'Finish the course and learn Vue!',
//             courseGoalB: 'Master Vue and build amazing apps!',
//             vueLink: 'https://vuejs.org/'
//         };
//     },
//     methods: {
//         outputGoal(){
//             const randomNumber = Math.random();
//             if(randomNumber < 0.5){
//                 return this.courseGoalA;
//             } else {
//                 return this.courseGoalB;
//             }
//         }
//     }   
// });

// app.mount('#user-goal');