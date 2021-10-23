<template>
  <div class="top-three-box">
    <div class="ttb-inner">
      <div class="ttb-header">
        <h6><img src="../../../image/star-icon.png" alt="" />Top 3 articles Tranding</h6>
      </div>
      <div class="most-sold-box">
        <div class="most-sold-title">
          <h3>Most sold</h3>
          <a href="#" class="view-more-btn"
            >View <img src="../../../image/right-sky.png" alt=""
          /></a>
        </div>
        <div class="most-sold-bars">
          <div class="most-sold-bars-wrap">
            <div class="msbw-title">
              <div class="msbw-title-top">
                <p>Engångshadskar för korttidsanvändning</p>
                <span>99%</span>
              </div>
              <div class="msbw-title-bottom">
                <p>Avfallshantering</p>
              </div>
            </div>
            <div class="msbw-bar">
              <span style="width: 99%"></span>
            </div>
          </div>
          <div class="most-sold-bars-wrap">
            <div class="msbw-title">
              <div class="msbw-title-top">
                <p>Skopa plast 900 ml</p>
                <span>68%</span>
              </div>
              <div class="msbw-title-bottom">
                <p>Skyddsutrustning & Arbet</p>
              </div>
            </div>
            <div class="msbw-bar">
              <span style="width: 68%"></span>
            </div>
          </div>
          <div class="most-sold-bars-wrap">
            <div class="msbw-title">
              <div class="msbw-title-top">
                <p>Basket 26 l color blue</p>
                <span>67%</span>
              </div>
              <div class="msbw-title-bottom">
                <p>Food Packaging</p>
              </div>
            </div>
            <div class="msbw-bar">
              <span style="width: 67%"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="highest-value-box">
        <div class="most-sold-title">
          <h3>Highest value</h3>
          <a href="#" class="view-more-btn"
            >View <img src="../../../image/right-sky.png" alt=""
          /></a>
        </div>
        <div class="highest-values">
          <ul>
            <li>
              <p>Skopa plast 450 ml</p>
              <span>240</span>
            </li>
            <li>
              <p>Skopa plast 900 ml</p>
              <span>120</span>
            </li>
            <li>
              <p>Skopa plast 1000 ml</p>
              <span>60</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="highest-value-box">
        <div class="most-sold-title">
          <h3>Connected</h3>
          <a href="#" class="view-more-btn"
            >View <img src="../../../image/right-sky.png" alt=""
          /></a>
        </div>
        <div class="highest-values connected-values">
          <ul>
            <li>
              <p>Skopa plast 450 ml</p>
              <h5 class="high-connected">High</h5>
            </li>
            <li>
              <p>Skopa plast 900 ml</p>
              <h5 class="medium-connected">Medium</h5>
            </li>
            <li>
              <p>Skopa plast 1000 ml</p>
              <h5 class="low-connected">Low</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
export default defineComponent({
  name: 'ArticlesCategory',
})
</script>
<style>
</style>