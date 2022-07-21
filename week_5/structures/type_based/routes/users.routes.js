const { handleDelete, createAccount, editAccount } = require("../controllers/users.controllers");

const accountRouter = express.Router();
accountRouter.use((req, res, next) => {});
accountRouter.get("/", (req, res, next) => {});
accountRouter.post("/", createAccount);
accountRouter.put("/", editAccount);
accountRouter.delete("/", handleDelete);