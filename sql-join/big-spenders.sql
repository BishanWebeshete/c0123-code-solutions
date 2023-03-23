-- Select the 10 largest payment amounts, including the first and last name of the customer who paid.
-- Notice how the one-to-many relationship between customers and payments is modeled in the two tables.

select "customers"."firstName",
       "customers"."lastName",
       "payments"."amount"
  from "customers"
  join "payments" using ("customerId")
  order by "payments"."amount" desc
  limit 10;
