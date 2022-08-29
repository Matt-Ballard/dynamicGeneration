// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(num, arr) {
  let obj = {
    specimenNum: num,
    dna: arr,

    mutate: function() {
      let rand = Math.floor(Math.random() * 15);
      let startBase = this.dna[rand];
      let baseList = ['A', 'T', 'C', 'G'];

      while (this.dna[rand] === startBase) {
        this.dna[rand] = baseList[Math.floor(Math.random() * 4)];
      }
    },

    compareDNA: function(obj) {
      let matches = 0;
      let percentage = 0;

      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === obj.dna[i]) {
          matches++;
        } 
      }

      if (matches > 0) {
        percentage = (matches / 15) * 100;
      }
      console.log(`specimen #${this.specimenNum} and specimen #${obj.specimenNum} have ${percentage}% DNA in common`);
    },

    willLikelySurvive: function() {
      let cAndG = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          cAndG++;
        }
      }
      return (cAndG / 15) * 100 >= 60 ? true : false;
    },
  }
  return obj;
};


function getSpecimens(qty) {

  const specimens = [];

  for (let i = 0; i < qty; i++) {
    eval(`const spec${i} = pAequorFactory(${i}, mockUpStrand()); specimens.push(spec${i});`);
  }

  return specimens;
};

const batch = getSpecimens(30);
console.log(batch);