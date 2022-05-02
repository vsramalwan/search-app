import _ from "lodash";

export const fetchCompanies = _.memoize(
  async (name, isBulldozer, isCompactor) => {
    let res;
    if (isBulldozer && isCompactor) {
      res = await fetch(
        `http://localhost:8001/companies?name=${name}&specialities=bulldozer&specialities=compactor`
      );
    } else if (!isBulldozer && isCompactor) {
      res = await fetch(
        `http://localhost:8001/companies?name=${name}&specialities=Compactor`
      );
    } else if (isBulldozer && !isCompactor) {
      res = await fetch(
        `http://localhost:8001/companies?name=${name}&specialities=Bulldozer`
      );
    } else if (!isBulldozer && !isCompactor) {
      res = await fetch(`http://localhost:8001/companies?name=${name}`);
    }
    if (res?.status !== 200) return [];

    const companies = await res.json();
    return companies;
  }
);
