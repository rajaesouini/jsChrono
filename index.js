// les variables dont on abesoin
let sp;
let btn_start;
let btn_stop;
let t;
let ms;
let s;
let mn;
let h;

//fonction pour initialiser les vaiable quand la page se charge
window.onload = function () {
  sp = document.getElementsByTagName("span");
  btn_start = document.getElementById("start");
  btn_stop = document.getElementById("stop");
  t;
  (ms = 0), (s = 0), (mn = 0), (h = 0);
};

//mettre en place le compteur
function update_chrrono() {
  ms += 1;
  if (ms == 10) {
    ms = 1;
    s += 1;
  }
  if (s == 60) {
    s = 0;
    mn += 1;
  }
  if (mn == 60) {
    mn = 0;
    h += 1;
  }
  //insertion des valeurs dans les spans
  // [0] permet de selectionner le premier  span
  // [1] permet de selectionner le 2éme span etc.....
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}

//mettre en place la fonction du button start
function start() {
  //cette ligne execute la function update_chrrono() toutes les 100ms
  t = setInterval(update_chrrono, 100);
  btn_start.disabled = true;
}

//stoper le chronometre
function stop() {
  clearInterval(t);
  btn_start.disabled = false;
}

//initialiser les valeurs du compteur
function reset() {
  clearInterval(t);
  btn_start.disabled = false;
  (ms = 0), (s = 0), (mn = 0), (h = 0);
  //inserer ces nouvelles valeur dans les spans
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}
