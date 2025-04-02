import alphabetIcon from '../assets/img/alphabet.svg';
import numbersIcon from '../assets/img/numbers.svg';
import greetingsIcon from '../assets/img/greetings.svg';

const lessonData = {
    alphabet: {
      id: "alphabet",
      title: "Alphabet",
      description: "A set of hand signs representing letters, forming the foundation for fingerspelling in sign language. Note: Use right hand.",
      icon: alphabetIcon,
      signs: [
        { title: "A", set: "Alphabet", model: "/alphabet/a.glb", isStatic: true, steps: 1 },
        { title: "B", set: "Alphabet", model: "/alphabet/b.glb", isStatic: true, steps: 1 },
        { title: "C", set: "Alphabet", model: "/alphabet/c.glb", isStatic: true, steps: 1 },
        { title: "D", set: "Alphabet", model: "/alphabet/d.glb", isStatic: true, steps: 1 },
        { title: "E", set: "Alphabet", model: "/alphabet/e.glb", isStatic: true, steps: 1 },
        { title: "F", set: "Alphabet", model: "/alphabet/f.glb", isStatic: true, steps: 1 },
        { title: "G", set: "Alphabet", model: "/alphabet/g.glb", isStatic: true, steps: 1 },
        { title: "H", set: "Alphabet", model: "/alphabet/h.glb", isStatic: true, steps: 1 },
        { title: "I", set: "Alphabet", model: "/alphabet/i.glb", isStatic: true, steps: 1 },
        { title: "J", set: "Alphabet", model: "/alphabet/j.glb", isStatic: false, steps: 1 },
        { title: "K", set: "Alphabet", model: "/alphabet/k.glb", isStatic: true, steps: 1 },
        { title: "L", set: "Alphabet", model: "/alphabet/l.glb", isStatic: true, steps: 1 },
        { title: "M", set: "Alphabet", model: "/alphabet/m.glb", isStatic: true, steps: 1 },
        { title: "N", set: "Alphabet", model: "/alphabet/n.glb", isStatic: true, steps: 1 },
        { title: "O", set: "Alphabet", model: "/alphabet/o.glb", isStatic: true, steps: 1 },
        { title: "P", set: "Alphabet", model: "/alphabet/p.glb", isStatic: true, steps: 1 },
        { title: "Q", set: "Alphabet", model: "/alphabet/q.glb", isStatic: true, steps: 1 },
        { title: "R", set: "Alphabet", model: "/alphabet/r.glb", isStatic: true, steps: 1 },
        { title: "S", set: "Alphabet", model: "/alphabet/s.glb", isStatic: true, steps: 1 },
        { title: "T", set: "Alphabet", model: "/alphabet/t.glb", isStatic: true, steps: 1 },
        { title: "U", set: "Alphabet", model: "/alphabet/u.glb", isStatic: true, steps: 1 },
        { title: "V", set: "Alphabet", model: "/alphabet/v.glb", isStatic: true, steps: 1 },
        { title: "W", set: "Alphabet", model: "/alphabet/w.glb", isStatic: true, steps: 1 },
        { title: "X", set: "Alphabet", model: "/alphabet/x.glb", isStatic: true, steps: 1 },
        { title: "Y", set: "Alphabet", model: "/alphabet/y.glb", isStatic: true, steps: 1 },
        { title: "Z", set: "Alphabet", model: "/alphabet/z.glb", isStatic: false, steps: 1 }, // Duration does not work if one step
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