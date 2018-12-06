// next.config.js
// https://nextjs.org/docs#static-html-export
// https://github.com/zeit/next.js/tree/master/examples/with-static-export

module.exports.exportPathMap = async function (defaultPathMap) {
  return { '/': { page: '/', }, };
};
