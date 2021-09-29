function logRequest(req, res, next) {
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;

  console.log("[" + dateTime + "] PETITION REGISTRY " + req.method + " -> " + req.originalUrl);
  next();
}

module.exports = { logRequest };
