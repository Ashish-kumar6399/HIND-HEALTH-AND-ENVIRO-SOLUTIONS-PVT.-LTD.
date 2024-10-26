const getSlug = (name) => {
    return name.toLowerCase().split(" ").join("-");
}

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  const getName = (slug) => {
    return slug.split("-").map(s => {
      return capitalizeFirstLetter(s); 
    }).join(" ");
  };

module.exports = {
    getSlug,
    getName
}