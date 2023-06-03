const x = document.getElementById("persons");
const y = document.getElementById("type");
const z = document.getElementById("duration");

function BoatCount() {
  event.preventDefault();
  person = parseInt(x.value);
  boattype = parseInt(y.value);
  duration = parseInt(z.value);
  Boatvalue = parseInt(person / boattype);
  console.log(Boatvalue);
  // console.log(BoatCount);
  if (person % boattype != 0) {
    Boatvalue += 1;
  }
  // console.log(typeof Boatvalue);
  return parseInt(Boatvalue);
}

function boatprice() {
  if (y.value == 2) {
    boatprice = BoatCount() * 240;
  } else if (y.value == 4) {
    boatprice = BoatCount() * 260;
  } else if (y.value == 8) {
    boatprice = BoatCount() * 560;
  } else if (y.value == 15) {
    boatprice = BoatCount() * 560;
  }
  // console.log(boatprice);
  return boatprice;
}
function calculatebill() {
  event.preventDefault();
  totalprice = boatprice() * parseInt(duration);
  console.log(totalprice);
  document.getElementById(
    "result"
  ).innerHTML = `You need to pay Rs.${totalprice}`;
}
