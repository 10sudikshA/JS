//destructuring a object in js
const course= {
    name:'js with chai aur code',
    price:999,
    courseInstructor:"Hitesh Choudary"
}
console.log(course.courseInstructor);
//destructuring 
const {courseInstructor:CI} = course;
console.log(CI);