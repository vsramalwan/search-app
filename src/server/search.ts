import _ from "lodash";

export const fetchCompanies = _.memoize(async (name) => {
  const res = await fetch(`http://localhost:8001/companies?name=${name}`);
  if (res.status !== 200) return [];

  const companies = await res.json();
  return companies;
});
