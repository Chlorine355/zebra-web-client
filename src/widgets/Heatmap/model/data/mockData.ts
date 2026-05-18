function generateRandomPoints(center: [number, number], radius: number, count: number) {
  var points = [];
  for (var i=0; i<count; i++) {
    points.push(generateRandomPoint(center, radius));
  }  console.log(points)

  return points;
}


/**
* Generates number of random geolocation points given a center and a radius.
* Reference URL: http://goo.gl/KWcPE.
* @param  {Object} center A JS object with lat and lng attributes.
* @param  {number} radius Radius in meters.
* @return {Object} The generated random points as JS object with lat and lng attributes.
*/
function generateRandomPoint(center: [number, number], radius: number) {
  var x0 = center[0];
  var y0 = center[1];
  // Convert Radius from meters to degrees.
  var rd = radius/111300;

  var u = Math.random();
  var v = Math.random();

  var w = rd * Math.sqrt(u);
  var t = 2 * Math.PI * v;
  var x = w * Math.cos(t);
  var y = w * Math.sin(t);

  var xp = x/Math.cos(y0);

  // Resulting point.
  return [xp+x0, y+y0];
}


// Usage Example.
// Generates 100 points that is in a 1km radius from the given lat and lng point.
export const data = generateRandomPoints([56.311211, 43.963440], 7000, 200);