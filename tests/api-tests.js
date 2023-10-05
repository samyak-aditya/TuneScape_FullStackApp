const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);
let app; // Declare app variable

before(async () => {
  // Import your Express app, not the routes file
  const expressApp = await import('../server/routes/routes.js');
  app = expressApp.default; // Assign the app instance to the app variable
});

describe('Artists and Tracks Routes', function () {
  this.timeout(5000);

  // Reusable function to test routes
  async function testRoute(route, expectedStatus, expectedType, errorMessage) {
    const res = await chai.request(app).get(route);

    expect(res, errorMessage).to.have.status(expectedStatus); // Updated assertion here
    expect(res.body, errorMessage).to.be.an(expectedType);

    // Add more specific assertions based on your expected response
    // For example:
    // expect(res.body[0].name, errorMessage).to.exist; // Check if name property exists
  }

  // Test for the /artists route
  describe('GET /artists', function () {
    it('should return an array of artists', async function () {
      await testRoute('/artists', 200, 'object', 'Error in /artists route');
    });
    // Add more test cases for /artists route as needed
  });

  // Test for the /tracks route
  describe('GET /tracks', function () {
    it('should return an array of tracks', async function () {
      await testRoute('/tracks', 200, 'object', 'Error in /tracks route');
    });
    // Add more test cases for /tracks route as needed
  });

  // Test for the /discover route
  describe('GET /discover', function () {
    it('should return an array of tracks', async function () {
      await testRoute('/discover', 200, 'object', 'Error in /discover route');
    });
    // Add more test cases for /discover route as needed
  });

  // Test for the /podcast route
  describe('GET /podcast', function () {
    it('should return an array of tracks', async function () {
      await testRoute('/podcast', 200, 'object', 'Error in /podcast route');
    });
    // Add more test cases for /podcast route as needed
  });
});
