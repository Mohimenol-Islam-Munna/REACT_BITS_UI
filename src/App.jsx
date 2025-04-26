import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import ShinyText from "./components/ShinyText";

const App = () => {
  const [text, setText] = useState("Munna+Moni");

  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <div>
      <div>
        <h2>Header</h2>
        <ShinyText
          text="Just some shiny text!"
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </div>
      <div>
        <p className="border border-red-300">
          {text.split("").map((char, index) => (
            <animated.span key={index} style={springs}>
              {char}
            </animated.span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default App;
