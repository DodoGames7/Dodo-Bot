module.exports = {
  name: "weather",
  code: `$title[1;$getObjectProperty[location.name]]
  $addField[1;windspeed;$getObjectProperty[current.windspeed]]
  $addField[1;Time;$getObjectProperty[current.observationtime];yes]
  $addField[1;temperature;$getObjectProperty[current.temperature]C;yes]
  $addField[1;humidity;$getObjectProperty[current.humidity];yes]
  $thumbnail[1;$getobjectProperty[current.imageUrl]]
  $onlyIf[$getObjectProperty[location.name]!=undefined;cannot find results for what you searched for]
  $onlyIf[$message!=;you need to provide an city name]
  $createObject[$jsonRequest[https://apiv1.spapi.ga/fun/weather?place=$uri[$message;encode]`
}
