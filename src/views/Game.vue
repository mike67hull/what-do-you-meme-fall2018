<template>
<div>
    <div class="alert alert-success">
        Yay we have a game
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <img class="card-img" src="" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="col-md-4">
            <div class="card">
                <img class="card-body" src="" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        </div>
        <div class="col-md-4">
            <div class="col-md-4">
            <div class="card">
                <img class="card-img" src="" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        </div>
        <div class="col-md-4">
            <div class="col-md-4">
            <div class="card">
                <img class="card-img" src="" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">

</style>

<script>
import { GetState } from '@/services/api_access';

export default {
    data: function(){
        return {
           state: {
               picture: ""
           } 
        }
    },
    created: function(){
        GetState().then(x=> this.state = x)
    },
    methods:{
        flipPicture: function(){
            FlipPicture()
            .then(x=> GetState())
            .then(x=> this.State = x)
        }
    }
}
</script>
