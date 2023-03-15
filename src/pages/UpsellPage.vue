<template>
  <div class="upsellPage">
    <div class="main">
      <UpsellItems />
      <div class="additionalInfo">
        <Security class="upsellSecurityWrapper">
          <div class="securityText">
            Guaranteed <span class="highlighted">Safe</span> & <span class="highlighted">Secure</span> Checkout
          </div>
        </Security>
        <Support />
      </div>
      <div class="controlsWrapper">
        <Button class="completeUpsell" label="Yes, I want" path="thankyou" iconRight="arrow-right.svg" />
        <div class="noThanks" @click="$router.push('thankyou')">
          No, Thanks
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UpsellItems from 'components/upsell/items/UpsellItems.vue';
import Security from 'components/general/Security.vue';
import Support from 'components/upsell/Support.vue';
import Button from 'components/general/Button.vue';

</script>

<style scoped lang="scss">
@import 'src/css/variables';

.upsellPage {
  display: flex;
  justify-content: center;
  cursor: default;
  padding: 0 40px;

  .main {
    margin: 60px 0 204px;
    max-width: 790px;
    width: 100%;

    .additionalInfo {
      display: flex;
      margin-bottom: 70px;

      .upsellSecurityWrapper {
        flex: 1;
        border: 1px solid #DADDF5;
        box-shadow: 0px 10px 30px rgba(22, 8, 49, 0.05);
        border-radius: 16px;

        &:deep(.header) {
          justify-content: center;
          margin-bottom: 30px;
        }

        .securityText {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 26px;
          color: #4B4E68;
          margin-left: 9px;

          .highlighted {
            color: #000034;
          }
        }
      }
    }

    .controlsWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      .completeUpsell {
        width: 280px;
        margin-bottom: 30px;
      }

      .noThanks {
        cursor: pointer;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #4B4E68;
      }
    }
  }
}

@media screen and (max-width: $tablet) {
  .upsellPage {
    .main {
      .additionalInfo {
        flex-direction: column;
        margin-bottom: 40px;

        ::v-deep(.security) {
          max-width: unset;
        }

        ::v-deep(.supportWrapper) {
          margin: 20px 0 0;
          max-width: unset;
        }
      }
    }
  }
}

@media screen and (max-width: $mobile) {
  .upsellPage {
    padding: 0 16px;

    .main {
      margin: 60px 0 46px;

      .additionalInfo {
        margin-bottom: 30px;

        ::v-deep(.supportWrapper) {
          padding: 16px;
        }
      }

      .controlsWrapper {
        .completeUpsell {
          width: 100%;
        }
      }
    }
  }
}
</style>
