var m = moment().format('dddd, MMMM Do LT');
$('#currentDay').text(m);

var nineam= moment({
    h: 9,
    s: 0
})
if (moment().isAfter(nineam)){
    $(".9am").addClass("past")
}
else if ((moment().isSame(nineam)))
{
    $(".9am").addClass("present")}
else {
    $(".9am").addClass("future")
}
var tenam= moment({
    h: 10,
    s: 0
})
if (moment().isAfter(tenam)){
    $(".10am").addClass("past")
}
else if ((moment().isSame(tenam)))
{
    $(".10am").addClass("present")}
else {
    $(".10am").addClass("future")
}

var elevenam= moment({
    h: 11,
    s: 0
})
if (moment().isAfter(elevenam)){
    $(".11am").addClass("past")
}
else if ((moment().isSame(elevenam)))
{
    $(".11am").addClass("present")}
else {
    $(".11am").addClass("future")
}

var twelvepm = moment({
    h: 12,
    s: 0
})
if (moment().isAfter(twelvepm)){
    $(".12pm").addClass("past")
}
else if ((moment().isSame(twelvepm)))
{
    $(".12pm").addClass("present")}
else {
    $(".12pm").addClass("future")
}

var onepm = moment({
    h: 13,
    s: 0
})
if (moment().isAfter(onepm)){
    $(".1pm").addClass("past")
}
else if ((moment().isSame(onepm)))
{
    $(".1pm").addClass("present")}
else {
    $(".1pm").addClass("future")
}

var twopm = moment({
    h: 14,
    s: 0
})
if (moment().isAfter(twopm )){
    $(".2pm").addClass("past")
}
else if ((moment().isSame(twopm )))
{
    $(".2pm").addClass("present")}
else {
    $(".2pm").addClass("future")
}

var threepm = moment({
    h: 15,
    s: 0
})
if (moment().isAfter(threepm)){
    $(".3pm").addClass("past")
}
else if ((moment().isSame(threepm)))
{
    $(".3pm").addClass("present")}
else {
    $(".3pm").addClass("future")
}

var fourpm = moment({
    h: 16,
    s: 0
})
if (moment().isAfter(fourpm)){
    $(".4pm").addClass("past")
}
else if ((moment().isSame(fourpm)))
{
    $(".4pm").addClass("present")}
else {
    $(".4pm").addClass("future")
}


var fivepm = moment({
    h: 17,
    s: 0
})
if (moment().isAfter(fivepm)){
    $(".5pm").addClass("past")
}
else if ((moment().isSame(fivepm)))
{
    $(".5pm").addClass("present")}
else {
    $(".5pm").addClass("future")
}

// var textInput = $(".description").on("click", function(){
//     $(".row").addClass("input-group")
//     $(".description").addType("text")
// })

$(".description").on("click", function(){
    var text = $(this)
    .text()
    .trim();

  // replace p element with a new textarea
  var textInput = $("<textarea>").addClass("form-control").val(text);
  $(this).replaceWith(textInput);

})

