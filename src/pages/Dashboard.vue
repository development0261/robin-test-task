<template>
  <div class="main-contant-box-inner">
    <div class="contant-box">
      <ProfileDetails></ProfileDetails>
    </div>
    <div class="contant-box">
      <MostLikelyToBuy></MostLikelyToBuy>
    </div>
    <div class="contant-box">
      <Campaigns></Campaigns>
    </div>
    <div class="contant-box">
      <Purchases></Purchases>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import ProfileDetails from '@/components/CustomComponents/Dashboard/ProfileDetails.vue'
import MostLikelyToBuy from '@/components/CustomComponents/Dashboard/MostLikelyToBuy.vue'
import Campaigns from '@/components/CustomComponents/Dashboard/Campaigns.vue'
import Purchases from '@/components/CustomComponents/Dashboard/Purchases.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {ProfileDetails, MostLikelyToBuy, Campaigns, Purchases},
})
</script>