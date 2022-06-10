const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let IXX = await promiseTheaterIXX()
  let VGC = await promiseTheaterVGC()
  return new Promise((resolve, reject) => {
    if (emosi === null) {
      reject('Parameter tidak ada');
    }
    else {
      resolve(IXX.concat(VGC).filter(e => e.hasil === emosi).length)
    }
  });
};

module.exports = {
  promiseOutput,
};
