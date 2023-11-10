const drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function (e) {
    let val = this.className;
    makeSound(val.split(' ')[0]);
  });
}

function makeSound(key) {
  var audio = new Audio();
  switch (key) {
    case "a":
      audio.src = "audio/song (1).mp3";
      console.log('case1');
      audio.play();
      break;

    case "b":
      audio.src = "audio/song (2).mp3";
      audio.play();
      break;

    case "c":
      audio.src = "audio/song (3).mp3";
      audio.play();
      break;

    case "d":
      audio.src = "audio/song (4).mp3";
      audio.play();
      break;

    case "e":
      audio.src = "audio/song (5).mp3";
      audio.play();
      break;

    case "f":
      audio.src = "audio/song (6).mp3";
      audio.play();
      break;

    case "g":
      audio.src = "audio/song (7).mp3";
      audio.play();
      break;

    case "h":
      audio.src = "audio/song (8).mp3";
      audio.play();
      break;

    case "i":
      audio.src = "audio/song (9).mp3";
      audio.play();
      break;

    case "j":
      audio.src = "audio/song (10).mp3";
      audio.play();
      break;

    case "k":
      audio.src = "audio/song (11).mp3";
      audio.play();
      break;

    case "l":
      audio.src = "audio/song (12).mp3";
      audio.play();
      break;

    case "m":
      audio.src = "audio/song (13).mp3";
      audio.play();
      break;

    case "n":
      audio.src = "audio/song (14).mp3";
      audio.play();
      break;

    case "o":
      audio.src = "audio/song (15).mp3";
      audio.play();
      break;

    case "p":
      audio.src = "audio/song (16).mp3";
      audio.play();
      break;

    case "q":
      audio.src = "audio/song (17).mp3";
      audio.play();
      break;

    case "r":
      audio.src = "audio/song (18).mp3";
      audio.play();
      break;

    case "s":
      audio.src = "audio/song (19).mp3";
      audio.play();
      break;

      case "t":
      audio.src = "audio/song (20).mp3";
      audio.play();
      break;

    default:
        console.log('default');
      break;
  }
}
