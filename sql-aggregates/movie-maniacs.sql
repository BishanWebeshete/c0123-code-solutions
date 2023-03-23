-- List the first and last name of all customers, plus the total amount they've spent on rentals. Order them by total paid, descending.

-- Hint: Karl Seal should be first with $221.55 paid.

select "customers"."firstName",
       "customers"."lastName",
        sum("payments"."amount") as "totalPaid"
       from "customers"
       join "payments" using ("customerId")
       group by "customers"."customerId"
       order by "totalPaid" desc;
