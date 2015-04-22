$(document).keydown(function(e){
  switch (e.which) {
    case 48:
      $("#0").click().addClass('pressed');
      break;

    case 49:
      $("#1").click().addClass('pressed');
        break;

    case 50:
      $("#2").click().addClass('pressed');
        break;

    case 51:
      $("#3").click().addClass('pressed');
        break;

    case 52:
      $("#4").click().addClass('pressed');
        break;

    case 53:
      $("#5").click().addClass('pressed');
        break;

    case 54:
      $("#6").click().addClass('pressed');
        break;

    case 55:
      $("#7").click().addClass('pressed');
        break;

    case 56:
      $("#8").click().addClass('pressed');
        break;

    case 57:
      $("#9").click().addClass('pressed');
        break;

    case 43:
      $("#add").click().addClass('pressed');
        break;

    case 42:
      $("#multiply").click().addClass('pressed');
        break;

    case 45:
      $("#subtract").click().addClass('pressed');
        break;

    case 13:
      $("#equals").click().addClass('pressed');
        break;

    case 61:
      $("#equals").click().addClass('pressed');
        break;

    case 46:
      $("#dot").click().addClass('pressed');
        break;

    case 47:
      $("#divide").click().addClass('pressed');
        break;

    case 99:
      $("#AC").click().addClass('pressed');
        break;

    case 37:
      $("#percent").click().addClass('pressed');
        break;
  }
});

$(document).keyup(function(e){
  switch (e.which) {
    case 48:
      $("#0").removeClass('pressed');
      break;

    case 49:
      $("#1").removeClass('pressed');
        break;

    case 50:
      $("#2").removeClass('pressed');
        break;

    case 51:
      $("#3").removeClass('pressed');
        break;

    case 52:
      $("#4").removeClass('pressed');
        break;

    case 53:
      $("#5").removeClass('pressed');
        break;

    case 54:
      $("#6").removeClass('pressed');
        break;

    case 55:
      $("#7").removeClass('pressed');
        break;

    case 56:
      $("#8").removeClass('pressed');
        break;

    case 57:
      $("#9").removeClass('pressed');
        break;

    case 43:
      $("#add").removeClass('pressed');
        break;

    case 42:
      $("#multiply").removeClass('pressed');
        break;

    case 45:
      $("#subtract").removeClass('pressed');
        break;

    case 13:
      $("#equals").removeClass('pressed');
        break;

    case 61:
      $("#equals").removeClass('pressed');
        break;

    case 46:
      $("#dot").removeClass('pressed');
        break;

    case 47:
      $("#divide").removeClass('pressed');
        break;

    case 99:
      $("#AC").removeClass('pressed');
        break;

    case 37:
      $("#percent").removeClass('pressed');
        break;
  }
});


