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
  it('should get discover data', async () => {
    const res = await chai.request(app).get('/discover');
    console.log(" =========>>>>>" +res);
    //expect(res).to.have.status(200);
    //expect(res.body).to.be.an('json');
    
    // Add more assertions for the specific response data as needed
  });


it('should get artist data', (done) => {
    chai
      .request(app)
      .get('/artists')
      .end((err, res) => {
        console.log(" =========>>>>>" +res);
        //expect(res).to.have.status(200);
        //expect(res.body).to.be.an('object'); // Assuming artists data is an object
        // Add more assertions for the specific response data as needed
        done();
        console.log(" ====*****=>>>>>" +res)
      });
  });

 /* it('should get track data', (done) => {
    chai
      .request(app)
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
      .request(app)
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
      .request(app)
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
      .request(app)
      .get('/podcast')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object'); // Assuming podcast data is an object
        // Add more assertions for the specific response data as needed
        done();
      });
  });*/
});
