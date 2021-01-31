const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) =>{
            if (err) {
                res.json(err);
            }
            //console.log(customers);
            res.render('customers', {
                data:customers
            });
        });
    });
    //res.send('hello word');
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO customer set ?', data, (err, customer) => {
        console.log(customer)
        res.redirect('/');
      })
    })
};

controller.delete = (req, res) => {
    //console.log(req.params.id);
    //res.send('works');
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, rows) => {
            //console.log(customer)
            res.render('customer_edit', {
                data: rows[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const {id} = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE customer set ? WHERE id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

module.exports = controller;