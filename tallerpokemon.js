console.log('js is working')
var vue = new Vue({
  el: '#app',
  data: {
    pokemons:[],
    msg: "hello",
    showMessage: false,
    p1: {},
    p2: {},
    guess: null,

  },
  methods:{
    showPokemon: function(){
console.log('getting pokemons');
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
      axios.all([ //axios get multiple items
        axios.get(url1),
        axios.get(url2),
      ]).then(axios.spread((one, two) => {
        caller.p1.name = one.data.name;
            caller.p1.height = one.data.height;
            caller.p1.img = one.data.sprites.front_default;

            caller.p2.name = two.data.name;
                caller.p2.height = two.data.height;
                caller.p2.img = two.data.sprites.front_default;

        caller.msg = "got pokemon names and heights"
      }));
    },

    select: function(guess){
      this.guess = guess;
      console.log('selection made')
      this.showMessage = false;
      // guess.selected = true;
    },

    checkResult: function(){
      console.log('check result');
      //compare input with result;
      //special cases:
      //  1)the two random numbers are the same->same pokemon p1.name=p2.name
      //  2)the two pokemons have the same height p1.height=p2.height
      if(this.guess == this.p1){
        //compare p1 height to p2 height
        console.log('p1 selected');
        this.showMessage = true;
        if (this.p1.height > this.p2.height){
          console.log('You guessed right!');
          this.msg = 'You guessed right!';

        } else {
          console.log('Guess again!')
          this.msg = 'Guess again!';
        }

      } else if(this.guess == this.p2){

          console.log('p2 selected');
          this.showMessage = true;
          if (this.p1.height < this.p2.height) {
            console.log('You guessed right!');
            this.msg = 'You guessed right!';
          } else{
            console.log('Guess again!');
            this.msg = 'Guess again!';
          }
      }
      //show true or false messages;

      //show 'start new game' button;
    },
  },
  mounted: function(){
    console.log('mounted');
    this.showPokemon();
  }


})
