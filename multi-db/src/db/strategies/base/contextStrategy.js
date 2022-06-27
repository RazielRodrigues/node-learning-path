const IDb = require('../interfaces/interfaceDb');
class ContextStrategy extends IDb {
  constructor(database) {
    super();
    this._database = database;
  }
  isConnected() {
    return this._database.isConnected();
  }
  create(item) {
    return this._database.create(item);
  }
  read(item) {
    return this._database.read(item);
  }
  update(id, item) {
    return this._database.update(id, item);
  }
  delete(id) {
    return this._database.delete(id);
  }
  connect() {
    return this._database.connect();
  }
}

module.exports = ContextStrategy;
