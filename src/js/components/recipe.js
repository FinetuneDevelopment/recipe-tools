'use strict';

export default function recipeFactory() {
  let myFactory = {};

  myFactory.init = function () {
    const recipies = {
      "recipe": [
        {
          "name": "Giouvarlakia",
          "id": "giouvarlakia",
          "description": "A low carb version of a traditional hearty Greek dish",
          "shopping": ["Beef", "Pork", "Cauliflower", "Lemon", "Dill", "Onion", "Egg", "Olive oil", "Butter", "Parsley", "Garlic", "Stock"],
          "tags": ["Mediterranean", "Winter", "Low-carb"],
          "image": "/img/recipes/giouvarlakia.jpg",
          "ingredient": [{
              "amount": "500",
              "unit": "g",
              "name": "ground meat (beef, pork, or both), at least 20% fat"
            },
            {
              "amount": "1",
              "name": "small onion",
              "preparation": "finely chopped or minced"
            },
            {
              "amount": "350",
              "unit": "g",
              "name": "cauliflower rice"
            },
            {
              "amount": "2",
              "name": "lemons",
              "preparation": "juiced"
            },
            {
              "amount": "3",
              "name": "eggs"
            },
            {
              "name": "olive oil"
            },
            {
              "amount": "50",
              "unit": "g",
              "name": "butter"
            },
            {
              "name": "parsley"
            },
            {
              "name": "dill"
            },
            {
              "amount": "1",
              "unit": "clove",
              "name": "garlic"
            },
            {
              "amount": "2",
              "unit": "tsp",
              "name": "concentrated chicken or vegetable stock"
            }
          ],
          "ingredientGroup": [],
          "step": [{
              "description": "Saute the cauliflower rice with no (or very little) oil and stir frequently, until it dries up, making sure it doesn't stick.\n(Note that this picture only has half the amount of cauliflower rice the recipe needs)\n![The cauliflower rice, after it's cooked enough to dry](https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/106742352_10158441296886192_2719018989199158785_n.jpg?_nc_cat=110&_nc_sid=07e735&_nc_ohc=LA0Z029Nqf4AX9O3xky&_nc_ht=scontent-lga3-1.xx&oh=e984cfd0263d9e0863a6249dbb4c39b5&oe=5F21DB46)"
            },
            {
              "description": "In a large pot, add 1.5 liters of water, the butter, 2 tbsp olive oil, and the chicken stock and bring to the boil. While you're waiting for it to boil, make the meatballs."
            },
            {
              "description": "**Meatball mix:** In a large bowl, mix well:\n- the ground meat\n- the white from 1 egg (save the yolk for the avgolemono)\n- the parsley and dill (if using dried, about 1 tbsp each, adjust accordingly for fresh (which is preferable)\n- 3 tbsp olive oil\n- 2 tsp salt\n- Some pepper\n\nMix it very well and once it's thoroughly mixed, add 100 g of the cauliflower rice.\n![The ground meat mix](https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/106500543_10158441297096192_1016249431222912855_n.jpg?_nc_cat=106&_nc_sid=07e735&_nc_ohc=aos9x5WnGDYAX_haM-z&_nc_ht=scontent-lga3-1.xx&oh=b032e9d223211ee1f19b7ef7992967e4&oe=5F21DD06)"
            },
            {
              "description": "Make small balls with the meatball mix, around 30-40, the smaller the tastier. I made 32, so aim for even smaller than this.\n![](https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/83245195_10158441297121192_906504881004643779_n.jpg?_nc_cat=104&_nc_sid=07e735&_nc_ohc=9BMKDv2NoHQAX8dusrw&_nc_ht=scontent-lga3-1.xx&oh=45af8dfc0d9c9e11868d4e536ad513f2&oe=5F207CE3)"
            },
            {
              "description": "Lower the meatballs one by one slowly into the boiling water. Put the lid on, and simmer for 30-35 minutes in medium to low heat.\n![](https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/106353146_10158441297021192_1920302685464321506_n.jpg?_nc_cat=111&_nc_sid=07e735&_nc_ohc=YYLf9oWL1soAX_s6nw0&_nc_ht=scontent-lga3-1.xx&oh=b65868dd2f6cf987b0234dd41f8a916a&oe=5F2204D9)"
            },
            {
              "description": "After 20-25 minutes (so 10 minutes before they are done) take a cup of liquid out, and add the remaining cauliflower rice to the pot."
            },
            {
              "description": "**Avgolemono (egg-lemon sauce)**: Beat the 2 eggs and remaining yolk with the juice of the two lemons and when they are homogenized well, start very slowly pouring the cup of stock into the mixture, a little at a time, while beating the mixture with a whisk (ideally an electric whisk). **This needs patience. ** If you don't do this slowly enough, the avgolemono will fail. You need to maintain a homogeneous consistency as you whisk. Doing it too fast will cook the egg and you'll have disgusting cooked bits of egg white floating in your avgolemono (there is even an expression for this in Greek, \"το αυγολέμονο έκοψε\")."
            },
            {
              "description": "Once the meatballs have been cooking for 30 minutes, pour the avgolemono in the pot and stir very well. Bring to a boil once more, stirring frequently.\n![](https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/106504893_10158441296991192_6252916317606881655_n.jpg?_nc_cat=105&_nc_sid=07e735&_nc_ohc=IsPwCJGIIs8AX-eMSRL&_nc_ht=scontent.fbed1-1.fna&oh=c62ae82d5d9a2811634ffa6e3cc7b00f&oe=5F20EACB)"
            },
            {
              "description": "**That's it!** Serve in bowls, with plenty of liquid. This dish can have a range of consistencies and they're all ok: with a thicker liquid, it's more of a sauce, whereas thinner liquid (like in the picture), is more like soup. Up to you!"
            }
          ],
          "notes": "- For concentrated stock, we love the brand Better than Bouillon. We used chicken.",
          "forked": "- Anastasia's Giouvarlakia\n- https://mybigfatketolife.com/2019/04/05/giouvarlakia/"
        },
        {
          "name": "Tal’s Tahini “bread pudding”",
          "id": "tahini-bread-pudding",
          "description": "A delicious baked dessert that takes 5 minutes to make!",
          "shopping": ["Tahini", "Egg", "Baking powder", "Honey", "Brown sugar", "Maple extract", "Cinnamon", "Sesame seeds"],
          "tags": ["Baking", "Autumn", "Low-carb"],
          "image": "/img/recipes/bread-pudding.jpg",
          "ingredient": [{
              "amount": "0.5",
              "unit": "cup",
              "name": "tahini"
            },
            {
              "amount": "4",
              "name": "eggs"
            },
            {
              "amount": "1",
              "unit": "tsp",
              "name": "baking powder"
            },
            {
              "amount": "30",
              "unit": "g",
              "name": "honey"
            },
            {
              "amount": "3",
              "unit": "tbsp",
              "name": "Sukrin Gold or brown sugar"
            },
            {
              "amount": "1",
              "unit": "tsp",
              "name": "maple extract"
            },
            {
              "name": "Cinnamon",
              "amount": "1",
              "unit": "tsp"
            },
            {
              "name": "sesame seeds for garnish"
            }
          ],
          "ingredientGroup": [{
            "ingredient": []
          }],
          "step": [{
              "description": "Beat all ingredients together really well in a blender."
            },
            {
              "description": "Pour mixture in an oiled cake tray (we suggest sesame oil for the oiling) and sprinkle with sesame seeds."
            },
            {
              "description": "Bake for 25-30 minutes at 345F (convection bake is better). Depending on your oven, you may want to turn it around (horizontally) after 15 minutes to ensure even baking."
            },
            {
              "description": "Done, enjoy! We actually eat it with a spoon straight from the cake tray!"
            }
          ],
          "notes": "- If you are not avoiding carbs, you can substitute the maple extract with maple syrup.\n- Add two bananas and a good handful of walnuts to the mix and you have banana walnut bread!\n- Other ingredients we've tried (not all at once!): cardamom, Grand Marnier, vanilla extract. Feel free to experiment!",
          "forked": "My friend Tal's \"tahini bread\" recipe."
        },
        {
          "name": "Grand Marnier &amp; Coffee Ice Cream",
          "id": "grand-marnier-coffee-ice-cream",
          "description": "Easy and decadent!",
          "shopping": ["Double cream", "Coffee", "Icing sugar", "Egg", "Grand Marnier", "Vanilla extract", "Cocoa nibs"],
          "tags": ["Alcohol", "Summer"],
          "ingredient": [{
              "amount": "4",
              "unit": "cups",
              "name": "heavy cream"
            },
            {
              "amount": "1",
              "unit": "cup",
              "name": "icing sugar or substitite"
            },
            {
              "amount": "4",
              "name": "egg yolks"
            },
            {
              "amount": "0.25",
              "unit": "cup",
              "name": "Grand Marnier"
            },
            {
              "amount": "1",
              "unit": "shot",
              "name": "espresso"
            },
            {
              "amount": "1",
              "unit": "tbsp",
              "name": "vanilla extract"
            },
            {
              "name": "Cocoa nibs for garnish",
              "preparation": "(Optional)"
            }
          ],
          "ingredientGroup": [{
            "ingredient": []
          }],
          "step": [{
              "description": "Beat the heavy cream with half of the icing sugar substitute (added slowly) until starting to get thick"
            },
            {
              "description": "Beat the egg yolks with the remaining half of the icing sugar substitute."
            },
            {
              "description": "Whisk the Grand Marnier, coffee, vanilla extract into the egg yolk mixture."
            },
            {
              "description": "Whisk the egg yolk mixture into the heavy cream mixture"
            },
            {
              "description": "Done! Add to your ice cream machine per manufacturer's instructions or freeze and stir every 30 minutes or so."
            }
          ],
          "notes": "- We use (and love) [Sukrin Icing/Melis](https://www.amazon.com/Sukrin-Icing-Melis-Powdered-Substitute/dp/B00U7FCNG2/?tag=leaverou-20) for a healthy icing sugar substitute, it tastes exactly like the real thing and doesn't contain any artificial sweeteners, so it's keto-friendly (it's stevia & erythritol).\n- You can use 2 tbsp instant coffee if you don't have espresso, which is what the original recipe this one is forked from uses!\n- This will produce a delicate Grand Marnier flavor and the coffee will be fairly prominent. Adjust quantities accordingly if you want a stronger Grand Marnier flavor or less of a coffee flavor\n- If you're uncomfortable with raw eggs, you can buy pasteurized eggs or pasteurize them yourself by immersing the eggs in a 57.2C (135F) water bath for 75 minutes using a sous-vide (which is what we did).\n- Note that the amount of mixture this produces may be too much for your ice cream machine. We use a [Cuisinart ICE-21R](https://www.amazon.com/gp/product/B0041A3KPC/?tag=leaverou-20) and we had to do it in 2 batches. But the mixture lasts well in the fridge, we did the second batch 3 days later and it was fine!",
          "forked": "[Coffee Grand Marnier Ice Cream](http://www.ronniefein.com/blog/coffee-grand-marnier-ice-cream)",
          "image": "/img/recipes/grand-marnier-ice-cream.jpg"
        },
        {
          "image": "/img/recipes/carbonara.jpg",
          "name": "Turnip Noodle Carbonara",
          "id": "turnip-carbonara",
          "description": "A healthier version of the classic dish that tastes just as good!",
          "shopping": ["Bacon", "Turnip", "Parmesan", "Egg", "Garlic", "Double cream", "Salt", "Pepper"],
          "tags": ["Low-carb", "Mediterranean"],
          "ingredient": [{
              "amount": "16",
              "unit": "oz",
              "name": "turnip noodles"
            },
            {
              "amount": "6",
              "name": "rashers bacon"
            },
            {
              "amount": "6",
              "name": "eggs"
            },
            {
              "amount": "0.5",
              "unit": "cup",
              "name": "parmesan",
              "preparation": "grated"
            },
            {
              "amount": "4",
              "name": "cloves garlic",
              "preparation": "chopped, optional"
            },
            {
              "amount": "0.25",
              "unit": "cup",
              "name": "heavy cream"
            },
            {
              "name": "Salt"
            },
            {
              "name": "Pepper",
              "preparation": "freshly ground"
            }
          ],
          "ingredientGroup": [],
          "step": [{
              "description": "Cut the bacon into lardons and sauté until it's lightly cooked."
            },
            {
              "description": "While the bacon is cooking, separate the yolks from 4 of the eggs. Whisk the 4 yolks, 2 whole eggs, the grated parmesan, the cream, and salt and pepper."
            },
            {
              "description": "If using garlic, add it once the bacon is starting to get cooked and saute for a few more minutes until fragrant"
            },
            {
              "description": "Stir in turnip noodles until they are cooked through to desired doneness"
            },
            {
              "description": "Turn the heat down to very low and stir in the egg mixture. Stir rapidly until it cooks, remove from heat."
            },
            {
              "description": "Top with a little more ground pepper and serve!"
            }
          ],
          "notes": "Turnip noodles are far closer to spaghetti than zucchini noodles that lose their shape. You can get them pre-spiralized from Whole Foods, or make them yourself with a spiralizer. Summer squash or butternut squash noodles are other options.\nLardons are matchstick-sized pieces of bacon. ",
          "forked": "[Zucchini Noodle Carbonara Recipe](https://skinnyms.com/zucchini-noodle-carbonara-recipe/)"
        },
        {
          "image": "/img/recipes/lamb-chops.jpg",
          "name": "Spiced lamb chops with mint-mango sauce",
          "id": "spiced-lamb-chops-with-mint-mango-sauce",
          "description": "Delicious, refreshing, and super quick to make!",
          "shopping": ["Lamb", "Mango", "Lime", "Chili powder", "Avocado", "Olive oil", "Garlic", "Fresh mint", "Green onion", "Cumin", "Coriander", "Cinnamon", "Turmeric", "Cayenne pepper", "Cardamom", "Cloves", "Coarse kosher salt"],
          "tags": ["BBQ", "Gluten free"],
          "ingredient": [{
              "amount": "8",
              "name": "lamb chops"
            },
            {
              "amount": "0.25",
              "unit": "cup",
              "name": "olive oil"
            },
            {
              "amount": "4",
              "name": "garlic cloves"
            }
          ],
          "ingredientGroup": [{
              "name": "Mint-Mango Sauce",
              "ingredient": [{
                  "amount": "1",
                  "name": "medium ripe mango"
                },
                {
                  "amount": "1",
                  "unit": "cup",
                  "name": "fresh mint"
                },
                {
                  "amount": "2",
                  "name": "green onions"
                },
                {
                  "amount": "1",
                  "unit": "tbsp",
                  "name": "fresh lime juice"
                },
                {
                  "amount": "1",
                  "name": "serrano chile",
                  "preparation": "halved and seeded"
                },
                {
                  "amount": "0.5",
                  "name": "ripe avocado"
                }
              ]
            },
            {
              "name": "Spice mix",
              "ingredient": [{
                  "amount": "1",
                  "unit": "tbsp",
                  "name": "cumin",
                  "preparation": "ground"
                },
                {
                  "amount": "2",
                  "unit": "tsp",
                  "name": "ground coriander"
                },
                {
                  "amount": "2",
                  "unit": "tsp",
                  "name": "ground Cinnamon"
                },
                {
                  "amount": "0.5",
                  "unit": "tsp",
                  "name": "turmeric"
                },
                {
                  "amount": "0.25",
                  "unit": "tsp",
                  "name": "cayenne pepper"
                },
                {
                  "amount": "0.25",
                  "unit": "tsp",
                  "name": "ground cardamom"
                },
                {
                  "amount": "0.125",
                  "unit": "tsp",
                  "name": "cloves",
                  "preparation": "ground"
                },
                {
                  "amount": "0.5",
                  "unit": "tbsp",
                  "name": "coarse kosher salt"
                }
              ]
            }
          ],
          "step": [{
              "description": "In a blender or mini food processor, blend all the sauce ingredients, and chill in the fridge."
            },
            {
              "description": "Blend the olive oil and garlic and coat the lamb chops."
            },
            {
              "description": "Make the spice mix, and coat the lamb chops well on both sides."
            },
            {
              "description": "Grill the lamb chops on a very hot cast iron grill pan (or a BBQ if you have one!) for 2-3 minutes on each side for medium rare."
            },
            {
              "description": "Done! Serve with the sauce on the side."
            }
          ],
          "notes": "- If you’re out of green onions, you can substitute them in the sauce with 1 shallot\n- A good way to use the spice mix is to put it in an empty spice jar and use that to sprinkle it evenly on the lamb chops.\n- This spice mix is delicious and great on so many things! We've tried it on beef, duck, even carbonara! Might be a good idea to make more than is needed for this dish and keep it around.\n- If you have sauce leftovers, it keeps well in the fridge for days in an airtight container. It may darken a bit due to the avocado but it still tastes good.",
          "forked": "[Spiced Lamb Chops with Mint-Mango Sauce](https://www.epicurious.com/recipes/food/views/spiced-lamb-chops-with-mint-mango-sauce-109587)"
        },
        {
          "name": "Papoutsakia",
          "id": "papoutsakia",
          "description": "A traditional Greek dish that tastes very similar to moussaka, but is much quicker to cook. Fun fact: Papoutsakia in Greek means \"little shoes\" and a portion usually has two. However, when cooking with large American eggplants, you'll likely find that one per portion is enough.",
          "shopping": ["Eggplant", "Aubergine", "Thyme", "Beef", "Lamb", "Cinnamon", "Cloves", "All Spice", "Double cream", "Worcestershire sauce", "Gruyère", "Nutmeg", "Olive oil", "Salt", "Pepper", "Yellow onion", "Garlic", "Passata", "Beef stock", "Cognac", "Brown sugar", "Bay leaves", "Butter", "Black pepper", "Coconut flour", "Egg"],
          "tags": ["Mediterranean", "Comfort food", "Low-carb"],
          "ingredient": [{
              "amount": "3",
              "name": "eggplants"
            },
            {
              "unit": "extra virgin olive oil"
            },
            {
              "name": "thyme"
            },
            {
              "name": "salt, black pepper"
            }
          ],
          "ingredientGroup": [{
              "name": "Mince",
              "ingredient": [{
                  "amount": "2",
                  "unit": "lbs",
                  "name": "beef or lamb",
                  "preparation": "minced"
                },
                {
                  "amount": "2",
                  "name": "yellow onions",
                  "preparation": "chopped"
                },
                {
                  "amount": "6",
                  "name": "garlic cloves",
                  "preparation": "chopped"
                },
                {
                  "amount": "500",
                  "unit": "g",
                  "name": "passata (Italian-style sieved tomato purée)"
                },
                {
                  "name": "Cinnamon",
                  "preparation": "ground"
                },
                {
                  "name": "cloves",
                  "preparation": "ground"
                },
                {
                  "name": "allspice"
                },
                {
                  "amount": "4",
                  "unit": "tsp",
                  "name": "Better than Bouillon or other beef bouillon base"
                },
                {
                  "amount": "0.5",
                  "unit": "cup",
                  "name": "Metaxa or other cognac"
                },
                {
                  "amount": "2",
                  "unit": "tbsp",
                  "name": "Sukrin Gold or brown sugar"
                },
                {
                  "amount": "4",
                  "name": "bay leaves"
                },
                {
                  "name": "butter"
                },
                {
                  "name": "black pepper"
                },
                {
                  "name": "Worcestershire sauce"
                }
              ]
            },
            {
              "name": "Béchamel(ish)",
              "ingredient": [{
                  "amount": "1",
                  "unit": "cup",
                  "name": "butter"
                },
                {
                  "amount": "0.5",
                  "unit": "cup",
                  "name": "coconut flour"
                },
                {
                  "name": "heavy cream"
                },
                {
                  "amount": "4",
                  "name": "egg yolks",
                  "preparation": "beaten"
                },
                {
                  "amount": "250",
                  "unit": "g",
                  "name": "hard cheese (we used Gruyère)",
                  "preparation": "grated"
                },
                {
                  "name": "nutmeg",
                  "preparation": "freshly ground"
                }
              ]
            }
          ],
          "step": [{
              "description": "Cut the eggplants in half and scoop out the center. Leave about 1-1.5cm of flesh. Carve the flesh crosswise."
            },
            {
              "description": "Season the eggplants well with olive oil, salt, pepper, thyme. Use your hands to make sure it goes everywhere. Be fast, because they absorb the oil very quickly!"
            },
            {
              "description": "Put eggplants on a large baking tray, cut side down and bake at 200C (392F) for 30-40 minutes."
            },
            {
              "description": "**Mince**: \n1. Fry the onions in the butter on high heat.\n2. Once the onions have started to caramelize, add the garlic and fry for a few more minutes.\n3. Add the cinnamon, cloves, allspice, black pepper and give it a stir.\n4. Add the mince and bay leaves and reduce heat to medium.\n5. Once the meat has started to brown, pour in the Metaxa.\n6. Add the tomato pureé, Sukrin Gold, bouillon base, and Worcestershire sauce and stir well.\n5. Reduce heat and simmer for about half an hour or until the tomato tastes cooked and any liquids have been reduced."
            },
            {
              "description": "**Béchamel:**\n1. Melt the butter in a small pot over low heat\n2. Whisk in the coconut flour, stirring continuously to make a roux\n3. When the roux ingredients are nicely combined, whisk in the cream, adding a little each time to avoid lumps\n4. Cook it over low heat, stirring continuously\n5. When it has thickened, add nutmeg, salt, pepper to taste\n6. Take it off the heat and stir in the yolks and grated cheese"
            },
            {
              "description": "Scoop the minced meat into the eggplants, and top it with the béchamel. Bake for 10 minutes at 200C (392F), checking frequently because ovens vary. You may want to turn on the grill (US: broiler) for the last 5 minutes to give the cheese a nice golden brown."
            }
          ],
          "forked": "[Παπουτσάκια με μπεσαμέλ](https://akispetretzikis.com/el/categories/kreas/melitzanes-papoytsakia-me-mpesamel),\nMaria’s moussaka recipe,\n[Low carb roux,  béchamel and souffle](http://www.fatisourfriend.com/roux-bechamel-and-souffle.html)",
          "image": "/img/recipes/papoutsakia.jpg"
        },
        {
          "image": "/img/recipes/gambas-al-ajillo.jpg",
          "name": "Gambas al Ajillo",
          "id": "gambas-al-ajillo",
          "description": "Quick and garlicky!",
          "shopping": ["Shrimp", "Dried chili", "Lemon", "Smoked paprika", "Garlic", "Olive oil", "Dry sherry", "Salt"],
          "tags": ["Mediterranean", "Seafood"],
          "ingredient": [{
              "amount": "2",
              "unit": "lbs",
              "name": "shelled and deveined shrimp"
            },
            {
              "amount": "1",
              "unit": "head",
              "name": "garlic",
              "preparation": "thinly sliced"
            },
            {
              "amount": "1.25",
              "unit": "cup",
              "name": "extra-virgin olive oil"
            },
            {
              "amount": "1",
              "name": "dried hot red chile",
              "preparation": "seeded and crumbled"
            },
            {
              "amount": "2",
              "unit": "tbsp",
              "name": "dry sherry"
            },
            {
              "amount": "1",
              "unit": "tsp",
              "name": "lemon zest"
            },
            {
              "name": "smoked paprika"
            },
            {
              "name": "salt"
            }
          ],
          "step": [{
              "description": "In a large bowl, toss the shrimp with 1 teaspoon of kosher salt and let stand for 10 minutes. "
            },
            {
              "description": "Meanwhile, in a 9- to 10-inch enameled cast-iron skillet, combine the garlic and olive oil and cook over moderately low heat, stirring occasionally, until the garlic is very fragrant and just starts to brown, 8 to 10 minutes. "
            },
            {
              "description": "Add the chile and smoked paprika and cook, stirring, until fragrant, 15 to 30 seconds. "
            },
            {
              "description": "Add the shrimp to the skillet and cook over medium heat, stirring and turning the shrimp occasionally, until barely pink, about 5 minutes."
            },
            {
              "description": "Stir in the parsley, sherry, lemon zest and a generous pinch of salt. Remove from the heat and let stand until the shrimp are cooked through, 3 to 5 minutes. Serve in the skillet, passing crusty bread at the table. "
            }
          ],
          "forked": "[Gambas al Ajillo](http://www.foodandwine.com/recipes/gambas-al-ajillo),\n[Sizzling Shrimp with Garlic (Gambas al Pil Pil)](https://www.williams-sonoma.com/recipe/sizzling-shrimp-with-garlic-gambas-al-pil-pil.html)"
        },
        {
          "name": "Shakshuka",
          "id": "shakshuka",
          "description": "Breakfast of champions (one of them)",
          "shopping": ["Lamb", "Beef", "Jalapeño chilli", "Tomato concentrate", "Smoked paprika", "Cumin", "Caraway seed", "Kale", "Egg", "Olive oil", "Yellow onion", "Green bell pepper", "Garlic", "Tomatoes", "Red wine", "Bay leaves", "Erythritol", "Beef stock", "Black pepper"],
          "tags": ["Mediterranean", "Breakfast"],
          "ingredient": [{
              "amount": "3",
              "unit": "tbsp",
              "name": "Olive oil"
            },
            {
              "amount": "2",
              "unit": "medium",
              "name": "Yellow onions",
              "preparation": "chopped"
            },
            {
              "amount": "1.5",
              "unit": "lb",
              "name": "Miced lamb or beef"
            },
            {
              "amount": "1",
              "unit": "large",
              "name": "Organic green bell pepper",
              "preparation": "chopped"
            },
            {
              "amount": "1",
              "name": "Jalapeño chilli",
              "preparation": "deseeded & chopped"
            },
            {
              "amount": "1",
              "unit": "head",
              "name": "Garlic",
              "preparation": "minced"
            },
            {
              "amount": "1",
              "unit": "7 oz jar",
              "name": "Tomato concentrate"
            },
            {
              "amount": "1",
              "unit": "28 oz tin",
              "name": "Chopped peeled tomatoes"
            },
            {
              "amount": "1",
              "unit": "cup",
              "name": "Red wine"
            },
            {
              "amount": "4",
              "name": "Bay leaves"
            },
            {
              "amount": "2",
              "unit": "tbsp",
              "name": "Erythritol"
            },
            {
              "amount": "1",
              "unit": "tbsp",
              "name": "Beef stock concentrate"
            },
            {
              "amount": "1",
              "unit": "tbsp",
              "name": "Smoked Paprika"
            },
            {
              "amount": "1",
              "unit": "tbsp",
              "name": "Cumin seed",
              "preparation": "ground"
            },
            {
              "amount": "1.5",
              "unit": "tsp",
              "name": "Black pepper",
              "preparation": "ground"
            },
            {
              "amount": "1",
              "unit": "tsp",
              "name": "Caraway seed",
              "preparation": "ground"
            },
            {
              "amount": "0.5",
              "unit": "bunch",
              "name": "Swiss chard or kale",
              "preparation": "destemmed"
            },
            {
              "amount": "8",
              "name": "Freerange eggs"
            }
          ],
          "step": [{
              "description": "Heat oil in a large, deep, preferably ceramic, frying pan on medium heat"
            },
            {
              "description": "Cook onions until translucent, 5-10 min"
            },
            {
              "description": "Add minced meat, stir until lightly browned"
            },
            {
              "description": "Reduce heat a little, add jalapeño and bell pepper, cook until slightly soft. 3-4 min, do not overcook"
            },
            {
              "description": "Add garlic and tomato concentrate, stir for 2 min until tomato tastes cooked not raw"
            },
            {
              "description": "Add the wine. Tip: pour the wine into the tomato paste jar and shake it to get the last of the paste out."
            },
            {
              "description": "Add canned tomatoes, cumin, caraway seeds, bay leaves, paprika, erythritol, concentrated stock, and pepper. Yes, that is a lot of cumin; it will be fine. Bring to low boil, reduce heat, simmer for 20 min"
            },
            {
              "description": "Place de-stemmed Swiss chard leaves on top of cooked tomato mixture. Make 8 small depressions with a spoon"
            },
            {
              "description": "Crack one egg into each depression. Cover (a transparent lid is ideal)"
            },
            {
              "description": "Cook until egg white is _just_ set. Serve immediately, in the pan."
            }
          ],
          "notes": "- The tomato sauce keeps for a couple of days in the fridge. If eating over two days, crack only 4 eggs. Next time, reheat sauce then make 4 more depressions and crack the other 4.\n- We use Sukrin Gold erythritol, which looks and tastes like light brown sugar. If not low-carbing, demarara or other sugar can be substituted.\n- Bell peppers are bad for absorbing pesticides, so we always use organic because the skin is eaten.\n- The type of red wine is not critical, honestly. We use small (187ml) “individual” bottles of fairly cheap red wine.",
          "forked": "[Israeli Breakfast Of Champions: Shakshuka](http://www.foodrepublic.com/recipes/israeli-breakfast-of-champions-shakshuka/)",
          "image": "/img/recipes/shakshuka.jpg"
        },
        {
          "name": "Real Caesar Salad",
          "id": "real-caesar-salad",
          "description": "Based on the original 1920's Italian-American table-side recipe",
          "shopping": ["Anchovies", "Egg", "Dijon Mustard", "Worcestershire sauce", "Parmesan", "Lemon", "Garlic", "Olive oil", "Pepper", "Salt", "Romaine hearts"],
          "tags": ["Mediterranean", "Italian-American"],
          "image": "/img/recipes/real-caesar-salad.jpg",
          "ingredient": [{
              "amount": "0.5",
              "unit": "Head",
              "name": "Garlic",
              "preparation": "Minced"
            },
            {
              "amount": "5",
              "name": "Anchovies"
            },
            {
              "amount": "3",
              "name": "Free-range egg yolks"
            },
            {
              "amount": "1",
              "unit": "tsp",
              "name": "Dijon Mustard"
            },
            {
              "amount": "1",
              "unit": "good splash",
              "name": "Worcestershire sauce"
            },
            {
              "amount": "1",
              "unit": "cup",
              "name": "Extra-virgin Greek olive oil"
            },
            {
              "amount": "0.5",
              "unit": "cup",
              "name": "Parmesan",
              "preparation": "Finely grated"
            },
            {
              "name": "Black pepper",
              "preparation": "Freshly grated"
            },
            {
              "name": "Sea salt"
            },
            {
              "amount": "2",
              "unit": "tbsp",
              "name": "Lemon juice"
            },
            {
              "amount": "3",
              "name": "Romaine hearts"
            }
          ],
          "step": [{
              "description": "Traditionally using a mortar and pestle (but a hand blender works just as well, we find) turn the garlic, anchovies and a pinch of salt into a fine paste."
            },
            {
              "description": "Add the whisked egg yolks, lemon juice, Worcestershire sauce and mustard. This can be done in a bowl with a whisk, or if using a blender continue with that."
            },
            {
              "description": "Gradually at first, add the oil and whisk/blend with each addition."
            },
            {
              "description": "Add the Parmesan and mix well."
            },
            {
              "description": "Taste, adjust with salt, pepper, lemon as desired."
            },
            {
              "description": "Either shred the romaine hearts and toss with the sauce, or serve individual leaves for dipping."
            },
            {
              "description": "If liked, garnish with more whole anchovies and/or Parmesan flakes"
            }
          ],
          "forked": "[Classic Caesar Salad](https://www.bonappetit.com/recipe/classic-caesar-salad#recipe-ingredients)",
          "notes": "We don't use croutons but if you want them, go ahead!\nSauce keeps well in a fridge for a few days.\n"
        },
        {
          "image": "/img/recipes/fathead-pineapple-pizza.jpg",
          "name": "Fathead Pineapple Pizza",
          "id": "fathead-pineapple-pizza",
          "description": "Low carb and delicious!",
          "shopping": ["Mozzarella", "Tomato", "Mascarpone", "Egg", "Almond Flour", "Cumin", "Basil", "Soy Sauce", "Worcestershire sauce", "Oregano", "Green bell pepper", "Bacon", "Mushroom", "Pineapple", "Nutritional yeast", "Garlic powder", "Tomato purée", "Garlic", "Dried basil", "Red wine", "Sukrin Gold", "Gruyère"],
          "tags": ["Mediterranean", "Italian-American", "Comfort food", "Low-carb"],
          "ingredient": [],
          "step": [{
              "description": "Mix two thirds of the grated mozzarella, the almond flour, and the nutritional yeast in a microwaveable bowl. Add the mascarpone. Microwave on HIGH for 1 minute."
            },
            {
              "description": "Add cumin, garlic, salt, pepper."
            },
            {
              "description": "Stir then microwave on HIGH for another minute. Repeat until it's soft, usually doesn’t need more than 2 minutes total."
            },
            {
              "description": "Add the eggs and mix gently."
            },
            {
              "description": "Put a piece of parchment paper over your pizza stone, add the dough on top of it and then another piece of parchment paper. Use a rolling pin to roll it as close as possible to the pizza stone shape and evenly around 5mm thick or less. Remove the top sheet of parchment paper."
            },
            {
              "description": "Make fork holes all over the pizza base to ensure it cooks evenly."
            },
            {
              "description": "Bake at 215C/420F for 15 minutes or until golden brown."
            },
            {
              "description": "If you can manage to flip the pizza over without breaking it, flip it and bake a bit longer to make it crispy. If you’re worried it will break don't flip it, we never do and it’s fine!"
            },
            {
              "description": "While the base is baking, make the tomato sauce: in a mini-blender of food processor blend the tomato paste, garlic wine, basil, Worcestershire sauce, oregano. Cook at medium-low heat for 5-10 minutes or until thickened a bit."
            },
            {
              "description": "While the base is baking and the sauce simmering, cut the bacon into 5mm lardons and sauté with the mushrooms until almost (but not completely) cooked to your liking."
            },
            {
              "description": "Once the pizza base is done, spread the sauce over it as evenly as you can (a brush or rubber spatula helps). Then add the remaining grated cheeses, the bacon, the mushrooms, the pepper, the pineapple."
            },
            {
              "description": "Broil at 260C/500F for about 5 minutes, checking frequently because ovens vary. Enjoy!"
            }
          ],
          "forked": "[Fat Head Pizza - The HOLY GRAIL Of Low Carb Pizzas ](https://www.ditchthecarbs.com/fat-head-pizza/)",
          "ingredientGroup": [{
              "name": "Dough",
              "ingredient": [{
                  "amount": "130",
                  "unit": "g",
                  "name": "almond flour"
                },
                {
                  "amount": "40",
                  "unit": "g",
                  "name": "nutritional yeast"
                },
                {
                  "amount": "330",
                  "unit": "g",
                  "name": "mozarella",
                  "preparation": "grated"
                },
                {
                  "amount": "3",
                  "name": "eggs",
                  "preparation": "beaten"
                },
                {
                  "amount": "4",
                  "unit": "tbsp",
                  "name": "mascarpone"
                },
                {
                  "amount": "0.5",
                  "unit": "tsp",
                  "name": "cumin",
                  "preparation": "freshly ground"
                },
                {
                  "amount": "0.5",
                  "unit": "tsp",
                  "name": "garlic powder"
                }
              ]
            },
            {
              "name": "Tomato sauce",
              "ingredient": [{
                  "amount": "200",
                  "unit": "g",
                  "name": "tomato concentrate/paste"
                },
                {
                  "amount": "5",
                  "unit": "cloves",
                  "name": "garlic"
                },
                {
                  "amount": "1",
                  "unit": "tsp",
                  "name": "dried basil (or 1 tbsp fresh)"
                },
                {
                  "amount": "1",
                  "unit": "splash",
                  "name": "dry red wine"
                },
                {
                  "amount": "1",
                  "unit": "splash",
                  "name": "soy sauce"
                },
                {
                  "amount": "1",
                  "unit": "splash",
                  "name": "Worcestershire sauce"
                },
                {
                  "amount": "1",
                  "unit": "tsp",
                  "name": "Sukrin Gold"
                },
                {
                  "name": "oregano"
                }
              ]
            },
            {
              "name": "Toppings",
              "ingredient": [{
                  "amount": "170",
                  "unit": "g",
                  "name": "mozarella",
                  "preparation": "grated"
                },
                {
                  "amount": "250",
                  "unit": "g",
                  "name": "cheddar, gouda, gruyere or similar grated"
                },
                {
                  "amount": "5",
                  "unit": "oz",
                  "name": "bacon",
                  "preparation": "sliced and chopped in 1cm pieces"
                },
                {
                  "amount": "1",
                  "name": "green bell pepper"
                },
                {
                  "amount": "6",
                  "unit": "oz",
                  "name": "mushrooms",
                  "preparation": "sliced"
                },
                {
                  "amount": "200",
                  "unit": "g",
                  "name": "pineapple",
                  "preparation": "in small pieces"
                }
              ]
            }
          ]
        },
        {
          "image": "/img/recipes/garlic-mushrooms-a-la-creme-with-lardons-and-green-pepper.jpg",
          "name": "Garlic mushrooms a la crème with lardons and green pepper",
          "id": "garlic-mushrooms-a-la-creme-with-lardons-and-green-pepper",
          "description": "Not the most photogenic dish, but really easy, quick and delicious!",
          "shopping": ["Mushroom", "Bacon", "Green bell pepper", "Cheddar", "Thyme", "Nutmeg", "Worcestershire sauce", "Garlic", "Double cream", "Butter", "Coconut oil", "Salt", "Pepper"],
          "tags": ["Mediterranean", "French", "Comfort food"],
          "ingredient": [{
              "amount": "10",
              "unit": "oz",
              "name": "mushrooms",
              "preparation": "sliced"
            },
            {
              "amount": "7",
              "unit": "oz",
              "name": "thick cut smoked bacon"
            },
            {
              "amount": "1",
              "name": "green bell pepper",
              "preparation": "chopped"
            },
            {
              "amount": "10",
              "unit": "cloves",
              "name": "garlic",
              "preparation": "finely chopped"
            },
            {
              "amount": "1",
              "unit": "cup",
              "name": "cheddar",
              "preparation": "grated"
            },
            {
              "amount": "1",
              "unit": "cup",
              "name": "heavy cream"
            },
            {
              "amount": "1",
              "unit": "tbsp",
              "name": "butter"
            },
            {
              "amount": "1",
              "unit": "tbsp",
              "name": "coconut oil"
            },
            {
              "amount": "1",
              "unit": "pinch",
              "name": "Thyme"
            },
            {
              "amount": "0.2",
              "name": "whole nutmeg"
            },
            {
              "name": "Worcestershire sauce"
            },
            {
              "name": "Salt, pepper",
              "preparation": "to taste"
            }
          ],
          "step": [{
              "description": "Cut each strip of bacon into 4mm [lardons](https://en.wikipedia.org/wiki/Lardon)."
            },
            {
              "description": "Fry the bacon in the butter on medium-high heat until starting to turn translucent"
            },
            {
              "description": "Add sliced mushrooms. Season with black pepper."
            },
            {
              "description": "Continue to fry until mushrooms release their liquid and are turning darker. "
            },
            {
              "description": "In a separate pan, fry the pepper in the coconut oil until softened and just starting to turn brown."
            },
            {
              "description": "Add garlic to the mushrooms and stir until fragrant."
            },
            {
              "description": "Add thyme and stir. Then add a generous splash of Worcestershire sauce."
            },
            {
              "description": "Pour the cream into the mushrooms, bring to a low boil, then reduce heat."
            },
            {
              "description": "Add the green peppers"
            },
            {
              "description": "When the cream reduces a bit, add the grated cheese and stir until melted."
            },
            {
              "description": "Grate the nutmeg into the mixture and serve."
            }
          ],
          "notes": "- If you can find smoked cheddar, use a mixture of 50% smoked cheddar and 50% normal cheddar (it's very strong so not 100%). \n- Don’t allow the cream to overcook or it will separate!\n- You can probably cook the pepper in with the mushrooms and ignore the coconut oil, if desired."
        },
        {
          "image": "/img/recipes/chicken-liver-pate.jpg",
          "name": "Chicken Liver Pâté",
          "id": "chicken-liver-pate",
          "description": "Rich and creamy, delicious on bread or even on its own",
          "shopping": ["Chicken liver", "Parsley", "White onion", "Garlic", "Cognac", "Double cream", "Butter", "Salt", "Pepper"],
          "tags": ["Mediterranean", "French"],
          "ingredient": [{
              "amount": "500",
              "unit": "g",
              "name": "raw chicken liver",
              "preparation": "cleaned"
            },
            {
              "amount": "1",
              "name": "large white onion"
            },
            {
              "amount": "2",
              "unit": "cloves",
              "name": "garlic",
              "preparation": "minced"
            },
            {
              "amount": "150",
              "unit": "ml",
              "name": "Metaxa or other brandy/cognac"
            },
            {
              "amount": "50",
              "unit": "ml",
              "name": "heavy cream"
            },
            {
              "name": "Butter",
              "amount": "50",
              "unit": "g"
            },
            {
              "name": "Salt, pepper",
              "preparation": "to taste"
            },
            {
              "name": "Parsley"
            },
            {
              "name": "balsamic reduction"
            }
          ],
          "step": [{
              "description": "Chop most of the onion but set a little aside for garnish"
            },
            {
              "description": "Sauté garlic and onion in a bit of butter."
            },
            {
              "description": "Add the livers and sauté on both sides until they have a bit color but are still pink inside. Season with salt and pepper."
            },
            {
              "description": "Add the Metaxa and let it steam away."
            },
            {
              "description": "Put all in a tall blender glass and add the cream and remaining butter and blend until smooth"
            },
            {
              "description": "Put aside in fridge for at least 4 hours and serve, garnishing with the balsamic reduction, parsley and the onion from step 1."
            }
          ],
          "forked": "Original recipe by Lea Dam Jensen"
        },
        {
          "image": "/img/recipes/octopus-in-wine.jpg",
          "name": "Octopus in Wine",
          "id": "octopus-in-wine",
          "description": "A traditional Greek dish (Htapodi Krasato).",
          "shopping": ["Raw octopus", "Bay leaves", "Olive", "Red wine", "Cloves", "Olive oil", "Potato"],
          "tags": ["Mediterranean", "Seafood", "Alcohol", "Low-carb"],
          "ingredient": [{
              "amount": "2",
              "name": "whole raw octopus"
            },
            {
              "amount": "1",
              "unit": "bottle",
              "name": "dry red cooking wine"
            },
            {
              "amount": "6",
              "name": "cloves"
            },
            {
              "amount": "4",
              "name": "bay leaves"
            },
            {
              "name": "extra virgin olive oil"
            },
            {
              "amount": "1",
              "unit": "large",
              "name": "potato or turnip",
              "preparation": "in 1in cubes"
            },
            {
              "amount": "0.5",
              "unit": "cup",
              "name": "Kalamata olives",
              "preparation": "pitted"
            }
          ],
          "step": [{
              "description": "Wash the octopus, remove the eyes and beak, and separate the tentacles. Cut each tentacle in 2-3 pieces of roughly equal volume, same for the head."
            },
            {
              "description": "Put tentacles and head in a large pot with nothing else and boil over medium heat."
            },
            {
              "description": "You will notice that the octopus is releasing juices and slowly become redder. As the juices start to evaporate, slowly pour in the wine."
            },
            {
              "description": "Once you've poured all wine, add cloves and bay leaves."
            },
            {
              "description": "Simmer for about two hours. Half an hour before done, add the potatoes or turnips and the olives."
            },
            {
              "description": "Once it's reduced and the octopus and vegetables are tender add 1tbsp olive oil, mix, and serve! Makes about 6 portions."
            }
          ],
          "notes": "The original version uses potatoes, but we have used turnips, okra and other vegetables with good success. Turnips also make the dish low carb. The one in the photo uses okra.\nΧταπόδι κρασάτο is the Greek name.",
          "forked": "[Χταπόδι κρασάτο: ξεχωριστός μεζές με τρία μόνο υλικά!](https://www.cretangastronomy.gr/2013/04/%CF%87%CF%84%CE%B1%CF%80%CF%8C%CE%B4%CE%B9-%CE%BA%CF%81%CE%B1%CF%83%CE%AC%CF%84%CE%BF-%CE%BE%CE%B5%CF%87%CF%89%CF%81%CE%B9%CF%83%CF%84%CF%8C%CF%82-%CE%BC%CE%B5%CE%B6%CE%AD%CF%82-%CE%BC%CE%B5-%CF%84-2/)",
          "ingredientGroup": []
        },
        {
          "image": "/img/recipes/salmon-teriyaki.jpg",
          "name": "Sous Vide Salmon Teriyaki",
          "id": "salmon-teriyaki",
          "description": "Tender, refreshing and very easy to make",
          "shopping": ["Salmon fillets", "Bean Sprouts", "Soy Sauce", "Ginger", "Sesame", "Erythritol", "Garlic", "Dry sherry", "Sesame oil", "Spring onion"],
          "tags": ["Alcohol", "Asian", "Seafood", "Low-carb"],
          "ingredient": [{
              "amount": "2",
              "name": "half pound salmon fillets"
            },
            {
              "amount": "1",
              "unit": "lbs",
              "name": "bean sprouts"
            },
            {
              "amount": "0.25",
              "unit": "cup",
              "name": "soy sauce"
            },
            {
              "amount": "1",
              "unit": "tbsp",
              "name": "erythritol"
            },
            {
              "amount": "1",
              "unit": "tsp",
              "name": "fresh ginger"
            },
            {
              "amount": "4",
              "unit": "cloves",
              "name": "garlic"
            },
            {
              "amount": "2",
              "unit": "tbsp",
              "name": "mirin or dry sherry"
            },
            {
              "amount": "2",
              "unit": "tsp",
              "name": "toasted sesame oil"
            },
            {
              "amount": "1",
              "name": "spring onion",
              "preparation": "sliced"
            }
          ],
          "step": [{
              "description": "In a small saucepan over medium-high heat, combine the soy sauce, erythritol, ginger, garlic, mirin and sesame oil. Bring to a simmer, stirring until the erythritol has dissolved, about 1 minute. Let cool to room temperature. Reserve 1/4 cup (2 fl. oz./60 ml) of the sauce."
            },
            {
              "description": "Place the salmon fillets in separate zip lock bags and pour the remaining sauce into the bags, dividing evenly. If you have time you can let them marinate for 1-4 hours, but you don’t have to."
            },
            {
              "description": "Prepare a sous vide immersion circulator for use according to the manufacturer’s instructions. Preheat the water to 122°F (50°C). Place the bags into the circulating water and cook for 40 minutes for medium doneness."
            },
            {
              "description": "5 minutes before the salmon is done, stir fry the bean sprouts in a large pan with a tsp of sesame oil and a splash of soy sauce. Divide evenly in two plates."
            },
            {
              "description": "Once the salmon is done, sear the skin in the same pan for 30 seconds. Place each fillet on top of the bean sprouts and pour the saved sauce on it. Optionally, you can also use the sauce from the ziplock bags, but keep in mind it will be more watery (we did anyway)."
            },
            {
              "description": "Garnish with the sliced spring onion and serve!"
            }
          ],
          "notes": "Not low carbing? You can use brown sugar in place of erythritol.",
          "forked": "[Sous Vide Salmon Teriyaki](https://www.williams-sonoma.com/recipe/sous-vide-salmon-teriyaki.html)"
        },
        {
          "image": "/img/recipes/sfouggato.jpg",
          "name": "Sfouggato",
          "description": "A Lesbian delicacy that is super easy to make and can be eaten hot or cold.",
          "shopping": ["Egg", "Zucchini", "Courgette", "Dill", "Mint", "Parsley", "Graviera", "Feta", "Red onion", "Spring onion", "Olive oil", "Salt", "Pepper"],
          "tags": ["Mediterranean", "Summer"],
          "id": "sfouggato",
          "ingredient": [{
              "amount": "7",
              "name": "eggs"
            },
            {
              "amount": "6",
              "name": "zucchini",
              "preparation": "grated"
            },
            {
              "amount": "0.5",
              "unit": "bunch",
              "name": "parsley",
              "preparation": "finely chopped"
            },
            {
              "amount": "0.5",
              "unit": "bunch",
              "name": "dill",
              "preparation": "finely chopped"
            },
            {
              "amount": "1",
              "unit": "tsp",
              "name": "dried mint"
            },
            {
              "amount": "0.5",
              "unit": "cup",
              "name": "graviera",
              "preparation": "grated"
            },
            {
              "amount": "0.5",
              "unit": "cup",
              "name": "feta",
              "preparation": "crumbled"
            },
            {
              "amount": "1",
              "name": "red onion",
              "preparation": "finely chopped"
            },
            {
              "amount": "1",
              "name": "spring onion",
              "preparation": "finely chopped"
            },
            {
              "amount": "0.5",
              "unit": "cup",
              "name": "olive oil"
            },
            {
              "name": "salt"
            },
            {
              "name": "pepper"
            }
          ],
          "step": [{
              "description": "Add a lot of salt to the grated zucchini and squeeze well with a towel or cheesecloth to remove moisture."
            },
            {
              "description": "Beat the eggs in a bowl and set aside."
            },
            {
              "description": "In a large bowl, mix the zucchini, parsley, dill, onion, spring onion, cheeses, pepper, eggs."
            },
            {
              "description": "Add the olive oil to the mix."
            },
            {
              "description": "Spread on a deep, oiled baking tray and bake at 180-200C (350-390F) for about 40 minutes or until golden."
            }
          ],
          "notes": "- Graviera is a Greek hard light yellow cheese. Can’t find graviera? Use any yellow cheese that melts. The sfouggato in this photo was actually made with cheddar!\n- Don’t have all the ingredients? Worry not! This is a dish with many variations. Most of the ingredients are optional. What is absolutely mandatory is the eggs, zucchinis, some herbs (parsley, dill, and/or mint), some kind of cheese, and some kind of onion (only red onion or only spring onion is ok).",
          "forked": "[Σφουγγάτο το Μυτιληνιό](https://akispetretzikis.com/el/categories/almyres-pites-tartes/sfoyggato-to-mytilhnio), [Σφουγγάτο Μυτιλήνης με κολοκυθάκια](https://www.madameginger.com/syntages/syntages-mageirikis/ayga/sfouggato-mutilinis/)"
        },
        {
          "name": "Khoresht Karafs",
          "description": "A delicious Persian stew with beef and celery.",
          "shopping": ["Fresh mint", "Beef", "Turmeric", "Yellow onion", "Garlic", "Parsley", "Celery", "Stock", "Lemon", "Butter"],
          "tags": ["Mediterranean", "Winter"],
          "ingredient": [
            {
              "amount": "1",
              "name": "large yellow onion",
              "preparation": "diced"
            },
            {
              "amount": "4",
              "unit": "cloves",
              "name": "garlic",
              "preparation": "finely chopped"
            },
            {
              "amount": "1",
              "unit": "bunch",
              "name": "parsley"
            },
            {
              "amount": "1",
              "unit": "small bunch",
              "name": "fresh mint"
            },
            {
              "amount": "1.5",
              "unit": "pound",
              "name": "stew beef",
              "preparation": "cut in 1in cubes"
            },
            {
              "amount": "1",
              "unit": "head",
              "name": "celery",
              "preparation": "trimmed and chopped in 1in slices"
            },
            {
              "amount": "1",
              "unit": "tsp",
              "name": "ground turmeric"
            },
            {
              "amount": "2",
              "unit": "cup",
              "name": "beef stock"
            },
            {
              "amount": "0.5",
              "name": "lemon",
              "preparation": "juiced"
            },
            {
              "name": "butter or oil"
            }
          ],
          "step": [{
              "description": "Wash the mint and parsley and make sure they are *completely dry*. A salad spinner helps, if you don’t have one you can use paper towels."
            },
            {
              "description": "Finely chop the mint and parsley, then sauté until just starting to turn crispy. Set aside."
            },
            {
              "description": "Sauté the onion with enough butter or oil until golden"
            },
            {
              "description": "Add the garlic and sauté for 1-2 more minutes"
            },
            {
              "description": "Add the turmeric and sauté for 2 more minutes"
            },
            {
              "description": "Add the beef cubes and sauté until browned on the outside"
            },
            {
              "description": "Pour in the beef stock and sautéed mint and parsley and simmer"
            },
            {
              "description": "In a separate pan, sauté the celery until *just* starting to turn brown. Set aside."
            },
            {
              "description": "After the stew has been simmering for 1.5 hour, pour in the sautéed celery and simmer for another 30 minutes. This is done so that the celery doesn’t become too mushy."
            },
            {
              "description": "Finish with the lemon juice and serve."
            }
          ],
          "image": "/img/recipes/khoresht-karafs.jpg",
          "forked": "Elika’s family recipe",
          "id": "khoresht-karafs"
        },
        {
          "image": "/img/recipes/cheesecake.jpg",
          "name": "No-Bake Strawberry Cheesecake",
          "description": "A delicious low carb treat!",
          "shopping": ["Almond Flour", "Cinnamon", "Mascarpone", "Lemon", "Strawberry", "Lemon", "Butter", "Sukrin Gold", "Vanilla extract", "Salt", "Erythritol", "Gelatin"],
          "tags": ["Low-carb", "Comfort food"],
          "ingredient": [],
          "step": [{
              "description": "**Base:** \n1. In a medium frying pan, melt the ghee under low heat. \n2. Add the almond and coconut flour and stir continuously. \n3. It will look very runny at first, that's normal. When it starts darkening and becoming more viscous, add the cinnamon and sweetener. \n4. When it's light brown and most of the the ghee has been absorbed, it's about done. At that point, add the vanilla extract. It will foam, that's ok. Stir until it goes down again.\n5. Press into a 9\" springform cake tray. Let it cool down in the fridge."
            },
            {
              "description": "**Cream**: With a mixer beat the mascarpone on its own for a bit, then add icing sugar substitute to taste, then the rest of the ingredients. Blend until even. If you want the cheesecake to be extra fluffy, just beat it longer. Make sure the ghee in the bottom layer has solidified, then spread over the base in the cake tray. Put it back in the fridge."
            },
            {
              "description": "**Topping**: Blend half of the fruits and cut the other half into slices. Using a small pot, heat up the blended strawberries, Sukrin Gold, lemon juice and stir frequently until all heated up and mixed well. Add the gelatin slowly by sprinkling and stirring so that it doesn't clump. Then add the sliced fruits and stir. Simmer for a bit, then take it off the heat and let it cool down a bit. Once it starts getting viscous, spread it over the cream and put it back in the fridge."
            },
            {
              "description": "Chill in the fridge for at least 3 hours, then enjoy!"
            }
          ],
          "notes": "- We use Sukrin Gold and Sukrin Icing for sweetening. We've tried many and think those are as close as it gets to the sugar equivalents and have no aftertaste.\n- You can use less mascarpone, the middle layer will just be less thick. Adjust the rest of the quantities accordingly in that case.",
          "id": "cheesecake",
          "ingredientGroup": [{
              "name": "Base",
              "ingredient": [{
                  "amount": "1.5",
                  "unit": "cup",
                  "name": "almond flour"
                },
                {
                  "amount": "200",
                  "unit": "g",
                  "name": "butter or ghee"
                },
                {
                  "name": "brown sugar substitute",
                  "amount": "3",
                  "unit": "tbsp"
                },
                {
                  "name": "vanilla extract",
                  "amount": "4",
                  "unit": "tbsp"
                },
                {
                  "name": "Cinnamon",
                  "amount": "1",
                  "unit": "tsp"
                },
                {
                  "amount": "A pinch",
                  "name": "salt"
                }
              ]
            },
            {
              "name": "Double cream",
              "ingredient": [{
                  "amount": "40",
                  "unit": "oz",
                  "name": "Mascarpone"
                },
                {
                  "name": "icing sugar substitute",
                  "amount": "4",
                  "unit": "tbsp"
                },
                {
                  "amount": "1",
                  "name": "lemon",
                  "preparation": "juiced"
                },
                {
                  "amount": "2",
                  "unit": "tbsp",
                  "name": "vanilla extract"
                }
              ]
            },
            {
              "name": "Topping",
              "ingredient": [{
                  "amount": "1",
                  "unit": "lbs",
                  "name": "strawberries or other berries"
                },
                {
                  "name": "gelatin",
                  "amount": "0.5",
                  "unit": "scoop"
                },
                {
                  "amount": "1",
                  "name": "lemon",
                  "preparation": "juiced"
                },
                {
                  "name": "Sukrin Gold or similar",
                  "amount": "2",
                  "unit": "tbsp"
                }
              ]
            }
          ]
        },
        {
          "image": "/img/recipes/curried-beef-stew.jpg",
          "name": "Curried Beef Stew",
          "description": "Spicy, complex, and very flavorful, this Thai-inspired curry is perfect for cold winter nights.",
          "shopping": ["Beef", "Soy Sauce", "Cilantro", "Coriander", "Shallots", "Coconut oil", "Beef stock", "Turnip", "Kaffir lime leaf powder", "Thai basil", "Chili powder"],
          "tags": ["Asian", "Winter"],
          "ingredient": [{
              "amount": "2",
              "unit": "pounds",
              "name": "beef chuck",
              "preparation": "trimmed and cut into 1.5-2\" cubes"
            },
            {
              "amount": "1",
              "unit": "cup",
              "name": "shallots",
              "preparation": "halved"
            },
            {
              "amount": "6",
              "unit": "tbsp",
              "name": "unrefined coconut oil",
              "preparation": "melted"
            },
            {
              "amount": "3",
              "unit": "tbsp",
              "name": "soy sauce"
            },
            {
              "amount": "9",
              "unit": "cup",
              "name": "beef broth"
            },
            {
              "amount": "1",
              "name": "medium turnip",
              "preparation": "cut in 1\" cubes"
            },
            {
              "amount": "0.125",
              "unit": "tsp",
              "name": "Kaffir lime leaf powder",
              "preparation": "(or 6 leaves)"
            },
            {
              "amount": "Some",
              "name": "Fresh cilantro",
              "preparation": "chopped"
            },
            {
              "amount": "Some",
              "name": "Thai basil"
            },
            {
              "amount": "1",
              "unit": "tbsp",
              "name": "ground chipotle"
            }
          ],
          "step": [{
              "description": "**Curry paste**: In a mini blender or food processor, blend chiles and salt until pulverized. Add lemongrasss, ginger, galangal, turmeric, chopped shallots, garlic, shrimp paste one by one in order listed, fully pulverizing each before adding the next."
            },
            {
              "description": "Combine curry paste, beef, soy sauce, and ground chipotle in a pot; stir to evenly coat beef. Add coconut oil and cook, stirring occasionally, over medium heat for 5 minutes. Add broth and bring to a boil. Cover, reduce heat to medium-low, and simmer, stirring occasionally, until beef is tender but not falling apart, 2-2 1/2 hours."
            },
            {
              "description": "30 minutes before stew is done, stir in the turnip."
            },
            {
              "description": "5 minutes before stew is done, add the halved shallots."
            },
            {
              "description": "Garnish with cilantro and basil."
            }
          ],
          "forked": "[Curried Beef Stew](https://www.epicurious.com/recipes/food/views/curried-beef-stew-380591)",
          "id": "curried-beef-stew",
          "ingredientGroup": [{
            "name": "Curry paste",
            "ingredient": [{
                "amount": "2",
                "name": "dried guajillo chillies",
                "preparation": "stemmed and seeded"
              },
              {
                "amount": "0.5",
                "unit": "tsp",
                "name": "kosher salt"
              },
              {
                "amount": "1",
                "name": "lemongrass stalk",
                "preparation": "bottom 4\" only, tough outer layer removed, cut into 1\" pieces"
              },
              {
                "amount": "1",
                "name": "garlic head"
              },
              {
                "amount": "1",
                "unit": "tbsp",
                "name": "peeled fresh ginger"
              },
              {
                "amount": "2",
                "unit": "tsp",
                "name": "galangal powder"
              },
              {
                "amount": "2",
                "unit": "tbsp",
                "name": "peeled fresh turmeric"
              },
              {
                "amount": "0.5",
                "unit": "cup",
                "name": "shallots",
                "preparation": "chopped"
              },
              {
                "amount": "1",
                "unit": "tbsp",
                "name": "Thai shrimp paste"
              }
            ]
          }]
        }
      ]
    }

    // All recipes
    const arList = recipies.recipe;
    /* A sort of lookup for the index of a recipe. Usage:
       arLookup.indexOf('recipe-id-here');
       Returns an index which will be the same for arList and arLookup. */
    let arLookup = [];
    for (var i = 0; i < arList.length; i++) arLookup[i] = arList[i].id;

    // A list of some ingredients, with nutritional information about it
    const objIngredients = {
      ingredients: [
        {
          "name": "All Spice",
          "id": "all-spice"
        },
        {
          "name": "Almond Flour",
          "id": "almond-flour",
          "keto": true,
          "nuts": true
        },
        {
          "name": "Anchovies",
          "id": "anchovies",
          "meat": true,
          "fish": true,
          "shellfish": true
        },
        {
          "name": "Aubergine",
          "id": "aubergine"
        },
        {
          "name": "Avocado",
          "id": "avocado"
        },
        {
          "name": "Bacon",
          "id": "bacon",
          "meat": true
        },
        {
          "name": "Baking powder",
          "id": "baking-powder"
        },
        {
          "name": "Basil",
          "id": "basil"
        },
        {
          "name": "Bay leaves",
          "id": "bay-leaves"
        },
        {
          "name": "Bean Sprouts",
          "id": "bean-sprouts"
        },
        {
          "name": "Beef",
          "id": "beef",
          "keto": false,
          "meat": true
        },
        {
          "name": "Beef stock",
          "id": "beef-stock",
          "keto": false,
          "dairy": false,
          "meat": true
        },
        {
          "name": "Black pepper",
          "id": "black-pepper"
        },
        {
          "name": "Brown sugar",
          "id": "brown-sugar",
          "keto": false
        },
        {
          "name": "Butter",
          "id": "butter",
          "keto": true,
          "dairy": true,
          "lactose": true
        },
        {
          "name": "Caraway seed",
          "id": "caraway-seed",
          "keto": true,
          "nuts": true
        },
        {
          "name": "Cardamom",
          "id": "cardamom"
        },
        {
          "name": "Cauliflower",
          "id": "cauliflower"
        },
        {
          "name": "Cayenne pepper",
          "id": "cayenne-pepper"
        },
        {
          "name": "Celery",
          "id": "celery"
        },
        {
          "name": "Cheddar",
          "id": "cheddar",
          "dairy": true,
          "lactose": true
        },
        {
          "name": "Chicken liver",
          "id": "chicken-liver",
          "keto": true,
          "meat": true
        },
        {
          "name": "Chili powder",
          "id": "chili-powder"
        },
        {
          "name": "Cilantro",
          "id": "cilantro"
        },
        {
          "name": "Cinnamon",
          "id": "cinnamon"
        },
        {
          "name": "Cloves",
          "id": "cloves"
        },
        {
          "name": "Coarse kosher salt",
          "id": "coarse-kosher-salt"
        },
        {
          "name": "Cocoa nibs",
          "id": "cocoa-nibs"
        },
        {
          "name": "Coconut flour",
          "id": "coconut-flour",
          "keto": true,
          "nuts": true
        },
        {
          "name": "Coconut oil",
          "id": "coconut-oil",
          "nuts": true
        },
        {
          "name": "Coffee",
          "id": "coffee",
          "caffeine": true
        },
        {
          "name": "Cognac",
          "id": "cognac",
          "alcohol": true
        },
        {
          "name": "Coriander",
          "id": "coriander"
        },
        {
          "name": "Courgette",
          "id": "courgette"
        },
        {
          "name": "Cumin",
          "id": "cumin"
        },
        {
          "name": "Dijon Mustard",
          "id": "dijon-mustard"
        },
        {
          "name": "Dill",
          "id": "dill"
        },
        {
          "name": "Double cream",
          "id": "double-cream",
          "dairy": true,
          "lactose": true
        },
        {
          "name": "Dried basil",
          "id": "dried-basil"
        },
        {
          "name": "Dried chili",
          "id": "dried-chili"
        },
        {
          "name": "Dry sherry",
          "id": "dry-sherry",
          "alcohol": true
        },
        {
          "name": "Egg",
          "id": "egg",
          "dairy": true,
          "eggs": true
        },
        {
          "name": "Eggplant",
          "id": "eggplant"
        },
        {
          "name": "Erythritol",
          "id": "erythritol"
        },
        {
          "name": "Feta",
          "id": "feta",
          "dairy": true,
          "lactose": true
        },
        {
          "name": "Fresh mint",
          "id": "fresh-mint"
        },
        {
          "name": "Garlic",
          "id": "garlic"
        },
        {
          "name": "Garlic powder",
          "id": "garlic-powder"
        },
        {
          "name": "Gelatin",
          "id": "gelatin",
          "meat": true
        },
        {
          "name": "Ginger",
          "id": "ginger"
        },
        {
          "name": "Grand Marnier",
          "id": "grand-marnier",
          "alcohol": true
        },
        {
          "name": "Graviera",
          "id": "graviera",
          "dairy": true,
          "lactose": true
        },
        {
          "name": "Green bell pepper",
          "id": "green-bell-pepper"
        },
        {
          "name": "Green onion",
          "id": "green-onion"
        },
        {
          "name": "Gruyère",
          "id": "gruyère",
          "dairy": true,
          "lactose": true
        },
        {
          "name": "Honey",
          "id": "honey",
          "keto": false
        },
        {
          "name": "Icing sugar",
          "id": "icing-sugar",
          "keto": false
        },
        {
          "name": "Jalapeño chilli",
          "id": "jalapeño-chilli"
        },
        {
          "name": "Kaffir lime leaf powder",
          "id": "kaffir-lime-leaf-powder"
        },
        {
          "name": "Kale",
          "id": "kale"
        },
        {
          "name": "Lamb",
          "id": "lamb",
          "meat": true,
          "lamb": true
        },
        {
          "name": "Lemon",
          "id": "lemon"
        },
        {
          "name": "Lime",
          "id": "lime"
        },
        {
          "name": "Mango",
          "id": "mango",
          "keto": false
        },
        {
          "name": "Maple extract",
          "id": "maple-extract",
          "keto": false
        },
        {
          "name": "Mascarpone",
          "id": "mascarpone",
          "dairy": true,
          "lactose": true
        },
        {
          "name": "Mint",
          "id": "mint"
        },
        {
          "name": "Mozzarella",
          "id": "mozzarella",
          "dairy": true,
          "lactose": true
        },
        {
          "name": "Mushroom",
          "id": "mushroom"
        },
        {
          "name": "Nutmeg",
          "id": "nutmeg"
        },
        {
          "name": "Nutritional yeast",
          "id": "nutritional-yeast"
        },
        {
          "name": "Olive",
          "id": "olive"
        },
        {
          "name": "Olive oil",
          "id": "olive-oil"
        },
        {
          "name": "Onion",
          "id": "onion",
          "keto": false
        },
        {
          "name": "Oregano",
          "id": "oregano"
        },
        {
          "name": "Parmesan",
          "id": "parmesan",
          "dairy": true,
          "lactose": true
        },
        {
          "name": "Parsley",
          "id": "parsley"
        },
        {
          "name": "Passata",
          "id": "passata"
        },
        {
          "name": "Pepper",
          "id": "pepper"
        },
        {
          "name": "Pineapple",
          "id": "pineapple",
          "keto": false
        },
        {
          "name": "Pork",
          "id": "pork",
          "meat": true
        },
        {
          "name": "Potato",
          "id": "potato",
          "keto": false
        },
        {
          "name": "Raw octopus",
          "id": "raw-octopus",
          "meat": true,
          "fish": true
        },
        {
          "name": "Red onion",
          "id": "red-onion",
          "keto": false
        },
        {
          "name": "Red wine",
          "id": "red-wine",
          "alcohol": true
        },
        {
          "name": "Romaine hearts",
          "id": "romaine-hearts"
        },
        {
          "name": "Salmon fillets",
          "id": "salmon-fillets",
          "meat": true,
          "fish": true
        },
        {
          "name": "Salt",
          "id": "salt"
        },
        {
          "name": "Sesame",
          "id": "sesame",
          "nuts": true
        },
        {
          "name": "Sesame oil",
          "id": "sesame-oil",
          "nuts": true
        },
        {
          "name": "Sesame seeds",
          "id": "sesame-seeds",
          "nuts": true
        },
        {
          "name": "Shallots",
          "id": "shallots",
          "keto": false
        },
        {
          "name": "Shrimp",
          "id": "shrimp",
          "meat": true,
          "fish": true
        },
        {
          "name": "Smoked paprika",
          "id": "smoked-paprika"
        },
        {
          "name": "Soy Sauce",
          "id": "soy-sauce",
          "soy": true
        },
        {
          "name": "Spring onion",
          "id": "spring-onion",
          "keto": false
        },
        {
          "name": "Stock",
          "id": "stock"
        },
        {
          "name": "Strawberry",
          "id": "strawberry"
        },
        {
          "name": "Sukrin Gold",
          "id": "sukrin-gold"
        },
        {
          "name": "Tahini",
          "id": "tahini",
          "nuts": true
        },
        {
          "name": "Thai basil",
          "id": "thai-basil"
        },
        {
          "name": "Thyme",
          "id": "thyme"
        },
        {
          "name": "Tomato",
          "id": "tomato"
        },
        {
          "name": "Tomato concentrate",
          "id": "tomato-concentrate"
        },
        {
          "name": "Tomato purée",
          "id": "tomato-purée"
        },
        {
          "name": "Tomatoes",
          "id": "tomatoes"
        },
        {
          "name": "Turmeric",
          "id": "turmeric"
        },
        {
          "name": "Turnip",
          "id": "turnip"
        },
        {
          "name": "Vanilla extract",
          "id": "vanilla-extract"
        },
        {
          "name": "White onion",
          "id": "white-onion",
          "keto": false
        },
        {
          "name": "Worcestershire sauce",
          "id": "worcestershire-sauce",
          "keto": false,
          "meat": true,
          "fish": true,
          "shellfish": true
        },
        {
          "name": "Yellow onion",
          "id": "yellow-onion",
          "keto": false
        },
        {
          "name": "Zucchini",
          "id": "zucchini"
        }
      ]
    }

    // Builds an array of keys from the object passed, sorted by popularity
    // "key" is the key of the Array within the object which contains the strings to count
    // e.g. objectChart(objRecipe,'shopping');
    function objectChart(obj,key) {
      // This will be a list of all the shopping items in all the recipes above, with the value being how many times they appear
      // in the recipes.
      let objPopularItems = {};
      // Loop through every recipe
      for (let i = 0; i < obj.length; i++) {
        let shoppingList = obj[i][key];
        // Loop through every shopping list
        for (let j = 0; j < shoppingList.length; j++) {
          let newItem = shoppingList[j];
          let arItems = Object.keys(objPopularItems);
          let newItemIndex = arItems.indexOf(newItem);
          // Does this ingredient exist within the Array of all ingredients?
          objPopularItems[newItem] = (newItemIndex > -1) ? objPopularItems[newItem] + 1 : 1;
        }
      }
      return objPopularItems;
    }

    // Sorts objects by the value, then returns an Array of the Keys in the order of the values, from largest to smallest
    function sortObjectEntries(obj){
      return Object.entries(obj).sort((a,b)=>b[1]-a[1]).map(el=>el[0]);
    }

    // Builds the markup for a list of all ingredients used in the recipes, sorted by popularity
    // obj - object, containing all recipes
    // criteria - a string, representing the key associated with the Array which contains a list
    // (in this example) of the ingredients required for a recipe.
    function popularIngredients(obj,criteria) {
      let sortedTags = sortObjectEntries(objectChart(obj,criteria));
      let markup = '<section aria-label="Pick three things"><h2 class="instruction-overlay">Pick three things</h2> <div data-js="ingredient-dad" class="box-grid">';
      // Built up a list of the 20 most popular criteria
      for (let i = 0; i < 20; i++) {
        const name = sortedTags[i];
        const id = name.toLowerCase().replace(/\s+/g,'-'); // "Hello There, Man" becomes "hello-there,-man"
        markup += '<p><input type="checkbox" id="' + id + '" value="' + name + '" data-js="ingredient"><label for="' + id + '"><img src="/img/ingredients/' + id + '.jpg" alt=""><span class="name">' + name + '</span></label></p>';
      }
      markup += '</div></section>';
      let tagTarget = document.querySelector('[data-js="ptt"]');
      if (tagTarget) tagTarget.innerHTML = markup;
    }

    popularIngredients(arList,'shopping');

    // Counts to see if the user has picked three ingredients, then if they have, spawns three matching recipes.
    function pttCheck() {
      let allChecks = document.querySelectorAll('[data-js="ingredient-dad"] [data-js="ingredient"]');
      let allSelected = document.querySelectorAll('[data-js="ingredient-dad"] [data-js="ingredient"]:checked');
      // User has had quite enough choices today
      if (allSelected.length >= 3) {
        // Loop through the checkboxes disabling them.
        for (let i = 0; i < allChecks.length; i++) {
          let thisCheckbox = allChecks[i];
          if (!thisCheckbox.checked) thisCheckbox.disabled = true;
        }
        let ingredientArray = [];
        for (let j = 0; j < allSelected.length; j++) {
          ingredientArray.push(allSelected[j].value);
        }
        // Build the markup out of that these list
        const recipeChart = returnChart(arList, ingredientArray, 'shopping');
        let resultMarkup = '<p class="close"><button type="button" title="Close" data-js="close" class="close">&times;</button></p>';
        // Building up the string of recipe markup
        for (let k = 0; k < 3; k++) {
          const recipeIndex = arLookup.indexOf(recipeChart[k]);
          const recipeMarkup = arList[recipeIndex];
          resultMarkup += recipeSummary(recipeMarkup);
        }
        let tagTarget = document.querySelector('[data-js="ptt-results"]');
        // Output the recipes to the page
        if (tagTarget) {
          tagTarget.innerHTML = resultMarkup;
          tagTarget.removeAttribute('hidden');
          document.querySelector('[data-js="overlay"]').removeAttribute('hidden');
        }
      } else { // Free up the checkboxes
        for (let i = 0; i < allChecks.length; i++) {
          allChecks[i].disabled = false;
        }
      }
    }

    // Just the star rating module for a given recipe ID
    function buildRating(id) {
      if (id !== null && arLookup.indexOf(id) > -1) {
        let markup = '<fieldset class="star-rating gutter-base"><legend class="sr-only">Rate this recipe</legend><strong>Rate this recipe</strong>';
        // Building out the rating 1-5
        for(let i = 5; i > 0; i--) {
          markup += '<input type="radio" name="' + id + '-ratingpop" id="' + id + '-pop-' + i + '" value="' + i + '" class="sr-only">' +
          '<label for="' + id + '-pop-' + i + '" aria-label="' + i + ' stars">&#9733;</label>'
        }
        markup += '</fieldset><p>';
        return markup;
      }
    }

    // Building the ingredient querystring, for the "edit recipe" feature
    function ingredientQuerystring(ingredients) {
      let ingedientsQuery = '';
      for (let i = 0; i < ingredients.length; i++) {
        const group = ingredients[i];
        if (i === 0) {
          if (group.name)   ingedientsQuery += '&amp;ingredient-name='   + encodeURIComponent(group.name);
          if (group.amount) ingedientsQuery += '&amp;ingredient-amount=' + encodeURIComponent(group.amount);
          if (group.unit)   ingedientsQuery += '&amp;ingredient-unit='   + encodeURIComponent(group.unit);
        } else {
          if (group.name)   ingedientsQuery += '&amp;ingredient-name-'   + (i + 1) + '=' + encodeURIComponent(group.name);
          if (group.amount) ingedientsQuery += '&amp;ingredient-amount-' + (i + 1) + '=' + encodeURIComponent(group.amount);
          if (group.unit)   ingedientsQuery += '&amp;ingredient-unit-'   + (i + 1) + '=' + encodeURIComponent(group.unit);
        }
      }
      return ingedientsQuery;
    }

    // Building out the steps querystring, for the "edit recipe" feature
    function stepsQueryString(steps) {
      let string = '';
      for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        if (i === 0) string += '&amp;step=' + encodeURIComponent(step.description);
        else string += '&amp;step-' + (i + 1) + '=' + encodeURIComponent(step.description);
      }
      return string;
    }

    // Builds out a list of ingredients, with links to other recipes featuring the same
    function buildIngredientList(shopping) {
      let markup = '';
      for (let i = 0; i < shopping.length; i++) {
        const thisItem = shopping[i];
        markup += '<a href="/recipes-featuring/?ingredient=' + thisItem + '" class="btn btn-tag">' + thisItem + '</a> ';
      }
      if (markup !== '') {
        markup = '<p><strong>See more recipes featuring:</strong><br><a href="/recipes-featuring/" class="btn btn-tag">Everything</a> ' + markup + '</p>';
      }
      return markup;
    }

    // Builds a list of all the ingredients used and returns it in JSON format
    // Used to generate the ingredients object, but then never again.
    function ingredientsJSON() {
      let arIngredients = [];
      let objIngredients = [];
      // Loop through all recipes
      for (let i = 0; i < arList.length; i++) {
        const thisRecipe = arList[i];
        // Add the ingredients from this recipe into the mast list
        let tempArray = thisRecipe.shopping.concat(arIngredients);
        // Filter out the duplicates
        tempArray = tempArray.filter(onlyUnique);
        arIngredients = tempArray;
      }
      arIngredients.sort();

      for (let i = 0; i < arIngredients.length; i++) {
        const obj = {
          'name':      arIngredients[i],
          'id':        arIngredients[i].toLowerCase().replace(/\s+/g,'-'),
          'keto':      true,
          'dairy':     false,
          'meat':      false,
          'alcohol':   false,
          'caffeine':  false,
          'eggs':      false,
          'fish':      false,
          'gluten':    false,
          'lactose':   false,
          'lamb':      false,
          'nuts':      false,
          'shellfish': false,
          'soy':       false
        };
        objIngredients.push(obj);
      }
      console.log(objIngredients);
    }

    // I needed a list of the potential units and values of ingredients, to see
    // what I was up against.
    function ingredientUnit() {
      let arIngredients = [];
      let arValues = [];
      // Loop through all recipes
      for (let i = 0; i < arList.length; i++) {
        const thisRecipe = arList[i];
        const ingredientList = thisRecipe.ingredient;
        for (let j = 0; j < ingredientList.length; j++) {
          const thisIngredient = ingredientList[j];
          const thisUnit = thisIngredient.unit;
          if (thisUnit) {
            arIngredients.push(thisUnit);
          }
          const thisAmmount = ingredientList[j].amount;
          if (thisAmmount) {
            arValues.push(thisAmmount);
          }
        }
      }
      arIngredients = arIngredients.filter(onlyUnique);
      arIngredients.sort();
      console.log(arIngredients);
      arValues = arValues.filter(onlyUnique);
      arValues.sort();
      console.log(arValues);
    }
    ingredientUnit();

    // Builds a list of tags for recipe themes, plus links
    function buildTagList(tags) {
      let markup = '';
      for (let i = 0; i < tags.length; i++) {
        const thisItem = tags[i];
        markup += '<a href="/recipes-featuring/?tag=' + thisItem + '" class="btn btn-tag">' + thisItem + '</a> ';
      }
      if (markup !== '') markup = '<p><strong>See more recipes tagged with:</strong><br><a href="/recipes-featuring/" class="btn btn-tag">Everything</a> ' + markup + '</p>';
      return markup;
    }

    // Builds the markup for the ingredients panel
    function ingredientsMarkup(obj,objGroup) {
      const iconDairy = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains dairy"><path d="M 16,8 C 15,8 14,9 13,9 11,9 12,7 10,8 9,9 8.6,7.8 8,8 m 8,0 c -0.2,3.1 0,14 0,14 0,1 0,1 -1,1 H 9 C 8,23 8,23 8,22 V 8 C 8,7 10,4 10,4 9,4 9,4 9,3 V 2 C 9,1 9,1 10,1 h 4 c 1,0 1,0 1,1 v 1 c 0,1 0,1 -1,1 0.3,0.5 2,3 2,4 z M 14,4 h -4" fill="none" stroke="currentColor"/></svg>';
      const iconMeat = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains meat"><path d="m 11,13 c 2,0 5,0 8,0 -1,2 -2,3 -2,5 M 9,14 c 1,-1 1,-1 2,-1 0,1 1,4 1,5 M 3,10 v 4 l 1,1 c 1,0 2,-1 2,-2 h 2 l 1,1 v 4 M 20,6 c 0,3 0,4 -1,6 1,2 1,3 1,6 m 3,-5 V 8 C 23,7 22,6 20,6 H 9 C 8,6 6,8 5,9 L 3,10 H 1" fill="none" stroke="currentColor"/></svg>';
      const iconAlcohol = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains alcohol"><path d="m 14,23 h 3 v -6 c -1,0 -3,-1 -3,-3 V 8 h 6 v 6 c 0,2 -2,3 -3,3 v 6 h 3 M 7,1 h 2 c 0,2 0,5 1,6 1,1 2,2 2,4 V 23 H 4 V 11 C 4,9 5,8 6,7 7,6 7,3 7,1 Z" fill="none" stroke="currentColor"/></svg>';
      const iconCaffeine = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains caffeine"><path d="m 4,8 c -5,-1 -3,8 1,4 m 9,4 c 4,0 6,-4 6,-9 H 4 c 0,5 3,9 6,9 m -9,0 h 22 c -2,1 -5,2 -10,2 H 11 C 6,18 3,17 1,16 Z" fill="none" stroke="currentColor"/></svg>';
      const iconEggs = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains eggs"><path d="m 15,13 c 1,-6 5,-6 6,0 M 9,13 c 1,-6 5,-6 6,0 M 3,13 C 4,7 8,7 9,13 M 1,13 H 23 M 2,13 c 0,2 1,4 2,5 h 4 l 1,-2 1,2 h 4 l 1,-2 1,2 h 4 c 1,-1 2,-3 2,-5" fill="none" stroke="currentColor"/></svg>';
      const iconFish = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains fish"><path d="m 18,13 c -3,1 -5,1 -5,-1 m 7,-1.5 A 0.5,0.5 0 0 1 19.5,11 0.5,0.5 0 0 1 19,10.5 0.5,0.5 0 0 1 19.5,10 0.5,0.5 0 0 1 20,10.5 Z M 9,10 c 1,-1 3,-2 3,-4 3,0 3,1 4,2 m 7,4 C 22,20 9,16 5,12 4.5,11 4,10 2,10 c 2,1.5 1,2 -1,3 2,1 3,1 4,-1 9,-5 15,-6 18,0 z" fill="none" stroke="currentColor"/></svg>';
      const iconGluten = '<svg xmlns="http://www.w3.org/2000/svg" aria-label="Gluten free" stroke="currentColor" fill="none" viewBox="0 0 24 24" width="24" height="24"><path d="M 8,5 C 7,4 4,2 2,2 2,3 4,7 5,8 M 22,22 8,8"/><path d="m 19,19 c 1,-2 0,-7 -1,-9 -1,2 -2,5 -1,7 -2,-1 -5,0 -7,1 2,1 7,2 9,1 m -2,-6 c 0,-1 -1,-4 -2,-6 -1,2 -2,5 -1,7 -2,-1 -5,0 -7,1 2,1 5,2 6,2 m 1,-7 c 0,-1 -1,-4 -2,-6 -1,2 -2,5 -1,7 -2,-1 -5,0 -7,1 2,1 5,2 6,2 M 11,7 C 11,6 10,3 9,1 8,3 7,6 8,8 6,7 3,8 1,9 c 2,1 5,2 6,2"/></svg>';
      const iconLactose = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains lactose"><path d="m 12,15 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 z m 6,-3 a 2.5,2.5 0 0 1 -2.5,2.5 2.5,2.5 0 0 1 -2.5,-2.5 2.5,2.5 0 0 1 2.5,-2.5 2.5,2.5 0 0 1 2.5,2.5 M 8,11.5 A 2.5,2.5 0 0 1 5.5,14 2.5,2.5 0 0 1 3,11.5 2.5,2.5 0 0 1 5.5,9 2.5,2.5 0 0 1 8,11.5 Z M 22,8 H 3 m 19,9 v 2 H 6 C -1,19 -1,5 9,5 l 13,3 v 2 c -4,0 -4,7 0,7 z" fill="none" stroke="currentColor"/></svg>';
      const iconLamb = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains lamb"><path d="M 7,7.5 A 0.5,0.5 0 0 1 6.5,8 0.5,0.5 0 0 1 6,7.5 0.5,0.5 0 0 1 6.5,7 0.5,0.5 0 0 1 7,7.5 Z M 11,11 C 10,12 9.3080284,10.098628 9.5,8.5 9.6919716,6.9013718 9,6 8,6 m 5,12 -5,-1 m 12,0 c -3,-3 -4,-3 -6,0 l -3,4 m 0,-10 c 1.671949,-1.4205852 4.015423,-2.0756926 7,-2 5,0 5,8 3,11 -1,1 -4,-1 -5,-1 0,1 0,2 -2,2 H 6 C 3,21 2,17 5,15 L 6,11 C 4,14 0,13 2,9 8,-2 14,6 11,11 Z" fill="none" stroke="currentColor"/></svg>';
      const iconNuts = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains nuts"><path d="M 6,3 C 8,3 21,18 12,22 0,22 4,3 6,3 Z m 7,8 c 3,-3 6,-7 7,-7 0,1 -0.8,2.8 -3,7 m 2,-0.6 -1.5,4 m 2.1,1.1 1.4,0.5 c 0,1 -1,6 -7,5 M 12,9 c 3,-4 6,-6 8,-5 2,1 1,8 -0.4,11.5 L 14,13 M 7,16 C 5.6,9.7 5.6,4.9 6,3 l 3,10 m 2,-1 C 7.8,4.9 6.6,3 6,3" fill="none" stroke="currentColor"/></svg>';
      const iconShellfish = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains shellfish"><path d="M 10,7.5 A 0.5,0.5 0 0 1 9.5,8 0.5,0.5 0 0 1 9,7.5 0.5,0.5 0 0 1 9.5,7 0.5,0.5 0 0 1 10,7.5 Z M 10,20 8,19 5,20 7,22 9.5,21 M 10,19 8,17 5,18 6,19.6 m 10.6,-1 2.4,2.4 m -2,-8 4,-4 m -3,6 h 4.5 M 13,19 v 3 M 15,12 V 6 m -4,6 c -2,0 -2,2 0,2 M 5,8 C 0,10 0,1 5,1 H 7 M 5,8 C 1,10 1,3 5,3 H 7 M 5,6 h 10 c 10,0 10,16 0,16 h -4 c -2,0 -2,-3 0,-3 h 4 c 4,0 4,-7 0,-7 H 10 C 7,12 6,8 5,6 Z" fill="none" stroke="currentColor"/></svg>';
      const iconSoy = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-label="Contains soy"><path d="m 12,11 -2,1 v 2 l 2,1 2,-1 V 12 Z M 10,5 h 4 M 8,2 c 3,-1 5,-1 8,0 l -1,3 h -1 c 2,3 7,14 4,18 H 6 C 3,19 8,8 10,5 H 9 Z" fill="none" stroke="currentColor"/></svg>';
      let markup = '';
      if (obj.length > 0) {
        markup += '<ul>';
        for (let i = 0; i < obj.length; i++) {
          const thisIngredient = obj[i];
          const name = thisIngredient.name;
          const unit = thisIngredient.unit;
          let knownName = false;
          //       console.log(objIngredients.ingredients);
          // Loop through the ingredients JSON, looking for a match for the name
          for (let j = 0; j < objIngredients.ingredients.length; j ++) {
            const thisThing = objIngredients.ingredients[j];
            if(thisThing.name.toLowerCase() === name.toLowerCase()) knownName = true
          }

          markup += '<li>';
          // (1) Do we have any amount for this ingredient
          // (2) Is the ingredient amount a sensible number?
          // (3) Does the name of this ingredient have a match in the ingredients JSON? (see above loop)
          // (4) Is the unit of measurement something I can convert to gramms, so I can do the calculation?
          if (
            typeof thisIngredient.amount !== 'undefined' &&
            parseFloat(thisIngredient.amount) !== NaN &&
            knownName &&
            (unit === 'cups' || unit === 'cup' || unit === 'g' || unit === 'lb' || unit === 'lbs' || unit === 'ml' || unit === 'oz' || unit === 'pound' || unit === 'pounds' || unit === 'tbsp' || unit === 'tsp' )
          ) {
            markup += '<input type="number" value="' + thisIngredient.amount + '" id="" name="" data-js="" class="input-short text-right"> ';
          }
          // We cannot adjust this ingredient amount
          else if (typeof thisIngredient.amount !== 'undefined') {
            markup += thisIngredient.amount + ' ';
          }
          if (typeof unit !== 'undefined')                       markup += unit + ' ';
          if (typeof name !== 'undefined')                       markup += name + ' ';
          if (typeof thisIngredient.preparation !== 'undefined') markup += thisIngredient.preparation + ' ';
          // Check if "name" is in the ingredients object
          markup +=  '</li>';
        }
        markup +=  '</ul>';
      }
      // Sometimes, the ingredients are split into groups
      if (typeof objGroup !== 'undefined') {
        for (let i = 0; i < objGroup.length; i++) {
          const thisGroup = objGroup[i];
          if (typeof thisGroup.name !== 'undefined') {
            markup += '<h4>' + thisGroup.name + '</h4>';
          }
          markup += '<ul>';
          for (let j = 0; j < thisGroup.ingredient.length; j++) {
            const thisIngredient = thisGroup.ingredient[j];
            markup += '<li> + ';
            if (typeof thisIngredient.amount !== 'undefined')      markup += thisIngredient.amount + ' ';
            if (typeof thisIngredient.unit !== 'undefined')        markup += thisIngredient.unit + ' ';
            if (typeof thisIngredient.name !== 'undefined')        markup += thisIngredient.name + ' ';
            if (typeof thisIngredient.preparation !== 'undefined') markup += thisIngredient.preparation + ' ';
            markup += '</li>';
          }
          markup += '</ul>';
        }
      }
      return markup;
    }

    // Builds the markup for the steps panel
    function stepsMarkup(obj) {
      let markup = '';
      for (let i = 0; i < obj.length; i++) {
        const step = obj[i];
        markup += '<li>';
        if (typeof step.description !== 'undefined') markup += step.description.replace('\\n','<br>') + ' ';
        markup += '</li>';
      }
      return markup
    }

    // Builds the markup for social share links
    function shareLinks(title,url) {
      let markup = '';
      if (title && url) {
        markup += '<a href="https://twitter.com/intent/tweet?' +
          'url=' + encodeURIComponent(url) +
          '&amp;text=' + encodeURIComponent(title) +
          '" class="btn icon-small" target="_blank" title="Share this recipe on Twitter"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-label="Share this recipe on Twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>' +
          '<a href="https://www.facebook.com/sharer/sharer.php' +
          'u=' + encodeURIComponent(url) +
          '&amp;title=' + encodeURIComponent(title) +
          '" class="btn icon-small" target="_blank" title="Share this recipe on Facebook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-label="Share this recipe on Facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>' +
          '<a href="https://www.linkedin.com/sharing/share-offsite/' +
          '?url=' + encodeURIComponent(url) +
          '" class="btn icon-small" target="_blank" title="Share this recipe on LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" aria-label="Share this recipe on LinkedIn" fill="currentColor" viewBox="0 0 24 24"><rect ry="0" y="9" x="1" height="14" width="5"/><circle r="2.5" cy="4.5" cx="3.5"/><path d="M 8,23 V 9 h 5 v 2 c 0,-2 9,-5 10,4 v 8 h -5 v -8 c 0,-4 -5,-3 -5,0 v 8 z"/></svg></a>';
      }
      return markup;
    }

    // Builds the markup for a single recipe
    function recipeMarkup(object) {
      let recipeTools = buildRating(object.id);

      // Building out the recipe tags for the querystring
      let tagsQuery = '';
      for (let i = 0; i < object.tags.length; i++) {
        tagsQuery +=  encodeURIComponent(object.tags[i]);
        if (i < (object.tags.length - 1)) tagsQuery += ', ';
      }

      const ingedientsQuery = ingredientQuerystring(object.ingredient);
      const stepsQuery      = stepsQueryString(object.step);

      // Checks for recipe notes
      let notesQuery = '';
      if (object.notes !== undefined) notesQuery = '&amp;recipe-notes=' + encodeURIComponent(object.notes);

      recipeTools += '<a href="/account/" class="btn btn-secondary icon-small"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-label="Delete"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg> Add to favourites</a>' +
        '<a href="/account/edit-recipe/?' +
        'recipe-name=' + encodeURIComponent(object.name) +
        '&amp;recipe-description=' + encodeURIComponent(object.description) +
        '&amp;recipe-tags=' + tagsQuery +
        stepsQuery +
        ingedientsQuery +
        notesQuery +
        '" class="btn btn-secondary icon-small">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-label="Edit"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg> Edit recipe</a>' +
        '<a href="/report-recipe/?recipe-name=' + encodeURIComponent(object.name) + '" class="btn btn-secondary icon-small"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-label="Warning"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> Report recipe</a>' +
        '<a href="/detail/?recipeID=' + encodeURIComponent(object.id) + '" class="btn btn-secondary icon-small"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-label="text file"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> View recipe on new page</a></p>';

      const shoppingList = buildIngredientList(object.shopping);
      const tags         = buildTagList(object.tags);
      const ingredients  = ingredientsMarkup(object.ingredient,object.ingredientGroup);
      const steps        = stepsMarkup(object.step);

      let notes = '';
      if (typeof object.notes !== 'undefined') notes = '<p>' + object.notes + '</p>';
      let forked = '';
      if (typeof object.forked !== 'undefined') forked = '<p>' + object.forked + '</p>';

      const markup = '<section class="row" aria-label="' + object.name + '">' +
        '<header class="col-md">' +
        '<h2>' + object.name + '</h2>' +
        '<p>' + object.description + '</p>' +
        '<p><img src="' + object.image + '" alt=""></p>' +
        shoppingList + tags + recipeTools +
        '</header><div class="col-md">' +
        '<section aria-label="Ingredients"><h3>Ingredients</h3>' +
        ingredients +
        '</section>' +
        '<section aria-label="Method"><h3>Method</h3><ol>' +
        steps + '</ol></section>' +
        '<footer>' + notes + forked + '</footer></div></section>';
      return markup;
    }

    // Builds the markup for a single recipe, but on a stand-alone page, rather than a modal
    function recipeDetail(object) {
      // A list of tools for the user to interact with the recipe
      let recipeTools = '';

      // Building out the recipe tags for the querystring
      let tagsQuery = '';
      for (let i = 0; i < object.tags.length; i++) {
        tagsQuery +=  encodeURIComponent(object.tags[i]);
        if (i < (object.tags.length - 1)) tagsQuery += ', ';
      }

      const ingedientsQuery = ingredientQuerystring(object.ingredient);
      const stepsQuery = stepsQueryString(object.step);

      // Checks for recipe notes
      let notesQuery = '';
      if (object.notes !== undefined) notesQuery = '&amp;recipe-notes=' + encodeURIComponent(object.notes);

      recipeTools += '<p><strong>Keto barometer</strong></p><p id="keto-barometer" class="meter"><span style="width: 30%;"></span><span></span></p>' +
      '<p><a href="/account/" class="btn btn-secondary icon-small"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-label="Delete"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg> Add to favourites</a>' +
        '<a href="/account/edit-recipe/?' +
        'recipe-name=' + encodeURIComponent(object.name) +
        '&amp;recipe-description=' + encodeURIComponent(object.description) +
        '&amp;recipe-tags=' + tagsQuery +
        stepsQuery +
        ingedientsQuery +
        notesQuery +
        '" class="btn btn-secondary icon-small">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-label="Edit"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg> Edit recipe</a>' +
        '<a href="/report-recipe/?recipe-name=' + encodeURIComponent(object.name) + '" class="btn btn-secondary icon-small"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-label="Warning"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> Report recipe</a>' +
        '<button type="button" class="btn btn-secondary icon-small"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-label="Email"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Email me this recipe</button>' +
        '</p>' +
        '<p>' + shareLinks(object.name,document.location) + ' <strong>Share this recipe:</strong></p>' +
        buildRating(object.id);

      const shoppingList = buildIngredientList(object.shopping);
      const tags         = buildTagList(object.tags);
      const ingredients  = ingredientsMarkup(object.ingredient,object.ingredientGroup);
      const steps        = stepsMarkup(object.step);

      let notes = '';
      if (typeof object.notes !== 'undefined') notes = '<p>' + object.notes + '</p>';
      let forked = '';
      if (typeof object.forked !== 'undefined') forked = '<p>' + object.forked + '</p>';

      const markup = '<section class="container" aria-label="' + object.name + '">' +
        '<header class="row gutter-base">' +
        '<p class="col-md-8 pos-rel"><img src="' + object.image + '" class="img-fit-md" alt=""></p>' +
        '<div class="col-md-4 pad-vert-large">' +
        '<h2>' + object.name + '</h2>' +
        '<p>' + object.description + '</p>' +
        '</div>' +
        '</header>' +
        '<div class="row">' +
        '<div class="col-md-8">' +
        '<section aria-label="Ingredients"><h3>Ingredients</h3>' +
        ingredients +
        '</section>' +
        '<section aria-label="Method"><h3>Method</h3><ol>' +
        steps + '</ol></section>' +
        '<footer>' + notes + forked + '</footer>' +
        '</div>' +
        '<aside class="col-md-4">' + recipeTools + shoppingList + tags +  '</aside>' +
        '</div>' + relatedCTA(object,8) + '</section>';
      return markup;
    }

    // Builds the markup for a single recipe summary
    function recipeSummary(object) {
      // Builds the list of shopping items
      let shoppingList = '';
      if (object.shopping.length > 0) {
        for (let i = 0; i < object.shopping.length; i++) {
          let thisItem = object.shopping[i];
          shoppingList += thisItem;
          if (i !== object.shopping.length - 1) shoppingList += ', ';
          else shoppingList += '.';
        }
      }
      if (shoppingList !== '') shoppingList = '<p><strong>Requires:</strong><br>' + shoppingList + '</p>';

      let markup = '<section class="row" aria-label="' + object.name + '">' +
          '<p class="col-md"><img src="' + object.image + '" alt=""></p>' +
          '<div class="col">' +
          '<h2>' + object.name + '</h2>' +
          '<p class="lead">' + object.description + '</p>' +
          shoppingList +
          '<p><a href="/detail/?recipeID=' + object.id + '" class="btn btn-primary" title="View ' + object.name + ' recipe">View <span class="sr-only">' + object.name + '</span> recipe</a></p>' +
          '</div></section>';
      return markup;
    }

    // Compares two different Arrays and returns a score for how many items they have in common
    function arrayCompare(arr1, arr2) {
      arr1 = arr1.filter(onlyUnique);
      arr2 = arr2.filter(onlyUnique);
      let itemsInCommon = 0;
      for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) != -1) itemsInCommon += 1;
      }
      return itemsInCommon;
    }

    // Used as a filter to remove duplicate values from Arrays
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    // obj - A JSON object which might contain multiple Arrays within it
    // ar  - An Array, e.g. ["these","are","words"]
    // criteria - a string representing a key within an object, e.g. "test".
    // In the example above, all values associated with the key "test" would be selected from the obj and compared with the Array.
    // The function would return an Array featuring all of the strings from obj[i].test and ar in one Array, filtered to
    // remove duplication. This Array would be sorted, according to how many times these strings appeared in both objects.
    function returnChart(obj, ar, criteria) {
      let shoppingInCommon = {};
      for (let i = 0; i < obj.length; i++) {
        shoppingInCommon[obj[i].id] = arrayCompare(ar, obj[i][criteria]);
      }
      return sortObjectEntries(shoppingInCommon);
    }

    // Builds a list of the three most similar recipes to the current recipe
    function showRelated(obj,direction) {
      // An object, representing the most similar to the least similar recipes
      let chart = returnChart(arList, obj.shopping, 'shopping');
      let start = 1;
      let end = 4;
      if (direction === 'reverse') {
        chart.reverse();
        start = 0;
        end = 3;
      }
      let markup = '<p>';
      for (let i = start; i < end; i++) {
        // The index of the related recipe, in the original object
        let relatedIndex = arLookup.indexOf(chart[i]);
        markup += '<button type="button" data-show="' + chart[i] + '" class="btn btn-tag">' + arList[relatedIndex].name + '</button> ';
      }
      markup += '</p>';
      return markup;
    }

    // Returns similar recipes, the number of which is defined by a parameter.
    // These have images, rather than just links, like showRelated().
    function relatedCTA(obj,count) {
      // An object, representing the most similar to the least similar recipes
      let chart = returnChart(arList, obj.shopping, 'shopping');
      let markup = '<aside aria-label="Similar recipes" class="box-grid gutter-large"><h2>Similar recipes</h2>';
      // We count this way because the recipe which is most similar to the current recipe will always be... the current recipe.
      for (let i = 1; i < (count + 1); i++) {
        const thisRecipe = chart[i];
        // The index of the related recipe, in the original object
        const currentIndex = arLookup.indexOf(thisRecipe);
        const currentObj = arList[currentIndex];
        markup += '<p><a href="/detail/?recipeID=' + currentObj.id + '">' +
        '<img src="' + currentObj.image + '" alt="">' +
        '<span class="name">' + currentObj.name + '</span>' +
        '</a></p>';
      }
      markup += '</aside>';
      return markup;
    }

    // Showing a random recipe
    let randRecipeInt = (Math.round((arList.length - 1) * Math.random()));
    //let randObj = arList(randRecipeInt);
    showRecipe(arList[randRecipeInt].id);

    // Shows a recipe, plus related links
    function showRecipe(id) {
      var recipeObj = arList[arLookup.indexOf(id)];
      const randRecipeCard = recipeSummary(recipeObj);
      const welcomeMessage = '<h1>Recipe of the day</h1>';
      const choice = '<footer class="row"><section class="col" aria-label="Different"><h3>Different</h3>' + showRelated(recipeObj,'reverse') + '</section><section class="col" aria-label="Similar"><h3>Similar</h3>' + showRelated(recipeObj) + '</section></footer>';
      let tagTarget = document.querySelector('[data-js="app"]');
      if (tagTarget) tagTarget.innerHTML = welcomeMessage + randRecipeCard + choice;
    }

    // User is on the Recipes Featuring page
    let objRecipesFeaturing = document.querySelector('[data-js="recipes-featuring"]');
    if (objRecipesFeaturing) {
      const ingredientParam = getParameterByName('ingredient');
      const tagParam = getParameterByName('tag');
      let objResults;
      if (ingredientParam) {
        objResults = filterRecipy('shopping',ingredientParam);
      } else if (tagParam) {
        objResults = filterRecipy('tags',tagParam);
      } else {
        objResults = filterRecipy();
      }
      objRecipesFeaturing.innerHTML = recipyThumbs(objResults);
    }

    // User is on the Recipes themes page
    let objRecipeThemes = document.querySelector('[data-js="recipes-themes"]');
    if (objRecipeThemes) {
       objRecipeThemes.innerHTML = popularThemes(arList,'tags');
    }

    // User is on the recipe detail page
    let objRecipeDetail = document.querySelector('[data-js="recipes-detail"]');
    if (objRecipeDetail) {
      const id = getParameterByName('recipeID');
      // Do we have an ID? Is it valid?
      if (id !== null && arLookup.indexOf(id) > -1) {
        const objRecipe = arList[arLookup.indexOf(id)];
        objRecipeDetail.innerHTML = recipeDetail(objRecipe);
      }
      // No valid ID passed in the querystring: show thumbnails instead
      else {
        const objResults = filterRecipy();
        objRecipeDetail.innerHTML = recipyThumbs(objResults);
      }
    }

    // Builds the markup for a list of all the recipe themes, sorted by popularity
    // obj - object, containing all recipes
    // criteria - a string, representing the key associated with the Array which contains a list
    function popularThemes(obj,criteria) {
      const sortedTags = sortObjectEntries(objectChart(obj,criteria));
      let markup = '<section aria-label="Pick a theme"><h2 class="instruction-overlay">Pick a theme</h2> <div data-js="theme-dad" class="box-grid">';
      const length = sortedTags.length;
      // Sometimes, we don't have enough themes
      const limit = (length > 20) ? 20 : length;
      // Built up a list of the 20 most popular criteria
      for (let i = 0; i < limit; i++) {
        const name = sortedTags[i];
        let id = name.toLowerCase().replace(/\s+/g,'-'); // "Hello There, Man" becomes "hello-there,-man"
        markup += '<p><a href="/recipes-featuring/?tag=' + name + '" ><img src="/img/themes/' + id + '.jpg" alt=""><span class="name">' + name + '</span></a></p>';
      }
      markup += '</div></section>';
      return markup;
    }

    // Returns names and images of recipes which match an ingredient filter, or if no
    // filter is passed, returns all recipes.
    function filterRecipy(paramName,value) {
      let objResults = [];
      let tagValue = '';
      let ingredientValue = '';
      if (paramName === 'tags') tagValue = value;
      if (paramName === 'shopping') ingredientValue = value;
      // Show all recipes
      if (!paramName) {
        objResults.push({ "tag": tagValue, "ingredients": ingredientValue });
        for (let i = 0; i < arList.length; i++) {
          let thisRecipe = arList[i];
          // Building up objResults with content
          let thumb = {
            "name": thisRecipe.name,
            "image": thisRecipe.image,
            "id": thisRecipe.id
          };
          objResults.push(thumb);
        }
      } else { // Show recipes matching criteria
        objResults.push({ "tag": tagValue, "ingredients": ingredientValue });
        // Loop through all recipes, looking for a match.
        for (let i = 0; i < arList.length; i++) {
          let thisRecipe = arList[i];
          let currentArray = thisRecipe[paramName];
          // Building up objResults with content
          if (currentArray.indexOf(value) > -1) {
            let thumb = {
              "name": thisRecipe.name,
              "image": thisRecipe.image,
              "id": thisRecipe.id
            };
            objResults.push(thumb);
          }
        }
      }
      return objResults;
    }

    // Builds a list of thumbnails of recipes
    function recipyThumbs(obj) {
      let ingredientTerm = obj[0].ingredients;
      let tagTerm = obj[0].tag;
      let heading;
      // User lands with no or meaningless querystring
      if (ingredientTerm === '' && tagTerm === '') {
        heading = 'Pick a recipe';
      }
      // User has picked an ingredient with no results
      else if (obj.length < 2 && ingredientTerm !== '') {
        heading = 'No recipes feature ' + ingredientTerm + ' :(';
      }
      // Ingredient term with results
      else if (ingredientTerm !== '') {
        heading = 'Recipes featuring ' + ingredientTerm;
      }
      // User has picked a tag with no results
      else if (obj.length < 2 && tagTerm !== '') {
        heading = 'No ' + tagTerm + ' recipes';
      }
      // Tag term with results
      else {
        heading = tagTerm + ' recipes';
      }
      let markup = '<h2 class="instruction-overlay">' + heading + '</h2><div class="box-grid">';
      // Position 0 has the search terms
      for (let i = 1; i < obj.length; i++) {
        markup += '<p><button type="button" class="btn" data-view="' + obj[i].id + '"><img src="' + obj[i].image + '" alt="' + obj[i].name + '" data-view="' + obj[i].id + '"><span class="name" data-view="' + obj[i].id + '">' + obj[i].name + '</span></button></p>';
      }
      markup += '</div>';
      return markup;
    }

    // Grabbing querystring parameters
    function getParameterByName(name) {
      var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
      return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    // Listens for clicks on the related recipes buttons
    document.addEventListener('click', function (event) {
      const target = event.target;
      // On the shop by product page, the user has clicked on one of the related products
      if (target.getAttribute('data-show')) {
        const id = target.getAttribute('data-show');
        // Is the value of the attribute valid?
        if (arLookup.indexOf(id) > -1) {
          showRecipe(id);
        }
      }
      // The user has asked for the recipe to appear in a modal
      if (target.getAttribute('data-view')) {
        const id = target.getAttribute('data-view');
        // Is the value of the attribute valid?
        if (arLookup.indexOf(id) > -1) {
          const objRecipe = arList[arLookup.indexOf(id)];
          const target = document.querySelector('[data-js="ptt-results"]');
          if (target) {
            target.innerHTML = '<p class="close"><button type="button" title="Close" data-js="close" class="close">×</button></p>' + recipeMarkup(objRecipe);
            target.removeAttribute('hidden');
            document.querySelector('[data-js="overlay"]').removeAttribute('hidden');
          }
        }
      }
      // Close the modal
      if (
          target.getAttribute('data-js') === 'close' && document.querySelector('.modal')
          ||
          target.getAttribute('data-js') === 'overlay'
        ) {
        document.querySelector('.modal').setAttribute('hidden','true');
        document.querySelector('[data-js="overlay"]').setAttribute('hidden','true');
      }

    }, false);

    // Listens for the user influencing form elements
    document.addEventListener('change', function (event) {
      const target = event.target;
      if (target.getAttribute('data-js') === 'ingredient') pttCheck();
    }, false);
  }

  return myFactory;
}
