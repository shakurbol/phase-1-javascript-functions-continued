// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  function mondayWork(work = "go to the office") {
    return `This Monday, I have to ${work}.`;
  }
  function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  const saturdayFunWithDefault = saturdayFun(); // "This Saturday, I want to roller-skate!"
  const saturdayFunWithActivity = saturdayFun("play tennis"); // "This Saturday, I want to play tennis!"
  
  const mondayWorkWithDefault = mondayWork(); // "This Monday, I have to go to the office."
  const mondayWorkWithTask = mondayWork("work on a project"); // "This Monday, I have to work on a project."
  
  const wrapStar = wrapAdjective(); // Returns a function
  const wrapStarSpecial = wrapStar(); // "You are *special*!"
  const wrapHash = wrapAdjective("#"); // Returns a function
  const wrapHashDedicated = wrapHash("a dedicated programmer"); // "You are #a dedicated programmer#!"

