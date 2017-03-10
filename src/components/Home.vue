<template>
  <div class="home">

    <!-- <br> -->
    <form>
      <div class="row" style="max-width: 600px;">
        <div class="columns">
          <div class="row">
            <div class="columns">
              <h2 class="header-text">Domain Country Info</h2>
            </div>
          </div>
          <div class="row">
            <div class="medium-6 columns">
              <label><span>Name</span>
                <input v-model="name" id="email" placeholder="Name" type="text">
              </label>
            </div>

            <div class="medium-6 columns">
              <label><span>Student ID</span>
                <input v-model="studentId" id="email" placeholder="Student ID" type="text">
              </label>
            </div>
          </div>

          <div class="row">
            <div class="medium-12 columns">
              <label><span>Email Address</span>
                <input v-model="email" id="email" placeholder="Email Address" type="email">
              </label>
            </div>
          </div>

          <button type="button" class="button" @click="computeCountryNameFromEmail">Submit</button>
          <br>
          {{ result }}
        </div>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import soapCall from '../utils/soap-connect-cors';
import { DomainExtensionWS, CountryInfoWS } from '../utils/service-interface';

export default {
  name: 'home',
  data() {
    return {
      name: '',
      studentId: '',
      email: '',
      result: '',
    };
  },
  methods: {
    computeCountryNameFromEmail() {
      // Preserve this in promise then method
      var vueThis = this;
      soapCall(
        DomainExtensionWS.url,
        DomainExtensionWS.ns,
        DomainExtensionWS.methods.getDomainExtension,
        {
          email: vueThis.email,
        }
      ).then(function(response) {
        var domainExtension = response["soap:Envelope"]["soap:Body"]["0"]["undefined:getDomainExtensionResponse"]["0"]["undefined:domainExtension"]["0"];
        soapCall(
          CountryInfoWS.url,
          CountryInfoWS.ns,
          CountryInfoWS.methods.countryName,
          {
            sCountryISOCode: domainExtension,
          }
        ).then(function(response) {
          var countryName = response["soap:Envelope"]["soap:Body"]["0"]["m:CountryNameResponse"]["0"]["m:CountryNameResult"]["0"];
          vueThis.result = countryName;
        }).catch(function(error) {
          console.log("Error: ", error);
        });
      }).catch(function(error) {
        console.log("Error: ", error);
      });
    },
  }
};
</script>

<style lang="scss" scoped>
  h1, h2 {
    font-weight: bolder;
  }

  .header-text {
    // text-align: center;
  }

  label {
    margin-bottom: 20px;
  }

  label span {
    display: block;
    margin-bottom: 7px;
  }

</style>
