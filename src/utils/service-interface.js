const DomainExtensionWS = {
  name: 'DomainExtensionWS',
  url: 'http://localhost:8001/domainExtensionWS?wsdl',
  ns: 'http://localhost:8001/domainExtensionWS?wsdl',
  methods: {
    getDomainExtension: 'getDomainExtension',
  },
};

const CountryInfoWS = {
  name: 'CountryInfoService',
  url: 'http://www.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL',
  ns: 'http://www.oorsprong.org/websamples.countryinfo',
  methods: {
    countryName: 'CountryName',
  },
};

export { DomainExtensionWS, CountryInfoWS };
