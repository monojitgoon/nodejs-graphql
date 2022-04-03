const data = require("../data/rickmortydata.json");
const { DataSource } = require("apollo-datasource");

class Character extends DataSource {
  constructor() {
    super();
  }
  getCharacters(args) {
    if (!args.name) {
      return data;
    }
    return data.filter((character) => {
      return character.name.toLowerCase().includes(args.name.toLowerCase());
    });
  }
}

module.exports = Character;
