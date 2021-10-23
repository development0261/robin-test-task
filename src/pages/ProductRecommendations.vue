<template>
  <div class="product-recommendations-section">
    <div class="prs-top">
      <div class="prst-top">
        <div class="prst-tags">
          <ul>
            <li>
              <p>
                Förpackningsmaterial
                <span class="remove-tags"><img src="../image/remove-light.png" /></span>
              </p>
            </li>
            <li>
              <p>
                Förpackningsmaterial
                <span class="remove-tags"><img src="../image/remove-light.png" /></span>
              </p>
            </li>
            <li>
              <p>
                Förpackningsmaterial
                <span class="remove-tags"><img src="../image/remove-light.png" /></span>
              </p>
            </li>
            <li>
              <a href="#" class="add-tags"><img src="../image/plus-gray.png" /></a>
            </li>
          </ul>
        </div>
        <h2 class="tags-pr">54%</h2>
      </div>
      <div class="prst-bottom">
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mostsoldarticles"
          aria-expanded="false"
          class="msa-btn collapsed"
          aria-controls="mostsoldarticles"
        >
          Most sold articles
          <img src="../image/down-sky.png" alt="" />
        </button>

        <div class="msa-content collapse" id="mostsoldarticles">
          <div class="sold-articles-section">
            <div class="sold-articles-box">
              <div class="sold-articles-box-title">
                <h6>Förpackningsmaterial</h6>
                <button
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#förpackningsmaterial"
                  aria-expanded="false"
                  class="collapsed"
                  aria-controls="förpackningsmaterial"
                >
                  <span class="hide-articles">Hide articles</span>
                  <span class="show-articles">Show articles</span>
                  <img src="../image/right-sky.png" alt="" />
                </button>
              </div>
              <div class="sold-articles-details collapse" id="förpackningsmaterial">
                <b-table :items="items" :fields="fields" responsive="lg">
                  <template #cell(show_details)="">
                    <h1>tets</h1>
                  </template>
                  <template #cell(show_details1)="">
                    <a href="#" class="add-article-btn"
                      ><img src="../image/plus-sky.png" /> Add article</a
                    >
                  </template>
                  <template #cell(probability_to_sell)="">
                    <h6 class="high-article">High</h6>
                  </template>
                  <template #cell(medium)="">
                    <h6 class="medium-article">Medium</h6>
                  </template>
                  <template #cell(low)="">
                    <h6 class="low-article">Low</h6>
                  </template>
                </b-table>
              </div>
            </div>
            <div class="sold-articles-box">
              <div class="sold-articles-box-title">
                <h6>Packtejp, Häftapparater & Limp</h6>
                <button
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#packtejp"
                  aria-expanded="false"
                  class="collapsed"
                  aria-controls="packtejp"
                >
                  <span class="hide-articles">Hide articles</span>
                  <span class="show-articles">Show articles</span>
                  <img src="../image/right-sky.png" alt="" />
                </button>
              </div>
              <div class="sold-articles-details collapse" id="packtejp">
                <b-table :items="items" :fields="fields" responsive="lg">
                  <template #cell(show_details)="">
                    <h1>tets</h1>
                  </template>
                  <template #cell(show_details1)="">
                    <a href="#" class="add-article-btn"
                      ><img src="../image/plus-sky.png" /> Add article</a
                    >
                  </template>
                  <template #cell(probability_to_sell)="">
                    <h6 class="high-article">High</h6>
                  </template>
                  <template #cell(medium)="">
                    <h6 class="medium-article">Medium</h6>
                  </template>
                  <template #cell(low)="">
                    <h6 class="low-article">Low</h6>
                  </template>
                </b-table>
              </div>
            </div>
            <div class="sold-articles-box">
              <div class="sold-articles-box-title">
                <h6>Kartonger & Transportlådor</h6>
                <button
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kartonger"
                  aria-expanded="false"
                  class="collapsed"
                  aria-controls="kartonger"
                >
                  <span class="hide-articles">Hide articles</span>
                  <span class="show-articles">Show articles</span>
                  <img src="../image/right-sky.png" alt="" />
                </button>
              </div>
              <div class="sold-articles-details collapse" id="kartonger">
                <b-table :items="items" :fields="fields" responsive="lg">
                  <template #cell(show_details)="">
                    <h1>tets</h1>
                  </template>
                  <template #cell(show_details1)="">
                    <a href="#" class="add-article-btn"
                      ><img src="../image/plus-sky.png" /> Add article</a
                    >
                  </template>
                  <template #cell(probability_to_sell)="">
                    <h6 class="high-article">High</h6>
                  </template>
                  <template #cell(medium)="">
                    <h6 class="medium-article">Medium</h6>
                  </template>
                  <template #cell(low)="">
                    <h6 class="low-article">Low</h6>
                  </template>
                </b-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="prs-bottom">
      <div class="contant-box-main">
        <div class="contant-header">
          <h6><img src="./../image/recommended-icon.png" alt="" />Recommended</h6>
        </div>
        <div class="recommended-section">
          <div class="recommended-section-row">
            <div class="recommended-section-table">
              <button
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#recommended1"
                aria-expanded="false"
                class="collapsed"
                aria-controls="recommended1"
              >
                <span class="hide-articles">Hide</span>
                <span class="show-articles">Show</span>
                <img src="../image/right-sky.png" alt="" />
              </button>
              <div class="table-responsive-lg">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Article number</th>
                      <th scope="col">Article Name</th>
                      <th scope="col">Сategory</th>
                      <th scope="col">Article connection</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>00139</td>
                      <td>Tejp, påsförslutning Röd 66 m x 12 mm, 6 st</td>
                      <td>Förpackningsmaterial</td>
                      <td rowspan="2" class="article-connection">50%</td>
                    </tr>
                    <tr>
                      <td>00139</td>
                      <td>Tejp, påsförslutning Röd 66 m x 12 mm, 6 st</td>
                      <td>Förpackningsmaterial</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="recommended-section-details collapse" id="recommended1">
                <h6>Recommended associated articles</h6>
                <b-table :items="items1" :fields="fields1" responsive="lg">
                  <template #cell(show_details)="">
                    <h1>tets</h1>
                  </template>
                  <template #cell(show_details1)="">
                    <a href="#" class="add-article-btn"
                      ><img src="../image/plus-sky.png" /> Add article</a
                    >
                  </template>
                  <template #cell(probability_to_sell)="">
                    <h6 class="high-article">High</h6>
                  </template>
                  <template #cell(medium)="">
                    <h6 class="medium-article">Medium</h6>
                  </template>
                  <template #cell(low)="">
                    <h6 class="low-article">Low</h6>
                  </template>
                </b-table>
              </div>
            </div>
            <div class="recommended-section-table">
              <button
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#recommended2"
                aria-expanded="false"
                class="collapsed"
                aria-controls="recommended2"
              >
                <span class="hide-articles">Hide</span>
                <span class="show-articles">Show</span>
                <img src="../image/right-sky.png" alt="" />
              </button>
              <div class="table-responsive-lg">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Article number</th>
                      <th scope="col">Article Name</th>
                      <th scope="col">Сategory</th>
                      <th scope="col">Article connection</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>00139</td>
                      <td>Tejp, påsförslutning Röd 66 m x 12 mm, 6 st</td>
                      <td>Förpackningsmaterial</td>
                      <td rowspan="2" class="article-connection">50%</td>
                    </tr>
                    <tr>
                      <td>00139</td>
                      <td>Tejp, påsförslutning Röd 66 m x 12 mm, 6 st</td>
                      <td>Förpackningsmaterial</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="recommended-section-details collapse" id="recommended2">
                <h6>Recommended associated articles</h6>
                <b-table :items="items1" :fields="fields1" responsive="lg">
                  <template #cell(show_details)="">
                    <h1>tets</h1>
                  </template>
                  <template #cell(show_details1)="">
                    <a href="#" class="add-article-btn"
                      ><img src="../image/plus-sky.png" /> Add article</a
                    >
                  </template>
                  <template #cell(probability_to_sell)="">
                    <h6 class="high-article">High</h6>
                  </template>
                  <template #cell(medium)="">
                    <h6 class="medium-article">Medium</h6>
                  </template>
                  <template #cell(low)="">
                    <h6 class="low-article">Low</h6>
                  </template>
                </b-table>
              </div>
            </div>
            <div class="recommended-section-table">
              <button
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#recommended3"
                aria-expanded="false"
                class="collapsed"
                aria-controls="recommended3"
              >
                <span class="hide-articles">Hide</span>
                <span class="show-articles">Show</span>
                <img src="../image/right-sky.png" alt="" />
              </button>
              <div class="table-responsive-lg">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Article number</th>
                      <th scope="col">Article Name</th>
                      <th scope="col">Сategory</th>
                      <th scope="col">Article connection</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>00139</td>
                      <td>Tejp, påsförslutning Röd 66 m x 12 mm, 6 st</td>
                      <td>Förpackningsmaterial</td>
                      <td rowspan="2" class="article-connection">50%</td>
                    </tr>
                    <tr>
                      <td>00139</td>
                      <td>Tejp, påsförslutning Röd 66 m x 12 mm, 6 st</td>
                      <td>Förpackningsmaterial</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="recommended-section-details collapse" id="recommended3">
                <h6>Recommended associated articles</h6>
                <b-table :items="items1" :fields="fields1" responsive="lg">
                  <template #cell(show_details)="">
                    <h1>tets</h1>
                  </template>
                  <template #cell(show_details1)="">
                    <a href="#" class="add-article-btn"
                      ><img src="../image/plus-sky.png" /> Add article</a
                    >
                  </template>
                  <template #cell(probability_to_sell)="">
                    <h6 class="high-article">High</h6>
                  </template>
                  <template #cell(medium)="">
                    <h6 class="medium-article">Medium</h6>
                  </template>
                  <template #cell(low)="">
                    <h6 class="low-article">Low</h6>
                  </template>
                </b-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Member',
  components: {},
  data() {
    return {
      fields: ['article_number', 'article_name', 'probability_to_sell', 'show_details1'],
      items: [
        {
          article_number: '00139',
          article_name: 'Tejp, påsförslutning Röd 66 m x 12 mm, 6 st',
          _probability_to_sell: true,
          _show_details1: true,
        },
        {
          article_number: '00139',
          article_name: 'Tejp, påsförslutning Röd 66 m x 12 mm, 6 st',
          _probability_to_sell: true,
          _show_details1: true,
        },
        {
          article_number: '00139',
          article_name: 'Tejp, påsförslutning Röd 66 m x 12 mm, 6 st',
          _probability_to_sell: true,
          _show_details1: true,
        },
      ],
      fields1: ['ID', 'article_name', 'category', 'probability_to_sell', 'show_details1'],
      items1: [
        {
          ID: '00139',
          article_name: 'Tejp, påsförslutning Röd 66 m x 12 mm, 6 st',
          category: 'Avfallshantering',
          _probability_to_sell: true,
          _show_details1: true,
        },
        {
          ID: '00139',
          article_name: 'Tejp, påsförslutning Röd 66 m x 12 mm, 6 st',
          category: 'Food Packaging',
          _probability_to_sell: true,
          _show_details1: true,
        },
        {
          ID: '00139',
          article_name: 'Tejp, påsförslutning Röd 66 m x 12 mm, 6 st',
          category: 'Skyddsutrustning & Arbetskläde',
          _probability_to_sell: true,
          _show_details1: true,
        },
      ],
    }
  },
})
</script>
