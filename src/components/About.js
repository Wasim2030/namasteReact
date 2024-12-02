import UserContext from "../utils/UserContext";

const About = () => {
  return (
    <div>
      <h1>About</h1>

      <div>
        <UserContext.Consumer>
          {/* {({data}) => console.log(data)} */}
          {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>

      <h2>This is Namaste React web Series</h2>
    </div>
  );
};

export default About;
