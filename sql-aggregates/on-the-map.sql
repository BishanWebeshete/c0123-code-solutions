-- List the number of "cities" per country in the "countries" table.

select count("countryId") as "totalCities",
       "countries"."name"
      from "cities"
      join "countries" using ("countryId")
      group by "countryId";
