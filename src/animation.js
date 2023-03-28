/**
 * Si tenemos varios hijos que queremos animar, directamente en el padre, en la
 * prop transition, ponemos staggerChildren: segundos, y hace que todos los hijos se animen, y
 * si quiero que la animacion del padre se haga antes, o despues de que los hijos se animen
 * pongo when: afterChildren o beforeChildren
 * Esto hara que todos los hijos se animen
 */
// const container = {
//   hidden: { x: 100 },
//   show: {
//     x: 0,
//     transition: {
//       duration: 0.75,
//       ease: "easeOut",
//       staggerChildren: 0.3,
//       when: "beforeChildren",
//     },
//   },
// };
export const pageAnimation = {
   hidden: {
     opacity: 0,
    //  y: -300,
   },
 
   show: {
     opacity: 1,
     y: 0,
     transition: {
       duration: 0.5,
       // when: "beforeChildren",
       staggerChildren: 0.3,
     },
   },
   exit: {
     opacity: 0,
     transition: {
       duration: 0.5,
     },
   },
 };

export const titleAnimation = {
   hidden: { y: 200 },
   show: {
     y: 0,
     transition: { duration: 0.75, ease: "easeOut" },
   },
 };

 export const fadeAnimation = {
   hidden: {
     opacity: 0,
   },
   show: {
     opacity: 1,
     transition: { ease: "easeOut", duration: 0.75 },
   },
 };

 export const photoAnimation = {
   hidden: { scale: 1.5, opacity: 0 },
   show: {
     scale: 1,
     opacity: 1,
     transition: {
       ease: "easeOut",
       duration: 0.75,
     },
   },
 };

 export const scrollReveal = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};