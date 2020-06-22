(function () {

    function getAge() {
        return 100 + 100 + 340;
    } 

    const name = 'Daniel';
    const surname = 'Minguella';
    const age = 37;

    // Daniel Minguella (Age : 37)
    // const output = name + " " + surname + " ( " + age + " )";
    // const output = ` ${name} \n${surname} \n( ${age} )`;
    const output = `
${name}
${surname}
( ${ getAge() } )`;


    console.log(output);

})();

