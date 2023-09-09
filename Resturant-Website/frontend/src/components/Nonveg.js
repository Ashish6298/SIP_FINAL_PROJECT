import React from "react";
import { Link } from "react-router-dom";
const Nonveg = () => {
 
  return (
    <div>
      
      <Link to="/veg">

<button class="btn11"> VEG</button>
</Link>
      <h1>Non-Vegetarian Items</h1>
      <div>
      
       <div className="row px-5 pb-5">
        <div className="col px-3">
          <div className="card">
            <img
              src="/images/fish.jpg"
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">Fish Fry</h5>
              {/* <p className="card-text">ChickenBiryani</p> */}

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
            <img src="/images/chickenbiriyani.jpg" className="card-img-top" alt="..." />

            <div className="card-body">
              <h5 className="card-title">ChickenBiryani</h5>
              {/* <p className="card-text">chole </p> */}

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
                    Chicken Biryani is a delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="4"
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
            <img
              src="/images/tandoori.jpeg"
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">Chicken Tandoori</h5>
              {/* <p className="card-text">Fish curry</p> */}

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
                    Tandoori chicken is a popular Indian appetizer made with chicken, spices, yogurt and herbs. 
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="6"
                  >
                    <div class="card card-body">
                    8 Large Chicken pieces with skin (2 pieces breast, 2 pieces of thighs, a couple of wings)to taste OilFor the marinade:4 tsp Red chilli paste3 tbsp Ginger and garlic paste2 tsp Chaat masala1 1/2 tsp Tandoori masala1 tbsp Oil3 tbsp Curdto taste Salt1/2 Lemon (juiced)For the tandoori masala:2 Cinnamon sticks1 tbsp Black peppercorns5 Green cardamom3 Brown cardamom2 tsp Coriander seeds2 tsp Cumin seeds3 Cloves1 Bay leaf3/4 tsp Turmeric
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
              src="/images/muttonroll.webp"
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">Mutton roll</h5>

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
                    A thin, crisp porota wraps succulent, slightly chewy mutton kababs with some onions, green chillies, and lots of lime juice. 
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="8"
                  >
                    <div class="card card-body">
                    pancakes that are filled with spiced potatoes, onions, and mutton, which are then wrapped, breadcrumbed and deep-fried.
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
              src="/images/egg65.webp"
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">Egg 65</h5>
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
                      
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="10"
                  >
                    <div class="card card-body">
                    10-12 no. Eggs, अंडे

3-4 no. Green chillies (spicy & chopped) हरी मिर्च

½ inch Ginger, grated, अदरक

Salt to taste, नमक स्वाद अनुसार

½ tsp Degi red chili powder, देगी लाल मिर्च पाउडर

1½ tbsp Coriander leaves, chopped, धनिया पत्ता

¼ cup Processed cheese, grated, चीज

½ tsp Oil, तेल
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col px-3">
          <div className="card">
            <img src="/images/kabab.webp" className="card-img-top" alt="..." />

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
          </div> 
         </div>
      </div>
      
    </div>
 




      
    </div>
  );
};

export default Nonveg;
