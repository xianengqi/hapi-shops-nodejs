function errorMsg(e) {
  let msg = '';
  switch(e.name) {
    case "SequelizeUniqueConstraintError":
    Object.keys(e.fields)[0];
  };
};