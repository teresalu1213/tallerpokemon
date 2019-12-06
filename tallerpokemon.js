console.log('js is working')
var vue = new Vue({
  el: '#app',
  data: {
    pokemons:[],
    msg: "hello",
    p1: {},
    p2: {},
    guess: null
  },
  methods:{
    showPokemon: function(){
console.log('getting');
      var url1 = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random()*100)//need random index number
      var url2 = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random()*100)//need random index number

      var caller = this;
      // axios
      //   .get(url)
      //   .then(function (response){
      //     console.log(url);
      //
      //     //vue.pokemons = response.data.data
      //     caller.p1.name = response.data.name;
      //     caller.p1.height = response.data.height;
      //     caller.p1.img = response.data.sprites.front_default;
      //     debugger;
      //
      //
      // })
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
    checkResult: function(){
      console.log('methods running')
      debugger;
      //compare input with result;
      
      //show true or false messages;

      //show 'start new game' button;
    },
    select: function(guess){
      this.guess = guess;
      // guess.selected = true;
    }
  },
  mounted: function(){
    console.log('mounted');
    this.showPokemon();
  }


})
