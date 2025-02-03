// Function to add space before each capital letter and return formatted keys
export const getFormattedKeys = (
  dataArray: Array<Record<string, any>>
): string[] => {
  // Function to add a space before each capital letter
  const addSpaceBeforeCapital = (str: string): string => {
    return str.replace(/([A-Z])/g, " $1").trim();
  };

  // Get the keys from the first object in the array and format them
  return Object.keys(dataArray[0]).map(addSpaceBeforeCapital);
};
