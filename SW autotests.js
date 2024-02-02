//autotests for Star Wars method swapi.py4e.com/api/people/10 (for more info please see https://swapi.py4e.com/documentation)

pm.test("Expecting status 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Body matches string fair", function () {
    pm.expect(pm.response.text()).to.include("fair");
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});