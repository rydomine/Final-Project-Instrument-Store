var app = new Vue({
  el: "#app",
  data: {
    parentNumber: 0,
    buttons: "Add to Cart",
    instruments: [
      {
        name: "",
        type: "1",
        price: "6",
        brand: "Fender",
        img:"",
        color: "red"
      },
      {
        name: "",
        type: "2",
        price: "420",
        brand: "Fender",
        img: "",
        color: "red"
      },
      {
        name: "",
        type: "3",
        price: "669",
        brand: "Fender",
        img: "",
        color: "red"
      },
      {
        name: "",
        type: "1",
        price: "1234",
        brand: "Yamaha",
        img: "",
        color: "green"
      },
      {
        name: "",
        type: "2",
        price: "34",
        brand: "Yamaha",
        img: "",
        color: "green"
      },
      {
        name: "",
        type: "3",
        price: "4422",
        brand: "Yamaha",
        img: "",
        color: "green"
      },
      {
        name: "",
        type: "1",
        price: "623422",
        brand: "Maton",
        img: "",
        color: "blue"
      },
      {
        name: "",
        type: "2",
        price: "3455",
        brand: "Maton",
        img: "",
        color: "blue"
      },
      {
        name: "",
        type: "69",
        price: "3553",
        brand: "Maton",
        img: "",
        color: "blue"
      }
    ],
    instrumentName: "",
    instrumentType: "",
    brandInput: "",
    priceInput: "",
    image: ""
  },
  methods: {
    increaseNumber: function() {
      this.parentNumber = this.parentNumber + 1;
    },
    resetNumber: function() {
      this.parentNumber = 0;
    },
     newInstrument: function(){
    
    this.instruments.push({
      name: this.instrumentName,
      type: this.instrumentType,
      brand: this.brandInput,
      price: this.priceInput,
      img: ""
    });

    this.instrumentName = "";   
  }
 }
});