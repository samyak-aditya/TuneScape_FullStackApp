const chai = require('chai');
const chaiHttp = require('chai-http');
let app; // Declare app variable

before(async () => {
  // Import your Express app using dynamic import
  const expressApp = await import('../server/routes/routes.js');
  app = expressApp.default; // Assign the app instance to the app variable
  
}); // Import your Express app instance
const expect = chai.expect;

chai.use(chaiHttp);

describe('Spotify API Endpoints', () => {
  const host = 'http://localhost'; // Specify the host
  const port = 5000; // Specify the port

  it('should get discover data', async () => {
    const res = await chai.request(`${host}:${port}`).get('/discover');
    // Add assertions for the response data as needed
    expect(res).to.have.status(200);

  // Assert that the response data is an object
  expect(res.body).to.be.an('object');
  });

  it('should get artist data', (done) => {
    chai
      .request(`${host}:${port}`)
      .get('/artists')
      .end((err, res) => {
        if (err) {
          done(err); // Call done with the error if there is one
          return;
        }
        
        // Add your assertions for the response here
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object'); // Assuming artists data is an object
  
        done(); // Call done to indicate the test is complete
      });
  });


  
  

  it('should get track data', (done) => {
    chai
      .request(`${host}:${port}`)
      .get('/tracks')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object'); // Assuming track data is an object
        // Add more assertions for the specific response data as needed
        done();
      });
  });

  it('should get playlist data', (done) => {
    chai
      .request(`${host}:${port}`)
      .get('/playlists')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object'); // Assuming playlist data is an object
        // Add more assertions for the specific response data as needed
        done();
      });
  });

  it('should get genre data', (done) => {
    chai
      .request(`${host}:${port}`)
      .get('/genre')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object'); // Assuming genre data is an object
        // Add more assertions for the specific response data as needed
        done();
      });
  });

  it('should get podcast data', (done) => {
    chai
      .request(`${host}:${port}`)
      .get('/podcast')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object'); // Assuming podcast data is an object
        // Add more assertions for the specific response data as needed
        done();
      });
  });
});
