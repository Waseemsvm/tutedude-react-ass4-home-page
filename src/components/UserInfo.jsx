import avatar from "../assets/avatar.svg";

export default function UserInfo() {
  return (
    <div className="user-info">
      <img src={avatar} alt="avatar-img" className="avatar" />
      <div>
        <p>
          <span>Name:</span> <span>John Doe</span>
        </p>
        <p>
          <span>Date of Birth:</span> <span>10th March, 1999</span>
        </p>
        <p>
          <span>Age:</span> <span>26</span>
        </p>
        <p>
          <span>Address:</span> <span>#10, OPH road, Bangalore - 223 445</span>
        </p>
        <p>
          <span>Country:</span> <span>India</span>
        </p>
      </div>
    </div>
  );
}
