const chai = require('chai');
const chaiHttp = require('chai-http');
let app;

before(async () => {
  // Import the Express app from the server/routes/routes.js
  const expressApp = await import('../server/routes/routes.js');
  app = expressApp.default; 
  
});
const expect = chai.expect;

chai.use(chaiHttp);

describe('Spotify API Endpoints', () => {
  const host = 'http://localhost'; 
  const port = 5000; 
  // Make a GET request to '/discover'
  it('should get discover data', async () => {
    const res = await chai.request(`${host}:${port}`).get('/discover');
    
    expect(res).to.have.status(200); // Assert that the response has a status code of 200

 
  expect(res.body).to.be.an('object');
  });

  it('should get artist data', (done) => {
    chai
      .request(`${host}:${port}`)
      .get('/artists')
      .end((err, res) => {
        if (err) {
          done(err); 
          return;
        }
        
        expect(res).to.have.status(200); // Assert that the response has a status code of 200
        expect(res.body).to.be.an('object'); 
  
        done(); // Signal the end of this test
      });
  });


  
  

  it('should get track data', (done) => {
    chai
      .request(`${host}:${port}`)
      .get('/tracks')
      .end((err, res) => {
        expect(res).to.have.status(200); // Assert that the response has a status code of 200
        expect(res.body).to.be.an('object'); 
        done(); // Signal the end of this test
      });
  });

  it('should get playlist data', (done) => {
    chai
      .request(`${host}:${port}`)
      .get('/playlists')
      .end((err, res) => {
        expect(res).to.have.status(200); // Assert that the response has a status code of 200
        expect(res.body).to.be.an('object');
        done(); // Signal the end of this test
      });
  });

  it('should get genre data', (done) => {
    chai
      .request(`${host}:${port}`)
      .get('/genre')
      .end((err, res) => {
        expect(res).to.have.status(200); // Assert that the response has a status code of 200
        expect(res.body).to.be.an('object'); 
        done(); // Signal the end of this test
      });
  });

  it('should get podcast data', (done) => {
    chai
      .request(`${host}:${port}`)
      .get('/podcast')
      .end((err, res) => {
        expect(res).to.have.status(200); // Assert that the response has a status code of 200
        expect(res.body).to.be.an('object'); 
        done(); // Signal the end of this test
      });
  });
});
