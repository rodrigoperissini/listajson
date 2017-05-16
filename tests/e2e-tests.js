// spec.js

describe('Check aplication title', function() {
  it('check page title', function() {
    browser.get('http://localhost:3000/clientes');
    var something = element(by.tagName('h1'));
    expect(something.getText()).toBe("Lista de Clientes");
  });
});

describe('Check home aplication title', function() {
  it('should have a title', function() {
    browser.driver.get('http://localhost:3000/');
    var something = browser.driver.findElement(by.tagName('body'));
    expect(something.getText()).toEqual("batata");
  });
  });

 describe('Check if the list is correct', function() {
    it('check 10th name in the list', function() {
       browser.get('http://localhost:3000/clientes');
       var something = element.all(by.repeater('cliente in clientes'));
       expect(something.count()).toBe(150);
});
  


});