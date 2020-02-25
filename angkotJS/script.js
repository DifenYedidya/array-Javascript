var passenger = ["difen", undefined, "budi"];
var addArray = function(name, passenger) {
  if (passenger.length == 0) {
    // tambah passenger di awal array
    passenger.push(name);

    //kembalikan isi array & keluar dari function
    return passenger;
  } else {
    for (var i = 0; i < passenger.length; i++) {
      if (passenger[i] == undefined) {
        passenger[i] = name;
        return passenger;
      }
      //jika sudah ada yg nama nya sama
      else if (passenger[i] == name) {
        console.log(name + "is inside");
        return passenger;
      }
      //jika seluruh kursi terisi
      else if (i == passenger.length - 1) {
        passenger.push(name);
        return passenger;
      }
    }
  }
};

var deleteArray = function(name, passenger) {
  if (passenger.length == 0) {
    console.log("angkot still empty dude");
  } else {
    for (var i = 0; i < passenger.length; i++) {
      if (passenger[i] == name) {
        passenger[i] = undefined;
      } else if (i == passenger.length - 1) {
        console.log(name + " is not inside");
      }
    }
  }
  return passenger;
};
