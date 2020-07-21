<template>
    <div class="outerDiv">
        <div class="row container cus-pad">
        <div class="row container center-align col l6 s12 m12" id="form-container-cus">
            <form class="col s6 custom-form" style="padding: 20px;" @submit.prevent="consoleValue">
            <div class="row">
                <div class="searchDiv container m3">
                <label>Choose Platform</label>
                <select class="browser-default" v-model="platform">
                    <option value="PC" selected>PC (Origin)</option>
                    <option value="X1">XBox One</option>
                    <option value="PS4">PS-4</option>
                </select>
                </div>
                <div class="input-field col s12 l12">
                <i class="material-icons prefix">videogame_asset</i>
                <input id="icon_prefix" type="text" class="validate" v-model="playerID">
                <label for="icon_prefix">Gamer Tag</label>
                </div>
            </div>
            <button type="submit" class="btn">Submit</button>
            </form>
        </div>
        <div class="img-container col l6 s12 m12">
            <img src="https://purepng.com/public/uploads/medium/apex-legends-logo-3vx.png" alt="Apex-Logo">
        </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Search',
    data(){
        return {
            platform: '',
            playerID: '',
        };
    },
    methods: {
        consoleValue: function(){
            if(this.platform.length == 0){
                this.$toasted.show('Please select a valid platform', {
                    duration: 3000,
                    icon: 'exclamation-circle'
                })
            } else if(this.playerID.length == 0){
                this.$toasted.show('Please enter a GamerTag', {
                    duration: 3000,
                    icon: 'exclamation-circle'
                })
            } else {
                this.$router.push(`/api/${this.platform}/${this.playerID}`)
            }
        }
    }
}
</script>

<style>
    .outerDiv{
        margin: 40px 0 80px 0;

    }
    .flex-cus{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .img-container img{
        width: 500px;
    }
    #form-container{
        max-height: 500px;
        margin: auto;
    }
    .img-container img{
        display: none;
    }
    @media (max-width: 995px) {
        .img-container img{
            display: none;
        }
    }
    .outerDiv{
        
        padding: 80px;
    }
    .custom-form{
        border: 2px solid black;
        padding: 300px;
        background-color: rgba(156, 131, 131, 0.308);
    }
    .cus-pad{
        padding: 40px;
    }
</style>