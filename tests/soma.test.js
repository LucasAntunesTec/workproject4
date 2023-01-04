const soma = require('./../src/soma')

test('Adicione 1 + 3 e resulte em 4', () => {

    expect(soma(1, 3)).toBe(4);

});