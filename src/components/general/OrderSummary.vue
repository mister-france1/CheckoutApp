<template>
  <div class="orderSummary">
    <q-list>
      <q-expansion-item v-model="expansionItemValue">
        <template #header>
          <div class="header">
            <div class="image">
              <img :src="require('assets/shopping-cart.svg')" />
            </div>
            <div class="text">
              {{expansionItemValue ? 'Hide order summary' : 'Show order summary'}}
            </div>

            <div class="price">
              $362.70
            </div>
          </div>
        </template>
        <template #default>
          <q-card>
            <q-card-section>
              <TotalInfo />
              <ClubInfo />
            </q-card-section>
          </q-card>
        </template>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TotalInfo from 'components/general/totalInfo/TotalInfo.vue';
import ClubInfo from 'components/checkout/clubInfo/ClubInfo.vue';

const expansionItemValue = ref<boolean>(false);
</script>

<style scoped lang="scss">
@import 'src/css/variables';

.orderSummary {
  display: none;
}

@media screen and (max-width: $wideTablet) {
  .orderSummary {
    display: block;

    ::v-deep(.q-item) {
      border: 1px solid #D6D8EE;
      border-radius: 20px;
      padding: 24px;

      &.q-focusable,
      &.q-hoverable {
        border-radius: 20px;
      }
    }

    ::v-deep(.q-expansion-item--expanded) {
      .q-item {
        margin-bottom: 12px;
      }
    }

    .header {
      display: flex;
      align-items: center;

      .text {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #4B4E68;
        margin: 0 32px 0 15px;
      }

      .price {
        position: absolute;
        right: 24px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        text-align: right;
        color: #000034;
      }
    }

    ::v-deep(.q-expansion-item__content) {
      .q-card {
        .q-card__section {
          background: rgba(239, 240, 245, 0.3);
          border-radius: 20px;

          &.q-card__section--vert {
            padding: 30px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: $mobile) {
  .orderSummary {
    ::v-deep(.q-item) {
      padding: 16px;
    }

    .header {
      .image {
        display: flex;

        img {
          height: 20px;
          width: 20px;
        }
      }

      .text {
        font-size: 14px;
        line-height: 24px;
        margin: 0 20px 0 12px;
      }

      .price {
        font-size: 14px;
        line-height: 24px;
        right: 16px;
      }
    }

    ::v-deep(.q-expansion-item__content) {
      .q-card {
        .q-card__section {
          &.q-card__section--vert {
            padding: 26px 16px 20px;

            .totalInfoWrapper {
              margin-bottom: 30px;
            }

            .clubInfo {
              padding: 16px 16px 20px;

              .description {
                margin-bottom: 16px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
