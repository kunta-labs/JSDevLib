/*
  @function getAllMetrics
  @description get blockchain metrics for specific network by chain id
*/
function getAllMetrics(bid, endpoint, p1, p2, p3){
  $.get("http://kunta.io/api/?E=ChainInteraction&bid=" + bid + "&it=" + endpoint + "&p1=" + p1 + "&p2=" + p1 + "&p3=" + p3, function(data, status){
    metric_reponse.results.result.forEach( (obj, i) => {
        console.log(obj)
    })
  });
}

/*
  @function submitOutput
  @description submit output transaction via chain id
*/
function submitOutput(bid, endpoint, p1, p2, p3){
  $.get("http://kunta.io/api/?E=ChainInteraction&bid=" + bid + "&it=" + endpoint + "&p1=" + p1 + "&p2=" + p1 + "&p3=" + p3, function(data, status){
    console.log(data)
    console.log(status)
    console.log(JSON.parse(data))
  });
}
