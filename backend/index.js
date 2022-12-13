const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());

const items = [
    {
        id: "1",
        name: "carrot cake",
        description: "home made here",
        price: "2.50",
        category: "cake",
        available: "no",
        ingredients: "175g light muscovado sugar 175ml sunflower oil, 3 large eggs lightly beaten, 140g grated carrot (about 3 medium),"
        + "100g raisins,  1 large orange zested,  175g self-raising flour,  1 tsp bicarbonate of soda,  1 tsp ground cinnamon,  ½ tsp grated nutmeg (freshly grated will give you the best flavour)",
        recipe: "\n STEP 1 \n Heat the oven to 180C/160C fan/gas 4. Oil and line the base and sides of an 18cm square cake tin with baking parchment. \n STEP 2 \n " 
        +" Tip the sugar, sunflower oil and eggs into a big mixing bowl. Lightly mix with a wooden spoon. Stir in the carrots, raisins and orange zest. \n STEP 3 \n Sift the flour, " 
        +"bicarbonate of soda, cinnamon and nutmeg into the bowl. Mix everything together, the mixture will be soft and almost runny. \n STEP 4 \n Pour the mixture into the prepared tin and bake for 40-45 mins " 
        +"or until it feels firm and springy when you press it in the centre. \n STEP 5 \n Cool in the tin for 5 mins, then turn it out, peel off the paper and cool on a wire rack. " 
        +"(You can freeze the cake at this point if you want to serve it at a later date.) \n STEP 6 \n Beat the icing sugar and orange juice in a small bowl until smooth, you want the icing about as runny"
        +"as single cream. Put the cake on a serving plate and boldly drizzle the icing back and forth in diagonal lines over the top, letting it drip down the sides.",
        serving: 15,
        original: "https://www.bbcgoodfood.com/recipes/yummy-scrummy-carrot-cake-recipe"
    },
    {
        id: "2",
        name: "Soft-boiled eggs",
        description: "Fresh eggs",
        price: "1",
        category: "snack",
        available: "no",
        ingredients: "2 large free-range eggs at room temperature, toast to serve",
        recipe: " \n STEP 1 \n Fill a medium sized saucepan with water and bring to a rolling boil. \n STEP 2 \n Make sure your eggs aren't fridge cold. By having the eggs at room temperature, " 
        +"it will be less of a shock for the egg reaching the hot water and therefore less likely to crack. You can also use an egg pricker to make a very small hole in each egg before boiling, " 
        +"which will also reduce the chances of it cracking in the heat. Slowly lower the eggs into the water using a spoon. \n STEP 3 \n Set your timer for 4-5 mins for runny/dippy eggs to serve with"
        +"soldiers, or 6-7 mins for soft-boiled eggs for a salad. If serving in a salad, plunge the eggs into a bowl of cold water as soon as the timer goes off, this will stop"
        +"them cooking and cool the shells quickly for peeling.",
        serving: 1,
        original: "https://www.bbcgoodfood.com/recipes/soft-boiled-eggs"
    },
    {
        id: "3",
        name: "Greek salad",
        description: "uses seasonal local produce",
        price: "1.50",
        category: "side",
        available: "yes",
        ingredients: "4 large vine tomatoes cut into irregular wedges, 1 cucumber peeled deseeded then roughly chopped, ½ a red onion thinly sliced, 16 Kalamata olives, 4 tbsp Greek extra virgin olive oil",
        recipe: "Place 4 large vine tomatoes, cut into wedges, 1 peeled, deseeded and chopped cucumber, ½ a thinly sliced red onion, 16 Kalamata olives, and 4 tbsp Greek extra virgin olive oil in a large bowl.",
        serving: 2, 
        original: "https://www.bbcgoodfood.com/recipes/greek-salad"
    },
    {
        id: "4",
        name: "Sticky spiced red cabbage",
        description: "100% free of monkey meat",
        price: "2.00",
        category: "side",
        available: "yes",
        ingredients: "1 tbsp olive oil, 1 medium-size red cabbage quartered cored and shredded, 1 finger-size piece fresh root ginger finely chopped, 2 onions sliced, 1 tsp ground allspice," 
        +"1 tbsp mustard seed, 100g golden caster sugar, 150ml red wine vinegar",
        recipe: " \n STEP 1 \n Heat oil in a large saucepan, add cabbage, ginger, onions, allspice and mustard seeds, then cook for 5 mins until just starting to wilt." 
        +" \n STEP 2 \n Scatter over the sugar and pour in the vinegar. Cover pan, gently cook for 10 mins, then remove lid and turn up the heat to medium. Simmer the liquid in the cabbage for about 20 mins,"
        +"stirring occasionally, then stir continuously for the last few mins until all the liquid has evaporated and becomes sticky on the bottom of the pan. Tip cabbage into a large bowl and serve.",
        serving: 6,
        original: "https://www.bbcgoodfood.com/recipes/sticky-spiced-red-cabbage"
    },
    {
        id: "5",
        name: "chocolate cake",
        description: "happy birthday",
        price: "2.50",
        category: "cake",
        available: "yes",
        ingredients: "200g golden caster sugar, 200g unsalted butter softened plus extra for the tins, 4 large eggs, 200g self-raising flour," + 
        "2 tbsp cocoa powder, 1 tsp baking powder, ½ tsp vanilla extract, 2 tbsp milk",
        recipe: " \n STEP 1 \n Heat oven to 190C/170C fan/gas 5. Butter the base and sides of two 20cm" 
        + "round sandwich tins and line the bases with baking parchment. \n STEP 2 \n In a large bowl, beat together 200g golden caster sugar, 200g softened unsalted butter, " + 
        "4 large eggs, 200g self-raising flour, 2 tbsp cocoa powder, 1 tsp baking powder, ½ tsp vanilla extract, 2 tbsp milk and a pinch of salt until pale." + " \n STEP 3 \n Divide the mixture" 
        + "between the prepared tins. Bake for 20 mins or until a skewer inserted into the centre of the cake comes out clean. "
        +" \n STEP 4 \n Leave to cool in the tin for 10 mins, then turn out onto a wire rack to cool completely. \n STEP 5 \n For the buttercream, put 100g chopped milk chocolate in a" 
        +"heatproof bowl and melt in the microwave, stirring every 30 secs. Leave the melted chocolate to cool for 5 mins. \n STEP 6 \n Mash 200g softened butter and 400g icing " 
        +"sugar together with a fork, then switch to a wooden spoon or electric beaters, if you have them. \n STEP 7 \n Sift in 5 tbsp cocoa powder with a pinch of salt and pour in the melted chocolate " 
        +"and 2 tbsp milk. Mix again until smooth. \n STEP 8 \n On a cake stand or large plate, sandwich the cakes together with half of the buttercream, then spread the rest on top." + 
        "Decorate with chocolate shards, if you like. \n STEP 9 \n To make chocolate shards: melt 50g dark chocolate and pour it onto a tray lined with baking parchment or foil." 
        + " \n STEP 10 \n Now melt 25g milk chocolate and 25g white chocolate and drizzle them over the dark chocolate before it sets. \n STEP 11 \n Shake the tray gently to level the mixture then leave to set somewhere cool. Chop into shards.",
        serving: 12,
        original: "https://www.bbcgoodfood.com/recipes/broccoli-soup-cheese-toasties"
    },
    {
        id: "6",
        name: "broccoli soup",
        description: "Creamy and healty broccoli soup, no cream",
        price: "1.50",
        category: "soup",
        available: "yes",
        ingredients: "1 large potato, diced, 1.2l chicken or vegetable stock, 400g broccoli chopped into florets",
        recipe: "Heat oven to 200C/180C fan/gas 6. Put the potato and stock in a saucepan and bring to the boil, turn down to simmer for 10 mins until the potato is tender," + 
        "then add the broccoli and some seasoning and cook for another 4-5 mins. Blend the soup until smooth, then return to the pan and keep warm while you make the toastie",
        serving: 4,
        original: "https://www.bbcgoodfood.com/recipes/broccoli-soup-cheese-toasties"
    },
]

// app.get('/food', cors(), function (req, res, next){
//     res.json({msg: 'This is CORS enabled for a single route'})
// })

app.get("/", function (req, res) {
    res.send("Welcome to my application")
});

app.get("/food", function (req, res){
    res.json(items);
})

app.use(function (req, res) {
    res.status(404)
    res.send("Can't find what you want");
});

app.listen(3005, () => {
    console.log("Server opened not on 3001, but on 3005. Enjoy")
});