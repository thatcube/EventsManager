<template>
  <v-container>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2" v-if="!loading">
      <v-flex sm10 offset-sm1>
        <v-carousel>
          <v-carousel-item style="cursor: pointer"
            v-for="event in events"
            :src="event.imageUrl"
            :key="event.id"
            @click="onLoadEvent(event.id)">
            <div class="title">
              {{ event.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center pad text-sm-right">
        <v-btn large router to="/events" class="secondary">Explore Events</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center pad text-sm-left">
        <v-btn large router to="/event/new" class="secondary">Create Event</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      events () {
        return this.$store.getters.featuredEvents
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onLoadEvent (id) {
        this.$router.push('/events/' + id)
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    background-color: rgba(13, 71, 161, .8);
    color: white;
    font-size: 2em;
    padding: 15px;
    top: 0px;
  }
  .pad {
    margin-top: 4%;
  }
</style>
