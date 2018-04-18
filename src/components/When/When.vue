<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h2 class="panel-title">When & Where</h2>
        </div>
        <div class="panel-body">
            <gmap-map
                    :center="location.center"
                    :zoom="15"
                    map-type-id="roadmap"
                    style="max-width: 328px; height: 328px"
            >
                <gmap-marker
                        :position="location.center"
                        @click="center=location.center"
                ></gmap-marker>
            </gmap-map>
            <br/>
            <strong>{{ location.venue }}</strong><br/>
            {{ location.line_address_1 }}<br/>
            {{ location.where }}<br/><br/>
            {{ location.when }}
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'When',
        computed: mapState([
            'googleApiKey',
            'location'
        ]),
        beforeCreate() {

        }
    }
</script>