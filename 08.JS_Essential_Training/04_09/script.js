var course = new Object();

// course.title = "JavaScript ABC";
// course.instructor = "Rimon";
// course.level = 1;
// course.published = true;
// course.views = 0;

var course = {
    title: "JavaScript ABC",
    instructor: "Rimon",
    level: 1,
    published: true,
    views: 0,
    updateViews: function(){
        return ++course.views;
    }
}

console.log(course.views);
course.updateViews();
console.log(course.views);
course.updateViews();
console.log(course.views);
