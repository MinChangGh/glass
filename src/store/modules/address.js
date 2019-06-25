const address = {
  state: {
    address: [{
      id: 0,
      city: [],
      detail_ad: '',
      name: '',
      phone: '',
      isDefault: true
    }],
    singleCoupon:Array,
    CouponTip:Array
  },
  mutations: {
    initCouponTip (state,data) {
      state.CouponTip = data
    },
    setCouponTip (state,data) {
      state.CouponTip[data.index]=data.val
    },
    initSingleCoupon (state,data) {
      state.singleCoupon = data
    },
    setCoupon (state,data) {
      state.singleCoupon[data.outerIndex].forEach((item,index)=>{
        item.use=false
      })
      if (data.index>=0) {
        state.singleCoupon[data.outerIndex][data.index].use=true
      }
    },
    setCouponHasuse (state,data) {
      state.singleCoupon[data][0].hasUse=true
    },
    setCouponF (state,data) {
      state.singleCoupon[data.outerIndex][data.index].use=false
    },
    init(state, data) {
      state.address = data
    },
    setFalse(state) {
      state.address.forEach((item) => {
        item.isDefault = false
      })
    },
    setAddress(state, data) {
      state.address[data.index][data.key] = data.val
    },
    delAddress(state, len) {
      state.address.splice(len, 1)
    },
    addAddress(state) {
      state.address.push({
        id: state.address.length + 1,
        city: ["110000", "110100", "110101"],
        detail_ad: '',
        name: '',
        phone: '',
        isDefault: false
      })
    }
  },
  actions: {}
}

export default address
