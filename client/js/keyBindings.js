// var keys = {
//   "#0": 48,
//   "#1": 49,
//   "#2": 50,
//   "#3": 51,
//   "#4": 52,
//   "#5": 53,
//   "#6": 54,
//   "#7": 55,
//   "#8": 56,
//   "#9": 57,
//   "#add": 43,
//   "#subtract": 45,
//   "#multiply": 42,
//   "#divide": 47,
//   "#equals": 13,
//   "#dot": 46,
//   "#AC": 99,
//   "#percent": 37
// }

// for (var id in keys) {
//   $(document).keypress(function(e) {
//     if (e.which === keys[id]) {
//       $(id).click()
//       .addClass('pressed');
//       setTimeout(function() { $(id).removeClass('pressed') }, 75);
//     }
//   });
// }

$(document).keypress(function(e){
    if (e.which === 48){
        $("#0").click()
        .addClass('pressed');
        setTimeout(function(){ $("#0").removeClass('pressed') }, 75);
    }
});
$(document).keypress(function(e){
    if (e.which === 49){
        $("#1").click()
        .addClass('pressed');
        setTimeout(function(){ $("#1").removeClass('pressed') }, 75);
    }
});
$(document).keypress(function(e){
    if (e.which === 50){
        $("#2").click()
        .addClass('pressed');
        setTimeout(function(){ $("#2").removeClass('pressed') }, 75);
    }
});
$(document).keypress(function(e){
    if (e.which === 51){
        $("#3").click()
        .addClass('pressed');
        setTimeout(function(){ $("#3").removeClass('pressed') }, 75);
    }
});
$(document).keypress(function(e){
    if (e.which === 52){
        $("#4").click()
        .addClass('pressed');
        setTimeout(function(){ $("#4").removeClass('pressed') }, 75);
    }
});
$(document).keypress(function(e){
    if (e.which === 53){
        $("#5").click()
        .addClass('pressed');
        setTimeout(function(){ $("#5").removeClass('pressed') }, 75);
    }
});
$(document).keypress(function(e){
    if (e.which === 54){
        $("#6").click()
        .addClass('pressed');
        setTimeout(function(){ $("#6").removeClass('pressed') }, 75);
    }
});
$(document).keypress(function(e){
    if (e.which === 55){
        $("#7").click()
        .addClass('pressed');
        setTimeout(function(){ $("#7").removeClass('pressed') }, 75);
    }
});
$(document).keypress(function(e){
    if (e.which === 56){
        $("#8").click()
        .addClass('pressed');
        setTimeout(function(){ $("#8").removeClass('pressed') }, 75);
    }
});
$(document).keypress(function(e){
    if (e.which === 57){
        $("#9").click()
        .addClass('pressed');
        setTimeout(function(){ $("#9").removeClass('pressed') }, 75);
    }
});
$(document).keypress(function(e){
    if (e.which === 43){
        $("#add").click()
        .addClass('pressed');
        setTimeout(function(){ $("#add").removeClass('pressed') }, 75);
    }
});
$(document).keypress(function(e){
    if (e.which === 42){
        $("#multiply").click()
        .addClass('pressed');
        setTimeout(function(){ $("#multiply").removeClass('pressed') }, 75);
    }
});
$(document).keypress(function(e){
    if (e.which === 45){
        $("#subtract").click()
        .addClass('pressed');
        setTimeout(function(){ $("#subtract").removeClass('pressed') }, 75);
    }
});
$(document).keypress(function(e){
    if (e.which === 13 || e.which === 61){
        $("#equals").click()
        .addClass('pressed');
        setTimeout(function(){ $("#equals").removeClass('pressed') }, 75);
    }
});
$(document).keypress(function(e){
    if (e.which === 46){
        $("#dot").click()
        .addClass('pressed');
        setTimeout(function(){ $("#dot").removeClass('pressed') }, 75);
    }
});
$(document).keypress(function(e){
    if (e.which === 47){
        $("#divide").click()
        .addClass('pressed');
        setTimeout(function(){ $("#divide").removeClass('pressed') }, 75);
    }
});
$(document).keypress(function(e){
    if (e.which === 99){
        $("#AC").click()
        .addClass('pressed');
        setTimeout(function(){ $("#AC").removeClass('pressed') }, 75);
    }
});
$(document).keypress(function(e){
    if (e.which === 37){
        $("#percent").click()
        .addClass('pressed');
        setTimeout(function(){ $("#percent").removeClass('pressed') }, 75);
    }
});