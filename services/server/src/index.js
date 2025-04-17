import express from 'express';
    import cors from 'cors';
    import { Pool } from 'pg';
    import dotenv from 'dotenv';

    dotenv.config();

    const app = express();
    const port = process.env.PORT || 3000;

    app.use(cors());
    app.use(express.json());

    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });

    // Define API endpoints (CRUD for Pizzas, Orders, Users)

    // GET all pizzas
    app.get('/api/pizzas', async (req, res) => {
      try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM pizzas');
        const pizzas = result.rows;
        client.release();
        res.json(pizzas);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch pizzas' });
      }
    });

    // POST a new order
    app.post('/api/orders', async (req, res) => {
      // ... order creation logic
      res.json({ message: 'Orders endpoint' });
    });

    // GET order by ID
    app.get('/api/orders/:id', async (req, res) => {
      // ... get order logic
      res.json({ message: `Get order ${req.params.id}` });
    });

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
