// Define MajorCredits interface with brand property
interface MajorCredits {
  credits: number;
  // Brand property to uniquely identify this interface
  _majorBrand: "MajorCredits";
}

// Define MinorCredits interface with brand property
interface MinorCredits {
  credits: number;
  // Brand property to uniquely identify this interface
  _minorBrand: "MinorCredits";
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: "MajorCredits"
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: "MinorCredits"
  };
}

// Example usage
const major1: MajorCredits = { credits: 3, _majorBrand: "MajorCredits" };
const major2: MajorCredits = { credits: 4, _majorBrand: "MajorCredits" };

const minor1: MinorCredits = { credits: 1, _minorBrand: "MinorCredits" };
const minor2: MinorCredits = { credits: 2, _minorBrand: "MinorCredits" };

const totalMajor = sumMajorCredits(major1, major2);
const totalMinor = sumMinorCredits(minor1, minor2);

console.log("Total Major Credits:", totalMajor.credits); // 7
console.log("Total Minor Credits:", totalMinor.credits); // 3
