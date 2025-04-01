import alphabetIcon from '../assets/img/alphabet.svg';
import numbersIcon from '../assets/img/numbers.svg';
import greetingsIcon from '../assets/img/greetings.svg';

const lessonData = {
    alphabet: {
      id: "alphabet",
      title: "Alphabet",
      description: "This is a description for alphabet",
      icon: alphabetIcon,
      signs: [
        { title: "A", set: "alphabet", model: "/models/alphabet/A.glb", isStatic: false, steps: 1, duration: 2 },
        { title: "B", set: "alphabet", model: "/models/alphabet/B.glb", isStatic: false, steps: 2, duration: [1.5, 2.0] }, // Two durations for two steps
        { title: "I", set: "alphabet", model: "/models/alphabet/I.glb", isStatic: false, steps: 2, duration: [2, 3] },
        { title: "J", set: "alphabet", model: "/models/alphabet/J.glb", isStatic: false, steps: 1 },
      ],
    },
    numbers: {
      id: "numbers",
      title: "Numbers",
      description: "This is a description for numbers",
      icon: numbersIcon,
      signs: [
        { title: "1", set: "numbers", model: "/models/numbers/1.glb", isStatic: false, steps: 1, duration: 2.5 },
        { title: "2", set: "numbers", model: "/models/numbers/2.glb", isStatic: false, steps: 2, duration: [1.8, 2.2] },
      ],
    },
    greetings: {
        id: "greetings",
        title: "Greetings",
        description: "This is a description for greetings",
        icon: greetingsIcon,
        signs: [
          { title: "Hello", set: "greetings", model: "/models/greetings/hello.glb", isStatic: false, steps: 1, duration: 2 },
          { title: "Goodbye", set: "greetings", model: "/models/greetings/goodbye.glb", isStatic: false, steps: 1, duration: 2 },
        ],
    },
  };


export default lessonData;