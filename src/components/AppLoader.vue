<template>
    <v-overlay>
        <v-progress-circular
            size="80"
            width="8"
            color="white"
            indeterminate
        />
    </v-overlay>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
export default Vue.extend({
    name: 'AppLoader',
    computed: {
        ...mapGetters(['getAppLoader']),
        showLoader() {
            return this.getAppLoader;
        },
    },
});
</script>

<style scoped></style>
