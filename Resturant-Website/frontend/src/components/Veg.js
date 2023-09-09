import React from "react";
import { Link } from "react-router-dom";


const Veg = () => {
 
  return (
    <div>
              <Link to="/nonveg">

        <button class="btn12">NON VEG</button>
        </Link>

      <h1>Vegetarian Items</h1>
       <div className="row px-5 pb-5">
        <div className="col px-3">
          <div className="card">
            <img
              src="/images/chole.jpg"
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">Chole Bhature</h5>
              {/* <p className="card-text">Chole Bhature</p> */}

              <p class="d-inline-flex gap-2">
                <a
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="1"
                >
                  Description
                </a>
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#2"
                  aria-expanded="false"
                  aria-controls="2"
                >
                  Ingredients
                </button>
              </p>
              <div class="row">
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="1"
                  >
                    <div class="card card-body">
                    Bihari Chole Masala recipe is an easy-to-make side dish for Poori. This Chana masala can be served with parathas, pooris, and rice as well.
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="2"
                  >
                    <div class="card card-body">
                    250 gms Kabuli Chana,
Salt to taste,

1.5 cups Onions,
1/2 tsp Turmeric Powder,

1 tbsp Kashmiri chili powder,
1 tbsp Butter,
4 tsp Cooking Oil,
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className="col px-3">
          <div className="card">
            <img src="/images/idli.jpg" className="card-img-top" alt="..." />

            <div className="card-body">
              <h5 className="card-title">Idli</h5>
               {/* <p className="card-text">chole </p>  */}

              <p class="d-inline-flex gap-2">
                <a
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#3"
                  role="button"
                  aria-expanded="false"
                  aria-controls="3"
                >
                  Description
                </a>
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#4"
                  aria-expanded="false"
                  aria-controls="4"
                >
                  Ingredients
                </button>
              </p>
              <div class="row">
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="3"
                  >
                    <div class="card card-body">
                    Idli is a soft, pillowy steamed savory cake made from fermented rice and lentil batter.
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="4"
                  >
                    <div class="card card-body">
                    2 1/2 cup basmati rice ,
                     1 1/2 cup urad dal ,
                      1/2 tablespoon fenugreek seeds .
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col px-3">
          <div className="card">
            <img
              src="/images/rajma.jpg"
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">Rajma Chawal</h5>
              {/* <p className="card-text">Fish curry</p> */}

              <p class="d-inline-flex gap-2">
                <a
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#4"
                  role="button"
                  aria-expanded="false"
                  aria-controls="4"
                >
                  Description
                </a>
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#6"
                  aria-expanded="false"
                  aria-controls="6"
                >
                  Ingredients
                </button>
              </p>
              <div class="row">
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="5"
                  >
                    <div class="card card-body">
                    It is a lightly spiced, creamy and delicious Punjabi style curry made with protein rich kidney beans, aromatics like onions.
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="6"
                  >
                    <div class="card card-body">
                    1 cup red kidney beans ,
                     1 cup rice ,
                      2 large onion ,
                      1 tablespoon garlic.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row pb-5 px-5">
        <div className="col px-3">
          <div className="card">
            <img
              src="/images/pulav.jpg"
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">Pulav</h5>

              <p class="d-inline-flex gap-2">
                <a
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#7"
                  role="button"
                  aria-expanded="false"
                  aria-controls="7"
                >
                  Description
                </a>
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#8"
                  aria-expanded="false"
                  aria-controls="8"
                >
                  Ingredients
                </button>
              </p>
              <div class="row">
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="7"
                  >
                    <div class="card card-body">
                    Pulav is basically an easy rice based dish made with spices, herbs and vegetables in a pot.
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="8"
                  >
                    <div class="card card-body">
                      {/* Prawns - 500 grams, cleaned and deveined
                      Ghee (clarified butter) - 4 to 5 tablespoons
                      Onions - 2 medium, finely chopped
                      Tomatoes - 2 medium, finely chopped
                      Tamarind paste - 1 tablespoon (soaked in water and strained)
                      Curry leaves - a few
                      Mustard seeds - 1/2 teaspoon
                      Fenugreek seeds - 1/4 teaspoon
                      Turmeric powder - 1/2 teaspoon
                      Red chili powder - 1 to 2 teaspoons (adjust to taste)
                      Coriander powder - 1 teaspoon
                      Cumin powder - 1/2 teaspoon
                      Jaggery or sugar - 1 teaspoon
                      Salt - to taste */}
                      1 bay leaf ,
                      2 inch cinnamon ,
                       4 cloves ,
                        4 green cardamom ,
                        ½ to ¾ teaspoon shahi jeera or jeera ,
                         1 star anise

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col px-3">
          <div className="card">
            <img
              src="/images/gulab.jpg"
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">Gulab Jamun</h5>
              {/* <p className="card-text">Mushroom chilli </p> */}

              <p class="d-inline-flex gap-2">
                <a
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#9"
                  role="button"
                  aria-expanded="false"
                  aria-controls="9"
                >
                  Description
                </a>
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#10"
                  aria-expanded="false"
                  aria-controls="10"
                >
                  Ingredients
                </button>
              </p>
              <div class="row">
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="9"
                  >
                    <div class="card card-body">
                    Gulab jamun gets its brownish red colour because of the sugar content in the milk powder (khoya). In other types of gulab jamun, sugar is added in the batter, and after frying, the sugar caramelization gives it its dark, almost black colour, which is then called kala jamun or "black jamun". The sugar syrup may be replaced with (slightly) diluted maple syrup for a gulab jamun.
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="10"
                  >
                    <div class="card card-body">
                    2 cups sugar5 cups water1 tsp milk1/4 tsp cardamom seeds1/2 tsp saffron1/2 tsp cardamom powderFor Gulab Jamun Balls:1 1/2 cups khoya, grated1/2 tsp baking soda
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col px-3">
          <div className="card">
            <img src="/images/mushroom.webp" className="card-img-top" alt="..." />

            <div className="card-body">
              <h5 className="card-title">Mushroom tikka</h5>
              {/* <p className="card-text">Chicken kabab</p> */}

              <p class="d-inline-flex gap-2">
                <a
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#11"
                  role="button"
                  aria-expanded="false"
                  aria-controls="11"
                >
                  Description
                </a>
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#12"
                  aria-expanded="false"
                  aria-controls="12"
                >
                  Ingredients
                </button>
              </p>
              <div class="row">
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="11"
                  >
                    <div class="card card-body">
                    Chilli mushroom made under 15 minutes with mushrooms, green onions, bell peppers, soya sauce, chilli sauce and garlic.
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="12"
                  >
                    <div class="card card-body">
                    Button mushrooms - 250 grams, cleaned and sliced
                      Green bell peppers (capsicum) - 1 medium, thinly sliced
                      Onion - 1 medium, thinly sliced
                      Garlic - 4 to 5 cloves, minced
                      Green chilies - 2 to 3, slit
                      Spring onions (scallions) - 2 to 3, chopped (for garnishing)
                      Vegetable oil - for frying and cooking
                      Salt - to taste
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
         </div>
      </div>
      
    </div>
  );
};

export default Veg;
