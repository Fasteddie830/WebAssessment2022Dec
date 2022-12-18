const nedb = require("nedb");

//The menumodel takes care of the database. Here we are initialising the database with new data, or if the database exists, the code looks for it and loads it up.

// getRandomArbitrary takes in a minimum number and a maximum number, and returns back a number between the two values.
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
//getRandomTen just gives me back 10 random numbers, those are being used for "random user" ratings. 
function getRandomTen() {
  let numberlist = []
  for (let i = 0; i < 10; i++) {
    numberlist.push(Math.round(getRandomArbitrary(1, 5)))
  }
  return numberlist;
}

//create the db if one doesn't exists, otherwise load the existing one. 
class Menu {
  constructor(menuFilePath) {
    console.log(menuFilePath);
    if (menuFilePath) {
      this.menu = new nedb(menuFilePath);
      console.log("menu connected to " + menuFilePath);
      menuFilePath;
    } else {
      this.menu = new nedb();
    }
  }

  //initialise the database with the food data 
  init() {
    this.menu.insert({
      id: "1",
      name: "Carrot cake",
      description: "home made here",
      category: "cake",
      ingredients: "175g light muscovado sugar 175ml sunflower oil, 3 large eggs lightly beaten, 140g grated carrot (about 3 medium),"
        + "100g raisins,  1 large orange zested,  175g self-raising flour,  1 tsp bicarbonate of soda,  1 tsp ground cinnamon,  ½ tsp grated nutmeg (freshly grated will give you the best flavour)",
      recipe: "  \n STEP 1   \n Heat the oven to 180C/160C fan/gas 4. Oil and line the base and sides of an 18cm square cake tin with baking parchment.   \n STEP 2   \n "
        + " Tip the sugar, sunflower oil and eggs into a big mixing bowl. Lightly mix with a wooden spoon. Stir in the carrots, raisins and orange zest.   \n STEP 3   \n Sift the flour, "
        + "bicarbonate of soda, cinnamon and nutmeg into the bowl. Mix everything together, the mixture will be soft and almost runny.   \n STEP 4   \n Pour the mixture into the prepared tin and bake for 40-45 mins "
        + "or until it feels firm and springy when you press it in the centre.   \n STEP 5   \n Cool in the tin for 5 mins, then turn it out, peel off the paper and cool on a wire rack. "
        + "(You can freeze the cake at this point if you want to serve it at a later date.)   \n STEP 6   \n Beat the icing sugar and orange juice in a small bowl until smooth, you want the icing about as runny"
        + "as single cream. Put the cake on a serving plate and boldly drizzle the icing back and forth in diagonal lines over the top, letting it drip down the sides.",
      serving: "15",
      original: "https://www.bbcgoodfood.com/recipes/yummy-scrummy-carrot-cake-recipe",
      image: "https://www.biggerbolderbaking.com/wp-content/uploads/2015/03/BBB62-Carrot-Cake-Thumbnail-FINAL-.jpg", //NeDB doesn't support image storing well, so i will just use external links. 
      ratings: getRandomTen()
    });
    this.menu.insert({
      id: "2",
      name: "Soft-boiled eggs",
      description: "Fresh eggs",
      category: "snack",
      ingredients: "2 large free-range eggs at room temperature, toast to serve",
      recipe: "   \n STEP 1   \n Fill a medium sized saucepan with water and bring to a rolling boil.   \n STEP 2   \n Make sure your eggs aren't fridge cold. By having the eggs at room temperature, "
        + "it will be less of a shock for the egg reaching the hot water and therefore less likely to crack. You can also use an egg pricker to make a very small hole in each egg before boiling, "
        + "which will also reduce the chances of it cracking in the heat. Slowly lower the eggs into the water using a spoon.   \n STEP 3   \n Set your timer for 4-5 mins for runny/dippy eggs to serve with"
        + "soldiers, or 6-7 mins for soft-boiled eggs for a salad. If serving in a salad, plunge the eggs into a bowl of cold water as soon as the timer goes off, this will stop"
        + "them cooking and cool the shells quickly for peeling.",
      serving: "1",
      original: "https://www.bbcgoodfood.com/recipes/soft-boiled-eggs",
      image: "https://www.culinaryhill.com/wp-content/uploads/2021/02/How-to-Soft-Boil-Eggs-Culinary-Hill-1200x800-1.jpg",
      ratings: getRandomTen()
    });
    this.menu.insert({
      id: "3",
      name: "Greek salad",
      description: "uses seasonal local produce",
      category: "side",
      ingredients: "4 large vine tomatoes cut into irregular wedges, 1 cucumber peeled deseeded then roughly chopped, ½ a red onion thinly sliced, 16 Kalamata olives, 4 tbsp Greek extra virgin olive oil",
      recipe: "Place 4 large vine tomatoes, cut into wedges, 1 peeled, deseeded and chopped cucumber, ½ a thinly sliced red onion, 16 Kalamata olives, and 4 tbsp Greek extra virgin olive oil in a large bowl.",
      serving: "2",
      original: "https://www.bbcgoodfood.com/recipes/greek-salad",
      image: "https://www.themediterraneandish.com/wp-content/uploads/2020/02/Greek-salad-recipe-3.jpg", 
      ratings: getRandomTen()
    });
    this.menu.insert({
      id: "4",
      name: "Sticky spiced red cabbage",
      description: "100% free of monkey meat",
      category: "side",
      ingredients: "1 tbsp olive oil, 1 medium-size red cabbage quartered cored and shredded, 1 finger-size piece fresh root ginger finely chopped, 2 onions sliced, 1 tsp ground allspice,"
        + "1 tbsp mustard seed, 100g golden caster sugar, 150ml red wine vinegar",
      recipe: "   \n STEP 1   \n Heat oil in a large saucepan, add cabbage, ginger, onions, allspice and mustard seeds, then cook for 5 mins until just starting to wilt."
        + "   \n STEP 2   \n Scatter over the sugar and pour in the vinegar. Cover pan, gently cook for 10 mins, then remove lid and turn up the heat to medium. Simmer the liquid in the cabbage for about 20 mins,"
        + "stirring occasionally, then stir continuously for the last few mins until all the liquid has evaporated and becomes sticky on the bottom of the pan. Tip cabbage into a large bowl and serve.",
      serving: "6",
      original: "https://www.bbcgoodfood.com/recipes/sticky-spiced-red-cabbage",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-444463_12-b67dae6.jpg?quality=90&resize=440,400",
      ratings: getRandomTen()
    });
    this.menu.insert({
      id: "5",
      name: "Chocolate cake",
      description: "happy birthday",
      category: "cake",
      ingredients: "200g golden caster sugar, 200g unsalted butter softened plus extra for the tins, 4 large eggs, 200g self-raising flour," +
        "2 tbsp cocoa powder, 1 tsp baking powder, ½ tsp vanilla extract, 2 tbsp milk",
      recipe: "   \n STEP 1   \n Heat oven to 190C/170C fan/gas 5. Butter the base and sides of two 20cm"
        + "round sandwich tins and line the bases with baking parchment.   \n STEP 2   \n In a large bowl, beat together 200g golden caster sugar, 200g softened unsalted butter, " +
        "4 large eggs, 200g self-raising flour, 2 tbsp cocoa powder, 1 tsp baking powder, ½ tsp vanilla extract, 2 tbsp milk and a pinch of salt until pale." + "   \n STEP 3   \n Divide the mixture"
        + "between the prepared tins. Bake for 20 mins or until a skewer inserted into the centre of the cake comes out clean. "
        + "   \n STEP 4   \n Leave to cool in the tin for 10 mins, then turn out onto a wire rack to cool completely.   \n STEP 5   \n For the buttercream, put 100g chopped milk chocolate in a"
        + "heatproof bowl and melt in the microwave, stirring every 30 secs. Leave the melted chocolate to cool for 5 mins.   \n STEP 6   \n Mash 200g softened butter and 400g icing "
        + "sugar together with a fork, then switch to a wooden spoon or electric beaters, if you have them.   \n STEP 7   \n Sift in 5 tbsp cocoa powder with a pinch of salt and pour in the melted chocolate "
        + "and 2 tbsp milk. Mix again until smooth.   \n STEP 8   \n On a cake stand or large plate, sandwich the cakes together with half of the buttercream, then spread the rest on top." +
        "Decorate with chocolate shards, if you like.   \n STEP 9   \n To make chocolate shards: melt 50g dark chocolate and pour it onto a tray lined with baking parchment or foil."
        + "   \n STEP 10   \n Now melt 25g milk chocolate and 25g white chocolate and drizzle them over the dark chocolate before it sets.   \n STEP 11   \n Shake the tray gently to level the mixture then leave to set somewhere cool. Chop into shards.",
      serving: "12",
      original: "https://www.bbcgoodfood.com/recipes/broccoli-soup-cheese-toasties",
      image: "https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg",
      ratings: getRandomTen()
    });
    this.menu.insert({
      id: "6",
      name: "Broccoli soup",
      description: "Creamy and healty broccoli soup, no cream",
      category: "soup",
      ingredients: "1 large potato, diced, 1.2l chicken or vegetable stock, 400g broccoli chopped into florets",
      recipe: "Heat oven to 200C/180C fan/gas 6. Put the potato and stock in a saucepan and bring to the boil, turn down to simmer for 10 mins until the potato is tender," +
        "then add the broccoli and some seasoning and cook for another 4-5 mins. Blend the soup until smooth, then return to the pan and keep warm while you make the toastie",
      serving: "4",
      original: "https://www.bbcgoodfood.com/recipes/broccoli-soup-cheese-toasties",
      /* image: "https://cookieandkate.com/images/2020/03/broccoli-cheese-soup-recipe-3.jpg",  */
      image: "https://itsnotcomplicatedrecipes.com/wp-content/uploads/2021/01/potato-broccoli-soup3.jpg",
      ratings: getRandomTen()
    });
    this.menu.insert({
      id: "7",
      name: "Campfire Stew",
      description: "Enjoy this easy stew made with gammon and plenty of veg its full of goodness, delivering four of your five-a-day, and can also be cooked in a slow cooker",
      category: "main",
      ingredients: "600g gammon, 1 tbsp vegetable oil, 2 onions, roughly chopped, 2 carrots, chopped, 1 celery stick, chopped, 2 peppers, deseeded and chopped, 3 garlic cloves, crushed, 1 tbsp tomato purée, 2 tsp smoked paprika, ½ tsp chilli powder (optional), 2 x 400g cans chopped tomatoes, 1 tbsp Worcestershire sauce, 2 bay leaves, 2 x 400g cans haricot beans, drained and rinsed",
      recipe: "STEP 1 \n Remove the rind and fat from the gammon, then soak in a pan of water in the fridge overnight  this will remove some of the salt.  STEP 2 \n Heat the oil in a large flameproof casserole or ovenproof pan over a medium-high heat and cook the onion, carrots and celery for 10 mins, stirring regularly until the veg starts to soften. Stir in the peppers, garlic, tomato purée, paprika and chilli powder. Cook for another 2 mins, then add the tomatoes and stir. Swill out the tomato cans with a little water and pour this into the casserole. Season well and stir in the Worcestershire sauce, 1 tbsp sugar and the bay leaves.  STEP 3 \n Heat the oven to 170C/150C fan/gas 3. Put the gammon in the casserole, cover and bring to a simmer. Transfer to the oven and cook for 3 hrs until the meat is tender. Carefully lift out the casserole and return to a medium heat on the hob, then add the haricot beans. Simmer for 10 mins until the beans are heated through, then shred the ham using two forks. Serve straightaway. To store, leave to cool completely and chill in an airtight container for up to three days, or freeze for up to two months. Defrost in the fridge overnight before reheating until piping hot.",
      serving: "4",
      original: "https://www.bbcgoodfood.com/recipes/campfire-stew",
      image: "https://s23209.pcdn.co/wp-content/uploads/2020/03/Best-Ever-Beef-StewIMG_1367-600x900.jpg?p=31427",
      ratings: getRandomTen()
    });
    this.menu.insert({
      id: "8",
      name: "Easy vegetarian chilli",
      description: "Rustle up our easy vegetarian chilli. It's a great recipe for batch-cooking you can easily double it if you have a pan big enough, and freeze the rest",
      category: "main",
      ingredients: "2 tbsp vegetable oil, 2 carrots, finely chopped, 2 celery sticks, finely chopped, 2 onions, finely chopped, 2 tsp dried mixed herbs, 2 garlic cloves, crushed or finely grated, 1 red pepper, sliced, 1 green pepper, sliced, 2-3 tsp chilli powder (depending on how hot you like it), 2 tsp sweet smoked paprika, 2 tbsp tomato purée, 400g can red kidney beans, drained, 400g can black beans, drained, 2 x 400g cans chopped tomatoes, 400ml vegetable stock, cooked rice, grated cheddar and soured cream, to serve",
      recipe: "STEP 1 \n Heat the oil in a large saucepan over a low-medium heat and fry the carrots, celery, onions and mixed herbs for 10-12 mins, stirring occasionally until the veg is soft but not golden. You may need to add a splash of water if the veg starts to catch. STEP 2 \n Stir in the garlic and both peppers, and cook for a further 5 mins until the peppers begin to soften. Sprinkle in the chilli powder and paprika, turn up the heat to medium, then stir and cook for 1 min. Mix in the tomato purée and cook for a further 1 min, then pour in all of the beans, the tomatoes and stock. STEP 3 \n Stir well, bring to the boil, then reduce the heat to a simmer. Cook for 25-35 mins until the beans are tender and the sauce has thickened. Serve with rice, grated cheddar and soured cream, if you like.",
      serving: "6",
      original: "https://www.bbcgoodfood.com/recipes/easy-vegetarian-chilli",
      image: "https://www.wearesovegan.com/wp-content/uploads/2021/01/veganultimatechillirecipeh1.jpg",
      ratings: getRandomTen()
    });
    this.menu.insert({
      id: "9",
      name: "One-pan spaghetti with nduja, fennel & olives",
      description: "A spicy sausage pasta dish with a difference. Using the cooking water helps the sauce cling to the pasta and gives the dish more body. A silky smooth sauce, perfect pasta and one pan to wash!",
      category: "main",
      ingredients: "400g spaghetti, 3 garlic cloves, very thinly sliced, ½ fennel, halved and very thinly sliced, 75g nduja or sobrasada paste, 200g tomatoes (the best you can get), chopped into chunks, 75g black olives, pitted and sliced, 2 tsp tomato purée, 3 tbsp olive oil, plus a drizzle, 2 tsp red wine vinegar, 40g pecorino, plus extra to serve, handful basil, torn",
      recipe: "STEP 1 \n Boil the kettle. Put all the ingredients except the pecorino and basil in a wide saucepan or deep frying pan and season well. Pour over 800ml kettle-hot water and bring to a simmer, using your tongs to ease the spaghetti under the liquid as it starts to soften. STEP 2 \n Simmer, uncovered, for 10-12 mins, tossing the spaghetti through the liquid every so often until it is cooked and the sauce is reduced and clinging to it. Add a splash more hot water if the sauce is too thick or does not cover the pasta while it cooks. Turn up the heat for the final few mins to drive off the excess liquid, leaving you with a rich sauce. Stir through the pecorino and basil, and serve with an extra drizzle of oil and pecorino on the side.",
      serving: "6",
      original: "https://www.bbcgoodfood.com/recipes/one-pan-spaghetti-nduja-fennel-olives",
      image: "https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-featured-e1649949762421.jpg",
      ratings: getRandomTen()
    });
    this.menu.insert({
      id: "10",
      name: "Teriyaki chicken",
      description: "Try this easy, sticky Asian-style teriyaki chicken for a speedy weeknight supper it takes just 20 minutes to make! Serve it with sticky rice and steamed greens",
      category: "main",
      ingredients: "2 tbsp toasted sesame oil, 6 skinless and boneless chicken thighs, sliced, 2 large garlic cloves, crushed, 1 thumb-sized piece ginger, grated, 50g runny honey, 30ml light soy sauce, 1 tbsp rice wine vinegar, 1 tbsp sesame seeds, to serve, 4 spring onions, shredded, to serve, sticky rice, to serve, steamed bok choi or spring greens, to serve",
      recipe: "STEP 1 \n Heat the oil in a non-stick pan over a medium heat. Add the chicken and fry for 7 mins, or until golden. Add the garlic and ginger and fry for 2 mins. Stir in the honey, soy sauce, vinegar and 100ml water. Bring to the boil and cook for 2 - 5 mins over a medium heat until the chicken is sticky and coated in a thick sauce. STEP 2 \n Scatter over the spring onions and sesame seeds, then serve the chicken with the rice and steamed veg.",
      serving: "6",
      original: "https://www.bbcgoodfood.com/recipes/easy-teriyaki-chicken",
      image: "https://www.aheadofthyme.com/wp-content/uploads/2021/12/teriyaki-chicken-3.jpg",
      ratings: getRandomTen()
    });
    /* this.menu.insert({
      id: "11",
      name: "Lorem Ipsum",
      description: "Lorem ipsum",
      category: "",
      ingredients: "",
      recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      serving: "",
      original: "",
      image: "",
      ratings: [0]
    });
    this.menu.insert({
      id: "12",
      name: "Lorem Ipsum",
      description: "Lorem ipsum",
      category: "",
      ingredients: "",
      recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      serving: "",
      original: "",
      image: "",
      ratings: [0]
    });
    this.menu.insert({
      id: "13",
      name: "Lorem Ipsum",
      description: "Lorem ipsum",
      category: "",
      ingredients: "",
      recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      serving: "",
      original: "",
      image: "",
      ratings: [0]
    }); */
  }

