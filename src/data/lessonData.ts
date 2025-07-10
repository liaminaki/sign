import alphabetIcon from '../assets/img/alphabet.svg';
import numbersIcon from '../assets/img/numbers.svg';
import greetingsIcon from '../assets/img/greetings.svg';

const lessonData = {
    alphabet: {
      id: "alphabet",
      title: "Alphabet",
      description: "A set of hand signs representing letters, forming the foundation for fingerspelling in sign language.",
      icon: alphabetIcon,
      signs: [
        { title: "A", set: "Alphabet", model: "/alphabet/a.glb", video: "https://drive.google.com/file/d/1DU6vTCLbYsI7vHULZXvemEDFpl3DDEmM/preview", isStatic: true, steps: 1 },
        { title: "B", set: "Alphabet", model: "/alphabet/b.glb", video: "https://drive.google.com/file/d/136sYuMXwgFK1UUHrwRfdtedifl6vkv0e/preview", isStatic: true, steps: 1 },
        { title: "C", set: "Alphabet", model: "/alphabet/c.glb", video: "https://drive.google.com/file/d/1H6Wij59pQlg9Vwo81kxf5Qpn5zfYj6k3/preview", isStatic: true, steps: 1 },
        { title: "D", set: "Alphabet", model: "/alphabet/d.glb", video: "https://drive.google.com/file/d/1SIBPQObMJP-DPiemtm_MTF3gDppvbkhW/preview", isStatic: true, steps: 1 },
        { title: "E", set: "Alphabet", model: "/alphabet/e.glb", video: "https://drive.google.com/file/d/13uu26zWBvRTHnXzo_XK6RmrK042o-MlQ/preview", isStatic: true, steps: 1 },
        { title: "F", set: "Alphabet", model: "/alphabet/f.glb", video: "https://drive.google.com/file/d/1GTL_fujvuUfTQVaDJ9AeZYK8OEtQbkR3/preview", isStatic: true, steps: 1 },
        { title: "G", set: "Alphabet", model: "/alphabet/g.glb", video: "https://drive.google.com/file/d/17B46oj6h9IrWn4yuGeuWqfP_hu0lM1iM/preview", isStatic: true, steps: 1 },
        { title: "H", set: "Alphabet", model: "/alphabet/h.glb", video: "https://drive.google.com/file/d/17LoIUDD2LmcOK04SBUBPq3M6ahlw6sUb/preview", isStatic: true, steps: 1 },
        { title: "I", set: "Alphabet", model: "/alphabet/i.glb", video: "https://drive.google.com/file/d/132_70gmDwNCXs4-UkXKEt0clSdFwkhp3/preview", isStatic: true, steps: 1 },
        { title: "J", set: "Alphabet", model: "/alphabet/j.glb", video: "https://drive.google.com/file/d/1zXNly8PFQDeguoJTUakVOW8HX_WeL4XR/preview", isStatic: false, steps: 1 },
        { title: "K", set: "Alphabet", model: "/alphabet/k.glb", video: "https://drive.google.com/file/d/1wBFs7q2uVO3fK_edjyL_tJKGbq4VZKAD/preview", isStatic: true, steps: 1 },
        { title: "L", set: "Alphabet", model: "/alphabet/l.glb", video: "https://drive.google.com/file/d/1oEhNbkBWriL8ka6PSYvsG4MdupRzI-oA/preview", isStatic: true, steps: 1 },
        { title: "M", set: "Alphabet", model: "/alphabet/m.glb", video: "https://drive.google.com/file/d/1nTEN-jCTKLRZiaxcZep1qXkLPES2R8QY/preview", isStatic: true, steps: 1 },
        { title: "N", set: "Alphabet", model: "/alphabet/n.glb", video: "https://drive.google.com/file/d/1TJCYChD1jM6Qq4RjqL8g7YA1eKZdyaRO/preview", isStatic: true, steps: 1 },
        { title: "O", set: "Alphabet", model: "/alphabet/o.glb", video: "https://drive.google.com/file/d/1S9OfF7ONArkra97ojoxqUSOw-tqnjpu4/preview", isStatic: true, steps: 1 },
        { title: "P", set: "Alphabet", model: "/alphabet/p.glb", video: "https://drive.google.com/file/d/1iKJ5zzD_xe-siYNS3kc5ckukalvT0RgM/preview", isStatic: true, steps: 1 },
        { title: "Q", set: "Alphabet", model: "/alphabet/q.glb", video: "https://drive.google.com/file/d/13jjuk5fazLlYzuqV_GYmyw57Hl7q7h3O/preview", isStatic: true, steps: 1 },
        { title: "R", set: "Alphabet", model: "/alphabet/r.glb", video: "https://drive.google.com/file/d/1Gbfq2Ohnd0Cb8BZVPIz1lS9dO8hkG3NA/preview", isStatic: true, steps: 1 },
        { title: "S", set: "Alphabet", model: "/alphabet/s.glb", video: "https://drive.google.com/file/d/14E9VaNrse3nkSjgYgTSgYCkrpkNhQ_A9/preview", isStatic: true, steps: 1 },
        { title: "T", set: "Alphabet", model: "/alphabet/t.glb", video: "https://drive.google.com/file/d/10AX1EFmOCgRJecclhcsP_sygx63RECVN/preview", isStatic: true, steps: 1 },
        { title: "U", set: "Alphabet", model: "/alphabet/u.glb", video: "https://drive.google.com/file/d/15micCOvGHLaLkLwGIQ0wIPWNNA8X2OCt/preview", isStatic: true, steps: 1 },
        { title: "V", set: "Alphabet", model: "/alphabet/v.glb", video: "https://drive.google.com/file/d/1XKgzQmsRinPi7W429rAn7WoTLPuxR6fK/preview", isStatic: true, steps: 1 },
        { title: "W", set: "Alphabet", model: "/alphabet/w.glb", video: "https://drive.google.com/file/d/1Du2G4IKNyX0AgN4DME5OFCdtr-LMCwfZ/preview", isStatic: true, steps: 1 },
        { title: "X", set: "Alphabet", model: "/alphabet/x.glb", video: "https://drive.google.com/file/d/1g-zVobhHZ2WsBLYguYGCA-xjYrMrG_Hf/preview", isStatic: true, steps: 1 },
        { title: "Y", set: "Alphabet", model: "/alphabet/y.glb", video: "https://drive.google.com/file/d/1uDQDOB5dz8iuQc1poQ9wUxeJKnXh1m4i/preview", isStatic: true, steps: 1 },
        { title: "Z", set: "Alphabet", model: "/alphabet/z.glb", video: "https://drive.google.com/file/d/11Luh-heFtmfeuWBa6tRUZTxZ5xPBM_6w/preview", isStatic: false, steps: 1 }, // Duration does not work if one step
      ],
    },
    numbers: {
      id: "numbers",
      title: "Numbers",
      description: "Learn to recognize and sign numbers in sign language, essential for counting, dates, and everyday communication.",
      icon: numbersIcon,
      signs: [
        { title: "1", set: "Numbers", model: "/numbers/1.glb", video: "https://drive.google.com/file/d/19mD-5g884HrxQsKA1Pqb_BAktwuDDuUD/preview", isStatic: false, steps: 1 },
        { title: "2", set: "Numbers", model: "/numbers/2.glb", video: "https://drive.google.com/file/d/19mD-5g884HrxQsKA1Pqb_BAktwuDDuUD/preview", isStatic: false, steps: 1 },
        { title: "3", set: "Numbers", model: "/numbers/3.glb", video: "https://drive.google.com/file/d/19mD-5g884HrxQsKA1Pqb_BAktwuDDuUD/preview", isStatic: false, steps: 1 },
        { title: "4", set: "Numbers", model: "/numbers/4.glb", video: "https://drive.google.com/file/d/19mD-5g884HrxQsKA1Pqb_BAktwuDDuUD/preview", isStatic: false, steps: 1 },
        { title: "5", set: "Numbers", model: "/numbers/5.glb", video: "https://drive.google.com/file/d/19mD-5g884HrxQsKA1Pqb_BAktwuDDuUD/preview", isStatic: false, steps: 1 },
        { title: "6", set: "Numbers", model: "/numbers/6.glb", video: "https://drive.google.com/file/d/19mD-5g884HrxQsKA1Pqb_BAktwuDDuUD/preview", isStatic: false, steps: 1 },
        { title: "7", set: "Numbers", model: "/numbers/7.glb", video: "https://drive.google.com/file/d/19mD-5g884HrxQsKA1Pqb_BAktwuDDuUD/preview", isStatic: false, steps: 1 },
        { title: "8", set: "Numbers", model: "/numbers/8.glb", video: "https://drive.google.com/file/d/19mD-5g884HrxQsKA1Pqb_BAktwuDDuUD/preview", isStatic: false, steps: 1 },
        { title: "9", set: "Numbers", model: "/numbers/9.glb", video: "https://drive.google.com/file/d/19mD-5g884HrxQsKA1Pqb_BAktwuDDuUD/preview", isStatic: false, steps: 1 },
        { title: "10", set: "Numbers", model: "/numbers/10.glb", video: "https://drive.google.com/file/d/19mD-5g884HrxQsKA1Pqb_BAktwuDDuUD/preview", isStatic: false, steps: 1 },
      ],
    },
    greetings: {
        id: "greetings",
        title: "Greetings",
        description: "Master common greetings and phrases to start conversations and interact politely in sign language.",
        icon: greetingsIcon,
        signs: [
          { title: "How are you? (you-how)", set: "Greetings", model: "/greetings/you-how.glb", video: "https://drive.google.com/file/d/12zYLRzaKGMcxdyNJ6S9XrVJa9oK8Wnnx/preview", isStatic: false, steps: 2, duration: [1.34, 1.2] },
          { title: "[TEST] Feedback", set: "Hand Gestures", model: "/alphabet/a.glb", video: "https://drive.google.com/file/d/12zYLRzaKGMcxdyNJ6S9XrVJa9oK8Wnnx/preview", isStatic: true, steps: 1 },
        ],
    },
  };

export default lessonData;