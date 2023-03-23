-- Generate a list of all addresses in the system that includes their "line1", "city"."name", and "district".
-- Bragging rights if you get the name of the country in there too.

select "addresses"."line1",
       "addresses"."district",
       "cities"."name"
  from "addresses"
  join "cities" using ("cityId");