  //return all entries into the console. 
  getAllEntries() {
    return new Promise((resolve, reject) => {
      this.menu.find({}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("function all() returns: ", entries);
        }
      });
    });
  }

 /*  updateRatings(_id, ratings, callback) {

    console.log(_id);

    this.menu.update(
      { _id: _id },
      {
        $set:
        {
          ratings: ratings
        }
      },
      
      {},
      function (err, numReplaced) {
        console.log("replaced: " + numReplaced);
      }
    );
    this.menu.find({}).exec(function (err, docs) { console.log(docs); });
    //console.log(this.db.find({dish: "Pizza"})) //testing
  } */


  //function to update a dish, in this project it's only used to update the ratings, however this can be used for all other fields too. 
  updateRatings(id, name, description, price, _id, category, ingredients, recipe, serving, original, ratings, callback) {

    this.menu.update(
      { _id: _id },
      {
        $set:
        {
          id: id,
          name: name, 
          description: description,
          price: price,
          category: category,
          ingredients: ingredients,
          recipe: recipe,
          serving: serving,
          original: original,
          image: image,
          ratings: ratings
        }
      },

      {},
      function (err, numReplaced) {
        console.log("replaced: " + numReplaced);
      }
    );
    this.db.find({}).exec(function (err, docs) { console.log(docs); });
    //console.log(this.db.find({dish: "Pizza"})) //testing
  } 


}
module.exports = Menu;
