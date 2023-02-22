const getSleepHours = (day) => {
    switch (day) {
      case "Monday":
        return 6, 5;
        break;
      case "Tuesday":
        return 7;
        break;
      case "Wednesday":
        return 8;
        break;
      case "Thursday":
        return 7;
        break;
      case "Friday":
        return 8;
        break;
      case "Saturday":
        return 7;
        break;
      case "Sunday":
        return 8;
        break;
    }
  };
  
  const getActualSleepHours = () => {
    return (
      getSleepHours("Monday") +
      getSleepHours("Tuesday") +
      getSleepHours("Wednesday") +
      getSleepHours("Thursday") +
      getSleepHours("Friday") +
      getSleepHours("Saturday") +
      getSleepHours("Sunday")
    );
  };
  
  const getIdealSleepHours = (idealHours) => idealHours * 7;
  
  const calculateSleepDept = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log(
        `You got ${actualSleepHours - idealSleepHours} more sleep than needed!`
      );
    } else if (actualSleepHours < idealSleepHours) {
      console.log(
        `You should sleep ${idealSleepHours - actualSleepHours} hours more!`
      );
    }
  };
  
  calculateSleepDept();
  