console.log('js is working')
var vue = new Vue({
  el: '#app',
  data: {
    pokemons: [],
    msg: "hello",
    p1: {},
    p2: {},
    guess: "",
    notGuessed: "" //makes it easier for us to check, see my comments
  },
  methods: {
    showPokemon: function() {
      console.log('getting');
      var url1 = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 100) //need random index number
      var url2 = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 100) //need random index number
      // we are ignoring the possibilit that they are the same,
      if(url1 == url2){
        this.showPokemon; //this is a recursive call to the same function we are currently in, should work out
      } 

      var caller = this;
      axios.all([
        axios.get(url1),
        axios.get(url2),
      ]).then(axios.spread((one, two) => {
        caller.p1.name = one.data.name;
        caller.p1.height = one.data.height;
        caller.p1.img = one.data.sprites.front_default;

        caller.p2.name = two.data.name;
        caller.p2.height = two.data.height;
        caller.p2.img = two.data.sprites.front_default;

        caller.msg = "success"
      }));
    },
    checkResult: function() {
      //calculate the difference like you said
      // the square brackets are just another way to access object properties
      //here i'm using this.guess as the key to get the object from the vue data
      //one line!
      var diff = this[this.guess].height - this[this.notGuessed].height
      console.log(diff);
      if (diff > 0) {
        //win
        console.log("win");
      } else {
        //lose
        console.log("lose");
      }
      //show true or false messages;

      //show 'start new game' button;
      //you will also need to empty out p1 and p2 and call the showPokemon again
    },
    //select function not needed anymore!
  },
  mounted: function() {
    console.log('mounted');
    this.showPokemon();
  }
})
