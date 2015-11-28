module.exports.miredToKelvin = miredToKelvin;
function miredToKelvin(mired) {
  return 1e6 / mired;
}

module.exports.kelvinToMired = kelvinToMired;
function kelvinToMired(kelvin) {
  return 1e6 / kelvin;
}
