import "./Company.css";

// eslint-disable-next-line no-shadow
export enum Speciality {
  Backhoe = "Backhoe",
  Bulldozer = "Bulldozer",
  Compactor = "Compactor",
  Crawler = "Crawler",
  Dragline = "Dragline",
  DumpTruck = "Dump Truck",
  Excavator = "Excavator",
  Grader = "Grader",
  Scraper = "Scraper",
  SkidSteer = "Skid-Steer",
  Trencher = "Trencher",
}

type CompanyType = {
  id: number;
  name: string;
  city: string;
  specialities: Speciality[];
  logo: string;
};
const Company = ({ company }: { company: CompanyType }) => (
  <div className="company-container">
    <p className="company-name">"{company.name}"</p>
    <p className="company-details">
      <>
        <span className="highlight"> {company.logo} </span>
        <span className="highlight">{company.specialities}</span>
        <span className="highlight"> {company.city}</span>
      </>
    </p>
  </div>
);

export default Company;
