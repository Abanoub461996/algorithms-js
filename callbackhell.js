const makeBurger = () => {
  getBeef((beef) => {
    cookBeef(beef, (cookedBeef) => {
      getBuns((buns) => {
        putBeefBetweenBuns(buns, beef, function (burger) {
          // Serve the burger
        });
      });
    });
  });
};
const makeBurger2 = () => {
    getBeef().then(beef => {
      return cookBeef(beef);
    }).then(cookedBeef => {
      return getBuns();
    }).then(buns => {
      return putBeefBetweenBuns(buns, beef);
    }).then(burger => {
      // Serve the burger
    });
   };

   
const makeBurger3 = async () => {
  const beef = await getBeef();
  const cookedBeef = await cookBeef(beef);
  const buns = await getBuns();
  const burger = await putBeefBetweenBuns(buns, beef);
  // Serve the burger
};
