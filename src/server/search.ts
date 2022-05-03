export const fetchCompanies = async (
  name: string,
  isBulldozer: boolean,
  isCompactor: boolean
) => {
  let res;
  if (isBulldozer && isCompactor) {
    res = await fetch(
      `http://localhost:8001/companies?name=${name}&specialities=Bulldozer,Compactor`
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
};
