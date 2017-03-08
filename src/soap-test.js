import soap from 'soap';

const url = 'http://wsf.cdyne.com/WeatherWS/Weather.asmx?WSDL';
const data = {
  ZIP: 37188,
};

soap.createClient(url, (err, client) => {
  client.GetCityWeatherByZIP(data, (err2, result) => {
    console.log('result');
    console.log(result);
  });
});

export default data;
