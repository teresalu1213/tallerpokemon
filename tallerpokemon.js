console.log('js is working')
var vue = new Vue({
  el: '#app',
  data: {
    pokemons:[]
  },
  methods:{
    showPokemon: function(){
      var url = 'https://pokeapi.co/api/v2/pokemon/1'//need random index number
      axios.get(url).then(function (response){
            vue.pokemons = response.data.data
      })
    },
    checkResult: function(){
      console.log('methods running')
      //compare input with result;

      //show true or false messages;

      //show 'start new game' button;
    }
  }


})
