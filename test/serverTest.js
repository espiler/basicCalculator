var should = require('should');
var expect = require('chai').expect;
var request = require('supertest');

// run the app for testing and import access
var app = require('./../server').app;
 
describe('Server Calculations', function(){
  request = request('http://localhost:3000');
  var math = '/api/math/';

  it('should ADD subtotal and val', function(done) {
    request.get(math + 'add')
      .query({ subtotal: '10' })
      .query({ val: '5' })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        expect(res.text).to.equal('15');
        done();
      });
  });

  it('should SUBTRACT val from subtotal', function(done) {
    request.get(math + 'subtract')
      .query({ subtotal: '10' })
      .query({ val: '5' })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        expect(res.text).to.equal('5');
        done();
      });
  });

  it('should MULTIPLY val and subtotal', function(done) {
    request.get(math + 'multiply')
      .query({ subtotal: '10' })
      .query({ val: '5' })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        expect(res.text).to.equal('50');
        done();
      });
  });

  it('should DIVIDE subtotal and val', function(done) {
    request.get(math + 'divide')
      .query({ subtotal: '10' })
      .query({ val: '5' })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        expect(res.text).to.equal('2');
        done();
      });
  });  

  it('should return PERCENTAGE', function(done) {
    request.get(math + 'percent')
      .query({ subtotal: '10' })
      .query({ percent: '20' })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        expect(res.text).to.equal('2');
        done();
      });
  });  

});



// it('GET api/events/:id should send the event with requested id', function(done) {
//   request.get(events + '/1')
//     .expect(200)
//     .end(function (err, res) {
//       if (err) {
//         return done(err);
//       }
//       var event = res.body;
//       expect(event.id).to.equal(1);
//       expect(event.title).to.equal('Free Bagels at 8pm');
//       done();
//     })
// });

// it('should redirect POST "api/events/" to "/" if not logged in', function(done) {
//   request.post(events)
//     .expect(302)
//     .end(function (err, res) {
//       if (err) {
//         return done(err);
//       }
//       expect(res.text).to.equal('Moved Temporarily. Redirecting to /');
//       done();
//     })
// });


// var ratings = '/api/ratings';

// it('should add new ratings', function(done) {
//   request.post(ratings)
//     .set('Accept', 'application/json')
//     .send({user_id: 1, event_id: 1})
//     .expect(201)
//     .end(function (err, res) {
//       if (err) {
//         return done(err);
//       }
//       done();
//     })
// });

// var comments = '/api/comments';

// it('should add new comments', function(done) {
//   request.post(comments)
//     .set('Accept', 'application/json')
//     .send({user_id: 1, event_id: 1, comment:'test comment'})
//     .expect(201)
//     .end(function (err, res) {
//       if (err) {
//         return done(err);
//       }
//       done();
//     })
// });


// var photos = '/api/photos';

// it('should return a signed url upon new photo POST request', function(done) {
//   request.post(photos + '/addOne')
//     .set('Accept', 'application/json')
//     .send({user_id: 1, event_id: 1})
//     .expect(201)
//     .end(function (err, res) {
//       if (err) {
//         return done(err);
//       }
//       expect(res.text.slice(0,48)).to.equal('\"https://base9photos.s3-us-west-1.amazonaws.com/')
//       done();
//     })
// });