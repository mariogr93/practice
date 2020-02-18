//mongodb+srv://mariogr93:mbgr123456@cluster0-cpwod.gcp.mongodb.net/test?retryWrites=true&w=majority
//Todo esto deberia de estar en un documento .dev 

let LINK_ONE = 'mongodb+srv://';
let LINK_TWO = '@cluster0-cpwod.gcp.mongodb.net/test?retryWrites=true&w=majority';
const USER_NAME = 'mariogr93:';
const PASSWORD = 'mbgr123456';

const connect = LINK_ONE+USER_NAME+PASSWORD+LINK_TWO;

module.exports = connect;