(() => {

    const withdrawCash = ( amountW: number): Promise<number> => {
        let currentAmount = 1000;

        return new Promise( (resolve, reject) => {
            if ( amountW > currentAmount ) {
                reject('There is not enough money in your account');
            } else {
                currentAmount -= amountW;
                resolve( currentAmount );
            }
        });
    }
    withdrawCash( 500 )
    .then( currentAmpunt => console.log(`I still have ${currentAmpunt}`) )
    //.catch( err => console.warn( err ) ) Sería lo mismo que lo de abajo
    .catch( console.warn ) 
})();
 