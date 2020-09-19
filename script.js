
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

    //init();
    
    var currentDay = document.querySelector("#currentDay")
    currentDay.textContent = dayjs().format('dddd, MMMM, D')
    hourArray = {
        9: '#hour-9',
        10: '#hour-10',
        11: '#hour-11',
        12: '#hour-12',
        13: '#hour-13',
        14: '#hour-14',
        15: '#hour-15',
        16: '#hour-16',
        17: '#hour-17',
    }

    var currentHour = parseInt(dayjs().format('H'))
    var currentMinute = dayjs().format('m').toString()
    
    

    function init() {
        var storedSchedule = JSON.parse(localStorage.getItem("storedSchedule"))
        if (!storedSchedule) {
            savedArray = storedSchedule
            return;
        }
        savedArray = new Array(9);
        console.log(savedArray)
    }

     function renderSchedule() {
         for (var i = 0; i < savedArray.length; i++) {
             $("")
    
        }
      };

    function savingSchedule() {
        localStorage.setItem("storedSchedule", JSON.stringify(storedSchedule));

    }


    $(document).on("click", ".saveBtn", function () {
        var scheduleText = $(this).prev().val().trim()
        var scheduleID = $(this).parent().attr("id");
        console.log(scheduleText)
        console.log(scheduleID)
        if (scheduleText === "") {
            return;
        }
        


        
    })
    function colorChange() {
        
        }
    
    colorChange();
    
    
    
}); // ready function end