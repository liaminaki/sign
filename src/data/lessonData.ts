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
        { title: "1", set: "Numbers", model: "/numbers/1.glb", isStatic: false, steps: 1 },
        { title: "2", set: "Numbers", model: "/numbers/2.glb", isStatic: false, steps: 1 },
        { title: "3", set: "Numbers", model: "/numbers/3.glb", isStatic: false, steps: 1 },
        { title: "4", set: "Numbers", model: "/numbers/4.glb", isStatic: false, steps: 1 },
        { title: "5", set: "Numbers", model: "/numbers/5.glb", isStatic: false, steps: 1 },
        { title: "6", set: "Numbers", model: "/numbers/6.glb", isStatic: false, steps: 1 },
        { title: "7", set: "Numbers", model: "/numbers/7.glb", isStatic: false, steps: 1 },
        { title: "8", set: "Numbers", model: "/numbers/8.glb", isStatic: false, steps: 1 },
        { title: "9", set: "Numbers", model: "/numbers/9.glb", isStatic: false, steps: 1 },
        { title: "10", set: "Numbers", model: "/numbers/10.glb", isStatic: false, steps: 1 },
      ],
    },
    greetings: {
        id: "greetings",
        title: "Greetings",
        description: "This is a description for greetings",
        icon: greetingsIcon,
        signs: [
          { title: "you-how", set: "Greetings", model: "/greetings/you-how.glb", isStatic: false, steps: 2, duration: [1.34, 1.2] },
          { title: "[TEST] Feedback", set: "Hand Gestures", model: "/alphabet/a.glb", isStatic: true, steps: 1 },
        ],
    },
  };


export default lessonData;