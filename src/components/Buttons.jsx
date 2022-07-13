import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to="/projects" className="btn-primary">
      <i class="bx bx-arrow-back"></i>
      {props.text}
    </Link>
  );
};

export default Button;
