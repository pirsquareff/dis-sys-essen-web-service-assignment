<template>
  <div class="home">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
    <h1>Domain Extension</h1>
    Email: <br>
    <input v-model="email" placeholder="edit me">
    <br>
    {{ email }}
    <button @click="getDomainExtension"></button>
  </div>
</template>

<script>
/* eslint-disable */
// import soap from 'soap-as-promised';
// var soap = require('soap');
// "use strict";
// var url = 'http://localhost:8001/domainExtensionWS?wsdl';
import soapCall from '../soap-connect';

export default {
  name: 'home',
  data() {
    return {
      email: '',
      result: '',
    };
  },
  methods: {
    // getQuote() {
    //   this.$http
    //     .get('http://localhost:3001/api/random-quote', (data) => {
    //       this.quote = data;
    //     })
    //     .error((err) => console.log(err))
    // }
    getDomainExtension() {
      soapCall();
      // soap.createClient('http://localhost:8001/domainExtensionWS')
      //   .then((client) => client.getDomainExtension({ email: this.email }))
      //   .then((result) => console.log(`The result was: ${result}`))
      //   .catch((error) => console.error(`There was an error! ${error}`));

      // soap.createClient(url, function(err, client) {
      //   if(err) throw err;
      //   console.log(client.describe().DomainExtensionWS.calc);
      //   client.getDomainExtension({ email: this.email },function(err, res) {
      //     if(err) throw err;
      //     console.log(res);
      //     this.result = res.domainExtension;
      //   });
      // });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
