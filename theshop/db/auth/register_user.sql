SELECT * FROM users
(email, password)
VALUES ($1 ,$2) RETURNING *;