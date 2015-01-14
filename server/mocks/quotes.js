module.exports = function(app) {
  var express = require('express');
  var quotesRouter = express.Router();

  quotesRouter.get('/', function(req, res) {
    res.send({
      'quotes': [
        { id: 1, message: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.', author: 'Edsger Dijkstra' },
        { id: 2, message: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.' , author: 'Bill Gates'     },
        { id: 3, message: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.' , author: 'Brian W. Kernighan'     },
        { id: 4, message: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.' , author: 'Martin Golding'     },
        { id: 5, message: 'One of my most productive days was throwing away 1000 lines of code.' , author: 'Ken Thompson'     }
      ]
    });
  });

  quotesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  quotesRouter.get('/:id', function(req, res) {
    res.send({
      'quotes': {
        id: req.params.id
      }
    });
  });

  quotesRouter.put('/:id', function(req, res) {
    res.send({
      'quotes': {
        id: req.params.id
      }
    });
  });

  quotesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/quotes', quotesRouter);
};
