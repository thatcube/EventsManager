<template>
  <v-container>
    <v-layout row wrap v-if="loading">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="white--text"
          :width="7"
          :size="70"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h6 class="white--text">{{ event.title }}</h6>
            <template v-if="userIsCreator">
              <v-spacer></v-spacer>
              <app-edit-event-details-dialog :event="event"></app-edit-event-details-dialog>
            </template>
          </v-card-title>
          <v-card-media
            :src="event.imageUrl"
            height="400px"
          ></v-card-media>
          <v-card-text>
            <div class="white--text">{{ event.date | date }} - {{ event.location }}</div><br />
            <div>
              <app-edit-event-date-dialog
                :event="event" v-if="userIsCreator">
              </app-edit-event-date-dialog>
              <app-edit-event-time-dialog
                :event="event" v-if="userIsCreator">
              </app-edit-event-time-dialog>
            </div><br />
            <div>{{ event.description }}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <app-event-register-dialog
              :eventId="event.id"
              v-if="userIsAuthenticated && !userIsCreator"></app-event-register-dialog>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      event () {
        return this.$store.getters.loadedEvent(this.id)
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      userIsCreator () {
        if (!this.userIsAuthenticated) {
          return false
        }
        return this.$store.getters.user.id === this.event.creatorId
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>
