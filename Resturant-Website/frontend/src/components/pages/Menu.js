import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    // <div className="min-vh-100">
    //   <h1 className="text-center py-5">Foods We Have</h1>
    //   <div className="row px-5 pb-5">

    <div className="container-fluid min-vh-100">
      <h1 className="text-center py-5">Let's go</h1>

      <Link to="/veg">
        <button class="btn36">VEG</button>

      </Link>


      <Link to="/nonveg">
        <button class="btn45">NON VEG</button>
      </Link>


      {/* <div className="row px-5 pb-5">
        <div className="col px-3">
          <div className="card">
            <img
              src="/images/ChickenBiryani.jpg"
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">ChickenBiryani</h5>
              <p className="card-text">ChickenBiryani</p>

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
                      Chicken Biryani is a delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="2"
                  >
                    <div class="card card-body">
                      Chicken (bone-in or boneless pieces) - 1 kg (approximately)
                      Yogurt - 1/2 cup
                      Ginger paste - 1 tablespoon
                      Garlic paste - 1 tablespoon
                      Red chili powder - 1 teaspoon
                      Turmeric powder - 1/2 teaspoon
                      Garam masala - 1 teaspoon
                      Lemon juice - from 1 lemon
                      Salt - to taste
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col px-3">
          <div className="card">
            <img src="/images/chole.jpg" className="card-img-top" alt="..." />

            <div className="card-body">
              <h5 className="card-title">chole</h5>
              <p className="card-text">chole </p>

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
                      Chana Masala, also known as Chole Masala, is an authentic North Indian style Curry that is naturally vegan and ready in just 45 minutes.
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="4"
                  >
                    <div class="card card-body">
                      Onions - 2 medium, finely chopped
                      Tomatoes - 2 medium, finely chopped
                      Green chilies - 2 to 3, slit
                      Ginger-garlic paste - 1 tablespoon
                      Chole masala - 2 to 3 teaspoons (or a blend of ground spices like cumin, coriander, turmeric, etc.)
                      Red chili powder - 1/2 teaspoon (adjust to taste)
                      Turmeric powder - 1/4 teaspoon
                      Garam masala - 1/2 teaspoon
                      Cumin seeds - 1 teaspoon
                      Bay leaf - 1
                      Cinnamon stick - 1 small piece
                      Cloves - 3 to 4
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
              src="/images/delicious.jpg"
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">Fish curry</h5>
              <p className="card-text">Fish curry</p>

              <p class="d-inline-flex gap-2">
                <a
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#5"
                  role="button"
                  aria-expanded="false"
                  aria-controls="5"
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
                      fish curry is made much the same traditional way by sautéing onions, ginger garlic, tomatoes & ground spices
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="6"
                  >
                    <div class="card card-body">
                      Fish fillets (such as cod, tilapia, salmon, or any firm white fish) - 500 grams to 1 kg, cut into pieces
                      Onions - 2 medium, finely chopped
                      Tomatoes - 2 medium, finely chopped
                      Ginger-garlic paste - 1 tablespoon
                      Green chilies - 2 to 3, slit
                      Coconut milk - 1 cup
                      Curry leaves - a few
                      Mustard seeds - 1/2 teaspoon
                      Cumin seeds - 1/2 teaspoon
                      Turmeric powder - 1/2 teaspoon
                      Red chili powder - 1/2 teaspoon (adjust to taste)
                      Coriander powder - 1 teaspoon
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
              src="/images/gujrati.jpeg"
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">Prawns Ghee roast</h5>

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
                      Prawns Ghee Roast is made with Prawns, ghee/clarified butter & spices. Prawns are cooked in ghee roasted spices.
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="8"
                  >
                    <div class="card card-body">
                      Prawns - 500 grams, cleaned and deveined
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
                      Salt - to taste
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
              src="/images/gujrati.jpeg"
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">Mushroom chilli</h5>
              <p className="card-text">Mushroom chilli </p>

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
                      Chilli mushroom made under 15 minutes with mushrooms, green onions, bell peppers, soya sauce, chilli sauce and garlic.
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="10"
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
        <div className="col px-3">
          <div className="card">
            <img src="/images/india.jpg" className="card-img-top" alt="..." />

            <div className="card-body">
              <h5 className="card-title">Chicken kabab</h5>
              <p className="card-text">Chicken kabab</p>

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
                      Kabab or kebab is a piece of food, mostly meat grilled over charcoal fire
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="12"
                  >
                    <div class="card card-body">
                      Boneless chicken breast or thigh meat - 500 grams, cut into bite-sized pieces
                      Yogurt - 1/4 cup
                      Ginger paste - 1 tablespoon
                      Garlic paste - 1 tablespoon
                      Lemon juice - from 1 lemon
                      Red chili powder - 1 teaspoon (adjust to taste)
                      Turmeric powder - 1/2 teaspoon
                      Cumin powder - 1 teaspoon
                      Coriander powder - 1 teaspoon
                      Garam masala - 1/2 teaspoon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        {/* </div>
      </div> */}
    </div>
  );
};

export default Menu;
