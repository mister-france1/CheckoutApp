import { defineStore } from 'pinia'

export const useCheckoutStore = defineStore('checkout', {
  state: () => {
    return {
      email: '',
      phoneNumber: {
        countryCode: '+49',
        number: ''
      },
      shippingAddress: {
        country: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: ''
      },
      shippingMethod: 10,
      paymentMethod: {
        cardNumber: '',
        nameCard: '',
        date: '',
        cvv: '',
        agreements: true
      },
      billingAddressSame: true,
      billingAddress: {
        country: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: ''
      }
    }
  },
  actions: {},
})
