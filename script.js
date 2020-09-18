
//text in local storage
//get todays date (DONE)
//click event on ‘save button’
//save the text area to local storage according to the hour

//colors
//set interval every 15 seq
//check current time
//check current hour and compare it to the past hours and to the future hours

//use a for loop
//use past present and future
$(document).ready(function () {

    init();

    var currentDay = document.querySelector("#currentDay")
    currentDay.textContent = dayjs().format('dddd, MMMM, D')


    var currentHour = dayjs().format('H').toString()
    var currentMinute = dayjs().format('m').toString()
    console.log(currentHour)
    console.log(currentMinute)
    $(document).ready()
    function init() {
        var storedSchedule = JSON.parse(localStorage.getItem("savedSchedule"))
        if (!storedSchedule) {
            return;
        }
        savedSchedule = storedSchedule;
        renderSchedule();
    }
    function renderSchedule() {
        for (var i = 0; i < savedSchedule.length; i++) {
            var hour = savedSchedule[i];

        }
    };

    function savingSchedule() {
        localStorage.setItem("savedSchedule", JSON.stringify(savedSchedule));
    }


    $(document).on("click", ".saveBtn", function () {
        console.log($(this).prev().val());
        console.log($(this).parent().attr("id"));
    })



}); // ready function end