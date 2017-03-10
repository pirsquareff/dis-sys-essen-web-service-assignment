<template>
  <div class="home">
    <form>
      <div class="row" style="max-width: 600px;">
        <div class="columns">
          <div class="row">
            <div class="columns header-wrapper">
              <h2 class="header-text">Domain Country Info</h2>
            </div>
          </div>
          <div class="form-box input">
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
          </div>
        </div>
      </div>
    </form>

    <div class="row" style="max-width: 600px;">
      <div class="columns">
        <div class="form-box result">
          <div class="row">
            <div class="columns" style="text-align: center;">
              Name is <span class="result-field">{{ computedName }}</span><br>
              Student ID is <span class="result-field">{{ computedStudentID }}</span><br>
              Email is <span class="result-field">{{ computedEmail }}</span><br>
              Email user lives in <span class="result-field">{{ computedCountryName }}</span><br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import soapCall from '../utils/soap-connect';
import { DomainExtensionWS, CountryInfoWS } from '../utils/service-interface';

export default {
  name: 'home',
  data() {
    return {
      name: '',
      studentId: '',
      email: '',
      countryNameResult: '',
    };
  },
  computed: {
    computedName() {
      return this.name == '' ? '<your name>' : this.name;
    },
    computedStudentID() {
      return this.studentId == '' ? '<student ID>' : this.studentId;
    },
    computedEmail() {
      return this.email == '' ? '<email address>' : this.email;
    },
    computedCountryName() {
      return this.countryNameResult == '' ? '<country name>' : this.countryNameResult;
    }
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
          vueThis.countryNameResult = countryName;
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

  .header-wrapper {
    @include breakpoint(medium up) {
      text-align: center;
    }
  }

  .header-text {
    font-size: 28px;
  }

  label {
    margin-bottom: 20px;
  }

  label span {
    display: block;
    margin-bottom: 7px;
  }

  .form-box {
    top: 35px;
    position: relative;
    margin: -30px -25px 55px -25px;
    padding: 30px 25px 20px 25px;
    background: white;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .08);
    border-radius: 4px;

    &.input {
      margin: -30px -25px 55px -25px;
      padding: 30px 25px 20px 25px;
    }

    &.result {
      line-height: 28px;
      margin: -25px -25px 55px -25px;
      padding: 25px 25px 25px 25px;
    }
  }

  .result-field {
    font-weight: bold;
    padding: 2px 7px;
    background: #eeeeee;
    border-radius: 2px;
  }

</style>
