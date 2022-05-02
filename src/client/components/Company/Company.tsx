import "./Company.css";

const Company = ({
  company,
}: {
  company: {
    id: number;
    name: string;
    logo: string;
    specialities: string;
    city: string;
  };
}) => (
  <div className="company-container">
    <p className="company-name">"{company.id}"</p>
    <p className="company-name">"{company.name}"</p>
    <p className="company-details">
      <span className="highlight"> {company.logo} </span>
      <span className="highlight"> {company.specialities}</span>
      <span className="highlight"> {company.city}</span>
    </p>
  </div>
);

export default Company;
